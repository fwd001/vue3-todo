import { reactive } from "vue";

export default (initialVal = []) => {
  // 状态
  const state = reactive({
    list: initialVal,
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
    const user = {
      name: null,
      age: undefined,
      gender: '男',
      height: '',
    }
  };
  // 删除
  let del = (id) => {
    state.list = state.list.filter((v) => v.id !== id);
  };
  // 切换状态
  let sw = (id) => {
    const item = state.list.find((v) => v.id === id);
    item.isComplete = !item.isComplete;
  };
  // 清除
  let clear = () => {
    state.list = state.list.filter((v) => v.isComplete !== true);
  };
  return { state, add, del, sw, clear };
};
