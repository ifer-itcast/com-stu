<template>
  <div>
    Child1
    <button @click="handleClick">改变Child2中的数据</button>
  </div>
</template>

<script>
import { hub } from '@/main'
// 需求：在 Child1 里面修改 Child2 中的数据
export default {
  name: 'Child1',

  data () {
    return {
    }
  },

  methods: {
    handleClick() {
      // hub.$emit('changeData', '~~~~');
      this.$hub.$emit('changeData', '~~~~');
    }
  }
}
</script>

<style lang='less' scoped>

</style>
