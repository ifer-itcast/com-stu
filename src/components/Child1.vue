<template>
  <div>
    Child1
    <child2/>
  </div>
</template>

<script>
import Child2 from './Child2'
export default {
  name: 'Child1',
  components: {
    Child2
  },
  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='less' scoped>

</style>
