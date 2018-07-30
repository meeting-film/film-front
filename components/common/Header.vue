<template>
  <div class="header">
    <div class="header-inner">
      <!-- <a href="" class="meeting-logo"></a> -->
      <a href="" class="logo" data-act="icon-click"></a>
      <!--<div class="city-container">-->
        <!--<div class="city-selected">-->
          <!--<div class="city-name">-->
            <!--北京-->
          <!--</div>-->
          <!--<span class="caret"></span>-->
        <!--</div>-->
      <!--</div>-->
      <div class="nav">
        <ul class="navbar">
          <li><nuxt-link active-class="is-active" to="/" class="link nav-item is-tab" exact>首页</nuxt-link></li>
          <li><nuxt-link active-class="is-active" to="/films" class="link nav-item is-tab" exact>电影</nuxt-link></li>
          <li><nuxt-link active-class="is-active" to="/cinemas" class="link nav-item is-tab" exact>影院</nuxt-link></li>
          <li><nuxt-link active-class="is-active" to="/board" class="link nav-item is-tab" exact>榜单</nuxt-link></li>
          <li><nuxt-link active-class="is-active" to="/news" class="link nav-item is-tab" exact>热点</nuxt-link></li>
        </ul>
      </div>
      <div class="user-info">
        <!--如果getters有值显示退出-->
        <!--否则显示登录-->
        <div class="user-avatar" v-if="isGuest">
          <nuxt-link active-class="is-active" to="/login" class="link" exact>登陆</nuxt-link>
          | <nuxt-link active-class="is-active" to="/register" class="link" exact>注册</nuxt-link>
        </div>
        <div class="user-avatar" v-else>
          <a href="javascript:;" @click="logout" class="link" exact>退出</a>
        </div>
      </div>
      <form @submit.prevent="getFilms" class="search-form">
      <!--<form class="search-form">-->
        <input class="search" type="search" placeholder="找影视剧、影人、影院" autocomplete="off">
        <input class="submit" type="submit" value="">
      </form>
      <!--<div class="app-download">-->
        <!--<a href="">-->
          <!--<span class="iphone-icon"></span>-->
          <!--<span class="apptext">APP下载</span>-->
          <!--<span class="caret"></span>-->
          <!--&lt;!&ndash; <div class="download-icon"></div> &ndash;&gt;-->
        <!--</a>-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      isGuest () {
        return this.$store.getters.TOKEN === null || this.$store.getters.TOKEN === undefined
      }
    },
    methods: {
      getFilms () {
        let params = {
          "showType": 1,//查询类型，1-正在热映，2-即将上映，3-经典影片
          "sortId": 1,//排序方式，1-按热门搜索，2-按时间搜索，3-按评价搜索
          "catId": "",
          "sourceId": "",
          "yearId": "",
          "offset": 0,
        };
        this.$store.dispatch('getFilms', params);
        this.$router.push('/query');
      },
      logout () {
        this.$store.dispatch('logout');
        this.$router.replace('/login');
      }
    }
  }
</script>
<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    min-width: 1200px;
    background-color: #fff;
    border-bottom: 1px solid #d8d8d8;
    .header-inner {
      width: 1200px;
      margin: 0 auto;
      height: 80px;
      .logo {
        float: left;
        width: 133px;
        height: 80px;
        background: url(../../assets/img/logo.png) no-repeat 0;
        background-size: contain;
      }
    }
    .nav {
      display: inline-block;
      background-color: #fff;
      overflow: hidden;
      margin-left: 40px;
      .navbar {
        display: flex;
        flex-direction: row;
        height: 100%;

        li {
          cursor: pointer;
          text-align: center;
          display: inline-block;
          height: 80px;
          line-height: 80px;
          width: 80px;
          font-size: 18px;
          &.active {
            color: #fff;
            background-color: #ef4238;
          }
          .nav-item{
            width: 80px;
            height: 80px;
            line-height: 80px;
            font-size: 20px;
            color: #000;
            display: inline-block;
            text-align: center;
            &:hover{
              color: red;
            }
            &.is-active{
              color: #f7f8fb;
              background-color: #f00;
            }
          }
        }
      }
      .nav-logo{
        width: 260px;
      }
    }
    .meeting-logo {
      display: block;
      width: 280px;
      height: 80px;
      background-image: url("../../assets/img/Meeting-logo.jpg");
    }
    .user-info {
      float: right;
      position: relative;
      z-index: 9999;
      height: 100%;
      .user-avatar {
        padding: 0 10px;
        width: 100px;
        height: 100%;
        .link {
          font-size: 14px;
          line-height: 6;
        }
      }
    }
    form {
      float: right;
      margin: 20px 10px 0 0;
      position: relative;
      .search {
        display: inline-block;
        height: 40px;
        line-height: 1.2;
        width: 260px;
        padding: 0 40px 0 20px;
        border: 1px solid #ccc;
        font-size: 14px;
        border-radius: 30px;
        background-color: #faf8fa;
        overflow: hidden;
        color: #333;
      }
      .submit {
        display: inline-block;
        position: absolute;
        left: 220px;
        top: 0;
        height: 40px;
        width: 40px;
        background-color: #ef4238;
        border-radius: 30px;
        background-image: url('../../assets/img/search.png');
        background-position: 10px;
        background-size: 50%;
        background-repeat: no-repeat;
        cursor: pointer;
      }
    }
  }
  .city-container {
    position: relative;
    float: left;
    margin: 0 8px;
    height: 100%;
    .city-name {
      display: inline-block;
      margin-top: 32px;
      color: #333;
      font-size: 16px;
    }
    .caret {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 2px;
      vertical-align: middle;
      border-top: 5px solid #666;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      -webkit-transition: all .2s ease;
      transition: all .2s ease;
    }
  }

  .app-download {
    float: right;
    width: 132px;
    height: 80px;
    margin-right: 10px;
    position: relative;
    > a {
      display: block;
      padding-top: 28px;
      padding-left: 14px;
      width: 100%;
      height: 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;
      .iphone-icon {
        float: left;
        display: inline-block;
        width: 20px;
        height: 24px;
        background-image: url('../../assets/img/phone.png');
        background-size: cover;
      }
      .apptext {
        float: left;
        display: inline-block;
        font-size: 16px;
        color: #000;
        height: 24px;
        line-height: 24px;
        margin: 0 7px;
      }
      .caret {
        float: left;
        position: relative;
        top: 8px;
      }
      .download-icon {
        display: none;
        width: 130px;
        height: 165px;
        position: absolute;
        left: 0;
        top: 80px;
        background-color: #fff;
        border: 1px solid #dcd4d7;
        border-top: 0;
      }
    }
  }
</style>
