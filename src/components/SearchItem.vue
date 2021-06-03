<template>
	<form @submit="onSubmit">
		<div class="d-flex align-items-center w-100 justify-content-between">
			<div class="form-group mr-4" style="flex: 1">
				<label for="search_input">Search for articles</label>
				<input
					type="text"
					class="form-control"
					id="search_input"
					placeholder="Items to search for..."
					v-model="input"
				/>
			</div>
			<button type="submit" class="btn btn-primary mt-3">Search</button>
		</div>
		<p v-if="invalidSearch" class="text-danger">Entered search is empty</p>
	</form>
</template>

<script>
import { ref, watch } from "vue";
export default {
	emits: ["onSearch"],
	setup(_, context) {
		const searchInput = ref("");
		const invalidSearch = ref(false);

		watch(invalidSearch, function (val) {
			if (val) {
				console.log("Analytics: Invalid Input");
			}
		});

		function onSubmit(e) {
			invalidSearch.value = false;
			e.preventDefault();
			if (searchInput.value === "") {
				invalidSearch.value = true;
			} else {
				context.emit("onSearch", searchInput.value);
				searchInput.value = "";
			}
		}
		return {
			input: searchInput,
			invalidSearch,
			onSubmit,
		};
	},
};
</script>

<style lang="scss" scoped></style>
