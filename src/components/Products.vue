<template>
  <div class="container paddingHeader">
    <div class="row">
      <div class="col-3" v-for="product in products" :key="product.id">
        <Product :product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ProductInterface } from '../interfaces/products.interface';
import Product from './Product.vue';

export default {
  components: {
    Product,
  },
  props: ['products'],
};
</script>

<style scoped lang="scss">
.paddingHeader {
  margin-top: 8vh;
}
</style>
