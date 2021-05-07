import btn from '~/LLBtn/index'
import CountTo from '~/LLCountTo/index'
import '../public/common.scss'

const components = [
  btn.LLBtn,
  CountTo.LLCountTo
]

const install = (app: any): void => {
  components.map((component) => app.component(component.name, component))
}

export default {
  install
}

export const LLBtn = btn
export const LLCountTo = CountTo
