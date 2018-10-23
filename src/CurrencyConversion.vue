<template lang="pug">
  #app
    input(type="text" v-model= "mess")
    p {{mess}}
    select( v-model="rates")
      option(v-for="(rate, index) in rates" :value="rate" :key="index") {{index}}
    input(type="text" v-model="firstRate")
    select( v-model="rates")
      option(v-for="(rate, index) in rates" :value="rate" :key="index") {{index}}
    input(type="text" v-model="secondRate")

</template>



<script>
export default {
  name: 'app',
  data() {
    return {
      mess: 'Welcome to Your Vue.js App',
      rates: {
        "BGN": 1.7039553929,
        "CAD": 1.3109426729,
        "BRL": 3.6950688273,
        "HUF": 281.2423767207,
        "DKK": 6.4996515072,
        "JPY": 112.1798222687,
        "ILS": 3.6666666667,
        "TRY": 5.7699076494,
        "RON": 4.0660393797
        },
      rate: {},  
      endpoint: 'https://api.exchangeratesapi.io/latest?base=USD'
    }
  },
  methods: {
    getRatesInfo: function(){
        this.$http.get(this.endpoint).then(function(response){
          this.rate = response.data
          
        }, function(error){
          //ошибка
        })
      }
    },
    created: function(){
      this.getRatesInfo()
    }
  }

</script>

<style lang="stylus">

</style>



