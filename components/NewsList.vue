<template>
  <ul class="list_news">
    <li v-for="item in articles" :key="item.id">
      <template v-if="scrap">
        <btn-scrap :newsData="item"/>
      </template>
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
</template>

<script>
import NewsThumb from '@/components/NewsThumb'
import BtnScrap from '@/components/BtnScrap'
import { convertDate } from '@/utils'
export default {
  name: 'newslist',
  props: {
    articles: {
      type: Array
    },
    scrap: {
      type: Boolean,
      default: true
    }
  },

  components: {
    NewsThumb,
    BtnScrap
  },
  data() {
    return {
      convertDate
    }
  }
}
</script>
