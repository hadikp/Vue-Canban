import { createRouter, createWebHistory} from 'vue-router'

const routes = [
  {path: '/welcome', name: 'welcome', component: () => import('../views/Welcome.vue')},
  {path: '/board', name: 'board', component: () => import('../views/Board.vue')},
  {path: '/squad/:id?', name: 'squad',  props: true, component: () => import('../views/Squad.vue')},
  {path: '/user', name: 'user', component: () => import('../views/User.vue')},
  {path: '/project', name: 'project', component: () => import('../views/Project.vue')},
  {path: '/icons', name: 'icons', component: () => import('../views/Icons.vue')},
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router