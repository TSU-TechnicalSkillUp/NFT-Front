<template>
  <div class="app-header">
    <div class="app-header__logo">
      <img class="app-header__logo--img" src="https://opensea.io/static/images/logos/opensea.svg" />
      <span class="app-header__logo--name">NFT-Front</span>
    </div>
    <div class="app-header__bar"></div>
    <div class="app-header__console">
      <div class="console__acution">경매</div>
      <div class="console__feed">피드</div>
      <div class="console__gallery">갤러리</div>
    </div>
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
  padding: 0 2rem;
  box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
  background-color: #fff;
  &__logo {
    display: flex;
    height: 100%;
    align-items: center;
    width: 180px;

    &--img {
      width: 40px;
      height: 40px;
    }

    &--name {
      font-weight: 900;
      font-size: 18px;
      margin-left: 10px;
    }
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
    justify-content: space-between;
    width: 250px;
  }
}
</style>
