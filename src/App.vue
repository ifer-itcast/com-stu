<template>
  <div id="app">
    <child1/>
    <button @click="handleClick">改数据</button>
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'

export default {
  name: 'App',
  data() {
    return {
      username: 'ifer',
      info: {
        age: 18
      }
    }
  },
  components: {
    Child1
  },
  // 提供
  /* provide: {
    username: 'ifer'
  } */
  /* provide() {
    return {
      username: this.username
    }
  }, */
  provide() {
    return {
      info: this.info
    }
  },
  methods: {
    handleClick() {
      // this.username = '~~~~~~~';
      this.info.age = '~~~~~~';
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
