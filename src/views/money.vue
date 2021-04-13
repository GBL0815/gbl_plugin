<template>
  <div class="money">
    <span style="font-size: 18px;font-weight: blod;">谢谢老板</span>
    <img src="@/assets/img/money.jpg" alt="">
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
}
</style>
