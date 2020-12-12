<template>
  <div>
    Child2
    <child3/>
  </div>
</template>

<script>
import Child3 from './Child3';
export default {
  name: 'Child2',
  components: {
    Child3
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
