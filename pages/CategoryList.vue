<template>
  <ul class="list_category">
    <li
      v-for="cate in CATEGORY"
      :key="cate.en"
      v-bind:id="cate.en"
      @click="currentCategory(cate.en)"
    >
      <nuxt-link
        v-bind:to="{ name: 'category-category' , params: { category: cate.en }}"
        class="link_item"
      >
        <span class="tit_cate">
          {{cate.en}}
          <span class="name_ko">{{cate.ko}}</span>
        </span>
        <picture class="bg_category">
          <img :src="cate.bgImg">
        </picture>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
import { CATEGORY } from '@/utils/constants'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      CATEGORY
    }
  },
  methods: {
    ...mapMutations({ currentCategory: 'news/currentCategory' })
  }
}
</script>
<style lang="scss">
.list_category li {
  @for $i from 1 through 6 {
    &:nth-child(#{$i}) {
      animation-delay: #{$i * 0.2}s;
    }
  }
  animation-duration: 0.8s;
  animation-name: flip;
  animation-fill-mode: forwards;
}
@keyframes flip {
  to {
    opacity: 1;
    transform: rotateX(0);
  }
}
</style>
