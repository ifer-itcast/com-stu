<template>
  <div>
    Child2
    <button @click="handleClick">改变爷爷的数据</button>
  </div>
</template>

<script>
export default {
  name: 'Child2',

  data () {
    return {
    }
  },
  methods: {
    handleClick() {
      // 第一种触发的方式
      // this.$listeners.test1('~~~~~~~~')
      // 第二种触发的方式
      this.$emit('test1', '~~~~~~~~');
    }
  },
  mounted() {
    
  }
}
</script>

<style lang='less' scoped>

</style>
