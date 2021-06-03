<template>
  <div>
    <div class="card">
      <img :src="product.image" class="card-img-top image_top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.price }}</p>
        <router-link :to="`/post/` + product.id">
          <div class="btn btn-primary">View More</div>
          <!-- <b-button variant="primary">View more</b-button> -->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ProductInterface } from '../interfaces/products.interface';

export default {
  props: ['product'],
};
</script>

<style scoped lang="scss">
.image_top {
  max-height: 20rem !important;
  object-fit: contain;
}
.card {
  margin-bottom: 2vh;
}
</style>
