<template>
  <div>
    Child3: {{info.age}}
  </div>
</template>

<script>
export default {
  name: 'Child3',

  data () {
    return {
    }
  },
  // 拿过来
  inject: ['info'],

  methods: {}
}
</script>

<style lang='less' scoped>

</style>
