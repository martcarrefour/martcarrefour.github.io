<template lang="pug">
  #app.wrapper
    .form
      input(type="text" v-model="firstCurrency" autofocus) 
      select(v-model="firstRate" class="dropdown")
        option(v-for="(rate, index) in allRates" :value="rate" :key="index" ) {{index}}
      span.row  🡒 
      select( v-model="secondRate" class="dropdown") 
        option(v-for="(rate, index) in allRates" :value="rate" :key="index") {{index}}
      //- input(type="text" v-model="secondCurrency") 
      span.result  = {{firstCurrencyChange | currency('', 2) }}
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

        // this.firstCurrency = parseInt(this.firstCurrency, 10),
        // this.secondCurrency = parseInt(this.secondCurrency, 10),
        // this.firstRate = parseInt(this.firstRate, 10),
        // this.secondtRate = parseInt(this.secondRate, 10);
        return (this.firstCurrency / this.firstRate * this.secondRate)
        },
    },

    created: function(){
      this.getRatesInfo()
    }
    
  }

</script>

<style lang="stylus">
  body
    background-color #edeef0

  .wrapper
    display flex
    flex-direction row
    justify-content center
  .form
    font-size 18px
    font-family Helvetica, sans-serif
    background-color white
    width 60%
    padding 7%
    border-radius 10px
  input 
    font-size 18px
    font-family Helvetica, sans-serif
    margin-right 20px 
    background-color #4a76a8
    color white
    padding 16px
    border none
    cursor pointer
  .dropdown 
    background-color #4a76a8
    color white
    padding 16px
    border none
    cursor pointer


</style>



