<template lang="pug">
  #app.conversBar__wrapper
    .conversBar
      input(type="text" v-model="firstCurrency") 
      select(v-model="firstRate")
        option(v-for="(rate, index) in allRates" :value="rate" :key="index") {{index}}
      
      select( v-model="secondRate")
        option(v-for="(rate, index) in allRates" :value="rate" :key="index") {{index}}
      input(type="text" v-model="secondCurrency") 
</template>



<script>
export default {

  data() {
    return {
      mess: 'Welcome to Your Vue.js App',
      firstCurrency: 0,
      secondCurrency: 0,
      firstRate: 0,
      secondRate: 0,
      allRates: [],
      endpoint: 'https://api.exchangeratesapi.io/latest?base=USD',

    }
  },
  methods: {
    //  firstCurrencyChange: function(){
    //     // return 1+1
    //     this.firstCurrency = parseInt(this.firstCurrency, 10),
    //     this.secondCurrency = parseInt(this.secondCurrency, 10),
    //     this.firstRate = parseInt(this.firstRate, 10),
    //     this.secondtRate = parseInt(this.secondRate, 10),
    //     this.secondRate = (this.firstCurrency / this.firstRate * this.secondRate)
    //     },
    //   secondCurrencyChange: function(){
    //     this.firstCurrency = parseInt(this.firstCurrency, 10),
    //     this.secondCurrency = parseInt(this.secondCurrency, 10),
    //     this.firstRate = parseInt(this.firstRate, 10),
    //     this.secondtRate = parseInt(this.secondRate, 10),
    //     this.firstRate = (this.firstCurrency / this.firstRate * this.firstRate)
    //     },



    getRatesInfo: function(){
        this.$http.get(this.endpoint).then(function(response){
          
          this.allRates = response.data['rates']
        }, function(error){
          //ошибка
        })
      }
    },
    computed:{
      firstCurrencyChange: function(){

        this.firstCurrency = parseInt(this.firstCurrency, 10),
        this.secondCurrency = parseInt(this.secondCurrency, 10),
        this.firstRate = parseInt(this.firstRate, 10),
        this.secondtRate = parseInt(this.secondRate, 10);
        return (this.firstCurrency / this.firstRate * this.secondRate)
        },
    },

    created: function(){
      this.getRatesInfo()
    }
    
  }

</script>

<style lang="stylus">
  .conversBar__wrapper
    font-size 30px
    background-color #1d3444

  .conversBar
    margin 0 auto
    padding-top 100px
    padding-bottom 100px
    width 700px
    text-align center
    background-color #135684
    
  
  input 
    width 100px
    max-with 100px

</style>



