<template>
  <h2 class="tit_page" ref="tit">{{title}}</h2>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style lang="scss">
.tit_page {
  font-size: 18px;
  position: absolute;
  top: 10px;
  left: 14px;
  text-transform: capitalize;
  font-weight: bold;
  transition: cubic-bezier(0.23, 1, 0.32, 1) 1s;
  z-index: 30;
  &.sticky {
    position: fixed;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    color: #fff;
    line-height: 60px;
  }
}
</style>
