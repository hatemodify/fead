<template>
  <button class="btn_bookmark" :class="{on:bookmark}" @click="addBookmark(newsData)"></button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['newsData'],
  computed: mapGetters({
    loginState: 'getLoginState'
  }),
  data() {
    return {
      bookmark: false
    }
  },
  methods: {
    ...mapActions({ add: 'addBookmark' }),
    addBookmark(payload) {
      if (this.loginState) {
        this.add(payload)
        this.bookmark = !this.bookmark
      } else {
        alert('로그인 해 주세요')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$bg: #fff;
$ribbon-hl: #e74841;
.btn_bookmark {
  position: absolute;
  right: 20px;
  top: -5px;
  width: 24px;
  height: 24px;
  z-index: 1;
  background: $bg;
  box-shadow: 10px 13px 30px rgba(9, 9, 9, 0.3);
  &:before {
    position: absolute;
    border-left: 12px solid transparent;
    border-left: 12px solid transparent;
    border-top: 12px solid $bg;
    transform: rotate(-90deg);
    bottom: -12px;
    left: 0;
    position: absolute;
    width: 0;
    content: '';
  }
  &:after {
    position: absolute;
    border-left: 12px solid transparent;
    border-left: 12px solid transparent;
    border-top: 12px solid $bg;
    bottom: -12px;
    right: 0;
    position: absolute;
    width: 0;
    content: '';
  }
  &.on {
    background: #e74841;
    &:before,
    &:after {
      border-top-color: #e74841;
    }
  }
}
</style>
