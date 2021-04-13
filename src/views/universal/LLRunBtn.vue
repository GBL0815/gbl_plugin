<template>
  <div class="LLRunBtn">
    <LLRunBtn RunText="奔跑按钮" IngText="奔跑中～" :active="active" @click="test()"></LLRunBtn>
    <p>马上，马上就写文档</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'

export default defineComponent({
  setup () {
    // 变量
    const active = ref(false)

    // 按钮点击效果
    const test = (): void => {
      active.value = true
    }
    return {
      // 变量
      active,
      // 方法
      test
    }
  }
})
</script>

<style scoped lang="scss">
</style>
