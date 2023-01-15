import { createRouter, createWebHistory} from 'vue-router'

const routes = [
  {path: '', name: 'welcome', component: () => import('../views/Welcome.vue')},
  {path: '', name: 'board', component: () => import('../views/Board.vue')},
  {path: '', name: 'squad', component: () => import('../views/Squad.vue')},
  {path: '', name: 'user', component: () => import('../views/User.vue')},
  {path: '', name: 'project', component: () => import('../views/Project.vue')},
  {path: '', name: 'icons', component: () => import('../views/Icons.vue')},
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router