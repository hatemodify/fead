<template>
  <div class="search_form">
    <input
      type="text"
      class="inp_search"
      v-model="searchQuery"
      @keyup.enter="getSearchQuery"
      placeholder="Search..."
    >
    <button class="btn_search" @click="getSearchQuery"></button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    getSearchQuery() {
      const searchQuery = this.searchQuery
      const searchState = false
      this.$store.commit('setSearchState', { searchQuery })
      this.$store.commit('setSearchState', { searchState })
      this.$router.push('/search')
    }
  }
}
</script>
