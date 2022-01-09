<template>
  <div class="auction-tab">
    <nuxt-link
      v-for="tabBlock in tabBlockList"
      :key="`tab_block-${tabBlock.index}`"
      :to="{ path: 'auction', query: { tab: tabBlock.value } }"
      class="auction-tab__block"
      :class="{ active: blockActive(tabBlock.value) }"
    >
      <span class="auction-tab__block--span">{{ tabBlock.name }}</span>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface TabBlock {
  index: number;
  name: string;
  value: string;
}

export default Vue.extend({
  name: 'AcutionTab',
  data() {
    return {
      tabBlockList: [
        {
          index: 0,
          name: 'Trending',
          value: 'trending',
        },
        {
          index: 1,
          name: 'Top',
          value: 'top',
        },
        {
          index: 2,
          name: 'Art',
          value: 'art',
        },
        {
          index: 3,
          name: 'Collectibles',
          value: 'collectibles',
        },
        {
          index: 4,
          name: 'Domain Names',
          value: 'domain-names',
        },
        {
          index: 5,
          name: 'Music',
          value: 'music',
        },
        {
          index: 6,
          name: 'Photography',
          value: 'photography',
        },
        {
          index: 7,
          name: 'Sports',
          value: 'sports',
        },
        {
          index: 8,
          name: 'Trading Cards',
          value: 'trading-cards',
        },
        {
          idnex: 9,
          name: 'Utility',
          value: 'utility',
        },
        {
          index: 10,
          name: 'Virtual Worlds',
          value: 'virtual-worlds',
        },
      ] as TabBlock[],
    };
  },
  methods: {
    blockActive(value: string) {
      return this.$nuxt.$route?.query?.tab === value;
    },
  },
});
</script>

<style lang="scss" scoped>
.auction-tab {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(229, 232, 235);
  border-top: 1px solid rgb(229, 232, 235);
  overflow: auto;

  &__block {
    display: flex;
    height: 100%;
    padding: 12px 20px;
    justify-content: center;
    position: relative;
    width: 100%;
    transition: color 0.4s ease 0s, background-color 0.4s ease 0s;
    color: rgb(53, 56, 64);
    background-color: rgb(255, 255, 255);

    &--span {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      text-align: center;
      margin: 0px;
      flex: 1 1 0%;
      white-space: nowrap;
      font-weight: 600;
      font-size: 16px;
    }
  }
  &__block.active::after {
    transition: background-color 0.4s ease 0s;
    background-color: $very-peri-shade-2;
    bottom: 0%;
    content: '';
    display: block;
    height: 4px;
    left: 0px;
    position: absolute;
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}
</style>
