<template>
  <div>
    Child1
    <child2 v-on="$listeners"/>
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

  methods: {},
  mounted() {
  }
}
</script>

<style lang='less' scoped>

</style>
