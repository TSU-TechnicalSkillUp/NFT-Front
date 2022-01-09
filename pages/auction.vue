<template>
  <div class="auction">
    <h1 class="auction__title">Explore Auction</h1>
    <AuctionTab />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AuctionTab from '~/components/AuctionTab.vue';

export default Vue.extend({
  name: 'AuctionPage',
  components: { AuctionTab },
});
</script>

<style lang="scss" scoped>
.auction {
  display: flex;
  flex-direction: column;

  &__title {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
    font-size: 3rem;
    line-height: 1.1;
    background-color: #eee;
    min-height: 12rem;
    max-height: 12rem;
  }
}
</style>
