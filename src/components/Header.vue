<template>
  <input type="text" v-model="content" v-on:keyup.enter="addItme" />
</template>

<script>
import { ref } from "vue";
export default {
  name: "Header",
  props: {
    add: Function,
  },
  data() {
    return {
      content: '',
    }
  },
  methods: {
    addItme() {
      if (!this.content) return
      this.add({ content: this.content });
      this.content = "";
    }
  }
};
</script>
