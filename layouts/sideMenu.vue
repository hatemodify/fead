<template>
  <aside class="side_menu">
    <div class="inner">
      <div class="wrap_profile" v-if="chkLogin !== 'null'">
        <picture class="wrap_thumb">
          <img src="@/assets/images/thumb_user.png" class="thumb_img" alt>
        </picture>
        <strong class="user_name">{{user}}</strong>
      </div>
      <div class="wrap_profile" v-else>
        <picture class="wrap_thumb no_profile">
          <img :src="defaultProfile" class="thumb_img" alt>
        </picture>
        <strong class="txt_login">로그인 하시면 더 많은 서비스를 이용하실 수 있습니다.</strong>
        <router-link to="/login" @click="activeMenu">로그인</router-link>
      </div>
      <nav class="side_nav">
        <ul class="list_menu">
          <li v-if="chkLogin !== 'null'">
            <router-link to="/mypage">마이페이지</router-link>
          </li>
          <li>
            <router-link to="/myscrap">나의 스크랩</router-link>
          </li>
          <li>관심사 모아보기</li>
          <li>마이페이지</li>
        </ul>
      </nav>
      <button class="btn_logout" v-if="chkLogin !== 'null'">로그아웃</button>
    </div>
  </aside>
</template>
<script>
export default {
  name: 'sideMenu',
  props: ['chkLogin'],
  data() {
    return {
      defaultProfile: require(`@/assets/images/thumb_user.png`)
    }
  }
}
</script>
