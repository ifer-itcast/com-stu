<template>
  <div>
    Child2: {{$attrs.age}}
  </div>
</template>

<script>
export default {
  name: 'Child2',

  data () {
    return {
    }
  },
  inheritAttrs: false,
  methods: {},
  mounted() {
    console.log(this.$attrs)
  }
}
</script>

<style lang='less' scoped>

</style>
