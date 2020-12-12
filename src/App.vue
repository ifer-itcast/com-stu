<template>
  <div id="app">
    <child1 @changeData="changeData"/>
    <child2 :msg="msg"/>
  </div>
</template>

<script>
import Child1 from '@/components/Child1'
import Child2 from '@/components/Child2'
export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello World'
    };
  },
  components: {
    Child1,
    Child2
  },
  methods: {
    changeData(childData) {
      // 直接修改自己的数据，另一个儿子中的数据自然就变了
      this.msg = childData
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
