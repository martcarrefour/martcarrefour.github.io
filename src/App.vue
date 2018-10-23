<template lang="pug">
  #rates
    input(type="text" v-model= "mess")
    p {{mess}}
    select( v-model="rates")
      option(v-for="(rate, index) in rates" :value="rate" :key="index") {{index}}
    input(type="text" v-model="firstRate")
    select( v-model="rates")
      option(v-for="(rate, index) in rates" :value="rate" :key="index") {{index}}
    input(type="text" v-model="secondRate")

</template>
