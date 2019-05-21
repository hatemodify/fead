<template>
  <article class="search_cont">
    <h3 class="tit_search">'{{query}}' 검색결과</h3>
    <news-list :articles="searchResult.articles"></news-list>
  </article>
</template>
<script>
import { mapGetters } from 'vuex'
import { NewsList } from '@/components'
export default {
  components: {
    NewsList
  },
  computed: mapGetters({
    query: 'getSearchQuery',
    searchResult: 'news/getSearchResult'
  }),
  created() {
    this.$store
      .dispatch('news/getSearchResult', this.query)
      .then(() => (this.loading = true))
  }
}
</script>
