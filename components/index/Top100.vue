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
          <li class="ranking-item" :class="'ranking-index-'+(index+2)" v-for="(movie,index) in top100" :key="index">
            <a href="" data-act="ticketList-movie-click">
              <span class="normal-link">
                <i class="ranking-index">{{index + 2}}</i>
                <span class="ranking-movie-name">{{movie.filmName}}</span>
                <span class="ranking-num-info">
                  <span class="stonefont">{{movie.score}}</span>分
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
    props: {
      top100: {}
    },
    data() {
      return {
        top: {
          num: 9.6,
          name: '霸王别姬',
          img: 'http://p0.meituan.net/movie/2d52f6932ca2f47871ca27801c71e4cf98763.jpg@120w_80h_1e_1c'
        }
      }
    }

  }

</script>
<style lang="scss" scoped>
  .top100-wrapper {
    margin-top: 100px;
    .panel {
      margin: 0;
      .panel-header {
        overflow: hidden;
        height: 26px;
        line-height: 26px;
        .panel-more {
          font-size: 14px;
          line-height: 16px;
          float: right;
          margin-top: 10px;
          .textcolor_orange {
            color: #ffb400;
          }
          &.panel-arrow-orange {
            background: url('../../assets/img/arrow-orange.png') top no-repeat;
          }
        }
        .panel-title {
          font-size: 26px;
          color: #ffb400;
        }
      }
      .panel-content {
        overflow: hidden;
        width: 100%;
        margin-top: 23px;
        .ranking-wrapper {
          overflow: hidden;
          .ranking-item {
            overflow: hidden;
            &:hover {
              background-color: #f7f7f7;
            }
            .normal-link {
              display: block;
              height: 35px;
              line-height: 35px;
              .ranking-index {
                display: inline-block;
                width: 20px;
                font-size: 18px;
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
                float: right;
                color: #fdb863;
                font-size: 14px;
              }
            }

            &.ranking-index-1 {
              border: 1px solid #efefef;
              margin-bottom: 11px;
              .ranking-top-left {
                width: 120px;
                height: 78px;
                float: left;
                position: relative;
                .ranking-img {
                  width: 100%;
                  height: 100%;
                }
              }
              .ranking-top-right {
                height: 78px;
                line-height: 78px;
                .ranking-top-right-main {
                  width: 210px;
                  padding: 0 10px;
                  display: inline-block;
                  line-height: 1;
                  vertical-align: middle;
                  .ranking-top-moive-name {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
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
                  .ranking-top-wish {
                    margin-top: 12px;
                    font-size: 14px;
                    color: #ffb400;
                  }
                }
              }
            }
            &.ranking-index-2, &.ranking-index-3 {
              .ranking-index {
                color: #ffb400;
              }
            }
          }
        }
      }
    }
  }

</style>
