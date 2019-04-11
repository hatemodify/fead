<template>
  <div id="app">
    <app-header/>
    <nuxt/>
    <app-footer/>
  </div>
</template>
<script>
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

export default {
  components: { AppHeader, AppFooter }
}
</script>
