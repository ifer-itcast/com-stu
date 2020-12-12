<template>
  <div id="app">
    Hello
    <child :msg="msg"/>

    <!-- 想改变传递过去的数据，直接在自己的组件里面修改就好啦 -->
    <button @click="msg = 'xxx'">修改</button>
  </div>
</template>

<script>
import Child from '@/components/Child'
export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello World'
    }
  },
  components: {
    Child
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
