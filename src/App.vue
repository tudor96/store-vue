<template>
	<div id="app">
		<div class="header">
			<div class="container h-100">
				<div class="row h-100">
					<div
						id="nav"
						class="
							d-flex
							w-100
							h-100
							justify-content-between
							align-items-center
						"
					>
						<router-link to="/"
							><img src="./assets/shop_logo.png" alt=""
						/></router-link>
						<router-link to="/cart">
							<button type="button" class="btn btn-sm btn-info">
								Cart <span class="badge badge-light">{{ productsInCart }}</span>
							</button></router-link
						>
					</div>
				</div>
			</div>
		</div>

		<router-view />
	</div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
	name: "App",
	setup() {
		const store = useStore();

		const getPageData = async () => {
			store.dispatch("cart/action/GET_CART");
			store.dispatch("products/action/GET_ALL_PRODUCTS");
		};

		onMounted(getPageData);

		return {
			productsInCart: computed(() => store.getters.productsInCart),
		};
	},
};
</script>

<style lang="scss">
.header {
	height: 6vh;
	background-color: white;
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	width: 100%;
	box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
		rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
}

.header img {
	height: 4vh;
	width: 4vh;
}
</style>
