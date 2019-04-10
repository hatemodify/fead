<template>
  <div id="app">
    <app-header/>
    <nuxt/>
    <app-footer/>
  </div>
</template>
<script>
import appHeader from './appHeader'
import appFooter from './appFooter'
import { convertDate, erroImg } from '@/utils'
export default {
  components: { appHeader, appFooter },
  data() {
    return {
      convertDate,
      erroImg
    }
  }
}
</script>
