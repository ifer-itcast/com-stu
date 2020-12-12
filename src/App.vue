<template>
  <div id="app">
    <child1 :username="username" :age="age"/>
    <button @click="changeData">改变数据</button>
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'

export default {
  name: 'App',
  data() {
    return {
      username: 'ifer',
      age: 18
    }
  },
  components: {
    Child1
  },
  methods: {
    changeData() {
      this.username = '~~~~~~~~';
      this.age = '188888888';
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
