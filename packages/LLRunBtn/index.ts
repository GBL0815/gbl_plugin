import LLRunBtn from './LLRunBtn.vue'

const install = (app: any): void => {
  app.component(LLRunBtn.name, LLRunBtn)
}

export default {
  install,
  LLRunBtn
}
