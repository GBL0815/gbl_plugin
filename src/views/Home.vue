<template>
  <div class="home">
    <!-- 头部栏 -->
    <header>
      <!-- LOGO容器 -->
      <div class="logoRoom">
        <a href="https://gbl0815.github.io/gbl_plugin/#/">
          <img src="@/assets/img/logo.png" alt="">
          GBL Plugin
        </a>
      </div>
      <!-- git容器 -->
      <div class="gitRoom">
        <a href="https://github.com/GBL0815/gbl_plugin">
          <img src="@/assets/img/github.png" alt="">
        </a>
      </div>
    </header>
    <!-- 主要内容容器 -->
    <div class="body">
      <!-- 侧边栏 -->
      <aside>
        <button class="moneyButton" @click="goMoney">想给我送钱?</button>
        <div class="pluginNav scrollBar">
          <span class="guide" @click="goGuide">使用指南</span>
          <navBlock v-for="(item, index) in navList" :key="index" :title="item.title" :children="item.children" :index="index" />
        </div>
      </aside>
      <!-- 主内容 -->
      <div class="content scrollBar" style="overflow-y: auto;">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

import navBlock from '@/components/navBlock.vue'

export default defineComponent({
  components: { navBlock },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    // 变量
    const navList = ref(store.state.home.navList)

    // 生命周期
    onMounted((): void => {
      for (const index0 in navList.value) {
        for (const index1 in navList.value[index0].children) {
          if (route.name === navList.value[index0].children[index1].route.slice(1)) {
            store.commit('choosed', { index0: index0, index1: index1 })
          }
        }
      }
    })

    // 前往指南页
    const goGuide = (): void => {
      store.commit('choosed', { index0: -1, index1: -1 })
      router.push('/index')
    }

    // 前往money页
    const goMoney = (): void => {
      store.commit('choosed', { index0: -1, index1: -1 })
      router.push('/money')
    }

    return {
      // 变量
      navList,
      // 方法
      goGuide,
      goMoney
    }
  }
})
</script>

<style scoped lang="scss">
.home {
  width: 100%;height: 100%;
  position: fixed;
  top: 0;left: 0;
  header {
    width: 100%;height: 64px;
    box-shadow: 0 2px 8px #f0f1f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logoRoom {
      padding-left: 40px;
      a {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        img {
          width: 50px;height: 50px;
          margin-right: 15px;
        }
      }
    }
    .gitRoom {
      padding-right: 40px;
      a {
        img {
          width: 20px;height: 20px;
        }
      }
    }
  }
  .body {
    width: 100%;height: calc(100% - 64px);
    padding-top: 40px;
    display: flex;
    aside {
      width: 16.7%;height: 100%;
      display: flex;
      flex-direction: column;
      .moneyButton {
        width: 92px;height: 32px;
        color: #f9ba48;
        background-color: transparent;
        border: 1px solid #f9ba48;
        outline: none;
        margin: 0 0 30px  40px;
        cursor: pointer;
      }
      .pluginNav {
        flex: 1;
        width: calc(100% - 1px);
        border-right: 1px solid #f0f0f0;
        padding-bottom: 80px;
        .guide {
          color: #1890ff;
          font-weight: bold;
          cursor: pointer;
        }
        span {
          padding-left: 40px;
        }
      }
    }
    .content {
      flex: 1;
      height: calc(100vh - 104px)
    }
  }
}
</style>
