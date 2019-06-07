<template>
  <div id="app" v-bind:class="{view_search:searchState}">
    <app-header/>
    <nuxt/>
    <app-footer/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import AppHeader from './_AppHeader'
import AppFooter from './_AppFooter'

export default {
  components: { AppHeader, AppFooter },
  computed: mapGetters({
    searchState: 'getSearchState'
  })
}
</script>
