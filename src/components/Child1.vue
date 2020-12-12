<template>
  <div>
    Child1
    <button @click="handleChange">change</button>
  </div>
</template>

<script>
// 需求：Child1 修改 Child2 中的数据
export default {
  name: 'Child1',

  data () {
    return {
    }
  },

  methods: {
    handleChange() {
      this.$store.commit('changeUserName', '~~~~~');
    }
  }
}
</script>

<style lang='less' scoped>

</style>
