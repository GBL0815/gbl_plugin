<template>
  <!-- runButton -->
  <button
    v-if="type === 'run'"
    class="runBtn"
    ref="runBtn"
    :style="btnStyle"
    :class="{ active: 'active' }"
    @click="runClick"
  >
    <span class="default">{{ text }}</span>
    <span class="active">{{ ingText }}</span>
    <div class="running">
      <div class="outer">
        <div class="body">
          <div class="arm behind"></div>
          <div class="arm front"></div>
          <div class="leg behind"></div>
          <div class="leg front"></div>
        </div>
      </div>
    </div>
  </button>
  <!-- loadingButton -->
  <button
    v-if="type === 'loading'"
    class="loadingBtn"
    :ref="loadingBtn"
    :style="loadingStyle"
    :class="changeLoadingClass()"
    @click="loadingClick"
  >
    <p>{{ text }}</p>
    <div class="loading">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="checkmarkRoom">
      <svg class="checkmark" ref="loadingSvg" :stroke="color" fill="none">
        <polyline points="5 20,16 35, 32 9" />
      </svg>
    </div>
  </button>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  computed
} from 'vue'

export default defineComponent({
  name: 'LLBtn',
  emits: ['click'],
  props: {
    type: {
      type: String,
      default: 'run'
    },
    text: {
      type: String,
      default: 'Run'
    },
    ingText: {
      type: String,
      default: 'Ing'
    },
    active: {
      type: Number,
      default: 0
    },
    bgColor: {
      type: String,
      default: '#ff69b4'
    },
    bgColor_active: {
      type: String,
      default: '#1e90ff'
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    width: {
      type: String,
      default: '125px'
    },
    height: {
      type: String,
      default: '35px'
    },
    fontSize: {
      type: String,
      default: '14px'
    }
  },
  setup (props, context) {
    // 变量
    const runBtn = ref()
    const btnWidth = ref(0)
    const loadingBtn = ref()
    const loadingClass = ref('')
    const loadingSvg = ref()
    const btnStyle = computed(() => {
      const universalStyle = {
        width: props.width,
        height: props.height,
        color: props.color,
        fontSize: props.fontSize
      }
      let style = {}
      if (props.active) {
        style = {
          '--b': 'var(--background-active)',
          '--default-x': '100%',
          '--active-x': '-8%',
          '--running-x': `${btnWidth.value - 10}px`,
          '--background-active': props.bgColor_active
        }
      } else {
        style = {
          '--background': props.bgColor
        }
      }
      return { ...style, ...universalStyle }
    })
    const loadingStyle = computed(() => {
      const universalStyle = {
        height: props.height,
        fontSize: props.fontSize
      }
      let style = {}
      if (props.active) {
        style = {
          width: props.height,
          color: 'transparent',
          'background-color': props.bgColor_active
        }
      } else {
        style = {
          width: props.width,
          color: props.color,
          'background-color': props.bgColor
        }
      }
      return { ...style, ...universalStyle }
    })

    // 生命周期
    onMounted((): void => {
      if (props.type === 'run') {
        btnWidth.value = parseInt(props.width.slice(0, -2))
      } else if (props.type === 'loading') {
        const scale = parseInt(props.height.slice(0, -2)) / 50
        loadingSvg.value.setAttribute('transform', `scale(${scale}, ${scale})`)
      }
    })

    // 点击事件
    const runClick = (): void => {
      context.emit('click')
    }

    const loadingClick = (): void => {
      context.emit('click')
    }

    // 切换loading按钮样式
    const changeLoadingClass = (): string => {
      let loadingClass = ''
      switch (props.active) {
        case 1:
          loadingClass = 'loadingActive'
          break
        case 2:
          loadingClass = 'loadingActive loadingVerity'
          break
        default:
          loadingClass = ''
          break
      }
      return loadingClass
    }

    return {
      // 变量
      runBtn,
      btnStyle,
      loadingBtn,
      loadingClass,
      loadingStyle,
      loadingSvg,
      // 方法
      runClick,
      loadingClick,
      changeLoadingClass
    }
  }
})
</script>

<style lang="scss" scoped>
// runButton
.runBtn + .runBtn {
  margin-left: 10px;
}
.running {
  --color: red;
  --duration: 0.8s;
  display: inline-block;
  transform: scale(var(--scale, 1));
  .outer {
    animation: outer var(--duration) linear infinite;
    .body {
      height: 15px;width: 8px;
      border-radius: 4px;
      transform-origin: 4px 11px;
      position: relative;
      transform: rotate(32deg);
      animation: body var(--duration) linear infinite;
      &:before {
        content: "";
        width: 8px;height: 8px;
        border-radius: 4px;
        bottom: 16px;left: 0;
        position: absolute;
        background: var(--color);
      }
      .arm,
      .arm:before,
      .leg,
      .leg:before {
        content: "";
        width: var(--w, 11px);height: 4px;
        top: var(--t, 0);left: var(--l, 2px);
        border-radius: 2px;
        transform-origin: 2px 2px;
        position: absolute;
        background: var(--c, var(--color));
        transform: rotate(var(--r, 0deg));
        animation: arm-leg var(--duration) linear infinite;
      }
      .arm {
        &:before {
          --l: 7px;
          animation: arm-b var(--duration) linear infinite;
        }
        &.front {
          --r: 24deg;
          --r-to: 164deg;
          &:before {
            --r: -48deg;
            --r-to: -36deg;
          }
        }
        &.behind {
          --r: 164deg;
          --r-to: 24deg;
          &:before {
            --r: -36deg;
            --r-to: -48deg;
          }
        }
      }
      .leg {
        --w: 12px;
        --t: 11px;
        &:before {
          --t: 0;
          --l: 8px;
        }
        &.front {
          --r: 10deg;
          --r-to: 108deg;
          &:before {
            --r: 18deg;
            --r-to: 76deg;
          }
        }
        &.behind {
          --r: 108deg;
          --r-to: 10deg;
          --c: none;
          &:before {
            --c: var(--color);
            --r: 76deg;
            --r-to: 18deg;
          }
          &:after {
            content: "";
            position: absolute;
            top: 0;right: 0;
            height: 4px;width: 6px;
            clip-path: polygon(2px 0, 6px 0, 6px 4px, 0 4px);
            border-radius: 0 2px 2px 0;
            background: var(--color);
          }
        }
      }
    }
  }
}
.runBtn {
  --shadow: #{rgba(#00093d, 0.2)};
  --padding-y: 4px;
  --padding-x: 36px;
  margin: 0;
  padding: var(--padding-y) 0;
  font-weight: bold;
  border-radius: 25px;
  line-height: 23px;
  position: relative;
  border: none;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  transition: box-shadow 0.3s, transform 0.3s, background 0.4s;
  box-shadow: 0 var(--shadow-y, 4px) var(--shadow-blur, 12px) var(--shadow);
  color: var(--color);
  background: var(--b, var(--background));
  transform: translateY(var(--y, 0));
  padding: 5px 10px;
  span {
    display: block;
    transition: transform 0.4s ease;
    transform: translateX(var(--x, 0));
    padding: 0 var(--padding-x);
    &.default {
      --x: var(--default-x, 0);
    }
    &.active {
      --x: var(--active-x, -100%);
      margin-top: -23px;
    }
  }
  .running {
    --scale: 0.64;
    --color: #fff;
    position: absolute;
    top: 42%;right: 105%;
    transition: transform 0.4s ease;
    transform: translate(var(--running-x, -8px), -50%) scale(var(--scale));
  }
  &:hover {
    --b: var(--background-hover);
    --y: -2px;
    --shadow-y: 8px;
    --shadow-blur: 16px;
    --default-x: 4px;
    --running-x: var(--padding-x);
  }
  &:active {
    --y: 1px;
    --shadow-y: 4px;
    --shadow-blur: 8px;
  }
  .active:hover {
    --b: var(--background-active-hover);
  }
}
@keyframes outer {
  50% {
    transform: translateY(0);
  }
  25%, 75% {
    transform: translateY(4px);
  }
}
@keyframes body {
  50% {
    transform: rotate(16deg);
  }
  25%, 75% {
    transform: rotate(24deg);
  }
}
@keyframes arm-leg {
  50% {
    transform: rotate(var(--r-to));
  }
}
@keyframes arm-b {
  30%, 70% {
    transform: rotate(var(--r-to));
  }
}

// loadingButton
.loadingBtn{
  position: relative;
  border: none;
  outline: none;
  border-radius: 50px;
  font-weight: bold;
  // box-shadow: 0 5px 20px #000000;
  cursor: pointer;
  transition: 0.5s;
}
.loading{
  opacity: 0;
  transition: 0.5s;
}
.loadingActive .loading{
  position: absolute;
  left: 50%;top: 50%;
  transform: translate(-50%,-50%);
  width: 70%;height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  opacity: 1;
}
.loadingActive .loading div{
  width: 3px;height: 3px;
  border-radius: 50%;
  background-color: #fff;
  animation: 0.6s loading ease-in-out infinite alternate;
}
@keyframes loading{
  from{ transform: translateY(0); }
  to{ transform:  translateY(-1rem); }
}
.loadingActive .loading div:nth-child(2){
  animation-delay: 0.2s;
}
.loadingActive .loading div:nth-child(3){
  animation-delay: 0.4s;
}
.loadingVerity .loading{
  opacity: 0;
}
.checkmarkRoom {
  position: absolute;
  left: 50%;top: 50%;
  transform: translate(-50%,-50%);
  .checkmark{
    width: 40px;height: 40px;
    stroke-width: 2px;
    stroke-dasharray: 55px;
    stroke-dashoffset: 55px;
  }
}
.loadingVerity .checkmark{
  animation: 0.6s show forwards;
  animation-delay: 0.4s;
}
@keyframes show{
  to{ stroke-dashoffset: 0; }
}
</style>
