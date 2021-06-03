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
import { ProductInterface } from "@/interfaces/products.interface";
import { RootState, ProductsState } from "@/store/state";
import { apiFactory } from "@/api";

const state: ProductsState = {
	searchedProduct: "",
	products: [],
};

// mutations enums
export enum MutationTypes {
	SET_PRODUCTS = "products/mutuation/SET_PRODUCTS",
	SET_SEARCH_PRODUCT = "products/mutuation/SET_SEARCH_PRODUCT",
}

// Mutation contracts
export type Mutations<S = ProductsState> = {
	[MutationTypes.SET_PRODUCTS](state: S, products: ProductInterface[]): void;
	[MutationTypes.SET_SEARCH_PRODUCT](state: S, searchedInput: string): void;
};

// Define mutations
const mutations: MutationTree<ProductsState> & Mutations = {
	[MutationTypes.SET_PRODUCTS](
		state: ProductsState,
		products: ProductInterface[]
	) {
		state.products = products;
	},
	[MutationTypes.SET_SEARCH_PRODUCT](
		state: ProductsState,
		searchedInput: string
	) {
		state.searchedProduct = searchedInput;
	},
};

// Action enums
export enum ActionTypes {
	GET_ALL_PRODUCTS = "products/action/GET_ALL_PRODUCTS",
	SET_SEARCH_PRODUCT = "products/action/SET_SEARCH_PRODUCT",
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
} & Omit<ActionContext<ProductsState, RootState>, "commit">;

// Actions contracts
export interface Actions {
	[ActionTypes.GET_ALL_PRODUCTS]({
		commit,
	}: AugmentedActionContext): //   payload: SomePayload,
	void;
	[ActionTypes.SET_SEARCH_PRODUCT](
		{ commit }: AugmentedActionContext,
		payload: string
	): //   payload: SomePayload,
	void;
}

// Define actions
export const actions: ActionTree<ProductsState, RootState> & Actions = {
	async [ActionTypes.GET_ALL_PRODUCTS]({ commit }) {
		try {
			const newProducts = await apiFactory().data.products().getAllProducts();
			commit(MutationTypes.SET_PRODUCTS, newProducts);
		} catch (err) {
			commit(MutationTypes.SET_PRODUCTS, []);
		}
	},
	async [ActionTypes.SET_SEARCH_PRODUCT]({ commit }, payload) {
		commit(MutationTypes.SET_SEARCH_PRODUCT, payload);
	},
};

export type Getters = {
	allProducts(state: ProductsState): ProductInterface[];
	getSearchInput(state: ProductsState): string | null;
};

// getters
export const getters: GetterTree<ProductsState, RootState> & Getters = {
	allProducts: (state) => {
		return state.products.filter((product) =>
			product.title
				.toLocaleLowerCase()
				.includes(state.searchedProduct.toLocaleLowerCase())
		);
	},
	getSearchInput: (state) => {
		if (state.searchedProduct.length > 0) {
			return state.searchedProduct;
		}
		return null;
	},
};

//setup store type
export type Store<S = ProductsState> = Omit<
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

export const products: Module<ProductsState, RootState> = {
	state,
	mutations,
	actions,
	getters,
};
