<template>
  <div class="ranking-box-wrapper">
    <div class="panel">
      <div class="panel-header">
        <span class="panel-more">
          <a href="" class="textcolor_orange">
            <span>查看完整榜单</span>
          </a>
          <span class="panel-arrow panel-arrow-orange"></span>
        </span>

        <span class="panel-title">
          <span class="textcolor_red">TOP100</span>
        </span>
      </div>
      <div class="panel-content">
        <ul class="ranking-wrapper ranking-box">
          <li class="ranking-item ranking-top ranking-index-1">
            <a href="" data-act="ticketList-movie-click">
              <div class="ranking-top-left">
                <i class="ranking-top-icon"></i>
                <img class="ranking-img  default-img" :src="top.img">
              </div>
              <div class="ranking-top-right">
                <div class="ranking-top-right-main">
                  <span class="ranking-top-moive-name">{{top.name}}</span>
                  <p class="ranking-top-wish">
                    <span class="stonefont">{{top.num}}</span>分
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li class="ranking-item" :class="'ranking-index-'+(index+2)" v-for="(movie,index) in movieList" :key="index">
            <a href="" data-act="ticketList-movie-click">
              <span class="normal-link">
                <i class="ranking-index">{{index + 2}}</i>
                <span class="ranking-movie-name">{{movie.name}}</span>
                <span class="ranking-num-info">
                  <span class="stonefont">{{movie.num}}</span>分
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Top100',
    data() {
      return {
        top: {
          num: 9.6,
          name: '霸王别姬',
          img: 'http://p0.meituan.net/movie/2d52f6932ca2f47871ca27801c71e4cf98763.jpg@120w_80h_1e_1c'
        },
        movieList: [{
            name: '肖申克的救赎',
            num: 9.5
          }, {
            name: '罗马假日',
            num: 9.1
          }, {
            name: '这个杀手不太冷',
            num: 9.5
          }, {
            name: '教父',
            num: 9.3
          }, {
            name: '泰坦尼克号',
            num: 9.5
          }, {
            name: '龙猫',
            num: 9.2
          },
          {
            name: '唐伯虎点秋香',
            num: 9.2
          },
          {
            name: '魂断蓝桥',
            num: 9.2
          },
          {
            name: '千与千寻',
            num: 9.3
          }
        ]
      }
    }

  }

</script>
<style scoped>
  .ranking-box-wrapper {
    margin-top: 0 !important;
  }

  .aside .panel {
    margin: 0;
  }

  .panel-header {
    overflow: hidden;
    height: 26px;
    line-height: 26px;
  }

  .ranking-box-wrapper .panel-title,
  .ranking-box-wrapper .ranking-index-2 .ranking-index,
  .ranking-box-wrapper .ranking-index-3 .ranking-index,
  .ranking-box-wrapper .ranking-num-info,
  .ranking-box-wrapper .ranking-top-right .ranking-top-wish {

    font-size: 18px;
    /* font-style: italic; */
  }

  .textcolor_red {
    font-size: 26px;
  }

  .ranking-item .ranking-movie-name {
    display: inline-block;
    max-width: 190px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #333;
    vertical-align: top;
  }

  .ranking-movie-name {
    color: #7e7e7e;
  }

  .ranking-item .normal-link {
    display: block;
    height: 35px;
    line-height: 35px;
  }

  .panel-content {
    overflow: hidden;
    width: 100%;
    margin-top: 23px;
  }

  .ranking-wrapper {
    overflow: hidden;
  }

  ul,
  ul li {
    list-style: none;
  }

  .ranking-wrapper .ranking-item {
    overflow: hidden;
  }

  .ranking-item {
    cursor: pointer;
  }

  .ranking-index-1 {
    margin-bottom: 11px;
    border: 1px solid #efefef;
  }

  a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .ranking-box .ranking-top-left,
  .ranking-top100 .ranking-top-left {
    width: 120px;
    height: 78px;
    float: left;
    position: relative;
  }

  .ranking-top-icon {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    width: 22px;
    height: 25px;
    /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAABmJLR…rz9qvjhfjU9dV/pOe7+0p8ud4IXxnPP/ly4ZGZveHY3D3KzjdbTNAgKwAAAABJRU5ErkJggg==) no-repeat; */
    background-size: contain;
  }

  i,
  cite,
  em,
  var,
  address,
  dfn {
    font-style: italic;
  }

  .ranking-box .ranking-top-left .ranking-img,
  .ranking-top100 .ranking-top-left .ranking-img {
    width: 100%;
    height: 100%;
  }

  .ranking-img {
    vertical-align: middle;
  }

  .default-img {
    /* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAA+CAYAAACSqr0VAAAAAXNSR…QdiSGeQG4N8UNxmPshel2DXpM4GJ6BvBk2lmt90wYm879KzmDc5Uf+RgAAAABJRU5ErkJggg==); */
    background-position: 50%;
    background-size: 68px 62px;
    background-repeat: no-repeat;
  }

  img {
    border-style: none;
  }

  .ranking-box .ranking-top-right,
  .ranking-top100 .ranking-top-right {
    height: 78px;
    line-height: 78px;
  }

  .ranking-top-right {
    height: 80px;
    padding-left: 10px;
    line-height: 80px;
    overflow: hidden;
  }

  .ranking-box .ranking-top-right-main,
  .ranking-top100 .ranking-top-right-main {
    width: 220px;
  }

  .ranking-top-right-main {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    width: 200px;
  }

  .ranking-top-right .ranking-top-moive-name {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .ranking-top-right .ranking-top-moive-name {
    margin: 0;
    padding: 0;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
    color: #333;
    line-height: 1.4;
  }

  .ranking-item .ranking-index {
    display: inline-block;
    width: 20px;
  }

  .ranking-index {
    font-size: 18px;
    color: #999;
    vertical-align: top;
  }

  .ranking-item .normal-link {
    display: block;
    height: 35px;
    line-height: 35px;
  }


  .ranking-top-right .ranking-top-wish {
    margin-top: 12px;
    font-size: 14px;
    color: #ffb400;
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

  user agent stylesheet p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }

  .stonefont {
    font-family: stonefont;
  }

  .ranking-box-wrapper .panel-title,
  .ranking-box-wrapper .ranking-index-2 .ranking-index,
  .ranking-box-wrapper .ranking-index-3 .ranking-index,
  .ranking-box-wrapper .ranking-num-info,
  .ranking-box-wrapper .ranking-top-right .ranking-top-wish {
    color: #fdb863;
  }

  .ranking-num-info {
    float: right;
    color: #fdb863;
    font-size: 14px !important;
  }

  .ranking-top-right .ranking-top-wish {
    margin-top: 12px;
    font-size: 14px !important;
    color: #ffb400;
  }

  .panel-more {
    box-sizing: content-box;
    font-size: 14px !important;
    line-height: 16px;
    float: right;
    margin-top: 10px;
  }

  .panel-more a span {
    font-size: 14px !important;
    line-height: 18px !important;
    color: #ffb400;

  }

  .panel-arrow {
    display: inline-block;
    width: 8px;
    height: 14px;
    vertical-align: top;
  }

  .panel-arrow-orange {
    background: url('../../assets/img/arrow-orange.png') top no-repeat;
  }

</style>
