<template>
  <picture class="wrap_thumb">
    <img :src="imgSource || errImg" @error="errImg" class="thumb_img" alt>
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
