<template>
  <div class="header">
    <div class="header-inner">
      <!-- <a href="" class="meeting-logo"></a> -->
      <a href="" class="logo" data-act="icon-click"></a>
      <div class="city-container">
        <div class="city-selected">
          <div class="city-name">
            北京
          </div>
          <span class="caret"></span>
        </div>
      </div>
      <div class="nav">
        <ul class="navbar">
          <nuxt-link active-class="is-active" to="/" class="link nav-item is-tab" exact>首页</nuxt-link>
          <nuxt-link active-class="is-active" to="/films" class="link nav-item is-tab" exact>电影</nuxt-link>
          <nuxt-link active-class="is-active" to="/cinemas" class="link nav-item is-tab" exact>影院</nuxt-link>
          <nuxt-link active-class="is-active" to="/board" class="link nav-item is-tab" exact>榜单</nuxt-link>
          <nuxt-link active-class="is-active" to="/news" class="link nav-item is-tab" exact>热点</nuxt-link>
        </ul>
      </div>
      <div class="user-info">
        <div class="user-avatar">
          <img src="../../assets/img/avatar.png" alt="">
          <span class="caret"></span>
          <ul class="user-menu">
            <li>
              <a href="">登录</a>
            </li>
          </ul>
        </div>
      </div>
      <form action="" class="search-form">
        <input name="kw" class="search" type="search" maxlength="32" placeholder="找影视剧、影人、影院" autocomplete="off">
        <input class="submit" type="submit" value="">
      </form>
      <div class="app-download">
        <a href="">
          <span class="iphone-icon"></span>
          <span class="apptext">APP下载</span>
          <span class="caret"></span>
          <!-- <div class="download-icon"></div> -->
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /*head区整体设置*/

  .header {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    min-width: 1200px;
    background-color: #fff;
    border-bottom: 1px solid #d8d8d8;
  }

  .header .header-inner {
    width: 1200px;
    margin: 0 auto;
    height: 80px;
  }

  .header .logo {
    float: left;
    width: 133px;
    height: 80px;
    background: url(../../assets/img/logo.png) no-repeat 0;

    background-size: contain;
  }

  .city-container {
    position: relative;
    float: left;
    margin: 0 8px;
    height: 100%;
  }

  .city-container .city-name {
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

  .header .nav {
    display: inline-block;
    background-color: #fff;
    overflow: hidden;
    margin-left: 40px;
    /* float: left; */
  }

  .navbar {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  .navbar li {
    cursor: pointer;
    text-align: center;
    display: inline-block;
    height: 80px;
    line-height: 80px;
    width: 80px;
    font-size: 18px;

  }

  .navbar li.active {
    color: #fff;
    background-color: #ef4238;

  }

  .header .user-info {
    float: right;
    position: relative;
    z-index: 9999;
    height: 100%;
  }

  .header .user-info .user-avatar {
    display: block;
    border: 1px solid transparent;
    border-top: none;
    border-bottom: none;
    padding: 0 10px;
    width: 56px;
    height: 100%;
  }

  .header .user-info .user-avatar img {
    margin-top: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }

  .header .user-info .user-avatar .caret {
    position: absolute;
    top: 39px;
    right: -10px;
  }

  .header .user-info .user-avatar:hover .caret {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .header .user-info .user-menu {
    display: none;
    position: absolute;
    right: 0;
    top: 80px;
    border: 1px solid #d8d8d8;
    background-color: #fff;
    font-size: 14px;
    color: #333;
    text-align: right;
    padding: 15px 26px 5px;
    text-align: center;
  }

  .header form {
    float: right;
    margin: 20px 10px 0 0;
    position: relative;
  }

  .header form .search {
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

  .header form .submit {
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

  .app-download {
    float: right;
    width: 132px;
    height: 80px;
    margin-right: 10px;
    position: relative;
  }

  .app-download a {
    display: block;
    padding-top: 28px;
    padding-left: 14px;
    width: 100%;
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  .app-download a .iphone-icon {
    float: left;
    display: inline-block;
    width: 20px;
    height: 24px;
    background-image: url('../../assets/img/phone.png');
    background-size: cover;
  }

  .app-download a .apptext {
    float: left;
    display: inline-block;
    font-size: 16px;
    color: #000;
    height: 24px;
    line-height: 24px;
    margin: 0 7px;
  }

  .app-download a .caret {
    float: left;
    position: relative;
    top: 8px;
  }

  .app-download a .download-icon {
    display: none;
    width: 130px;
    height: 165px;
    position: absolute;
    left: 0;
    top: 80px;
    background-color: #fff;
    /* background-image: url(app-link-icon.3bc8fd3….png); */
    background-position: 24px 14px;
    background-size: 82px 82px;
    background-repeat: no-repeat;
    border: 1px solid #dcd4d7;
    border-top: 0;
  }



  .header input,
  .header li,
  .header ul {
    padding: 0;
    margin: 0;
    list-style: none;
    border: none;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  /*head-nav导航区域*/

  .header .nav {
    display: inline-block;
    background-color: #fff;
    overflow: hidden;
    margin-left: 40px;
    float: left;
  }

  /*logo区域*/

  .meeting-logo {
    display: block;
    width: 280px;
    height: 80px;
    background-image: url("../../assets/img/Meeting-logo.jpg");
  }


  .nav .nav-item{
    width: 80px;
    height: 80px;
    line-height: 80px;
    font-size: 20px;
    color: #000;
    display: inline-block;
    text-align: center;
  }
  .nav .nav-logo{
    width: 260px;
  }
  .nav .nav-item:hover{
    color: red;
  }
  .nav .nav-item.is-active{
    color: #f7f8fb;
    background-color: #f00;
  }

</style>
