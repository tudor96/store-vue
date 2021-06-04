<template>
	<div class="home">
		<div class="container paddingHeader">
			<SearchItem @onSearch="onSearch" />
			<Products :products="products" />
		</div>
	</div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import Products from "@/components/Products.vue";
import SearchItem from "@/components/SearchItem.vue";

export default {
	components: {
		Products,
		SearchItem,
	},
	setup() {
		const store = useStore();

		const setSearchOption = async (value: string) => {
			store.dispatch("products/action/SET_SEARCH_PRODUCT", value);
		};

		function onSearch(value: string) {
			setSearchOption(value);
		}
		return {
			products: computed(() => store.getters.allProducts),
			onSearch,
		};
	},
};
</script>

<style scoped>
.paddingHeader {
	margin-top: 8vh;
}
</style>
