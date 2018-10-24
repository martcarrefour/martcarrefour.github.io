import Vue from 'vue'
import CurrConv from './CurrencyConversion.vue'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueResource)



new Vue({
  el: '#app',
  render: h => h(CurrConv),
  data:{

  }
})


