<template>
  <div class="auction">
    <h1 class="auction__title">Explore Auction</h1>
    <AuctionTab />
    <div class="auction__wrap">
      <AuctionCard
        id="mznx13579"
        title="11"
        content="11"
        :tagList="[
          { name: 'tag1' },
          { name: 'tag2' },
          { name: 'tag2' },
          { name: 'tag2' },
          { name: 'tag2' },
          { name: 'tag2' },
          { name: 'tag2' },
          { name: 'tag2' },
          { name: 'tag2' },
          { name: 'tag2' },
        ]"
        createTime="3시간 전"
      />
      <AuctionCard
        title="12"
        content="1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
      />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard
        title="12"
        content="1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
      />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard />
      <AuctionCard
        title="12"
        content="1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AuctionCard from '~/components/AuctionCard.vue';
import AuctionTab from '~/components/AuctionTab.vue';

export default Vue.extend({
  name: 'AuctionPage',
  components: { AuctionTab, AuctionCard },
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

  &__wrap {
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
