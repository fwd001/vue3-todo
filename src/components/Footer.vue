<template>
  <ul class="footer-ul">
    <li> --- <button v-on:click="clear">清除</button> --- </li>
    <li>共：{{ list.length }} ---{{ !!false && '有length'}} </li>
    <li>已完成：{{complete}} </li>
  </ul>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    list: Array,
    clear: Function,
  },
  computed: {
    complete() {
      return this.list.filter(v => v.isComplete).length
    },
  }
}
</script>

<style scoped>
.footer-ul {
  display: flex;
}
</style>
