<template>
  <div>
    Child: {{msg}}
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
    }
  }
}
</script>

<style lang='less' scoped>

</style>
