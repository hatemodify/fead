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
import { convertDate } from '@/utils'
export default {
  components: { AppHeader, AppFooter },
  data() {
    return {
      convertDate
    }
  }
}
</script>
