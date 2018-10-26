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
                                <img class="ranking-img  default-img"
                                     src="http://img.meetingshop.cn/films/imgs/ee2e68492504b2390ce246f1e8e6d8ba1550779.jpg">
                            </div>
                            <div class="ranking-top-right">
                                <div class="ranking-top-right-main">
                                    <span class="ranking-top-moive-name">Redux数据流</span>
                                    <p class="ranking-release-time">上映时间：2018-06-15</p>
                                    <p class="ranking-top-wish">
                                        <span class="stonefont">451999</span>人想看
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="ranking-item ranking-index-2">
                        <a href="/filmItem/1175253" target="_blank" data-act="mostExpect-movie-click"
                           data-val="{movieid:1175253}">
                            <i class="ranking-index" style="color: #fff!important">2</i>

                            <span class="img-link">
                <img class="ranking-img default-img"
                     src="http://img.meetingshop.cn/films/imgs/710ae6c9176a9e543cc3f4142aaa8889292327.jpg">
              </span>
                            <div class="name-link ranking-movie-name">游戏测试入门</div>

                            <span class="ranking-num-info">
                <span class="stonefont">219176</span>人想看</span>
                        </a>
                    </li>
                    <li class="ranking-item ranking-index-3">
                        <a href="/filmItem/341516" target="_blank" data-act="mostExpect-movie-click"
                           data-val="{movieid:341516}">
                            <i class="ranking-index" style="color: #fff!important">3</i>
                            <span class="img-link">
                <img class="ranking-img default-img"
                     src="http://img.meetingshop.cn/films/imgs/2de435d9c1b2f1074c1e4c7da49b64a54338855.jpg">
              </span>
                            <div class="name-link ranking-movie-name">Android打包</div>

                            <span class="ranking-num-info">
                <span class="stonefont">185156</span>人想看</span>
                        </a>
                    </li>
                    <li class="ranking-item" :class="'ranking-index-'+(index+4)" v-for="(movie,index) in expectRanking"
                        :key="index">
                        <nuxt-link :to="{path:'/filmItem/'+movie.filmId}">
              <span class="normal-link">
                <i class="ranking-index">{{index + 4}}</i>
                <span class="ranking-movie-name">{{movie.filmName}}</span>
                <span class="ranking-num-info">
                  <span class="stonefont">{{movie.expectNum}}</span>人想看
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
        name: 'Except',
        props: {
            expectRanking: {}
        },
        data() {
            return {}
        }
    }
</script>
<style lang="scss" scoped>
    .ranking-box-wrapper {
        margin-bottom: 50px;
        .panel {
            padding: 0;
            .panel-header {
                .panel-title {
                    font-size: 26px;
                    color: #fdc735;
                    border-bottom: 0;
                    .textcolor_orange {
                        color: #fdb863;
                    }
                }
                .panel-more {
                    font-size: 14px;
                    line-height: 16px;
                    float: right;
                    margin-top: 10px;
                    .textcolor_orange {
                        color: #fdc735;
                    }
                    .panel-arrow {
                        display: inline-block;
                        width: 8px;
                        height: 14px;
                        vertical-align: top;
                        &.panel-arrow-orange {
                            background: url('../../assets/img/arrow-orange.png') top no-repeat;
                        }
                    }
                }
            }
            .panel-content {
                overflow: hidden;
                width: 100%;
                margin-top: 15px;
                .ranking-wrapper {
                    .ranking-item {
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
                                vertical-align: top;
                                color: #fdb863;
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
                            .ranking-top-left {
                                width: 140px;
                                height: 135px;
                                overflow: hidden;
                                float: left;
                                position: relative;
                                .ranking-top-icon {
                                    display: inline-block;
                                    position: absolute;
                                    left: 0;
                                    top: 0;
                                    width: 22px;
                                    height: 25px;
                                }
                            }
                            .ranking-top-right {
                                height: 135px;
                                line-height: 135px;
                                .ranking-top-right-main {
                                    display: inline-block;
                                    line-height: 1;
                                    vertical-align: middle;
                                    padding: 0 10px;
                                    .ranking-top-moive-name {
                                        font-size: 18px;
                                        color: #333;
                                        line-height: 1.4;
                                        white-space: normal;
                                        display: -webkit-box;
                                        -webkit-line-clamp: 2;
                                        -webkit-box-orient: vertical;
                                    }
                                    .ranking-release-time {
                                        font-size: 14px;
                                        margin-top: 12px;
                                        color: #999;
                                    }
                                    .ranking-top-wish {
                                        margin-top: 12px;
                                        font-size: 14px;
                                        color: #fdc735;
                                    }
                                }
                            }
                        }
                        &.ranking-index-2 {
                            float: left;
                        }
                        &.ranking-index-3 {
                            float: right;
                        }
                        &.ranking-index-4 {
                            clear: both;
                        }
                        &.ranking-index-2, &.ranking-index-3 {
                            border: 1px solid #efefef;
                            position: relative;
                            width: 170px;
                            margin-top: 20px;
                            margin-bottom: 20px;
                            padding-bottom: 8px;
                            .ranking-index {
                                position: absolute;
                                padding-left: 4px;
                                width: 16px;
                                line-height: 20px;
                                color: #fff;
                                background-color: #fdc735;
                            }
                            .ranking-img {
                                width: 100%;
                                height: 118px;
                            }
                            .name-link {
                                display: block;
                                font-size: 18px;
                                color: #333;
                                margin-top: 18px;
                                margin-left: 10px;
                                margin-right: 10px;
                            }
                            .ranking-num-info {
                                float: none;
                                display: inline-block;
                                font-size: 14px;
                                color: #fdb863;
                                margin-top: 6px;
                                margin-left: 10px;
                            }
                        }
                    }
                }
            }
        }
    }

</style>
