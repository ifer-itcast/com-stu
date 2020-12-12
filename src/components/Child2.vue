<template>
  <div>
    Child2: {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Child2',
  props: ['msg'],
  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='less' scoped>

</style>
