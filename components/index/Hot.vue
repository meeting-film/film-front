<template>
    <div class="panel">
        <div class="panel-header">
      <span class="panel-more">
        <a href="/films?showType=1" class="textcolor_red" data-act="all-playingMovie-click">
          <span>全部</span>
        </a>
        <span class="panel-arrow panel-arrow-red"></span>
      </span>
            <span class="panel-title">
        <span class="textcolor_red">正在热映（{{hotFilms.filmNum}}部）</span>
      </span>
        </div>
        <div class="panel-content">
            <dl class="movie-list">
                <dd v-for="(item, index) in hotFilms.filmInfo" :key="index">
                    <div class="movie-item">
                        <nuxt-link :to="{path:'/filmItem/'+item.filmId}" target="_blank">
                            <div class="movie-poster">
                                <img class="poster-default" :src="'http://img.meetingshop.cn/'+item.imgAddress">
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
                        <div class="movie-detail movie-detail-strong movie-sale">
                            <a href="/cinemas?movieId=1207042" class="active" target="_blank"
                               data-act="salePlayingMovie-click" data-val="{movieid:1207042}">购 票</a>
                        </div>
                        <div class="movie-ver"></div>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Hot',
        props: {
            hotFilms: {
                filmNum: '',
                filmInfo: []
            }
        },
        data() {
            return {}
        }
    }

</script>
<style lang="scss" scoped>
    .movie-grid {
        .panel {
            width: 750px;
            margin-bottom: 50px;
            box-sizing: content-box;
            .panel-header {
                width: 740px;
                height: 26px;
                line-height: 26px;
                overflow: hidden;
                .panel-more {
                    font-size: 14px;
                    line-height: 16px;
                    float: right;
                    margin-top: 5px;
                    .textcolor_red {
                        color: #ff6637;
                    }
                    .panel-arrow {
                        display: inline-block;
                        width: 8px;
                        height: 14px;
                        vertical-align: top;
                        &.panel-arrow-red {
                            background: url('../../assets/img/arrow-red.png') top no-repeat;
                        }
                    }
                }
                .panel-title {
                    font-size: 26px;
                    color: #ff6637;
                }
            }
            .panel-content {
                width: 100%;
                .movie-list {
                    dd {
                        margin-top: 20px;
                        margin-left: 30px;
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
                            -webkit-transition: all .2s ease .2s;
                            -moz-transition: all .2s ease .2s;
                            -ms-transition: all .2s ease .2s;
                            -o-transition: all .2s ease .2s;
                            transition: all .2s ease .2s;
                            &:hover {
                                -webkit-transform: translateY(-5px);
                                -moz-transform: translateY(-5px);
                                -ms-transform: translateY(-5px);
                                -o-transform: translateY(-5px);
                                transform: translateY(-5px);
                                -moz-box-shadow: 0 0 5px #fff, 0 5px 10px rgba(0, 0, 0, .07);
                                -webkit-box-shadow: 0 0 5px #fff, 0 5px 10px rgba(0, 0, 0, .07);
                                box-shadow: 0 0 5px #fff, 0 5px 10px rgba(0, 0, 0, .07)
                            }
                            .movie-poster {
                                background-color: #fcfcfc;
                                width: 160px;
                                height: 180px;
                                overflow: hidden;
                                position: relative;
                                .poster-default {
                                    top: 50%;
                                    left: 50%;
                                    width: 68px;
                                    height: 62px;
                                    margin-top: -31px;
                                    margin-left: -34px;
                                    opacity: 0;
                                }
                                .movie-overlay {
                                    .movie-info {
                                        color: #666;
                                        position: absolute;
                                        bottom: 7px;
                                        width: 100%;
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
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                }
                                .movie-overlay {
                                    width: 100%;
                                    height: 100%;
                                }
                                /*.movie-overlay-bg {*/
                                /*background: linear-gradient(rgba(0,0,0,0) 70%, rgba(0,0,0,1));*/
                                /*}*/
                            }
                            .movie-detail {
                                height: 34px;
                                line-height: 34px;
                                text-align: center;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                &.movie-sale {
                                    a {
                                        display: block;
                                        color: #999;
                                        font-size: 14px;
                                        &.active {
                                            color: #ff6637;
                                            &:hover {
                                                color: #fff;
                                                background-color: #ff6637;
                                            }
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
                    }
                }
            }
        }
    }
</style>
