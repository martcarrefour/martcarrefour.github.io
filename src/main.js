import Vue from 'vue'
import CurrConv from './CurrencyConversion.vue'
import VueResource from 'vue-resource'




new Vue({
  el: '#app',
  render: h => h(CurrConv),
  data:{
    mess: "lol"
  }
})
