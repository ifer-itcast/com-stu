<template>
  <div id="app">
    {{msg}}
    <child1 @test1="test1" @test2="test2"/>
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'

export default {
  name: 'App',
  data() {
    return {
      msg: 'H'
    }
  },
  components: {
    Child1
  },
  methods: {
   test1(msg) {
     this.msg = msg;
   },
   test2() {
     console.log('test2');
   }
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
