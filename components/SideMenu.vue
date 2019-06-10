<template>
  <div class="side_menu">
    <div class="inner">
      <div class="wrap_profile" v-if="loginState">
        <picture class="wrap_thumb">
          <img :src="userInfo.Paa" class="thumb_img" alt>
        </picture>
        <strong class="user_name">{{userInfo.ig}}</strong>
      </div>
      <div class="wrap_profile" v-else>
        <picture class="wrap_thumb no_profile">
          <img :src="DEFAULT_PROFILE" class="thumb_img" alt>
        </picture>
        <strong class="user_name">로그인 하세요!</strong>
      </div>
      <nav class="side_nav">
        <ul class="list_menu" v-if="loginState">
          <li>
            <router-link to="/mypage">마이페이지</router-link>
          </li>
          <li>
            <router-link to="/myscrap">나의 스크랩</router-link>
          </li>
          <li>
            <router-link to="/myinterest">관심사 모아보기</router-link>
          </li>
          <li>마이페이지</li>
        </ul>
        <div class v-else>
          <strong class="txt_login">
            로그인 하시면
            <br>더 많은 서비스를 이용하실 수 있습니다.
          </strong>
          <GoogleLogin
            :params="params"
            :client_id="CLIENT_ID"
            :onSuccess="onSuccess"
            class="btn_login"
          >
            <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-24.png"> Login
          </GoogleLogin>
        </div>
      </nav>
      <button class="btn_logout" v-if="loginState" @click="logout">
        <span class="ico_logout"></span>
        로그아웃
      </button>
    </div>
  </div>
</template>
<script>
import GoogleLogin from 'vue-google-login'
import { DEFAULT_PROFILE } from '@/utils/constants'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { CLIENT_ID } from '@/utils/constants'
export default {
  components: {
    GoogleLogin
  },
  computed: mapGetters({
    loginState: 'getLoginState',
    userInfo: 'getUserInfo'
  }),
  data() {
    return {
      DEFAULT_PROFILE,
      CLIENT_ID,
      params: {
        client_id: CLIENT_ID
      },
      loginStyle: {
        display: 'block',
        width: '100%',
        height: '40px',
        fontSize: '15px',
        borderRadius: '5px'
      }
    }
  },
  methods: {
    onSuccess(googleUser) {
      this.setUserInfo(googleUser.getBasicProfile())
      this.user(googleUser.getBasicProfile())
      this.login()
    },
    logout() {
      this.login()
      this.setUserInfo()
    },
    ...mapMutations({ login: 'loginState' }),
    ...mapMutations({ setUserInfo: 'setUserInfo' }),
    ...mapActions({ user: 'getUserInfo' })
  }
}
</script>

<style lang="scss" scoped>
.txt_login {
  display: block;
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  margin: 50px 0 30px;
}
.btn_login {
  display: block;
  width: 100%;
  height: 40px;
  background: #000;
  border: 1px solid #e3e3e3;
  color: #fff;
  font-family: ns;
  font-size: 15px;
  text-transform: uppercase;
  img {
    margin-right: 10px;
  }
}
.btn_logout {
  background: none;
  font-size: 14px;
}
.ico_logout {
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 5px;
  background: url(https://cdn4.iconfinder.com/data/icons/miu/24/common-logout-signout-exit-outline-stroke-128.png);
  background-size: 100%;
}
</style>
