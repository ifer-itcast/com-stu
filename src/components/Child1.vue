<template>
  <div>
    Child1
    {{$attrs.username}}
    <child2 v-bind="$attrs"/>
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
  // props: ['username'],

  inheritAttrs: false, // 属性不想在组件的根元素上展示

  methods: {},
  mounted() {
    console.log(this.$attrs);
  }
}
</script>

<style lang='less' scoped>

</style>
