import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import SessionView from  '../components/SessionView.vue'
import ListView from '../components/ListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/session',
    name: 'session',
    component: SessionView,
  },
  {
    path: '/list_view',
    name: 'list_view',
    component: ListView,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
