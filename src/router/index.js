import Vue from 'vue'
import VueRouter from 'vue-router'
import USUARIO from '../views/USUARIO.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'USUARIO',
    component: USUARIO
  },
  
]

const router = new VueRouter({
  routes
})

export default router
