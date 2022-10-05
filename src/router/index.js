import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/SessionView.vue'
import ListView from '../views/ListView.vue'
import IndexView from '../views/IndexView.vue'

const routes = [

  {
    path: '/',
    name: 'index',
    component: IndexView,
    props:true
  },

  {
    path: '/login',
    name: 'login',
    component: IndexView,
    props:true
    
  },
  {
    path: '/list',
    name: 'list',
    component: ListView,
    props:true
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router