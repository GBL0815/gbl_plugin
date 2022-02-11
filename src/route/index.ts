import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import universal from './universal'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: (): unknown => import('@/views/Home.vue'),
    redirect: '/index',
    children: [
      ...universal,
      {
        path: 'index',
        name: 'index',
        component: (): unknown => import('@/views/index.vue')
      },
      {
        path: 'money',
        name: 'money',
        component: (): unknown => import('@/views/money.vue')
      },
      {
        path: 'none',
        name: 'none',
        component: (): unknown => import('@/views/none.vue')
      },
      {
        path: 'benben',
        name: 'benben',
        component: (): unknown => import('@/views/Love.vue')
      }
    ]
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
