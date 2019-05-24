<template>
  <article class="search_cont">
    <preloader :load="loading"/>
    <page-title :title="query">
      <slot>검색결과</slot>
    </page-title>
    <news-list :articles="searchResult.articles"></news-list>
  </article>
</template>
<script>
import { mapGetters } from 'vuex'
import { NewsList, Preloader, PageTitle } from '@/components'
export default {
  components: {
    NewsList,
    Preloader,
    PageTitle
  },
  computed: mapGetters({
    query: 'getSearchQuery',
    searchResult: 'news/getSearchResult'
  }),
  data() {
    return {
      loading: false
    }
  },
  created() {
    if (this.query) {
      this.$store
        .dispatch('news/getSearchResult', this.query)
        .then(() => (this.loading = true))
    } else {
      this.$router.push(`/`)
    }
  }
}
</script>

<style lang="scss" scoped>
.tit_page {
  font-weight: normal;
}
.search_cont {
  padding-top: 45px;
  position: relative;
}
</style>
