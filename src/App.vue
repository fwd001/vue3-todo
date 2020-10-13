<template>
<h1>ToDo</h1>
  <Header 
    v-bind:add="add"></Header>
  <List 
    v-bind:del="del" 
    v-bind:sw="sw" 
    v-bind:list="state.list"></List>
  <Footer 
    v-bind:clear="clear" 
    v-bind:list="state.list"></Footer>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import { reactive } from "vue";

export default {
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },
  setup() {
    // 状态
    const state = reactive({
      list: [
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
      ],
    });
    // 添加todo
    let add = (item) => {
      const id =
        state.list.length === 0 ? 0 : state.list[state.list.length - 1].id + 1;
      state.list.push({
        id: id,
        content: item.content,
        isComplete: false,
      });
    };
    // 删除
    let del = (id) => {
      state.list = state.list.filter(v => v.id !== id)
    };
    // 切换状态
    let sw = (id) => {
      const item = state.list.find(v => v.id === id)
      item.isComplete = !item.isComplete
    };
    // 清除
    let clear = () => {
      state.list = state.list.filter(v => v.isComplete !== true)
    }
    return { state, add, del, sw, clear };
  },
};
</script>
