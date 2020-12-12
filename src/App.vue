<template>
  <div id="app">
    <child ref="c"/>
    <button @click="handleClick">change</button>
  </div>
</template>

<script>
// 需求：父改子的数据
import Child from './components/Child.vue'

export default {
  name: 'App',
  components: {
    Child
  },
  methods: {
    handleClick() {
      // 操作数据
      // this.$refs.c.msg = '~~~~~~';
      this.$refs.c.changeData();
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
