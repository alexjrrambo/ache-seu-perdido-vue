import Vue from 'vue'
import VueRouter from 'vue-router'
import Panel from '../views/Panel.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  // eslint-disable-next-line
	return originalPush.call(this, location).catch(err => {})
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'panel',
    component: Panel,
    children: [
      {
        name: 'dashboard',
        path: '/',
        meta: {
          label: 'Dashboard'
        },
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
      },
      {
        name: 'results',
        path: 'results',
        meta: {
          label: 'Resultados'
        },
        component: () =>
          import(/* webpackChunkName: "plot" */ '../views/Results.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
