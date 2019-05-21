<template>
  <div>
    <news-list :articles="searchResult.articles"></news-list>
  </div>
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
