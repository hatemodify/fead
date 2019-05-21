<template>
  <div class="search_form" v-bind:class="{on:searchState}">
    <input type="text" class="inp_search" v-model="searchQuery" @keyup.enter="getSearchQuery" placeholder="Search..." >
    <button class="btn_search" @click="getSearchQuery" ></button>
  </div>
</template>

<script>
import { mapMutations , mapGetters } from 'vuex'
export default {
  data() {
    return {
      searchQuery: '',
    }
  },
  computed: mapGetters({
    searchState: 'getSearchState.isOpen',
  }),
  methods: {
    getSearchQuery() {
      console.log(this.searchState)
      const query = this.searchQuery
      const isOpen = false
      this.$store.commit('setSearchState', {query, isOpen})
      this.$router.push('/search')
    }
  }
}
</script>
