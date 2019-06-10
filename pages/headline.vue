<template>
  <article class="headline_cont" ref="cont">
    <preloader :load="loading"/>
    <news-list :articles="headLines"/>
  </article>
</template>

<script>
import axios from 'axios'
import { Preloader, NewsList } from '@/components'
import { convertDate } from '@/utils'
import { API_KEY } from '@/utils/constants'
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      isActive: false,
      loading: false,
      page: 1,
      convertDate
    }
  },
  components: { NewsList, Preloader },
  computed: mapGetters({
    headLines: 'news/getHeadlines'
  }),
  methods: {
    infiniteScroll() {
      window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY
        const viewPort = document.documentElement.clientHeight
        const pageHeight = document.documentElement.scrollHeight
        const pageBottom = viewPort + scrollY >= pageHeight

        if (pageBottom) {
          this.page = this.page + 1
          console.log(this.page)
          this.getheadline(this.page)
        }
      })
    },
    animateTit() {
      window.addEventListener('scroll', () => {
        const tit = this.$refs.tit
        const titOffest = tit.offsetTop + 40
        const scrollTop = window.scrollY
        scrollTop > titOffest
          ? tit.classList.add('sticky')
          : tit.classList.remove('sticky')
      })
    },
    ...mapActions({
      getheadline: 'news/headlineNews'
    })
  },
  created() {
    this.$store.dispatch('news/headlineNews')
    this.headLines ? (this.loading = true) : (this.loading = false)
    this.infiniteScroll()
    // this.animateTit()
  }
}
</script>
