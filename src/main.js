// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

  Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id="app">
			<router-view name="top"></router-view>
      <router-view name="head1"></router-view>
      <router-view name="mainNavigation"></router-view>
      <router-view name="mallContent"></router-view>
      <router-view name="bottom"></router-view>
      <router-view name="footer1"></router-view>
	    </div>
  `
}).$mount("#app")
