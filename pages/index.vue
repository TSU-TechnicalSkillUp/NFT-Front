<template>
  <div class="index">
    <div>hi</div>
    <div>hi</div>
    <div>hi</div>
    <div>hi</div>
    <div>hi</div>
    <div>hi</div>
    <div>hi</div>
    <div>hi</div>
    <div>hi</div>
    <div>hi</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
});
</script>

<style lang="scss" scoped>
.index {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  align-items: start;
  justify-items: center;
  grid-gap: 3rem 3rem;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  position: relative;
  padding: 0 2rem;
}
</style>
