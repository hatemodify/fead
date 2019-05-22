<template>
  <div id="app" v-bind:class="{view_search:searchState}">
    <app-header/>
    <nuxt/>
    <app-footer/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

export default {
  components: { AppHeader, AppFooter },
  computed: mapGetters({
    searchState: 'getSearchState'
  })
}
</script>
