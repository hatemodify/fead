<template>
  <picture class="wrap_thumb">
    <img :src="imgSource || errImg" class="thumb_img" alt @error="errImg">
  </picture>
</template>
<script>
import { errImg } from '@/utils'
export default {
  name: 'NewsThumb',
  props: {
    imgSource: String
  },
  data() {
    return {
      errImg
    }
  }
}
</script>
