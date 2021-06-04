<template>
	<div class="home">
		<div class="container paddingHeader">
			<div class="row">
				<div class="col-9"><h2>Shopping Cart</h2></div>
				<div class="col-3">
					<h2>{{ productsInCart }} Items</h2>
				</div>
			</div>
			<div class="dropdown-divider"></div>
			<div class="row mt-2 pb-4">
				<div class="flex-container">
					<div class="big-cell"><h4>Product Details</h4></div>
					<div class="small-cell">Quantity</div>
					<div class="small-cell">Price</div>
					<div class="small-cell">Total</div>
				</div>
			</div>
			<div
				class="row"
				v-for="productCart in cart.products"
				:key="productCart.id"
			>
				<cart-product :cartProduct="productCart" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import CartProduct from "@/components/CartProduct.vue";

export default {
	components: { CartProduct },
	setup() {
		const store = useStore();

		return {
			cart: computed(() => store.getters.cart),
			productsInCart: computed(() => store.getters.productsInCart),
		};
	},
};
</script>

<style>
.paddingHeader {
	margin-top: 8vh;
}
.flex-container {
	display: flex;
	align-items: center;
	width: 100%;
}

.big-cell {
	flex: 3;
}
.small-cell {
	flex: 1;
}
</style>
