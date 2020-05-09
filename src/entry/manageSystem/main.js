import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mountVue from '@/utils/mountVue'
import { openMock, storageConfig, ajaxConfig,store } from './setting.js'
Vue.config.productionTip = false
Vue.use(mountVue, { storageConfig, ajaxConfig })
openMock && require('@/mock')
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
