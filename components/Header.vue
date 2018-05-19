<template>
  <div class="header">
    <div class="header-inner w">
      <a href="" class="meeting-logo"></a>
      <div class="nav">
        <ul class="navbar">
          <li>
            <a href="/" data-val="home-click" class="active">首页</a>
          </li>
          <li>
            <a href="/films" data-val="home-click">电影</a>
          </li>
          <li>
            <a href="/cinemas" data-val="cinemas-click">影院</a>
          </li>
          <li>
            <a href="/board" data-val="board-click">榜单</a>
          </li>
          <li>
            <a href="/news" data-val="news-click">热点</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
  /*head区整体设置*/
  .header{
    z-index: 999;
    height: 80px;
    width: 100%;
    min-width: 1200px;
    background-color: #fff;
    border-bottom: 1px solid #d8d8d8;
  }

  .header input, .header li, .header ul {
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
  .meeting-logo{
    display: block;
    width: 280px;
    height: 80px;
    background-image: url("../assets/img/Meeting-logo.jpg");
  }


</style>
