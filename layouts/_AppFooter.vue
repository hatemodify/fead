<template>
  <footer id="appFooter">
    <nav id="appNav">
      <ul class="gnb">
        <li>
          <router-link to="/headline">헤드라인</router-link>
        </li>
        <li>
          <router-link to="/categorylist">카테고리</router-link>
        </li>
        <li @click="searchOpen({searchState: open = !open})">검색</li>
        <li>
          <router-link to="/posts">포스트</router-link>
        </li>
        <!-- <li v-if="this.$store.state.accessToken === null">
          <router-link to="/login">로그인</router-link>
        </li>
        <li v-else>
          <router-link to="/mypage">마이페이지</router-link>
        </li>-->
      </ul>
    </nav>
  </footer>
</template>
<script>
import { mapMutation, mapMutations } from 'vuex'
export default {
  data() {
    return {
      open: false,
      chkLogin: localStorage.accessToken,
      loading: false
    }
  },
  methods: {
    ...mapMutations({ searchOpen: 'setSearchState' })
  }
}
</script>
