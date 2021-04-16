<template>
  <div class="index">
    <!-- 支持 -->
    <h2>支持</h2>
    <h3 class="tab">支持的框架</h3>
    <p>目前只支持vue3.X版本</p>
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
    <h3 class="tab">按需引入(暂不支持)</h3>
    <p>在main.js中添加以下内容</p>
    <code class="code">
      <div class="line">
        <span class="keyword">import </span>
        <span class="punctuation">{ </span>
        LLRunBtn
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
        <span>LLRunBtn</span>
        <span class="punctuation">)</span>
      </div>
    </code>
    <p style="margin-top: 20px;">或在vue文件中添加以下内容</p>
    <code class="code" style="margin-bottom: 50px">
      <div class="line">
        <span class="keyword">import </span>
        <span class="punctuation">{ </span>
        LLRunBtn
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
        LLRunBtn
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
.index {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  color: #5e6d82;
  .title {
    margin-top: 60px;
  }
  .tab {
    margin: 50px 0 20px;
  }
}
</style>
