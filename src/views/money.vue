<template>
  <div class="money">
    <span style="font-size: 18px;font-weight: blod;">谢谢老板</span>
    <div class="imgRoom">
      <div class="aside">
        <img src="@/assets/img/moneyGIf/money0.gif" alt="">
        <img src="@/assets/img/moneyGIf/money1.gif" alt="">
      </div>
      <img src="@/assets/img/money.jpg" alt="">
      <div class="aside">
        <img src="@/assets/img/moneyGIf/money2.gif" alt="">
        <img src="@/assets/img/moneyGIf/money3.gif" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

export default defineComponent({
  setup () {
    return {
    }
  }
})
</script>

<style scoped lang="scss">
.money {
  width: 100%;height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  .imgRoom {
    height: 540px;
    display: flex;
    .aside {
      display: flex;
      flex-direction: column;
      img {
        flex: 1;
        width: 270px;
      }
    }
  }
}
</style>
