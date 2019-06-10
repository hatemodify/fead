<template>
  <article class="common_cont">
    <page-title>
      <slot>나의 스크랩</slot>
    </page-title>
  </article>
</template>

<script>
import { PageTitle, NewsList, Preloader } from '@/components'
import { convertDate } from '@/utils'
export default {
  components: {
    Preloader,
    PageTitle,
    NewsList
  },
  data() {
    return {
      convertDate
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
