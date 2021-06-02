import { AxiosResponse } from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  descrption: string;
  image: string;
}

export interface ProductsRequest extends AxiosResponse {
  data: Product[];
}

export interface ProductRequest extends AxiosResponse {
  data: Product;
}
