<template>
  <div class="index">
    <!-- 支持 -->
    <h2>支持</h2>
    <h3 class="tab">支持的框架</h3>
    <p>目前只支持vue3.X版本(什么！你还没有上手vue3?不如搜一搜<a href="https://www.npmjs.com/package/gbl_cli">gbl_cli</a>给我加个下载量吧。)</p>
    <!-- 安装 -->
    <h2 class="title">安装</h2>
    <h3 class="tab">npm / yarn 安装</h3>
    <p>可使用npm或yarn的方式进行安装</p>
    <code class="code">npm install gbl_plugin</code>
    <code class="code">yarn add gbl_plugin</code>
    <!-- 引入 -->
    <h2 class="title">引入gbl_plugin</h2>
    <h3 class="tab">全部引入</h3>
    <p>在main.js中添加以下内容</p>
    <code class="code">
      <div class="line">
        <span class="keyword">import</span>
        LLUI
        <span class="keyword">from </span>
        <span class="string">'gbl_plugin'</span>
      </div>
      <div class="line">
        <span class="keyword">import </span>
        <span class="string">'gbl_plugin/lib/gbl_plugin.css'</span>
      </div>
      <div class="line">
        <span>app.</span>
        <span class="function">use</span>
        <span class="punctuation">(</span>
        <span>LLUI</span>
        <span class="punctuation">)</span>
      </div>
    </code>
    <h3 class="tab">按需引入</h3>
    <p>在main.js中添加以下内容</p>
    <code class="code">
      <div class="line">
        <span class="keyword">import </span>
        <span class="punctuation">{ </span>
        LLBtn
        <span class="punctuation">} </span>
        <span class="keyword">from </span>
        <span class="string">'gbl_plugin'</span>
      </div>
      <div class="line">
        <span class="keyword">import </span>
        <span class="string">'gbl_plugin/lib/gbl_plugin.css'</span>
      </div>
      <div class="line">
        <span>app.</span>
        <span class="function">use</span>
        <span class="punctuation">(</span>
        <span>LLBtn</span>
        <span class="punctuation">)</span>
      </div>
    </code>
    <p style="margin-top: 20px;">或在vue文件中添加以下内容</p>
    <code class="code" style="margin-bottom: 50px">
      <div class="line">
        <span class="keyword">import </span>
        <span class="punctuation">{ </span>
        LLBtn
        <span class="punctuation">} </span>
        <span class="keyword">from </span>
        <span class="string">'gbl_plugin'</span>
      </div>
      <div class="line">
        <span class="keyword">import </span>
        <span class="string">'gbl_plugin/lib/gbl_plugin.css'</span>
      </div>
      <div class="line">
        components:
        <span class="punctuation">{ </span>
        LLBtn
        <span class="punctuation">}</span>
      </div>
    </code>
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
</style>
