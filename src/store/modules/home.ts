import { State, IndexList } from '@/assets/js/interface'

const home = {
  state: {
    navList: [
      {
        title: '通用',
        children: [
          { title: 'LLBtn 按钮', route: '/LLBtn', choosed: false },
          { title: 'LLCountTo 数字翻牌器', route: '/LLCountTo', choosed: false },
          { title: '一滴都没有了', route: '/none', choosed: false }
        ]
      }
    ]
  },
  getters: {},
  mutations: {
    choosed (state: State, indexList: IndexList): void {
      for (const item of state.navList) {
        for (const child of item.children) {
          child.choosed = false
        }
      }
      if (indexList.index0 !== -1 && indexList.index1 !== -1) {
        state.navList[indexList.index0].children[indexList.index1].choosed = true
      }
    }
  },
  actions: {}
}

export default home
