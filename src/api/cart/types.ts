import { AxiosResponse } from "axios";

export interface CartProducts {
	productId: number;
	quantity: number;
}
export interface Cart {
	id: number;
	userId: number;
	date: string;
	products: CartProducts[];
}

export interface CartRequest extends AxiosResponse {
	data: Cart;
}
