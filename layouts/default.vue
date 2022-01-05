<template>
  <div class="app-layout">
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeader from '~/components/layoutElement/AppHeader.vue';

export default Vue.extend({
  name: 'AppLayout',
  components: { AppHeader },
});
</script>

<style lang="scss" scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  background-color: rgb(255, 255, 255);
  width: 100%;
  flex-direction: column;
}
</style>
