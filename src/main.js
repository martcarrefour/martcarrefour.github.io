import Vue from 'vue'
import CurrConv from './CurrencyConversion.vue'
import VueResource from 'vue-resource'
import Vue2Filters from 'vue2-filters'
 
Vue.use(Vue2Filters)


Vue.use(VueResource)



new Vue({
  el: '#app',
  render: h => h(CurrConv),
  data:{

  }
})


