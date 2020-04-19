import Vue from 'vue'
import VueRouter from 'vue-router'
import BookIndex from '../views/book/index.vue'
import BookList from '../views/book/list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/book',
    name: 'Book',
    component: BookIndex,
    children: [
      {
        path: 'list',
        name: 'BookList',
        component: BookList,
        meta: {
          title: 'book列表'
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
