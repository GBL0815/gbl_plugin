import RunBtn from '~/LLRunBtn/index'
import CountTo from '~/LLCountTo/index'
import '../public/common.scss'

const components = [
  RunBtn.LLRunBtn,
  CountTo.LLCountTo
]

const install = (app: any): void => {
  components.map((component) => app.component(component.name, component))
}

export default {
  install
}

export const LLRunBtn = RunBtn
export const LLCountTo = CountTo
