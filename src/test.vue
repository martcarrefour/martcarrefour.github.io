
<script>
export default {
  data () {
    return {
      mess: 'Welcome to Your Vue.js App',
      rates: none,
      ratesDate: 'ddd',
      ratesBase: none,
      endpoint: 'https://api.exchangeratesapi.io/latest?base=USD'
    }
  },
  methods: {
    getRatesInfo: function(){
        this.$http.get(this.endpoint).then(function(response){
          this.rates = response.data
          
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
