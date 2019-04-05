<template>
  <div class="main_cont">
    <preloader v-if="!loading"/>
    <div class="wrap_headline">
      <ul class="list_headline">
        <li v-for="item in headLine" :key="item.title">
          <button class="btn_scrap"></button>
          <a :href="item.url" class="link_item" target="_blank">
            <picture v-if="item.urlToImage" class="wrap_thumb">
              <img :src="item.urlToImage" class="thumb_img" alt>
            </picture>
            <div v-else class="wrap_thumb no_img"></div>
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
    <!--
    <div class="wrap_category" v-for="cate in category" :key="cate">
      <h3 class="tit_cate">
        {{cate}}
        <router-link :to="`/category/${cate}`" class="link_more">주제 더보기</router-link>
      </h3>
      <ul class="list_cate">
        <li v-for="(item ,idx) in newsList[cate]" :key="idx">
          <a :href="item.url" class="link_item" target="_blank">
            <picture class="wrap_thumb" v-if="item.urlToImage">
              <img :src="item.urlToImage" class="thumb_img" alt>
            </picture>
            <div class="wrap_thumb no_img" v-else></div>
            <div class="wrap_info">
              <span class="txt_source">{{item.source.name}}</span>
              <strong class="tit_news">{{item.title}}</strong>
              <span class="txt_date">{{comm.convertDate(item.publishedAt)}}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>-->
  </div>
</template>
<script>
import axios from 'axios'
import { preloader } from '@/components'
import { API_KEY, CATEGORY } from '@/utils/constants'
// import comm from '../services/common.js'
export default {
  components: { preloader },
  data() {
    return {
      loading: false,
      headLine: '',
      isActive: false,
      // comm: comm,
      newsList: {
        business: '',
        entertainment: '',
        sports: '',
        general: '',
        health: '',
        science: ''
      }
    }
  },
  mounted() {},
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
    CATEGORY.forEach((item, idx) => {
      this.getCategoryNews(item, idx)
    })
  },
  methods: {
    errorImg() {
      console.log('error img')
    },
    txtEncode(txt) {
      return JSON.stringify(txt)
    },
    getCategoryNews(category, idx) {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&pageSize=4&apiKey=602cd3b6051a451d8e99935b8e7cad01`
        )
        .then(response => {
          this.newsList[category] = response.data.articles
        })
    }
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
