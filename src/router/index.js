import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/pages/Users'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: 'template',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Users
    }
  ],
  linkActiveClass: "active",
})
export default router
