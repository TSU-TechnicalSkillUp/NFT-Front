<template>
  <div class="index">
    <div id="my" ref="my">
      <div id="hi"></div>
    </div>
    <div class="kiki">
      <div>hihi</div>
      <div>hihi</div>
      <div>hihi</div>
      <div>hihi</div>
      <div>hihi</div>
      <div>hihi</div>
      <div>hihi</div>
      <div>hihi</div>
      <div>hihi</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';

export default (Vue as VueConstructor<Vue & { $refs: { my: HTMLDivElement; hi: HTMLDivElement } }>).extend({
  name: 'IndexPage',
  mounted() {
    const scriptEl = document.createElement('script');
    scriptEl.src = 'js/effet.js';
    scriptEl.type = 'text/javascript';
    const styleEl = document.createElement('link');
    const divEl = document.querySelector('#hi');
    this.$refs.my.insertBefore(styleEl, divEl);
    this.$refs.my.appendChild(scriptEl);
  },
});
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  .kiki {
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
}
</style>
