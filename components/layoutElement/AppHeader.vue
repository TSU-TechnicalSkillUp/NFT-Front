<template>
  <div class="app-header">
    <div class="app-header__logo">Logo</div>
    <div class="app-header__bar">bar</div>
    <div class="app-header__console">console</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppHeader',
});
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  max-width: 100%;
  height: 72px;
  position: sticky;
  top: 0px;
  z-index: 100;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.75rem;

  &__logo {
    display: flex;
    height: 100%;
    align-items: center;
    width: 150px;
  }

  &__bar {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 500px;
  }

  &__console {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: centers;
    width: 250px;
  }
}
</style>
