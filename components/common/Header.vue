<template>
  <div class="header">
    <div class="header-inner">
      <!-- <a href="" class="meeting-logo"></a> -->
      <a href="" class="logo" data-act="icon-click" style="font: 30px/60px 'arial'; color: #ff6637">Meeting</a>
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
          <li @click="tab('/')"><nuxt-link :to="{path: '/'}" class="link nav-item is-tab" :class="{'is-active': active == '/'}" exact>首页</nuxt-link></li>
          <li @click="tab('/films')"><nuxt-link :to="{path: '/films'}" class="link nav-item is-tab" :class="{'is-active': active == '/films'}" exact>电影</nuxt-link></li>
          <li @click="tab('/cinemas')"><nuxt-link :to="{path: '/cinemas'}" class="link nav-item is-tab" :class="{'is-active': active == '/cinemas'}" exact>影院</nuxt-link></li>
          <!--<li @click="tab('/board')"><nuxt-link :to="{path: '/board'}" class="link nav-item is-tab" :class="{'is-active': active == '/board'}" exact>影院</nuxt-link></li>-->
          <!--<li @click="tab('/news')"><nuxt-link :to="{path: '/news'}" class="link nav-item is-tab" :class="{'is-active': active == '/news'}" exact>影院</nuxt-link></li>-->
        </ul>
      </div>
      <div class="user-info">
        <!--如果getters有值显示退出-->
        <!--否则显示登录-->
        <!--{{$store.getters}}-->
        <!--{{isGuest}}-->
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
        <input class="search" type="search" v-model="form.search" placeholder="找影视剧、影人、影院" autocomplete="off">
        <input class="submit" type="submit" value="">
      </form>
      <div class="app-download">
        <a href="javascript:;" class="app-download-link">
          <span class="apptext">APP下载</span>
        </a>
        <div class="app-load-box clearfix js-load-box">
          <img src="../../assets/img/appload.png" class="l">
          <div class="r">
            <p>扫描下载慕课网APP</p>
            <a href="https://itunes.apple.com/cn/app/mu-ke-wang/id722179140?mt=8" target="_blank"><i class="icon-apple"></i>App Store下载</a>
            <a href="//www.imooc.com/mobile/mukewang.apk" target="_blank"><i class="icon-android"></i>Android下载</a>
          </div>
        </div>
      </div>
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
    data() {
      return {
          active: '/',
        form: {
          search:''
        }
      }
    },
    created() {
      this.tab(this.$router.history.current.path)
    },
    methods: {
      tab (router) {
        this.active = router;
      },
      getFilms() {
        // let params = {
        //   "showType": 1,//查询类型，1-正在热映，2-即将上映，3-经典影片
        //   "sortId": 1,//排序方式，1-按热门搜索，2-按时间搜索，3-按评价搜索
        //   "catId": "",
        //   "sourceId": "",
        //   "yearId": "",
        //   "offset": 0,
        // };
        let params = {
          "kw": this.form.search,
        };
        this.$store.dispatch('getFilms', params);
        this.$router.push('/query?kw=' + this.form.search);
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
      height: 60px;
      .logo {
        float: left;
        width: 133px;
        height: 60px;
        /*background: url(../../assets/img/logo.png) no-repeat 0;*/
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
          height: 60px;
          line-height: 60px;
          width: 80px;
          font-size: 18px;
          &.active {
            color: #fff;
            background-color: #ff6637;
          }
          .nav-item{
            width: 80px;
            height: 60px;
            line-height: 60px;
            font-size: 20px;
            color: #000;
            display: inline-block;
            text-align: center;
            &:hover{
              color: #ff6637;
            }
            &.is-active{
              color: #f7f8fb;
              background-color: #ff6637;
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
      height: 60px;
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
          line-height: 60px;
        }
      }
    }
    form {
      float: right;
      margin: 10px 0;
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
        &:focus {
          border-color: #ff6637;
        }
      }
      .submit {
        display: inline-block;
        position: absolute;
        left: 220px;
        top: 0;
        height: 40px;
        width: 40px;
        background-color: #ff6637;
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
    height: 60px;
    margin-right: 10px;
    position: relative;
    > a {
      display: block;
      padding: 18px 0;
      width: 100%;
      height: 100%;
      text-align: center;
      color: #000;
      font-size: 16px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;
    }
    .app-load-box {
      display: none;
      position: absolute;
      top: 100%;
      width: 304px;
      left: 0;
      padding: 22px 24px;
      background-color: #fff;
      font-size: 12px;
      color: #4D555D;
      line-height: 16px;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
      box-shadow: 0 8px 16px 0 rgba(7,17,27,.2);
      .l {
        float: left;
        width: 108px;
        height: 108px;
      }
      .r {
        float: right;
        p {
          margin-bottom: 12px;
        }
        a {
          display: block;
          font-size: 12px;
          color: #fff;
          width: 132px;
          height: 36px;
          margin-top: 8px;
          line-height: 36px;
          background-color: #4D555D;
          border-radius: 18px;
          text-align: center;
          &:hover {
            background-color: #333;
          }
        }
      }
    }
    &:hover {
      box-shadow: 0 4px 8px 0 rgba(7,17,27,.2);
      .app-load-box {
        display: block;
      }
    }
  }
</style>
