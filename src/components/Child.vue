<template>
  <div>
    Child
    <button @click="handleChangeMsg">修改父亲的数据</button>
  </div>
</template>

<script>
export default {
  name: 'Child',

  data () {
    return {
    }
  },

  methods: {
    handleChangeMsg() {
      this.$emit('changeMsg', '~~~~~~');
    }
  }
}
</script>

<style lang='less' scoped>

</style>
