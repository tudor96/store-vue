<template>
  <div id="app">
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/post/1">About</router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>

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
</style>
