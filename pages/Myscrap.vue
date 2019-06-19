<template>
  <article class="common_cont">
    <!-- <preloader :load="loading"/> -->
    <page-title>
      <slot>나의 스크랩</slot>
    </page-title>
    <news-list :articles="scrapList" :scrap="false"/>
  </article>
</template>

<script>
import { PageTitle, NewsList, Preloader } from '@/components'
import { mapActions, mapGetters } from 'vuex'
import { convertDate } from '@/utils'
export default {
  components: {
    Preloader,
    PageTitle,
    NewsList
  },
  computed: mapGetters({
    scrapList: 'getScrap'
  }),
  data() {
    return {
      convertDate,
      loading: false
    }
  },
  created() {
    this.getScrap()
  },
  methods: {
    ...mapActions({ getScrap: 'getScrapList' })
  }
}
</script>

<style lang="scss" scoped>
</style>
