<template>
  <div class="index LLBtn">
    <!-- 介绍 -->
    <h2>LLBtn 按钮</h2>
    <p class="marginTop10">一些乱七八糟的按钮</p>
    <!-- 奔跑按钮 -->
    <h2 class="title">奔跑按钮</h2>
    <p class="marginTop10 marginBootom10">一个会跑步的按钮</p>
    <div class="demoRoom">
      <!-- 展示栏 -->
      <div class="source">
        <LLBtn text="点我" ingText="开冲!" :active="active0" @click="test()" />
      </div>
      <!-- 代码片段 -->
      <code class="code"
        :style="{ height: demo0.cliked ? '193px' : 0, width: demo0.cliked ? 'calc(100% - 48px)' : '100%', padding: demo0.cliked ? '18px 24px 8px' : 0}"
      >
        <div class="line">
          <span class="punctuation">&lt;</span>
          <span class="string">LLBtn </span>
          <span class="keyword">text</span>
          <span>=</span>
          <span class="props">"点我" </span>
          <span class="keyword">ingText</span>
          <span>=</span>
          <span class="props">"开冲" </span>
          <span class="keyword">:active</span>
          <span>=</span>
          <span class="keyword">"active" </span>
          <span class="keyword">@click</span>
          <span>=</span>
          <span class="punctuation">"</span>
          <span class="function">test</span>
          <span class="punctuation">()"</span>
          /
          <span class="punctuation">&gt;</span>
        </div>
        <div class="line">
          <span class="var">const </span>
          <span class="keyword">active</span>
          =
          <span class="function">ref</span>
          <span class="punctuation">(</span>
          <span>0</span>
          <span class="punctuation">)</span>
        </div>
        <div class="line">
          <span class="var">const </span>
          <span class="function">test</span>
          =
          <span class="punctuation">() </span>
          <span class="keyword">=> </span>
          <span class="punctuation">{</span>
        </div>
        <div class="line">
          <span>&nbsp;&nbsp;</span>
          <span class="keyword">active</span>
          <span>.</span>
          <span class="keyword">value</span>
          =
          <span class="string">1</span>
        </div>
        <div class="line">
          <span>&nbsp;&nbsp;</span>
          <span class="function">setTimeout</span>
          <span class="punctuation">(() </span>
          <span class="keyword">=> </span>
          <span class="punctuation">{</span>
        </div>
        <div class="line">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="keyword">active</span>
          <span>.</span>
          <span class="keyword">value</span>
          =
          <span class="string">0</span>
        </div>
        <div class="line">
          <span>&nbsp;&nbsp;</span>
          <span class="punctuation">}, </span>
          <span class="string">2000</span>
          <span class="punctuation">)</span>
        </div>
        <div class="line">
          <span class="punctuation">}</span>
        </div>
      </code>
      <!-- 控制栏 -->
      <div class="control" @click="lookDemo(demo0)">
        <svg :class="demo0.cliked ? 'rotate180' : ''" t="1620357029547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1123" width="16" height="16"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" p-id="1124"></path></svg>
        <span>{{ demo0.cliked ? '隐藏代码' : '显示代码' }}</span>
      </div>
    </div>
    <!-- 等待按钮 -->
    <h2 class="title">等待按钮</h2>
    <p class="marginTop10 marginBootom10">一个会打勾的按钮</p>
    <div class="demoRoom">
      <!-- 展示栏 -->
      <div class="source">
        <LLBtn type="loading" text="点我" :active="active1" @click="test1()" />
      </div>
      <!-- 代码片段 -->
      <code class="code"
        :style="{ height: demo1.cliked ? '265px' : 0, width: demo1.cliked ? 'calc(100% - 48px)' : '100%', padding: demo1.cliked ? '18px 24px 8px' : 0}"
      >
        <div class="line">
          <span class="punctuation">&lt;</span>
          <span class="string">LLBtn </span>
          <span class="keyword">type</span>
          <span>=</span>
          <span class="props">"loading" </span>
          <span class="keyword">text</span>
          <span>=</span>
          <span class="props">"点我" </span>
          <span class="keyword">:active</span>
          <span>=</span>
          <span class="keyword">"active" </span>
          <span class="keyword">@click</span>
          <span>=</span>
          <span class="punctuation">"</span>
          <span class="function">test</span>
          <span class="punctuation">()"</span>
          /
          <span class="punctuation">&gt;</span>
        </div>
        <div class="line">
          <span class="var">const </span>
          <span class="keyword">active</span>
          =
          <span class="function">ref</span>
          <span class="punctuation">(</span>
          <span>0</span>
          <span class="punctuation">)</span>
        </div>
        <div class="line">
          <span class="var">const </span>
          <span class="function">test</span>
          =
          <span class="punctuation">() </span>
          <span class="keyword">=> </span>
          <span class="punctuation">{</span>
        </div>
        <div class="line">
          <span>&nbsp;&nbsp;</span>
          <span class="keyword">active</span>
          <span>.</span>
          <span class="keyword">value</span>
          =
          <span class="string">1</span>
        </div>
        <div class="line">
          <span>&nbsp;&nbsp;</span>
          <span class="function">setTimeout</span>
          <span class="punctuation">(() </span>
          <span class="keyword">=> </span>
          <span class="punctuation">{</span>
        </div>
        <div class="line">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="keyword">active</span>
          <span>.</span>
          <span class="keyword">value</span>
          =
          <span class="string">2</span>
        </div>
        <div class="line">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="function">setTimeout</span>
          <span class="punctuation">(() </span>
          <span class="keyword">=> </span>
          <span class="punctuation">{</span>
        </div>
        <div class="line">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="keyword">active</span>
          <span>.</span>
          <span class="keyword">value</span>
          =
          <span class="string">0</span>
        </div>
        <div class="line">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="punctuation">}, </span>
          <span class="string">2000</span>
          <span class="punctuation">)</span>
        </div>
        <div class="line">
          <span>&nbsp;&nbsp;</span>
          <span class="punctuation">}, </span>
          <span class="string">2000</span>
          <span class="punctuation">)</span>
        </div>
        <div class="line">
          <span class="punctuation">}</span>
        </div>
      </code>
      <!-- 控制栏 -->
      <div class="control" @click="lookDemo(demo1)">
        <svg :class="demo1.cliked ? 'rotate180' : ''" t="1620357029547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1123" width="16" height="16"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" p-id="1124"></path></svg>
        <span>{{ demo1.cliked ? '隐藏代码' : '显示代码' }}</span>
      </div>
    </div>
    <!-- 参数介绍 -->
    <h2 class="title marginBootom20">Props</h2>
    <table>
      <tr>
        <th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th>
      </tr>
      <tr v-for="(item, index) in propsData" :key="index">
        <td>{{ item.parame }}</td><td>{{ item.description }}</td><td>{{ item.type }}</td><td>{{ item.optionalValue }}</td><td>{{ item.default }}</td>
      </tr>
    </table>
    <!-- 事件介绍 -->
    <h2 class="title marginBootom20">Events</h2>
    <table class="marginBootom50">
      <tr>
        <th>事件名称</th><th>说明</th><th>回调参数</th>
      </tr>
      <tr v-for="(item, index) in eventsData" :key="index">
        <td>{{ item.name }}</td><td>{{ item.description }}</td><td>{{ item.parame }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref
} from 'vue'

export default defineComponent({
  setup () {
    // 变量
    const active0 = ref(0)
    const demo0 = reactive({ cliked: false })
    const active1 = ref(0)
    const demo1 = reactive({ cliked: false })
    const propsData = ref([
      { parame: 'type', description: '按钮类型', type: 'String', optionalValue: 'run/loading', default: 'run' },
      { parame: 'text', description: '按钮文本', type: 'String', optionalValue: '-', default: 'Run' },
      { parame: 'ingText', description: '奔跑按钮奔跑时的文本', type: 'String', optionalValue: '-', default: 'Ing' },
      { parame: 'active', description: '按钮状态', type: 'Number', optionalValue: '0/1/2', default: '0' },
      { parame: 'bgColor', description: '按钮背景颜色', type: 'String', optionalValue: '-', default: '#ff69b4' },
      { parame: 'bgColor_active', description: '按钮点击后的背景颜色', type: 'String', optionalValue: '-', default: '#1e90ff' },
      { parame: 'color', description: '按钮文本颜色', type: 'String', optionalValue: '-', default: '#ffffff' },
      { parame: 'width', description: '按钮宽度(仅限等待按钮)', type: 'String', optionalValue: '-', default: '125px' },
      { parame: 'height', description: '按钮高度', type: 'String', optionalValue: '-', default: '35px' },
      { parame: 'fontSize', description: '按钮文本大小', type: 'String', optionalValue: '-', default: '14px' }
    ])
    const eventsData = ref([
      { name: 'click', description: '按钮点击事件', parame: '-' }
    ])

    // 代码展开/隐藏
    const lookDemo = (demo: any): void => {
      demo.cliked = !demo.cliked
    }

    // 按钮点击效果
    const test = (): void => {
      active0.value = 1
      setTimeout(() => {
        active0.value = 0
      }, 2000)
    }

    const test1 = (): void => {
      active1.value = 1
      setTimeout(() => {
        active1.value = 2
        setTimeout(() => {
          active1.value = 0
        }, 2000)
      }, 2000)
    }

    return {
      // 变量
      active0,
      demo0,
      active1,
      demo1,
      propsData,
      eventsData,
      // 方法
      lookDemo,
      test,
      test1
    }
  }
})
</script>

<style scoped lang="scss">
</style>
