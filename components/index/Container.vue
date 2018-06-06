<template>
  <div class="container">
    <div class="content">
      <div class="aside">
        <Today></Today>
        <div class="box-total-wrapper clearfix">
          <h3>今日大盘</h3>
          <div>
            <p>
              <span class="num">
                <span class="stonefont">2868.9</span>
              </span>万
              <a class="more" data-act="moreDayTip-click" href="">查看更多
                <span class="panel-arrow panel-arrow-red"></span>
              </a>
            </p>
            <p class="meta-info">
              北京时间 10:04:53
              <span class="pull-right">猫眼专业版实时票房数据</span>
            </p>
          </div>
        </div>
        <div class="most-expect-wrapper">
          <Expect>
          </Expect>
        </div>
        <div class="top100-wrapper">
          <Top100></Top100>
        </div>
      </div>
      <div class="main">
        <div class="movie-grid">
          <div class="panel">
            <Hot></Hot>
            <Recent></Recent>
            <Hot-movie></Hot-movie>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Today from '~/components/index/Today.vue'
  import Expect from '~/components/index/Expect.vue'
  import Top100 from '~/components/index/Top100.vue'
  import Hot from '~/components/index/Hot.vue'
  import Recent from '~/components/index/Recent.vue'
  import HotMovie from '~/components/index/HotMovie.vue'

  export default {
    name: 'Container',
    components: {
      Today,
      Expect,
      Top100,
      Hot,
      Recent,
      HotMovie,
    }
  }

</script>
<style scoped>
  .container {
    width: 1200px;
    margin: 0 auto;
  }

  .aside {
    float: right;
    width: 360px;
  }

  .main {
    padding: 0 18px;
    margin-right: 363px;
  }

  .box-total-wrapper {
    margin-top: 29px;
    padding-bottom: 11px;
    background-color: #fdfdfd;
    border: 1px solid #efefef;
    padding-right: 15px;
    box-sizing: content-box;
  }

  .clearfix:after,
  .clearfix:before {
    content: " ";
    display: table;
  }

  .box-total-wrapper>h3 {
    box-sizing: content-box;
    float: left;
    width: 20px;
    height: 83px;
    padding: 10px;
    color: #fff;
    background-color: #ef4238;
    text-align: center;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
  }

  dd,
  dl,
  dt,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li,
  p,
  ul {
    margin: 0;
    padding: 0;
  }

  user agent stylesheet h3 {
    display: block;
    font-size: 1.17em;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
  }

  .box-total-wrapper>div {
    font-size: 14px;
    margin-left: 54px;
    color: #ef4238;
    padding-top: 20px;
    box-sizing: content-box;
  }

  .box-total-wrapper>div .num {
    font-size: 30px;
    font-weight: 700;
    margin-right: 2px;
  }

  .box-total-wrapper>div .num {
    font-size: 30px;
    font-weight: 700;
    margin-right: 2px;
  }

  .box-total-wrapper>div {
    font-size: 14px;
    margin-left: 54px;
    color: #ef4238;
    padding-top: 20px;
  }

  .box-total-wrapper>div a.more[href] {
    color: #ef4238;
    margin-top: 13px;
    float: right;
    line-height: 16px;
  }

  a {
    text-decoration: none;
  }

  .panel-arrow-red {
    background: url('../../assets/img/arrow-red.png') top no-repeat;
  }

  .panel-arrow {
    display: inline-block;
    width: 8px;
    height: 14px;
    vertical-align: top;
  }

  .box-total-wrapper>div a.more[href] {
    color: #ef4238;
    margin-top: 13px;
    float: right;
    line-height: 16px;
  }

  .box-total-wrapp.pull-right {
    float: right !important;
  }

  .box-total-wrapper>div .meta-info {
    color: #999;
    margin-top: 6px;
  }

  .box-total-wrapper>div {
    font-size: 14px;
    margin-left: 54px;
    color: #ef4238;
    padding-top: 20px;
  }

  .aside .most-expect-wrapper {
    margin-top: 80px;
  }

  .aside .top100-wrapper {
    margin-top: 100px;
  }

  .movie-grid {
    margin-top: -62px;
  }

  .movie-grid .panel {
    /* margin: 62px 0 0; */
    width: 750px;
  }

  .content {
    background-color: #fff;
  }

</style>
