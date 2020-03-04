<template>
  <div class="toast" :class="type ? `toast--${type}` : ''">
    <p>{{content}}</p>
  </div>
</template>

<script>
  export default {
    name: "PToast",

    data() {
      return {
        type: '',
        content: '',
        duration: 2500
      };
    },

    mounted() {
      setTimeout(() => {
        // 3s 后通过父级移除子元素的方式来移除该组件
        this.$el.parentNode.removeChild(this.$el);
      }, this.duration);
    }
  };
</script>

<style lang="scss" scoped>
  .toast {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    z-index: 9999;
    background: transparent;
    > p {
      padding: 12px 22px;
      font-size: 18px;
      border-radius: 4px;
      background: rgba(17, 17, 17, 0.8);
    }
    &--error p { background: rgba(244, 67, 54, 0.9); }
    &--success p { background: rgba(76, 175, 80, 0.9); }
  }
</style>