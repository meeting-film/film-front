<template>
    <div class="panel">
        <div class="panel-header">
      <span class="panel-more">
        <a href="/films?isPlay=1" class="textcolor_red" data-act="all-hotMovie-click">
          <span>全部</span>
        </a>
        <span class="panel-arrow panel-arrow-red"></span>
      </span>
            <span class="panel-title">
        <span class="textcolor_red">热播电影</span>
      </span>
            <span class="panel-subtitle">
        <a href="/films?isPlay=1&amp;catId=3" data-act="tag-hotMovie-click" data-val="{TagName:'爱情'}">爱情</a>
      </span>
            <span class="panel-subtitle">
        <a href="/films?isPlay=1&amp;catId=2" data-act="tag-hotMovie-click" data-val="{TagName:'喜剧'}">喜剧</a>
      </span>
            <span class="panel-subtitle">
        <a href="/films?isPlay=1&amp;catId=5" data-act="tag-hotMovie-click" data-val="{TagName:'动作'}">动作</a>
      </span>
            <span class="panel-subtitle">
        <a href="/films?isPlay=1&amp;catId=6" data-act="tag-hotMovie-click" data-val="{TagName:'恐怖'}">恐怖</a>
      </span>
            <span class="panel-subtitle">
        <a href="/films?isPlay=1&amp;catId=4" data-act="tag-hotMovie-click" data-val="{TagName:'动画'}">动画</a>
      </span>
        </div>
        <div class="panel-content">
            <dl class="movie-list">
                <dd v-for="(item, index) in boxRanking" :key="index">
                    <div class="movie-item">
                        <nuxt-link :to="{path:'/filmItem/'+item.filmId}" target="_blank">
                            <div class="movie-poster movie-poster-long">
                                <img :src="'http://img.meetingshop.cn/'+item.imgAddress">
                                <img :src="'http://img.meetingshop.cn/'+item.imgAddress">
                                <div class="movie-overlay movie-overlay-bg">
                                    <div class="movie-info">
                                        <div class="movie-score">
                                            <i class="integer">{{item.filmScore}}</i>
                                        </div>
                                        <div class="movie-title movie-title-padding" :title=item.filmName>
                                            {{item.filmName}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nuxt-link>
                        <div class="movie-ver"></div>
                    </div>
                </dd>
            </dl>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'HotMovie',
        props: {
            boxRanking: {}
        },
    }

</script>
<style lang="scss" scoped>.movie-grid {
    .panel {
        width: 750px;
        margin-bottom: 50px;
        box-sizing: content-box;
        .panel-header {
            width: 740px;
            overflow: hidden;
            .panel-more {
                font-size: 14px;
                line-height: 16px;
                float: right;
                margin-top: 12px;
                .textcolor_red {
                    color: #ff6637;
                }
                .panel-arrow {
                    display: inline-block;
                    width: 8px;
                    height: 14px;
                    vertical-align: top;
                    &.panel-arrow-blue {
                        background: url('../../assets/img/arrow-blue.png') top no-repeat;
                    }
                    &.panel-arrow-red {
                        background: url('../../assets/img/arrow-red.png') top no-repeat;
                    }
                }
            }
            .panel-title {
                font-size: 26px;
                color: #ff6637;
            }
            .panel-subtitle {
                margin-left: 10px;
                a {
                    font-size: 14px;
                    color: #333;
                }
            }
        }
        .panel-content {
            width: 100%;
            .movie-list {
                dd {
                    margin-top: 15px;
                    margin-left: 15px;
                    display: inline-block;
                    vertical-align: top;
                    position: relative;
                    &:first-child {
                        margin-left: 0;
                    }
                    .movie-item {
                        position: relative;
                        border: 1px solid #efefef;
                        margin: -1px;
                        .movie-poster {
                            width: 240px;
                            height: 135px;
                            overflow: hidden;
                            position: relative;
                            .poster-default {
                                top: 50%;
                                left: 50%;
                                width: 68px;
                                height: 62px;
                                margin-top: -31px;
                                margin-left: -34px;
                            }
                            .movie-overlay {
                                .movie-info {
                                    color: #fff;
                                    position: absolute;
                                    bottom: 7px;
                                    width: 100%;
                                    -webkit-transition: all .2s ease .2s;
                                    -moz-transition: all .2s ease .2s;
                                    -ms-transition: all .2s ease .2s;
                                    -o-transition: all .2s ease .2s;
                                    transition: all .2s ease .2s;
                                    .movie-score {
                                        color: #ffb400;
                                        float: right;
                                        margin-right: 10px;
                                        .integer {
                                            font-size: 18px;
                                        }
                                        .fraction {
                                            font-size: 14px;
                                        }
                                    }
                                    .movie-title {
                                        font-size: 16px;
                                        line-height: 22px;
                                        white-space: nowrap;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        margin: 0 10px;
                                        &.movie-title-padding {
                                            margin-right: 35px;
                                        }
                                        &.movie-detail-strong {
                                            height: 39px;
                                            line-height: 39px;
                                        }
                                    }
                                }
                            }
                            .movie-overlay, img {
                                width: 100%;
                                position: absolute;
                                top: 0;
                                left: 0;
                                bottom: 0;
                            }
                            .movie-overlay-bg {
                                background: linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1));
                            }
                        }
                        .movie-detail {
                            height: 34px;
                            line-height: 34px;
                            text-align: center;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            &.movie-wish {
                                font-size: 14px;
                                color: #ffb400;
                                background-color: #fbfbfb;
                                text-align: left;
                                padding-left: 10px;
                            }
                            &.movie-detail-strong {
                                height: 39px;
                                line-height: 39px;
                            }
                            &.movie-presale {
                                > a {
                                    width: 50%;
                                    box-sizing: border-box;
                                    display: inline-block;
                                    vertical-align: top;
                                    color: #999;
                                    font-size: 14px;
                                    &.movie-presale-sep {
                                        border-right: 1px dotted #e5e5e5;
                                    }
                                    &.active {
                                        color: #2d98f3;
                                    }
                                }
                            }
                        }
                        .movie-ver {
                            position: absolute;
                            top: 4px;
                            left: -2px;
                            font-size: 12px;
                            color: #fff;
                        }
                    }
                    .movie-detail {
                        &.movie-rt {
                            border: none;
                            text-align: center;
                            color: #999;
                            font-size: 14px;
                            line-height: 40px;
                        }
                    }
                }
            }
        }
    }
}


</style>
