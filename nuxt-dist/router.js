import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _56697c05 = () => interopDefault(import('..\\pages\\book2.vue' /* webpackChunkName: "pages/book2" */))
const _6975887d = () => interopDefault(import('..\\pages\\bookshelf.vue' /* webpackChunkName: "pages/bookshelf" */))
const _27fbb217 = () => interopDefault(import('..\\pages\\index copy.vue' /* webpackChunkName: "pages/index copy" */))
const _02eb94b3 = () => interopDefault(import('..\\pages\\lalala.vue' /* webpackChunkName: "pages/lalala" */))
const _79c7c905 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _14adee9d = () => interopDefault(import('..\\pages\\myaccount.vue' /* webpackChunkName: "pages/myaccount" */))
const _2828b0da = () => interopDefault(import('..\\pages\\searchlist.vue' /* webpackChunkName: "pages/searchlist" */))
const _0b8b44ac = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _13bd4ee6 = () => interopDefault(import('..\\pages\\book\\_id.vue' /* webpackChunkName: "pages/book/_id" */))
const _9fbfb424 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/book2",
    component: _56697c05,
    name: "book2"
  }, {
    path: "/bookshelf",
    component: _6975887d,
    name: "bookshelf"
  }, {
    path: "/index%20copy",
    component: _27fbb217,
    name: "index copy"
  }, {
    path: "/lalala",
    component: _02eb94b3,
    name: "lalala"
  }, {
    path: "/login",
    component: _79c7c905,
    name: "login"
  }, {
    path: "/myaccount",
    component: _14adee9d,
    name: "myaccount"
  }, {
    path: "/searchlist",
    component: _2828b0da,
    name: "searchlist"
  }, {
    path: "/signup",
    component: _0b8b44ac,
    name: "signup"
  }, {
    path: "/book/:id?",
    component: _13bd4ee6,
    name: "book-id"
  }, {
    path: "/",
    component: _9fbfb424,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
