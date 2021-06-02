import { ProductInterface } from "@/interfaces/products.interface";

export interface ModuleState {}

export interface ProductsState {
  products: ProductInterface[];
}

export interface RootState {
  productState: ProductsState;
}
