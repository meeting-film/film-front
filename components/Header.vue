<template>
  <!-- navigation -->
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <nuxt-link to="/" class="link nav-logo nav-item">
          Meeting-Film
        </nuxt-link>
        <nuxt-link active-class="is-active" to="/" class="link nav-item is-tab" exact>首页</nuxt-link>
        <nuxt-link active-class="is-active" to="/films" class="link nav-item is-tab" exact>电影</nuxt-link>
        <nuxt-link active-class="is-active" to="/cinemas" class="link nav-item is-tab" exact>影院</nuxt-link>
        <nuxt-link active-class="is-active" to="/board" class="link nav-item is-tab" exact>榜单</nuxt-link>
        <nuxt-link active-class="is-active" to="/news" class="link nav-item is-tab" exact>热点</nuxt-link>
      </div>
    </div>
  </nav>
</template>
<style>

  /*定义导航条部分*/
  .nav{
    margin: 0 auto;
    width: 1200px;
    height: 80px;
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
