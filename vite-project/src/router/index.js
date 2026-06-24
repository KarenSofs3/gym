import { createRouter, createWebHashHistory } from 'vue-router'
import Mainlayout from '../layout/Mainlayout.vue'
import Portada from '../views/portada.vue'
import Brazo from '../views/brazo.vue'
import Pecho from '../views/pecho.vue'
import Pierna from '../views/pierna.vue'
import Espalda from '../views/espalda.vue'

const routes = [
  {
    path: '/',
    component: Mainlayout,
    children: [
      { path: '', name: 'portada', component: Portada },
      { path: 'brazos', name: 'brazos', component: Brazo },
      { path: 'pecho', name: 'pecho', component: Pecho },
      { path: 'piernas', name: 'piernas', component: Pierna },
      { path: 'espalda', name: 'espalda', component: Espalda },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
