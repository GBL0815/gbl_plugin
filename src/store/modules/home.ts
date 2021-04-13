import { State, IndexList } from '@/assets/js/interface'

const home = {
  state: {
    navList: [
      {
        title: '通用',
        children: [
          { title: 'LLRunBtn 奔跑按钮', route: '/LLRunBtn', choosed: false },
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
