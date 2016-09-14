import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue';
import InvoiceList from './components/InvoceList.vue';
import NotFound from './components/404.vue';

Vue.use(VueRouter);
const routes = [
  {
    name: 'app',
    path: '/',
    component: Home
  },
  {
    name: 'invoices',
    path: '/invoices',
    component: InvoiceList
  },
  {
    name: 'notfound',
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active router-link-active',
  routes
});

new Vue(Vue.util.extend({
  router,
}, App)).$mount('#app');

router.beforeEach(function (transition, redirect, next) {
  next();
});
router.afterEach(function (transition) {
});