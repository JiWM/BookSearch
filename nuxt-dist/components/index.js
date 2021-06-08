import { wrapFunctional } from './utils'

export { default as Appheader } from '../..\\components\\appheader.vue'
export { default as Bookdetail } from '../..\\components\\bookdetail.vue'
export { default as Booklist } from '../..\\components\\booklist.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Modal } from '../..\\components\\modal.vue'
export { default as Searchbar } from '../..\\components\\searchbar.vue'
export { default as Sidebar } from '../..\\components\\sidebar.vue'
export { default as VueInstantSearch } from '../..\\components\\vue-instant-search.vue'

export const LazyAppheader = import('../..\\components\\appheader.vue' /* webpackChunkName: "components/appheader" */).then(c => wrapFunctional(c.default || c))
export const LazyBookdetail = import('../..\\components\\bookdetail.vue' /* webpackChunkName: "components/bookdetail" */).then(c => wrapFunctional(c.default || c))
export const LazyBooklist = import('../..\\components\\booklist.vue' /* webpackChunkName: "components/booklist" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyModal = import('../..\\components\\modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const LazySearchbar = import('../..\\components\\searchbar.vue' /* webpackChunkName: "components/searchbar" */).then(c => wrapFunctional(c.default || c))
export const LazySidebar = import('../..\\components\\sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazyVueInstantSearch = import('../..\\components\\vue-instant-search.vue' /* webpackChunkName: "components/vue-instant-search" */).then(c => wrapFunctional(c.default || c))
