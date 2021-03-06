<template>
  <h1>ToDo</h1>
  <Header v-bind:add="add"></Header>
  <List v-bind:del="del" v-bind:sw="sw" v-bind:list="state.list"></List>
  <Footer v-bind:clear="clear" v-bind:list="state.list"></Footer>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import useTodo from "./useTodo";

export default {
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },
  setup() {
    // 状态
    const { state, add, del, sw, clear } = useTodo([
      {
        id: 0,
        content: "11",
        isComplete: false,
      },
      {
        id: 1,
        content: "22",
        isComplete: true,
      },
    ]);
    return { state, add, del, sw, clear };
  },
};
</script>
