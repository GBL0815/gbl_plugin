import LLBtn from './LLBtn.vue'

const install = (app: any): void => {
  app.component(LLBtn.name, LLBtn)
}

export default {
  install,
  LLBtn
}
