<template>
  <div class="navBlock">
    <li class="title">
      <span>{{ title }}</span>
    </li>
    <ul>
      <li :class="item.choosed ? 'choosed' : ''" v-for="(item, index) in children" :key="index" @click="choosed(item, index)">
        <span class="item">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType
} from 'vue'
import { CommitOptions, useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { NavItem } from '@/assets/js/interface'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '未定义'
    },
    children: {
      type: Array as PropType<NavItem[]>
    },
    index: {
      type: Number,
      default: 0
    }
  },
  setup (props) {
    const store = useStore()
    const router = useRouter()
    // 点击侧边栏
    const choosed = (item: NavItem, index: CommitOptions): void => {
      store.commit('choosed', { index0: props.index, index1: index })
      router.push(item.route)
    }
    return {
      // 变量
      choosed
    }
  }
})
</script>

<style scoped lang="scss">
  .navBlock {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    li {
      position: relative;
      height: 40px;
      line-height: 40px;
      transition: all 0.5s;
      cursor: pointer;
      .item {
        padding-left: 40px;
        color: rgba(0,0,0,.85);
        font-size: 12px;
        transition: all 0.3s;
      }
      .item:hover {
        color: #1890ff;
      }
    }
    li::after {
      content: '';
      position: absolute;
      top: 0;right: 0;bottom: 0;
      border-right: 3px solid #1890ff;
      transition: all 0.5s;
      transform: scaleY(0.0001);
      opacity: 0;
    }
    .title {
      margin: 10px 40px;
      border-bottom: 1px solid #f0f0f0;
      color: rgba(0,0,0,.45);
      font-size: 13px;
      cursor: default;
    }
    .choosed {
      background-color: #e6f7ff;
      span {
        color: #1890ff;
      }
    }
    .choosed::after {
      transform: scaleY(1);
      opacity: 1;
    }
  }
</style>
