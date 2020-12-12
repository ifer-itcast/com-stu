<template>
  <div>
    Child: {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    msg: {
      type: String
    }
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
