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
    <side-menu/>

    <search-form/>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
import { SideMenu, SearchForm } from '@/components'
export default {
  data() {
    return {
      isActive: false,
      searchState: false
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
      const appHeader = this.$refs.appHeader
      const nav = document.querySelector('.side_menu')
      this.isActive = !this.isActive
      this.isActive
        ? appHeader.classList.add('active')
        : appHeader.classList.remove('active')

      nav.addEventListener('click', function(e) {
        if (e.target == this) {
          appHeader.classList.remove('active')
          this.isActive = !this.isActive
        }
      })
    }
  }

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
}
</script>
