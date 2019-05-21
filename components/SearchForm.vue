<template>
  <!-- <div class="search_form" v-bind:class="{on:searchState}"> -->
  <div class="search_form">
    <input type="text" class="inp_search" v-model="searchQuery" placeholder="Search...">
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
      this.$store.commit('setSearchQuery', this.searchQuery)
      this.$router.push('/search')
    }
  }
}
</script>
