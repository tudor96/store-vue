<template>
  <form action="">
    <div class="form-group">
      <label for="exampleFormControlInput1">Search</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
        v-model="input"
      />
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const searchInput = ref('');

    return {
      input: searchInput,
    };
  },
};
</script>

<style lang="scss" scoped></style>
