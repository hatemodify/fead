<template>
  <div class="main_cont">
    <preloader v-if="!loading"/>
    <div class="wrap_headline">
      <ul class="list_headline">
        <li v-for="item in headLine" :key="item.title">
          <button class="btn_scrap"></button>
          <a :href="item.url" class="link_item" target="_blank">
            <news-thumb :imgSource="item.urlToImage"/>
          </a>
          <div class="wrap_info">
            <strong class="tit_news">{{item.title}}</strong>
            <p class="news_desc" v-if="item.description ">{{item.description}}</p>
            <div class="cf">
              <span class="txt_date">{{item.publishedAt}}</span>
              <a :href="item.url" class="link_more" target="_blank">자세히 볼래요</a>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="wrap_category" v-for="(cate,key) in newsList" :key="key">
      <h3 class="tit_cate">
        {{key}}
        <router-link :to="`/category/${key}`" class="link_more">주제 더보기</router-link>
      </h3>
      <ul class="list_cate">
        <li v-for="(item ,idx) in newsList[key]" :key="idx">
          <a :href="item.url" class="link_item" target="_blank">
            <news-thumb :imgSource="item.urlToImage"/>
            <div class="wrap_info">
              <span class="txt_source">{{item.source.name}}</span>
              <strong class="tit_news">{{item.title}}</strong>
              <span class="txt_date">{{convertDate(item.publishedAt)}}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Preloader, NewsThumb } from '@/components'
import { API_KEY, CATEGORY } from '@/utils/constants'
import { convertDate } from '@/utils'

export default {
  data() {
    return {
      loading: false,
      headLine: '',
      isActive: false,
      convertDate,
      newsList: {
        business: [],
        entertainment: [],
        sports: [],
        general: [],
        health: [],
        science: []
      }
    }
  },
  components: { Preloader, NewsThumb },
  methods: {
    getCategoryNews(category) {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&pageSize=4&apiKey=${API_KEY}`
        )
        .then(response => {
          this.newsList[category] = [...response.data.articles]
        })
    }
  },
  created() {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`)
      .then(response => {
        this.headLine = response.data.articles
        this.loading = true
      })
      .catch(err => {
        console.log(err)
      })
    CATEGORY.forEach(item => {
      this.getCategoryNews(item.en)
    })
  }

  // updated() {
  //   this.loading = true
  //   const a = document.getElementById('app')
  //   const b = a.querySelectorAll('.thumb_img')
  //   b.forEach((item, index) => {
  //     if (item.height > 200) {
  //       item.parentNode.classList.add('bg_wrap')
  //     } else if (item.width == 0) {
  //       console.log(item)
  //     }
  //   })
  // }
}
</script>
