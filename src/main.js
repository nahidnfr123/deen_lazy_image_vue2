import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import deenLazyImage from "./index";

Vue.use(deenLazyImage)

new Vue({
  render: h => h(App),
}).$mount('#app')
