<template>
  <div>
    <b-card
      :title="product.title"
      :img-src="product.image"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-4 image_top"
    >
      <b-card-text>
        {{ product.price }}
      </b-card-text>

      <router-link :to="`/post/` + product.id">
        <b-button variant="primary">View more</b-button></router-link
      >
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ProductInterface } from "../interfaces/products.interface";

@Component
export default class Product extends Vue {
  @Prop() private product!: ProductInterface;

  mounted() {
    console.log(this.product);
  }
  random_image() {
    const newDate = new Date().toISOString();
    return `https://picsum.photos/600/300/?timestamp=` + newDate;
  }
}
</script>

<style scoped lang="scss">
.image_top img {
  max-height: 20rem !important;
  object-fit: contain;
}
</style>
