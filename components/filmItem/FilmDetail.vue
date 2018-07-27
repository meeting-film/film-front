<template>
  <div class="main-content">
    <div class="tab-container">
      <div class="tab-title-container clearfix">
        <div class="tab-title active" data-act="tab-desc-click">介绍</div>
        <!--<div class="tab-title " data-act="tab-celebrity-click">演职人员</div>-->
        <!--<div class="tab-title tab-disabled" data-act="tab-award-click">奖项</div>-->
        <!--<div class="tab-title tab-disabled" data-act="tab-img-click">图集</div>-->
      </div>
      <div class="tab-content-container">
        <div class="tab-desc tab-content active">

          <div class="module">
            <div class="mod-title">
              <h3>剧情简介</h3>
            </div>
            <div class="mod-content">
              <span class="dra">{{filmItem.info04.biography}}</span>

            </div>
          </div>


          <div class="module">
            <div class="mod-title">
              <h3>演职人员</h3>
              <a class="more" href="#celebrity" data-act="all-actor-click">全部</a>
            </div>
            <div class="mod-content">
              <div class="celebrity-container clearfix">

                <div class="celebrity-group">
                  <div class="celebrity-type">
                    导演
                  </div>
                  <ul class="celebrity-list clearfix">
                    <li class="celebrity " data-act="celebrity-click" data-val="{celebrityid:30974}">
                      <a href="/films/celebrity/30974" target="_blank" class="portrait">
                        <img class="default-img" :src=filmItem.info04.actors.director.imgAddress>
                      </a>
                      <div class="info">
                        <a href="/films/celebrity/30974" target="_blank" class="name">
                          {{filmItem.info04.actors.director.directorName}}
                        </a>
                      </div>
                    </li>

                  </ul>
                </div>


                <div class="celebrity-group">
                  <div class="celebrity-type">
                    演员
                  </div>
                  <ul class="celebrity-list clearfix">
                    <li class="celebrity actor" v-for="(item, index) in filmItem.info04.actors.actors" :key="index">
                      <a href="/films/celebrity/467008" target="_blank" class="portrait">
                        <img class="default-img" :src=item.imgAddress>
                      </a>
                      <div class="info">
                        <a href="/films/celebrity/467008" target="_blank" class="name">
                          {{item.directorName}}
                        </a>
                      </div>
                    </li>

                  </ul>
                </div>

              </div>

            </div>
          </div>

          <div class="module">
            <div class="mod-title">
              <h3>最新短评</h3>
            </div>
            <div class="mod-content">
              <div class="comment-list-container" data-hot="">

                <div class="no-comment">
                  <div class="no-comment-pic"></div>
                  <span>暂无最新短评</span>
                </div>
              </div>
              <a class="comment-entry" data-act="comment-no-content-click">写短评</a>

            </div>
          </div>
        </div>
        <div class="tab-celebrity tab-content">
          <div class="celebrity-container">
            <div class="celebrity-group">
              <div class="celebrity-type">
                导演
                <span class="num">（1）</span>
              </div>
              <ul class="celebrity-list clearfix">
                <li class="celebrity " data-act="celebrity-click" data-val="{celebrityid:30974}">
                  <a href="/films/celebrity/30974" target="_blank" class="portrait">
                    <img class="default-img" data-src="http://p0.meituan.net/movie/d2576cfdc6e0de69c28ca32c83063a3949394.jpg@128w_170h_1e_1c" alt="">
                  </a>
                  <div class="info">
                    <a href="/films/celebrity/30974" target="_blank" class="name">
                      方刚亮
                    </a>
                  </div>
                </li>

              </ul>
            </div>

            <div class="celebrity-group">
              <div class="celebrity-type">
                演员
                <span class="num">（2）</span>
              </div>
              <ul class="celebrity-list clearfix">
                <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:467008}">
                  <a href="/films/celebrity/467008" target="_blank" class="portrait">
                    <img class="default-img" data-src="http://p1.meituan.net/mmdb/3a2061d771d98566d3e5fa5c08c5e0b33685.png@128w_170h_1e_1c" alt="">
                  </a>
                  <div class="info">
                    <a href="/films/celebrity/467008" target="_blank" class="name">
                      李雷
                    </a>
                  </div>
                </li>

                <li class="celebrity actor" data-act="celebrity-click" data-val="{celebrityid:393439}">
                  <a href="/films/celebrity/393439" target="_blank" class="portrait">
                    <img class="default-img" data-src="http://p0.meituan.net/movie/e685cad847bcb8a7dacb5fb0f740bd48138307.jpg@128w_170h_1e_1c" alt="">
                  </a>
                  <div class="info">
                    <a href="/films/celebrity/393439" target="_blank" class="name">
                      姚岗
                    </a>
                  </div>
                </li>

              </ul>
            </div>

            <div class="celebrity-group">
              <div class="celebrity-type">
                编剧
                <span class="num">（2）</span>
              </div>
              <ul class="celebrity-list clearfix">
                <li class="celebrity " data-act="celebrity-click" data-val="{celebrityid:845865}">
                  <a href="/films/celebrity/845865" target="_blank" class="portrait">
                    <img class="default-img" data-src="http://p0.meituan.net/movie/59b2a52d62172c1c357a2a926b8d1be5206760.jpg@128w_170h_1e_1c" alt="">
                  </a>
                  <div class="info">
                    <a href="/films/celebrity/845865" target="_blank" class="name">
                      张小北
                    </a>
                  </div>
                </li>

                <li class="celebrity " data-act="celebrity-click" data-val="{celebrityid:30974}">
                  <a href="/films/celebrity/30974" target="_blank" class="portrait">
                    <img class="default-img" data-src="http://p0.meituan.net/movie/d2576cfdc6e0de69c28ca32c83063a3949394.jpg@128w_170h_1e_1c" alt="">
                  </a>
                  <div class="info">
                    <a href="/films/celebrity/30974" target="_blank" class="name">
                      方刚亮
                    </a>
                  </div>
                </li>

              </ul>
            </div>

          </div>
        </div>
        <div class="tab-award tab-content" data-val="{tabtype:'award'}">
        </div>
        <div class="tab-img tab-content" data-val="{tabtype:'img'}">
          <ul class="clearfix">
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tabShow: 0
      }
    },
    props: {
      filmItem: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
  .main-content {
    width: 730px;
    float: left;
    .tab-container {
      .tab-title-container {
        overflow: hidden;
        border-bottom: 2px solid #eee;
        .tab-title {
          cursor: pointer;
          float: left;
          margin-right: 30px;
          margin-bottom: -2px;
          padding-bottom: 10px;
          font-size: 18px;
          color: #333;
          line-height: 100%;
          border-bottom: 2px solid transparent;
          &.active {
            color: #ef4238;
            border-bottom-color: #ef4238;
          }
          &.tab-disabled {
            color: #999;
            cursor: not-allowed;
          }
        }
      }
      .tab-content-container {
        .tab-desc {
          margin-top: 40px;
          .dra {
            font-size: 14px;
            line-height: 26px;
          }
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
              .more {
                float: right;
                cursor: pointer;
                font-size: 14px;
                color: #999;
                padding-right: 14px;
                background: url(/assets/img/arrow-gray.png) no-repeat 100%;
              }
            }
            .mod-content {
              margin-top: 20px;
              color: #333;
              &:after {
                content: '';
                display: table;
                clear: both;
              }
              .celebrity-container {
                font-size: 16px;
                color: #333;

                .celebrity-group {
                  float: left;
                  margin-left: 30px;
                  &:first-child {
                    margin-left: 0;
                  }
                }
                .celebrity-type {
                  margin-bottom: 16px;
                }
                .celebrity-list {
                  margin-left: -20px;
                }
                .celebrity {
                  float: left;
                  width: 128px;
                  margin-left: 20px;
                  margin-bottom: 20px;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  .portrait {
                    margin-bottom: 6px;
                    width: 128px;
                    height: 170px;
                    overflow: hidden;
                    img {
                      width: 128px;
                      height: 170px;
                    }
                  }
                  .info {
                    .name, .role {
                      display: inline-block;
                      width: 128px;
                      text-align: center;
                      padding-bottom: 1px;
                      margin-bottom: -1px;
                      text-overflow: ellipsis;
                      overflow: hidden;
                      white-space: nowrap;
                      margin-top: 8px;
                      line-height: 1.2;
                      color: #333;
                    }
                  }
                }
              }
            }
          }
        }
        .tab-celebrity {
          .celebrity-container {
            margin-top: 40px;
            .celebrity-group {
              margin-bottom: 30px;
              .celebrity-type {
                margin-bottom: 16px;
                .num {
                  line-height: 16px;
                  font-size: 14px;
                  color: #999;
                }
              }
              .celebrity-list {
                margin-left: -20px;
                &:after {
                  content: '';
                  display: table;
                  clear: both;
                }
                .celebrity {
                  float: left;
                  width: 128px;
                  margin-left: 20px;
                  margin-bottom: 20px;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  .portrait {
                    margin-bottom: 6px;
                    width: 128px;
                    height: 170px;
                    overflow: hidden;
                    img {
                      width: 128px;
                      height: 170px;
                    }
                  }
                  .info {
                    .name {
                      margin-top: 8px;
                      line-height: 1.2;
                      color: #333;
                    }
                    .name, .role {
                      display: inline-block;
                      width: 128px;
                      text-align: center;
                      padding-bottom: 1px;
                      margin-bottom: -1px;
                      text-overflow: ellipsis;
                      overflow: hidden;
                      white-space: nowrap;
                    }
                  }
                }
              }
            }
          }
        }
        .tab-content {
          display: none;
          &.active {
            display: block;
          }
        }
      }
    }
    .comment-list-container {
      .no-comment {
        margin: 60px auto 70px;
        width: 114px;
        .no-comment-pic {
          width: 114px;
          height: 114px;
          background: url(/assets/img/no-comment.png) no-repeat;
          margin-bottom: 20px;
        }
        span {
          color: #999;
          font-size: 18px;
        }
      }
    }
    .comment-entry {
      cursor: pointer;
      position: absolute;
      top: -10px;
      right: 0;
      display: block;
      height: 30px;
      padding: 0 10px;
      border-radius: 15px;
      border: 1px solid #ef4238;
      text-align: center;
      font-size: 14px;
      line-height: 30px;
      color: #ef4238;
    }
  }
</style>
