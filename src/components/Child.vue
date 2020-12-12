<template>
  <div>
    Child: {{msg}}
    <button @click="handleClick">子改父</button>
  </div>
</template>

<script>
export default {
  name: 'Child',

  data () {
    return {
      msg: 'Hello World'
    }
  },

  methods: {
    changeData() {
      this.msg = '~~~~~';
    },
    handleClick() {
      // 可以拿到父亲的数据，就可以拿到父亲的方法，不再演示了
      this.$parent.msg = '~~~~~~~~~~~~';
    }
  }
}
</script>

<style lang='less' scoped>

</style>
