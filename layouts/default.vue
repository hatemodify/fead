<template>
  <div id="app" v-bind:class="{view_search:searchState}">
    <app-header/>
    <nuxt/>
    <app-footer/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import appHeader from './appHeader'
import appFooter from './appFooter'

export default {
  components: { appHeader, appFooter },
  computed: mapGetters({
    searchState: 'getSearchState'
  })
}
</script>
