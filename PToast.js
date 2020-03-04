import Vue from "vue"; // 引入 Vue 是因为要用到 Vue.extend() 这个方法
import PToast from "./PToast.vue"; // 引入刚才的 toast 组件

let ToastConstructor = Vue.extend(PToast); // 这个在前面的前置知识内容里面有讲到
let instance;

const pToast = function(options={}) {
  instance = new ToastConstructor({
    data: options // 这里的 data 会传到 main.vue 组件中的 data 中，当然也可以写在 props 里
  });
  document.body.appendChild(instance.$mount().$el);
};

// 以下就是在 Toast 函数中拓展 ["success", "error"] 这两个方法
["success", "error"].forEach(type => {
  pToast[type] = options => {
    options.type = type;
    return pToast(options);
  };
});

export default pToast;