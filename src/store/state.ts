import { ProductInterface } from "@/interfaces/products.interface";
import { Cart } from "@/api/cart";

export interface ModuleState {}

export interface ProductsState {
	products: ProductInterface[];
	searchedProduct: string;
}

export interface CartState {
	cart: Cart | null;
}

export interface RootState {
	productState: ProductsState;
	cartState: CartState;
}
