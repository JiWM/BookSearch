import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Appheader: () => import('../..\\components\\appheader.vue' /* webpackChunkName: "components/appheader" */).then(c => wrapFunctional(c.default || c)),
  Bookdetail: () => import('../..\\components\\bookdetail.vue' /* webpackChunkName: "components/bookdetail" */).then(c => wrapFunctional(c.default || c)),
  Booklist: () => import('../..\\components\\booklist.vue' /* webpackChunkName: "components/booklist" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Modal: () => import('../..\\components\\modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c)),
  Searchbar: () => import('../..\\components\\searchbar.vue' /* webpackChunkName: "components/searchbar" */).then(c => wrapFunctional(c.default || c)),
  Sidebar: () => import('../..\\components\\sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c)),
  VueInstantSearch: () => import('../..\\components\\vue-instant-search.vue' /* webpackChunkName: "components/vue-instant-search" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
