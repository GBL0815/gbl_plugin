<template>
  <div class="LLRunBtn">
    <LLCountTo :startVal="startVal" :endVal="endVal" :duration='3000'></LLCountTo>
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
    const startVal = ref(0)
    const endVal = ref(1000)
    return {
      // 变量
      startVal,
      endVal
    }
  }
})
</script>

<style scoped lang="scss">
</style>
