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
  created() {
    this.animateTit()
  },
  methods: {
    animateTit() {
      const tit = this.$refs.tit
      const scroll = (() => {
        return () => {
          const titOffest = tit.offsetTop + 40
          const scrollTop = window.scrollY
          scrollTop > 80
            ? tit.classList.add('sticky')
            : tit.classList.remove('sticky')
        }
      })()
      window.addEventListener('scroll', scroll)
    }
  }
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
