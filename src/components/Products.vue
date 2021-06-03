<template>
	<div v-if="searchInput" class="row">
		<div class="col-1 p-2 m-4 bg-color">
			{{ searchInput }}
			<button
				type="button"
				class="close"
				aria-label="Close"
				@click="clearInput"
			>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	</div>
	<div class="row">
		<div class="col-3" v-for="product in products" :key="product.id">
			<Product :product="product" />
		</div>
	</div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

import Product from "./Product.vue";

export default {
	components: {
		Product,
	},
	props: ["products"],
	setup() {
		const store = useStore();

		const clearInput = () => {
			store.dispatch("products/action/SET_SEARCH_PRODUCT", "");
		};

		return {
			searchInput: computed(() => store.getters.getSearchInput),
			clearInput,
		};
	},
};
</script>

<style scoped lang="scss">
.bg-color {
	background-color: beige;
}
</style>
