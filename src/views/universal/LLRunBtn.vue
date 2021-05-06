<template>
  <div class="LLRunBtn">
    <LLRunBtn text="点我" IngText="开冲!" :active="active" @click="test()"></LLRunBtn>
    <LLRunBtn type="loading" text="点我" :loading="loading" @click="test2()"></LLRunBtn>
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
    const loading = ref(0)

    // 按钮点击效果
    const test = (): void => {
      active.value = true
      setTimeout(() => {
        active.value = false
      }, 2000)
    }

    const test2 = (): void => {
      loading.value = 1
      setTimeout(() => {
        loading.value = 2
        setTimeout(() => {
          loading.value = 0
        }, 2000)
      }, 2000)
    }

    return {
      // 变量
      active,
      loading,
      // 方法
      test,
      test2
    }
  }
})
</script>

<style scoped lang="scss">
</style>
