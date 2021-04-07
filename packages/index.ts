import { createApp } from 'vue'
import LLRunBtn from '~/LLRunBtn/index'
import '../public/common.scss'

const app = createApp({})

const components = [
  LLRunBtn
]

// eslint-disable-next-line
const install = (app: any): void => {
  components.map(component => app.component(component.name, component))
}

if (typeof window !== 'undefined' && app) {
  install(app)
}

export default {
  // 导出的对象必须具有install，才能被.use()方法安装
  install,
  // 组件列表
  LLRunBtn
}
