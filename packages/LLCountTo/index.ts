import LLCountTo from './LLCountTo.vue'

const install = (app: any): void => {
  app.component(LLCountTo.name, LLCountTo)
}

export default {
  install,
  LLCountTo
}
