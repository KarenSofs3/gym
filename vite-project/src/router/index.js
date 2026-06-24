import { createRouter, createWebHashHistory } from 'vue-router'
import Mainlayout from '../layout/Mainlayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Mainlayout,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

