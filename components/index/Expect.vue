<template>
  <div class="ranking-box-wrapper">
    <div class="panel">
      <div class="panel-header">
        <span class="panel-more">
          <a href="" class="textcolor_orange">
            <span id="expectAll">查看完整榜单</span>
          </a>
          <span class="panel-arrow panel-arrow-orange"></span>
        </span>
        <span class="panel-title">
          <span class="textcolor_orange">最受期待</span>
        </span>
      </div>
      <div class="panel-content">
        <ul class="ranking-wrapper ranking-box ranking-wrapper ranking-mostExpect">

          <li class="ranking-item ranking-top ranking-index-1">
            <a href="">
              <div class="ranking-top-left">
                <i class="ranking-top-icon"></i>
                <img class="ranking-img  default-img" src="http://p1.meituan.net/movie/3d17aa5ee07f5d66239d8393bcb8fe5196556.jpg@140w_194h_1e_1c">
              </div>
              <div class="ranking-top-right">
                <div class="ranking-top-right-main">
                  <span class="ranking-top-moive-name">侏罗纪世界2</span>
                  <p class="ranking-release-time">上映时间：2018-06-15</p>
                  <p class="ranking-top-wish">
                    <span class="stonefont">451999</span>人想看
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li class="ranking-item ranking-index-2">
            <a href="/films/1175253" target="_blank" data-act="mostExpect-movie-click" data-val="{movieid:1175253}">
              <i class="ranking-index" style="color: #fff!important">2</i>

              <span class="img-link">
                <img class="ranking-img default-img" src="http://img.meetingshop.cn/films/index/aqgy.jpg">
              </span>
              <div class="name-link ranking-movie-name">爱情公寓</div>

              <span class="ranking-num-info">
                <span class="stonefont">219176</span>人想看</span>
            </a>
          </li>
          <li class="ranking-item ranking-index-3">
            <a href="/films/341516" target="_blank" data-act="mostExpect-movie-click" data-val="{movieid:341516}">
              <i class="ranking-index" style="color: #fff!important">3</i>
              <span class="img-link">
                <img class="ranking-img default-img" src="http://p0.meituan.net/movie/f232635cbac883b04a3dd555740ed58d195151.jpg@170w_118h_1e_1c">
              </span>
              <div class="name-link ranking-movie-name">狄仁杰之四大天王</div>

              <span class="ranking-num-info">
                <span class="stonefont">185156</span>人想看</span>
            </a>
          </li>
          <li class="ranking-item" :class="'ranking-index-'+(index+4)" v-for="(movie,index) in movieList" :key="index">
            <a href="" data-act="ticketList-movie-click">
              <span class="normal-link">
                <i class="ranking-index">{{index + 4}}</i>
                <span class="ranking-movie-name">{{movie.name}}</span>
                <span class="ranking-num-info">
                  <span class="stonefont">{{movie.num}}</span>人想看
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
    name: 'Except',
    data() {
      return {
        top: {
          num: 1040.57,
          name: '哆啦A梦：大雄的金银岛',
          img: 'http://p1.meituan.net/movie/6d59148862aa9f480a4770599bf1123f152133.jpg@120w_80h_1e_1c'

        },
        movieList: [{
            name: '新乌龙院之笑闹江湖',
            num: 231383
          }, {
            name: '金蝉脱壳2',
            num: 39624
          }, {
            name: '动物世界',
            num: 82899
          }, {
            name: '爵迹2',
            num: 48982
          }, {
            name: '邪不压正',
            num: 47037
          }, {
            name: '巨齿鲨',
            num: 44874
          },
          {
            name: '一出好戏',
            num: 33776
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
    /* color: #ef4238; */
    color: #ffb400 !important;
    /* font-style: italic; */
  }

  .textcolor_orange {

    /* color: #ef4238 !important; */
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
  }

  .panel-arrow-orange {
    background: url('../../assets/img/arrow-orange.png') top no-repeat;
  }

  .panel-arrow {
    display: inline-block;
    width: 8px;
    height: 14px;
    vertical-align: top;
  }

  #expectAll {
    color: #fdb863;
    vertical-align: top;
    text-decoration: none;

  }

  a {
    text-decoration: none;

  }

  .ranking-mostExpect .ranking-index-1 {
    margin-bottom: 0;
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

  .ranking-mostExpect .ranking-top-left {
    width: 140px;
    height: 194px;
    float: left;
    position: relative;
  }

  .ranking-mostExpect .ranking-top-icon {
    /* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAABmJLR…83GOzqcFMnrwTARIluxuk+HHKzx0Z3toarOptoql+hHT8AQHUD1vWbGWEAAAAASUVORK5CYII=); */
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

  .ranking-mostExpect .ranking-index-1 .ranking-img {
    width: 100%;
    height: 194px;
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

  .ranking-mostExpect .ranking-top-right {
    height: 194px;
    line-height: 194px;
  }

  .ranking-top-right {
    height: 80px;
    padding-left: 10px;
    line-height: 80px;
    overflow: hidden;
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

  .ranking-top-right .ranking-release-time {
    margin-top: 12px;
    color: #999;
  }

  .ranking-top-right .ranking-top-wish {
    margin-top: 12px;
    font-size: 14px;
    color: #ffb400;
  }

  .ranking-mostExpect .ranking-index-2,
  .ranking-mostExpect .ranking-index-3 {
    border: 1px solid #efefef;
    position: relative;
    width: 170px;
    float: left;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-bottom: 8px;
  }

  .ranking-wrapper .ranking-item {
    overflow: hidden;
  }

  .ranking-mostExpect .ranking-index-2 a,
  .ranking-mostExpect .ranking-index-3 a {
    display: block;
  }

  .ranking-mostExpect .ranking-index-2 .ranking-index,
  .ranking-mostExpect .ranking-index-3 .ranking-index {
    position: absolute;
    padding-left: 4px;
    width: 16px;
    line-height: 20px;
    color: #fff;
    background-color: #ffb400;
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

  a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: none;
  }

  .ranking-mostExpect .ranking-index-2 .img-link img,
  .ranking-mostExpect .ranking-index-3 .img-link img {
    width: 100%;
    height: 118px;
  }



  .ranking-img {
    vertical-align: middle;
  }

  .ranking-mostExpect .ranking-index-2 .name-link,
  .ranking-mostExpect .ranking-index-3 .name-link {
    display: block;
    font-size: 18px;
    color: #333;
    margin-top: 8px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .ranking-mostExpect .ranking-index-2 .ranking-movie-name,
  .ranking-mostExpect .ranking-index-3 .ranking-movie-name {
    margin-left: 0;
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

  .ranking-mostExpect .ranking-index-4 {
    clear: both;
  }

  .ranking-mostExpect .ranking-index-2 .ranking-num-info,
  .ranking-mostExpect .ranking-index-3 .ranking-num-info {
    float: none;
    display: inline-block;
    font-size: 14px;
    margin-top: 6px;
    margin-left: 10px;
  }

</style>
