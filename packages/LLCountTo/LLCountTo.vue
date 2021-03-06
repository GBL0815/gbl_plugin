<template>
    <span>
      {{displayValue}}
    </span>
</template>
<script>
import {
  defineComponent,
  getCurrentInstance,
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount
} from 'vue'

import { requestAnimationFrame, cancelAnimationFrame } from './requestAnimationFrame.ts'

export default defineComponent({
  name: 'LLCountTo',
  props: {
    startVal: {
      type: Number,
      required: false,
      default: 0
    },
    endVal: {
      type: Number,
      required: false,
      default: 2017
    },
    duration: {
      type: Number,
      required: false,
      default: 3000
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: true
    },
    decimals: {
      type: Number,
      required: false,
      default: 0,
      validator (value) {
        return value >= 0
      }
    },
    decimal: {
      type: String,
      required: false,
      default: '.'
    },
    separator: {
      type: String,
      required: false,
      default: ','
    },
    prefix: {
      type: String,
      required: false,
      default: ''
    },
    suffix: {
      type: String,
      required: false,
      default: ''
    },
    useEasing: {
      type: Boolean,
      required: false,
      default: true
    },
    easingFn: {
      type: Function,
      default (t, b, c, d) {
        return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b
      }
    }
  },
  setup (props) {
    const { proxy } = getCurrentInstance()
    // 变量
    const localStartVal = ref(props.startVal)
    const printVal = ref(null)
    const paused = ref(false)
    const localDuration = ref(props.duration)
    const startTime = ref(null)
    const remaining = ref(null)
    const rAF = ref(null)
    // 计算属性
    const countDown = computed(() => props.startVal > props.endVal)
    const startVal = computed(() => props.startVal)
    const endVal = computed(() => props.endVal)
    // 监听
    watch([startVal, endVal], () => {
      if (props.autoplay) {
        start()
      }
    })

    // 生命周期
    onMounted(() => {
      if (props.autoplay) {
        start()
      }
      proxy.$emit('mountedCallback')
    })

    const start = () => {
      localStartVal.value = props.startVal
      startTime.value = null
      localDuration.value = props.duration
      paused.value = false
      rAF.value = requestAnimationFrame(count)
    }

    // const pauseResume = () => {
    //   if (props.paused) {
    //     resume()
    //     paused.value = false
    //   } else {
    //     pause()
    //     paused.value = true
    //   }
    // }

    // const pause = () => {
    //   cancelAnimationFrame(rAF.value)
    // }

    // const resume = () => {
    //   startTime.value = null
    //   localDuration.value = +remaining.value
    //   localStartVal.value = +printVal.value
    //   requestAnimationFrame(count)
    // }

    // const reset = () => {
    //   startTime.value = null
    //   cancelAnimationFrame(rAF.value)
    //   displayValue.value = formatNumber(props.startVal)
    // }

    const count = (timestamp) => {
      if (!startTime.value) startTime.value = timestamp
      const progress = timestamp - startTime.value
      remaining.value = localDuration.value - progress

      if (props.useEasing) {
        if (countDown.value) {
          printVal.value = localStartVal.value - props.easingFn(progress, 0, localStartVal.value - props.endVal, localDuration.value)
        } else {
          printVal.value = props.easingFn(progress, localStartVal.value, props.endVal - localStartVal.value, localDuration.value)
        }
      } else {
        if (countDown.value) {
          printVal.value = localStartVal.value - ((localStartVal.value - props.endVal) * (progress / localDuration.value))
        } else {
          printVal.value = localStartVal.value + (props.endVal - localStartVal.value) * (progress / localDuration.value)
        }
      }
      if (countDown.value) {
        printVal.value = printVal.value < props.endVal ? props.endVal : printVal.value
      } else {
        printVal.value = printVal.value > props.endVal ? props.endVal : printVal.value
      }

      displayValue.value = formatNumber(printVal.value)
      if (progress < localDuration.value) {
        rAF.value = requestAnimationFrame(count)
      } else {
        proxy.$emit('callback')
      }
    }

    const isNumber = (val) => {
      return !isNaN(parseFloat(val))
    }

    const formatNumber = (num) => {
      num = num.toFixed(props.decimals)
      num += ''
      const x = num.split('.')
      let x1 = x[0]
      const x2 = x.length > 1 ? props.decimal + x[1] : ''
      const rgx = /(\d+)(\d{3})/
      if (props.separator && !isNumber(props.separator)) {
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + props.separator + '$2')
        }
      }
      return props.prefix + x1 + x2 + props.suffix
    }

    // 显示值
    const displayValue = ref(formatNumber(props.startVal))

    // 生命周期
    onBeforeUnmount(() => {
      cancelAnimationFrame(rAF.value)
    })

    return {
      // 变量
      displayValue
    }
  }
})
</script>
