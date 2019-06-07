<template>
  <picture class="wrap_thumb">
    <img :src="replaceImgSource(imgSource) || errImg" class="thumb_img" alt @error="errImg">
  </picture>
</template>
<script>
import { errImg, replaceImgSource } from '@/utils'
export default {
  name: 'NewsThumb',
  props: {
    imgSource: String
  },
  data() {
    return {
      errImg,
      replaceImgSource
    }
  }
}
</script>
