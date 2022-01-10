<template>
  <div class="auction-card">
    <div class="auction-card__wrapper">
      <div class="auction-card__wrapper--cover">
        <div class="card-content">
          <div class="card-content__title">{{ title }}</div>
          <div class="card-content__body">{{ content }}</div>
          <div class="card-content__tag">
            <p>#2222</p>
          </div>
        </div>
        <div class="card-footer">
          <p>hohihihi</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AuctionCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.auction-card {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 232, 235);
  border-radius: 10px;
  position: relative;
  z-index: 2;
  flex-direction: column;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border: 1px solid #e9ebee;
    border-radius: 6px;
    box-shadow: 0 14px 12px -18px rgb(27 28 29 / 34%);
    background-color: #fff;
    transition: transform 0.2s ease-in;

    &--cover {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      border: 1px solid #e9ebee;
      border-radius: 6px;
      box-shadow: 0 14px 12px -18px rgb(27 28 29 / 34%);
      background-color: #fff;
      transition: transform 0.2s ease-in;

      .card-content {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        &__title {
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          white-space: nowrap;
          white-space: normal;
          max-height: 48px;
          text-align: left;
          word-break: break-all;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: -0.3px;
          font-size: 16px;
          color: #1b1c1d;
          display: block;
          margin-top: 14px;
        }

        &__body {
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          white-space: nowrap;
          white-space: normal;
          max-height: 60.06px;
          text-align: left;
          word-break: break-all;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          font-weight: 400;
          line-height: 1.43;
          letter-spacing: -0.3px;
          font-size: 14px;
          color: #858a8d;
          margin-top: 4px;
        }

        &__tag {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 32px;
          padding: 0 14px;
        }
      }

      .card-footer {
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: -0.3px;
        font-size: 12px;
        color: #3e4042;
        display: flex;
        flex-shrink: 0;
        justify-content: space-between;
        margin-top: 14px;
        padding: 11px 16px 10px;
        border-top: 1px solid #f1f3f5;
      }
    }
  }
}

.auction-card:hover {
  box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
  transition: all 0.1s ease 0s;
}
</style>
