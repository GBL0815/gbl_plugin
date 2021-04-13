<template>
  <div class="none">
    <img src="@/assets/img/none.png" alt="">
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
.none {
  width: 100%;height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
