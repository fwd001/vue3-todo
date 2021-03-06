<template>
  <ul class="list-ul">
    <li v-for="item in list" :key="item.id" class="list">
      <span @click="onSwitch(item.id)" :title="item.content" :class="['content', { isComplete: item.isComplete }]">{{
        item.content
      }}</span>
      <button @click="onSwitch(item.id)">切换</button>
      <button @click="onDel(item.id)">删除</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    list: Array,
    del: Function,
    sw: Function,
  },
  created() {},
  methods: {
    onDel(id) {
      this.del(id);
    },
    onSwitch(id) {
      this.sw(id);
    },
  },
};
</script>

<style>
.list-ul {
  margin-bottom: 8px;
}
.isComplete {
  text-decoration: line-through;
}
.list {
  display: flex;
  background-color: #eee;
  border-bottom: 1px solid #fff;
}
.content {
  flex: 1;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 8px;
  padding-right: 8px;
}
</style>
