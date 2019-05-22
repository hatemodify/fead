<template>
  <h2 class="tit_page" ref="tit">{{title}}<slot></slot></h2>
</template>

<script>
export default {
  props: {
    title: String
  },

  mounted() {
    window.addEventListener('scroll', this.animateTit)
  },
  destroyed() {
    window.removeEventListener('scroll', this.animateTit)
  },
  methods: {
    animateTit() {
      const windowHeight = window.outerHeight
      const tit = this.$refs.tit
      const titOffest = tit.offsetTop
      const scrollTop = window.scrollY
      scrollTop > titOffest
        ? tit.classList.add('sticky')
        : tit.classList.remove('sticky')
    }
  }
}
</script>
<style lang="scss" scoped>
.tit_page {
  font-size: 18px;
  position: absolute;
  top: 10px;
  left: 14px;
  text-transform: capitalize;
  font-weight: bold;
  transition: 1s color;
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
