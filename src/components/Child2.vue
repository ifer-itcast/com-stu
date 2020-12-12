<template>
  <div>
    Child2: {{msg}}
  </div>
</template>

<script>
import { hub } from '@/main'
export default {
  name: 'Child2',

  data () {
    return {
      msg: 'Hello World'
    }
  },

  methods: {},
  mounted() {
    // 准备一个事件监听
    // hub.$on('changeData', (child1Data) => {
    //   this.msg = child1Data
    // });
    this.$hub.$on('changeData', (child1Data) => {
      this.msg = child1Data
    });
  }
}
</script>

<style lang='less' scoped>

</style>
