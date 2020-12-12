<template>
  <div id="app">
    {{msg}}
    <child @changeMsg="changeMsg"/>
  </div>
</template>

<script>
import Child from '@/components/Child';
export default {
  name: 'App',
  data() {
    return {
      msg: "父亲的 Hello World"
    }
  },
  components: {
    Child
  },
  methods: {
    changeMsg(childData) {
      this.msg = childData;
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
