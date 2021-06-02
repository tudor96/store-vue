<template>
  <div class="home">
    <Products v-bind:products="products" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import Products from '@/components/Products.vue'; // @ is an alias to /src
import { ProductInterface } from '../interfaces/products.interface';
import { apiFactory } from '../api';

@Component({
  components: {
    Products,
  },
})
export default class Home extends Vue {
  //   products: ProductInterface[] = [];

  @Getter('allProducts') products: ProductInterface[];

  @Action('products/action/GET_ALL_PRODUCTS') fetchProducts: any;
  async mounted() {
    // const newProducts = await apiFactory().data.products().getAllProducts();
    this.fetchProducts();
    // this.products = newProducts;
    // console.log(newProducts);
  }
}
</script>

<style scoped></style>
