import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TemplateOneView from '../views/TemplateOneView.vue'
import TemplateTwoView from '../views/TemplateTwoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/one',
    name: 'one',
    component: TemplateOneView
  },
  {
    path: '/two',
    name: 'two',
    component: TemplateTwoView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
