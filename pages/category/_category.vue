<template>
  <div class="category_cont">
    <h2 class="tit_page">{{category}}</h2>
    <ul class="list_news">
      <li v-for="item in articles" :key="item.id">
        <a :href="item.url">
          <picture class="wrap_thumb">
            <img :src="item.urlToImage" @error="errImg" class="thumb_img" alt>
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
import { convertDate } from '@/utils'
import { API_KEY } from '@/utils/constants'
import { CATEGORY_API } from '@/utils/api'
import { errImg } from '@/utils'
import { mapMutations, mapGetters } from 'vuex'

export default {
  async fetch({ store, params }) {
    let { data } = await axios.get(CATEGORY_API(store.getters.category))
    store.commit('news/addArticles', data.articles)
    // store.commit('setPreloader', true)
  },
  data() {
    return {
      errImg,
      convertDate
    }
  },
  computed: mapGetters({
    articles: 'news/getArticles',
    category: 'news/getCategory'
  }),

  mounted() {
    this.infiniteScroll()
  },
  created() {
    // axios
    //   .get(
    //     `https://newsapi.org/v2/top-headlines?country=kr&category=${
    //       this.category
    //     }&apiKey=${API_KEY}`
    //   )
    //   .then(
    //     response => {
    //       this.articles = response.data.articles
    //     },
    //     error => {
    //       alert(error)
    //     }
    //   )
    this.$store.dispatch('news/getArticles', this.category)
  },
  methods: {},
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
