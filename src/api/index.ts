import { products } from "./products";
// import { account } from './account';

export const apiFactory = () => ({
  data: {
    products: () => products(),
    // account: () => account(),
  },
});

export type ApiFactory = ReturnType<typeof apiFactory>;
