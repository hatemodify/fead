<template>
  <div class="category_cont">
    <preloader :load="loading"/>
    <page-tit :title="category"/>
    <ul class="list_news">
      <li v-for="item in articles[category]" :key="item.id">
        <a :href="item.url" target="_blank">
          <picture class="wrap_thumb">
            <news-thumb :imgSource="item.urlToImage"/>
          </picture>
          <div class="wrap_info">
            <strong class="news_subject">{{item.title}}</strong>
            <p class="news_desc">{{item.description}}</p>
            <div class="cf">
              <span class="txt_source">{{item.source.name}}</span>
              <span class="txt_date">{{convertDate(item.publishedAt)}}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { PageTit, NewsThumb, Preloader } from '@/components'
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
  components: { PageTit, NewsThumb, Preloader },
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
