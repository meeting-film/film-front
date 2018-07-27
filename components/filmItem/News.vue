<template>
  <div class="module">
    <div class="mod-title">
      <h3>相关资讯</h3>
    </div>
    <div class="mod-content">
      <dl class="news-list">
        <dd class="news-item" data-act="new-click" data-val="{newsid:9615}">
          <div class="news-img">
            <a href="/films/news/9615" target="_blank">
              <img class="news-img-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
              <img class="news-img-detail" src="http://p1.meituan.net/movie/6b2a736571ae4e83f0ab62072e9dc5f143008.jpg@140w_86h_1e_1c">
            </a>
          </div>
          <div class="news-main">
            <div class="news-title">
              <a href="/films/news/9615" target="_blank">《李雷和韩梅梅》现身香港 刘镇伟将导"图兰朵"</a>
            </div>
            <div class="news-info">
              <span class="news-source">1905电影网</span><!--
        --><span><i class="news-icon news-icon-views"></i>520</span><!--
        --><span><i class="news-icon news-icon-comments"></i>0</span>
            </div>
          </div>
        </dd>
      </dl>


    </div>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
  .module {
    position: relative;
    margin-bottom: 60px;
    .mod-title {
      h3 {
        display: inline-block;
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-size: 18px;
        color: #333;
        line-height: 18px;
        &:before {
          float: left;
          content: "";
          display: inline-block;
          width: 4px;
          height: 18px;
          margin-right: 6px;
          background-color: #ef4238;
        }
      }
    }
    .mod-content {
      margin-top: 20px;
      color: #333;
      .news-item {
        overflow: hidden;
        margin: 0 0 16px;
        .news-img {
          background-color: #efefef;
          position: relative;
          width: 140px;
          height: 86px;
          overflow: hidden;
          float: left;
          img {
            position: absolute;
          }
          .news-img-default {
            top: 50%;
            left: 50%;
            width: 68px;
            height: 62px;
            margin-top: -31px;
            margin-left: -34px;
          }
          .news-img-detail {
            width: 100%;
            top: 0;
            left: 0;
          }
        }
        .news-main {
          overflow: hidden;
          position: relative;
          margin-left: 150px;
          height: 86px;
          .news-title {
            line-height: 1.2;
            font-size: 16px;
            margin-top: 4px;
            height: 38px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            a {
              color: #333;
            }
          }
          .news-info {
            color: #999;
            font-size: 14px;
            height: 16px;
            line-height: 16px;
            position: absolute;
            bottom: 4px;
            left: 0;
            white-space: nowrap;
            .news-source, .news-icon {
              display: inline-block;
              vertical-align: bottom;
            }
            .news-source {
              max-width: 7em;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .news-icon {
              margin: 0 2px 0 5px;
              height: 14px;
              &.news-icon-views {
                width: 18px;
                background: url(/assets/img/icon-view.png) no-repeat top;
                -webkit-background-size: 100%;
                background-size: 100%;
              }
              &.news-icon-comments {
                width: 16px;
                background: url(/assets/img/icon-comment.png) no-repeat top;
                -webkit-background-size: 100%;
                background-size: 100%;
              }
            }
          }

        }
      }
    }
  }
</style>
