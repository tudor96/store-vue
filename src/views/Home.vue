<template>
  <div class="home">
    <Products :products="products" />
  </div>
</template>

<script lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Products from '@/components/Products.vue';
export default {
  components: {
    Products,
  },
  setup() {
    const store = useStore();

    const getAllProducts = async () => {
      store.dispatch('products/action/GET_ALL_PRODUCTS');
    };

    onMounted(getAllProducts);
    return {
      products: computed(() => store.getters.allProducts),
    };
  },
};
</script>
