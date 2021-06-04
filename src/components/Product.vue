<template>
	<div>
		<div class="card">
			<img :src="product.image" class="card-img-top image_top" alt="..." />
			<div class="card-body">
				<h5 class="card-title">{{ product.title }}</h5>
				<p class="card-text">{{ product.price }}</p>
				<div class="btn btn-primary" @click="addToCart(product)">
					Add to cart
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["product"],
	setup() {
		function addToCart(product) {
			console.log(product);
		}

		return {
			addToCart,
		};
	},
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
