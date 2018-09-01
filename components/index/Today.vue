<template>
  <div class="ranking-box-wrapper">
    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">
          <span class="textcolor_red">今日票房</span>
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
                    <span class="stonefont">{{top.num}}</span>万
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li class="ranking-item" :class="'ranking-index-'+(index+2)" v-for="(movie,index) in boxRanking" :key="index">
            <nuxt-link :to="{path:'/filmItem/'+movie.filmId}" target="_blank">
              <span class="normal-link">
                <i class="ranking-index">{{index + 2}}</i>
                <span class="ranking-movie-name">{{movie.filmName}}</span>
                <span class="ranking-num-info">
                  <span class="stonefont">{{movie.boxNum}}</span>万
                </span>
              </span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Today',
    props: {
      boxRanking: {}
    },
    data() {
      return {
        top: {
          num: 1040.57,
          name: '哆啦A梦：大雄的金银岛',
          img: 'http://img.meetingshop.cn/films/index/dx.jpg'

        },
      }
    }

  }

</script>
<style lang="scss" scoped>
  .ranking-box-wrapper {
    margin-bottom: 50px;
    .panel {
      margin: 0;
      padding: 0;
      .panel-header {
        height: 26px;
        line-height: 26px;
        .panel-title {
          display: block;
          padding: 0;
          border-bottom: 0;
          .textcolor_red {
            font-size: 26px;
            color: #ff6637;
          }
        }
      }

      .panel-content {
        overflow: hidden;
        width: 100%;
        margin-top: 20px;
        .ranking-item {
          &:hover {
            background-color: #fafafa;
          }
          &.ranking-index-1 {
            margin-bottom: 11px;
            border: 1px solid #efefef;
          }
          .ranking-index {
            display: inline-block;
            width: 20px;
            font-size: 18px;
            color: #ff6637;
            vertical-align: top;
          }
          .normal-link {
            display: block;
            height: 35px;
            line-height: 35px;
          }
          .ranking-movie-name {
            display: inline-block;
            max-width: 190px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 16px;
            color: #333;
            vertical-align: top;
          }
          .ranking-num-info {
            color: #ff6637;
            font-size: 14px;
          }
          .ranking-top-left {
            width: 120px;
            height: 78px;
            float: left;
            position: relative;
            .ranking-img {
              width: 100%;
              height: 100%;
              vertical-align: middle;
            }
            .ranking-top-icon {
              position: absolute;
              left: 0;
              top: 0;
              width: 22px;
              height: 25px;
            }
          }
          .ranking-top-right {
            height: 78px;
            padding-left: 10px;
            line-height: 78px;
            overflow: hidden;
            .ranking-top-right-main {
              width: 220px;
              display: inline-block;
              line-height: 1;
              vertical-align: middle;
            }
            .ranking-top-moive-name {
              white-space: normal;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              margin: 0;
              padding: 0;
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 18px;
              color: #333;
              line-height: 1.4;
            }
            .ranking-top-wish {
              margin-top: 12px;
              font-size: 14px;
              color: #ff6637;
            }
          }
        }
      }
    }
  }
</style>
