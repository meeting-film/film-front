<template>
    <div class="panel">
        <div class="panel-header">
      <span class="panel-more">
        <a href="/films?showType=2" class="textcolor_blue" data-act="all-upcomingMovie-click">
          <span>全部</span>
        </a>
        <span class="panel-arrow panel-arrow-blue"></span>
      </span>
            <span class="panel-title">
        <span class="textcolor_blue">即将上映（{{soonFilms.filmNum}}部）</span>
      </span>
        </div>
        <div class="panel-content">
            <dl class="movie-list">
                <dd v-for="(item, index) in soonFilms.filmInfo" :key="index">
                    <div class="movie-item">
                        <nuxt-link :to="{path:'/filmItem/'+item.filmId}" target="_blank">
                            <div class="movie-poster">
                                <img class="poster-default" :src=item.imgAddress>
                                <img :src=item.imgAddress>
                                <div class="movie-overlay movie-overlay-bg">
                                    <div class="movie-info">
                                        <div class="movie-title" :title=item.filmName>{{item.filmName}}</div>
                                    </div>
                                </div>
                            </div>
                        </nuxt-link>
                        <div class="movie-detail movie-wish">
                            <span class="stonefont">{{item.expectNum}}</span>人想看
                        </div>
                        <div class="movie-detail movie-detail-strong movie-presale">
                            <a class="movie-presale-sep">预告片
                            </a>
                            <a href="/cinemas?movieId=1220970" class="active" target="_blank"
                               data-act="presaleUpcomingMovie-click" data-val="{movieid:1220970}">预 售</a>
                        </div>
                        <div class="movie-ver"></div>
                    </div>
                    <div class="movie-detail movie-rt">{{item.showTime}}上映</div>

                </dd>
            </dl>


        </div>
    </div>


</template>
<script>
    export default {
        name: 'Recent',
        props: {
            soonFilms: {
                type: Object,
                default: () => {
                }
            }
        },
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
                    .textcolor_blue {
                        color: #307ad5;
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
                    color: #307ad5;
                }
            }
            .panel-content {
                width: 100%;
                .movie-list {
                    dd {
                        margin-left: 30px;
                        margin-top: 20px;
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
                                    opacity: 0;
                                }
                                .movie-overlay {
                                    .movie-info {
                                        color: #fff;
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
                                    color: #fdc735;
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
                                            color: #307ad5;
                                            &:hover {
                                                background-color: #307ad5;
                                                color: #fff;
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
