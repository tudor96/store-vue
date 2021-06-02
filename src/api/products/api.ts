import { sendGetRequest, sendPostRequest, sendPutRequest } from "../utils";
import { Product, ProductsRequest, ProductRequest } from "./types";

import { api_url } from "../utils/consts";

export default () => ({
  getAllProducts: async (): Promise<Product[]> => {
    const { data }: ProductsRequest = await sendGetRequest(
      api_url + "/products"
    );
    return data;
  },
  getProduct: async (productId: string): Promise<Product> => {
    const { data }: ProductRequest = await sendGetRequest(
      api_url + "/products/" + productId
    );
    return data;
  },
  //   postAddresses: async (address: Address): Promise<Address> => {
  //     const token = localStorage.getItem('token');

  //     const { data }: AddressResponse = await sendPostRequest(
  //       api_url + 'api/v1.0/platform/address',
  //       address,
  //       token || ''
  //     );
  //     return data;
  //   },
  //   updateAddresses: async (
  //     id: string,
  //     address: Partial<Address>
  //   ): Promise<Address> => {
  //     const token = localStorage.getItem('token');

  //     const { data }: AddressResponse = await sendPutRequest(
  //       api_url + 'api/v1.0/platform/address/' + id,
  //       address,
  //       token || ''
  //     );
  //     return data;
  //   },
});
