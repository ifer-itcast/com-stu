<template>
  <div>
    Child2: {{username}}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Child2',

  data () {
    return {
    }
  },
  computed: {
    ...mapState(['username'])
  },

  methods: {}
}
</script>

<style lang='less' scoped>

</style>
