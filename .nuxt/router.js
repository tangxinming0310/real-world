import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d77c82bc = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _7de23657 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _3e9cdcf1 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _37ff959e = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _2d46819b = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _ef1a3636 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _6a6b0f04 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _d77c82bc,
    children: [{
      path: "",
      component: _7de23657,
      name: "home"
    }, {
      path: "/login",
      component: _3e9cdcf1,
      name: "login"
    }, {
      path: "/register",
      component: _3e9cdcf1,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _37ff959e,
      name: "profile"
    }, {
      path: "/settings",
      component: _2d46819b,
      name: "settings"
    }, {
      path: "/editor",
      component: _ef1a3636,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _6a6b0f04,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
