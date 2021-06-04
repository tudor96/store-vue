<template>
	<div class="flex-container">
		<div class="big-cell">
			<img :src="product.image" class="card-img-top image_top" alt="..." />
		</div>
		<div class="small-cell">{{ cartProduct.quantity }}</div>
		<div class="small-cell">{{ product.price }}</div>
		<div class="small-cell">{{ product.totalPrice }}</div>
	</div>
</template>

<script>
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";

export default {
	props: ["cartProduct"],
	setup(props) {
		const store = useStore();

		const cartProductEnh = ref({});

		function enchanceProductCart(cart) {
			const productById = computed(() =>
				store.getters.singleProduct(cart.productId)
			);
			return {
				...productById.value,
				totalPrice: cart.quantity * productById.value.price,
			};
		}
		watch(props.cartProduct, function (val) {
			console.log("Rendering:: ", val);
		});
		return {
			product: enchanceProductCart(props.cartProduct),
		};
	},
};
</script>

<style scoped lang="scss">
img {
	height: 4rem;
	width: 4rem;
	object-fit: contain;
}
</style>
