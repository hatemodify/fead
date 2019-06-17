<template>
  <article class="common_cont">
    <page-title>
      <slot>나의 관심사</slot>
    </page-title>
    {{myInterest.length}}
  </article>
</template>

<script>
import { PageTitle, NewsList, Preloader } from '@/components'
import { mapActions, mapGetters } from 'vuex'
import { convertDate } from '@/utils'
export default {
  components: {
    Preloader,
    PageTitle,
    NewsList
  },
  computed: mapGetters({
    myInterest: 'getInt'
  }),
  data() {
    return {
      convertDate
    }
  },
  created() {
    this.get()
    console.log(this.myInterest)
  },
  methods: {
    ...mapActions({ get: 'getInterest' })
  }
}
</script>

<style lang="scss" scoped>
</style>
