<template>
  <article class="common_cont">
    <preloader :load="loading"/>
    <page-title :title="category"/>
    <news-list :articles="articles[category]"/>
  </article>
</template>

<script>
import axios from 'axios'
import { PageTitle, NewsList, Preloader } from '@/components'
import { convertDate } from '@/utils'
import { API_KEY } from '@/utils/constants'
import { CATEGORY_API } from '@/utils/api'
import { errImg } from '@/utils'
import { mapMutations, mapGetters } from 'vuex'

export default {
  data() {
    return {
      loading: false,
      errImg,
      convertDate,
      category: this.$route.params.category
    }
  },
  components: { PageTitle, Preloader, NewsList },
  computed: mapGetters({
    articles: 'news/getCategoryArticles'
  }),

  created() {
    this.$store.dispatch('news/getArticles', this.category).then(() => {
      this.loading = true
    })
  },

  methods: {
    infiniteScroll() {
      window.addEventListener('scroll', () => {
        const windowHeight = window.outerHeight
        const app = document.getElementById('app')
        const appHeight = app.clientHeight
        const scrollTop = window.scrollY
        if (scrollTop > appHeight - windowHeight) {
          axios
            .get(
              `https://newsapi.org/v2/top-headlines?country=kr&pageSize=40&category=${
                this.category
              }&apiKey=${API_KEY}`
            )
            .then(
              response => {
                this.articles = response.data.articles
              },
              error => {
                alert(error)
              }
            )
        }
      })
    }
  }
}
</script>
