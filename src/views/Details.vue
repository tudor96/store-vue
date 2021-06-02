<template>
  <div class="about">
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>

<script lang="ts">
import { apiFactory } from "@/api";
import { Component, Prop, Vue } from "vue-property-decorator";
import { ProductInterface } from "../interfaces/products.interface";

@Component<Details>({
  watch: {
    post: function (value) {
      console.log("watch", value);
    },
  },
})
export default class Details extends Vue {
  productId: string = this.$route.params.id;
  product: ProductInterface | null = null;

  async fetchProduct(productId: string): Promise<void> {
    const newProduct = await apiFactory().data.products().getProduct(productId);
    this.product = newProduct;
  }

  mounted() {
    this.fetchProduct(this.productId);
  }
}
</script>

<style scoped lang="scss">
.paddingHeader {
  margin-top: 8vh;
}
</style>
