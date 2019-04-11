<template>
  <article class="headline_cont">
    <preloader :load="preloaderState"/>
    <ul class="list_headline">
      <li v-for="item in headLine" :key="item.title">
        <button class="btn_scrap" :class="{'active': isActive}" @click="thisScrap(item)"></button>
        <a :href="item.url" class="link_item">
          <news-thumb :imgSource="item.urlToImage"/>
        </a>
        <div class="wrap_info">
          <span class="txt_source">{{item.source.name}}</span>
          <strong class="tit_news">{{item.title}}</strong>
          <div class="cf">
            <span class="txt_date">{{convertDate(item.publishedAt)}}</span>
            <a :href="item.url" class="link_more" target="_blank">자세히 볼래요</a>
          </div>
        </div>
      </li>
    </ul>
  </article>
</template>

<script>
import axios from 'axios'
import { Preloader, NewsThumb } from '@/components'
import { convertDate } from '@/utils'
import { API_KEY } from '@/utils/constants'
import { mapMutations, mapGetters } from 'vuex'
export default {
  async fetch({ store, params }) {
    let { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr&pageSize=40&apiKey=${API_KEY}`
    )
    store.commit('news/addArticles', data.articles)
    store.commit('setPreloader', true)
  },
  data() {
    return {
      // headLine: '',
      isActive: false,
      loading: false,
      convertDate
    }
  },
  components: { NewsThumb, Preloader },
  computed: mapGetters({
    headLine: 'news/getArticles',
    preloaderState: 'getPreloader'
  }),
  methods: {
    // async thisScrap(val) {
    //   const userId = localStorage.accessToken
    //   if (userId !== 'null') {
    //     await PostsService.addScrap({
    //       scrap: val,
    //       userId
    //     })
    //   } else {
    //     alert('로그인 해주세요')
    //     this.$router.push({ name: 'Login' })
    //   }
    // },

    infiniteScroll() {
      window.addEventListener('scroll', () => {
        const windowHeight = window.outerHeight
        const app = document.getElementById('app')
        const appHeight = app.clientHeight
        const scrollTop = window.scrollY
        if (scrollTop > appHeight - windowHeight) {
          this.getHeadline()
        }
      })
    },
    getHeadline() {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=kr&pageSize=40&apiKey=${API_KEY}`
        )
        .then(
          response => {
            this.headLine = response.data.articles
          },
          error => {
            alert(error)
          }
        )
    }
  },
  created() {
    // axios
    //   .get(
    //     'https://newsapi.org/v2/top-headlines?country=kr&apiKey=602cd3b6051a451d8e99935b8e7cad01'
    //   )
    //   .then(
    //     response => {
    //       this.headLine = response.data.articles
    //       this.loading = true
    //     },
    //     error => {
    //       alert(error)
    //     }
    //   )
  },
  mounted() {
    this.infiniteScroll()
  }
}
</script>
