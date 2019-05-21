<template>
  <header id="appHeader" ref="appHeader">
    <div class="inner">
      <h1 class="app_logo">
        <router-link to="/">
          <img src="@/assets/images/logo.png" height="20" alt="fead1">
        </router-link>
      </h1>
      <button class="btn_menu" v-bind:class="{active:isActive}" @click="activeMenu">
        <span class="ico_fead ico_menu"></span>
      </button>
    </div>
    <side-menu :chkLogin="chkLogin"/>
    <search-form/>
  </header>
</template>

<script>
import axios from 'axios'
import { SideMenu, SearchForm } from '@/components'
export default {
  data() {
    return {
      isActive: false,
      searchQuery: '',
      searchState: false,
      chkLogin: localStorage.accessToken,
      profileImg: '',
      profileImgPath: '',
      user: ''
    }
  },
  components: { SideMenu, SearchForm },
  watch: {
    reSearch() {
      this.searchQuery = '검색어를 입력하세요'
    }
  },
  methods: {
    activeMenu(e) {
      const appHeader = document.getElementById('appHeader')
      const nav = document.querySelector('.side_menu')
      this.isActive = !this.isActive
      this.isActive
        ? appHeader.classList.add('active')
        : appHeader.classList.remove('active')

      nav.addEventListener('click', function(e) {
        if (e.target == this) {
          appHeader.classList.remove('active')
          this.isActive = !this.isActive
          console.log(e.target)
        }
      })
    },
    searchEvt() {
      !this.searchQuery
        ? alert('검색어를 입력해 주세요')
        : this.$router.push(`/search/${this.searchQuery}`)
    }
  },
  // created() {
  //   if (this.chkLogin !== 'null') {
  //     axios.get(`${process.env.ROOT_API}/mypage`).then(
  //       response => {
  //         const userData = response.data.data
  //         console.log(userData)
  //         this.user = userData.id
  //         this.profileImg = userData.profile
  //         this.profileImgPath = require(`../upload/profile/${this.profileImg}`)
  //       },
  //       error => {
  //         console.log(error)
  //       }
  //     )
  //   }
  // },
  mounted() {}
}
</script>
