<template>
  <div class="LLRunBtn">
    <LLRunBtn RunText="点我" IngText="开冲!" :active="active" @click="test()"></LLRunBtn>
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
      setTimeout(() => {
        active.value = false
      }, 2000)
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
