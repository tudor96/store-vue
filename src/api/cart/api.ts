import { sendGetRequest, sendPostRequest, sendPutRequest } from "../utils";
import { Cart, CartRequest } from "./types";

import { api_url } from "../utils/consts";

export default () => ({
	getCart: async (): Promise<Cart> => {
		const { data }: CartRequest = await sendGetRequest(api_url + "/carts/5");
		return data;
	},
});
