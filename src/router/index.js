import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Delivery from '../views/about/Delivery.vue'
import History from '../views/about/History.vue'
import OrderingGuide from '../views/about/OrderingGuide.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      'orderingGuide': OrderingGuide,
      'delivery': Delivery,
      'history': History
    }
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about/About.vue'),
    redirect: '/about/contact',
    children: [
      {
        path: 'history',
        name: 'History',
        component: () => import('../views/about/History.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('../views/about/Contact.vue'),
      },
      {
        path: 'orderingGuide',
        name: 'OrderingGuide',
        component: () => import('../views/about/OrderingGuide.vue'),
      },
      {
        path: 'delivery',
        name: 'Delivery',
        component: () => import('../views/about/Delivery.vue'),
      },
      {
        path: '*',
        redirect: { name: 'Contact' }
      },
    ]
  },
  {
    path: '*',
    name: 'None',
    redirect: { name: 'Home' }
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// router.beforeEach((to, from, next) => {
//   if (to.name === 'Login' || to.name === 'Register') {
//     next()
//   } else {
//     alert('还没有登录，请先登录！')
//     next({name: 'Login'})
//   }
// })

export default router
