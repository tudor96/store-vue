import { products } from "./products";
import { cart } from "./cart";

export const apiFactory = () => ({
	data: {
		products: () => products(),
		cart: () => cart(),
	},
});

export type ApiFactory = ReturnType<typeof apiFactory>;
