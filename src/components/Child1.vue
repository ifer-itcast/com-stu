<template>
  <div>
    Child1
    <button @click="handleClick">修改 Child1 的数据</button>
  </div>
</template>

<script>
// 想在 Child1 里面修改 Child2 里面的数据
export default {
  name: 'Child1',

  data () {
    return {
    }
  },

  methods: {
    handleClick() {
      this.$emit('changeData', '~~~~')
    }
  }
}
</script>

<style lang='less' scoped>

</style>
