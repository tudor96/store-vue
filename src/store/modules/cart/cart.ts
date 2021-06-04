import {
	ActionContext,
	ActionTree,
	GetterTree,
	MutationTree,
	Module,
	Store as VuexStore,
	CommitOptions,
	DispatchOptions,
} from "vuex";
import { RootState, CartState } from "@/store/state";
import { apiFactory } from "@/api";
import { Cart } from "@/api/cart";

const state: CartState = {
	cart: null,
};

// mutations enums
export enum MutationTypes {
	SET_CART = "cart/mutuation/SET_CART",
}

// Mutation contracts
export type Mutations<S = CartState> = {
	[MutationTypes.SET_CART](state: S, cart: Cart | null): void;
};

// Define mutations
const mutations: MutationTree<CartState> & Mutations = {
	[MutationTypes.SET_CART](state: CartState, cart: Cart | null) {
		state.cart = cart;
	},
};

// Action enums
export enum ActionTypes {
	GET_CART = "cart/action/GET_CART",
}
// Action context
type AugmentedActionContext = {
	commit<K extends keyof Mutations>(
		key: K,
		payload: Parameters<Mutations[K]>[1]
	): ReturnType<Mutations[K]>;
	getters<K extends keyof Getters>(
		key: K,
		payload: Parameters<Getters[K]>[1]
	): ReturnType<Getters[K]>;
} & Omit<ActionContext<CartState, RootState>, "commit">;

// Actions contracts
export interface Actions {
	[ActionTypes.GET_CART]({
		commit,
	}: AugmentedActionContext): //   payload: SomePayload,
	void;
}

// Define actions
export const actions: ActionTree<CartState, RootState> & Actions = {
	async [ActionTypes.GET_CART]({ commit }) {
		try {
			const newCart = await apiFactory().data.cart().getCart();
			commit(MutationTypes.SET_CART, newCart);
		} catch (err) {
			commit(MutationTypes.SET_CART, null);
		}
	},
};

export type Getters = {
	cart(state: CartState): Cart | null;
	productsInCart(state: CartState): number;
};

// getters
export const getters: GetterTree<CartState, RootState> & Getters = {
	cart: (state) => {
		return state.cart;
	},
	productsInCart: (state) => {
		return state.cart?.products.length || 0;
	},
};

//setup store type
export type Store<S = CartState> = Omit<
	VuexStore<S>,
	"commit" | "getters" | "dispatch"
> & {
	commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
		key: K,
		payload: P,
		options?: CommitOptions
	): ReturnType<Mutations[K]>;
} & {
	getters: {
		[K in keyof Getters]: ReturnType<Getters[K]>;
	};
} & {
	dispatch<K extends keyof Actions>(
		key: K,
		payload: Parameters<Actions[K]>[1],
		options?: DispatchOptions
	): ReturnType<Actions[K]>;
};

export const cart: Module<CartState, RootState> = {
	state,
	mutations,
	actions,
	getters,
};
