// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import LayoutHeader from './components/layout/Header'
import LayoutSidebar from './components/layout/Sidebar'
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/feathericon.min.css'
import './assets/css/font-awesome.min.css'
require('./assets/css/style.css');
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
Vue.config.productionTip = false
Vue.component('layout-header', LayoutHeader);
Vue.component('layout-sidebar', LayoutSidebar);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
