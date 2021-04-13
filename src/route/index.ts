import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import universal from './universal'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: (): unknown => import('@/views/Home.vue'),
    children: [
      ...universal,
      {
        path: 'money',
        name: 'money',
        component: (): unknown => import('@/views/money.vue')
      },
      {
        path: 'none',
        name: 'none',
        component: (): unknown => import('@/views/none.vue')
      }
    ]
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
