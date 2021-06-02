<template>
  <b-container class="paddingHeader">
    <b-row class="d-flex align-items-stretch align-content-stretch">
      <b-col cols="3" v-for="product in products" :key="product.id"
        ><Product :product="product"
      /></b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ProductInterface } from "../interfaces/products.interface";
import Product from "./Product.vue";

@Component({
  components: {
    Product,
  },
})
export default class Products extends Vue {
  @Prop() private products!: ProductInterface[];

  mounted() {
    console.log(this.products);
  }
}
</script>

<style scoped lang="scss">
.paddingHeader {
  margin-top: 8vh;
}
</style>
