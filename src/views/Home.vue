<template>
  <div class="home">
    <!-- <img class="logo" src="@/assets/img/logo.png" alt=""> -->
    <LLRunBtn RunText="奔跑按钮" IngText="奔跑中～" :active="active" @click="test()"></LLRunBtn>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref
} from 'vue'
// import { useRouter } from 'vue-router'
// import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    // const router = useRouter()
    // const store = useStore()
    // const testStore = ref<string>(store.state.home.test)
    const active = ref(false)

    onMounted((): void => {
      console.log('mounted')
      init()
    })

    const init = (): void => {
      console.log('init')
    }

    const test = (): void => {
      active.value = true
    }

    return {
      active,
      // testStore
      test
    }
  }
})
</script>

<style scoped lang="scss">
</style>
