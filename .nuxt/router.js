import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _73216f38 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _052dec46 = () => interopDefault(import('../pages/blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _4de1539c = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _73216f38,
    name: "index___ar"
  }, {
    path: "/blank-page",
    component: _052dec46,
    name: "blank-page___en"
  }, {
    path: "/contact",
    component: _4de1539c,
    name: "contact___en"
  }, {
    path: "/de",
    component: _73216f38,
    name: "index___de"
  }, {
    path: "/id",
    component: _73216f38,
    name: "index___id"
  }, {
    path: "/pt",
    component: _73216f38,
    name: "index___pt"
  }, {
    path: "/zh",
    component: _73216f38,
    name: "index___zh"
  }, {
    path: "/ar/blank-page",
    component: _052dec46,
    name: "blank-page___ar"
  }, {
    path: "/ar/contact",
    component: _4de1539c,
    name: "contact___ar"
  }, {
    path: "/de/blank-page",
    component: _052dec46,
    name: "blank-page___de"
  }, {
    path: "/de/contact",
    component: _4de1539c,
    name: "contact___de"
  }, {
    path: "/id/blank-page",
    component: _052dec46,
    name: "blank-page___id"
  }, {
    path: "/id/contact",
    component: _4de1539c,
    name: "contact___id"
  }, {
    path: "/pt/blank-page",
    component: _052dec46,
    name: "blank-page___pt"
  }, {
    path: "/pt/contact",
    component: _4de1539c,
    name: "contact___pt"
  }, {
    path: "/zh/blank-page",
    component: _052dec46,
    name: "blank-page___zh"
  }, {
    path: "/zh/contact",
    component: _4de1539c,
    name: "contact___zh"
  }, {
    path: "/",
    component: _73216f38,
    name: "index___en"
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
