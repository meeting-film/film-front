<template>
    <div class="banner">
        <div class="wrapper clearfix" v-if="filmItem && filmItem.data">
            <div class="celeInfo-left">
                <div class="avatar-shadow">
                    <img class="avatar" :src="filmItem.imgPre + filmItem.data.imgAddress" alt="">
                    <div class="movie-ver"></div>
                </div>
            </div>
            <div class="celeInfo-right clearfix">
                <div class="movie-brief-container">
                    <h3 class="name">{{filmItem.data.filmName}}</h3>
                    <div class="ename ellipsis">{{filmItem.data.filmEnName}}</div>
                    <ul>
                        <li class="ellipsis">{{filmItem.data.info01}}</li>
                        <li class="ellipsis">
                            {{filmItem.data.info02}}
                        </li>
                        <li class="ellipsis">{{filmItem.data.info03}}</li>
                    </ul>
                </div>
                <div class="action-buyBtn">
                    <div class="action clearfix" data-val="{movieid:65665}">
                        <a class="wish " data-wish="false" data-score="" data-bid="b_gbxqtw6x">
                            <div>
                                <i class="icon wish-icon"></i>
                                <span class="wish-msg" data-act="wish-click">想看</span>
                            </div>
                        </a>
                        <a class="score-btn " data-bid="b_rxxpcgwd">
                            <div>
                                <i class="icon score-btn-icon"></i>
                                <span class="score-btn-msg" data-act="comment-open-click">
                评分
            </span>
                            </div>
                        </a>
                    </div>
                    <nuxt-link :to="{path: '/cinemas', query: { filmid: filmItem.data.filmid }}" class="btn-buy"
                               target="_blank">特惠购票
                    </nuxt-link>
                </div>

                <div class="movie-stats-container">

                    <div class="movie-index">
                        <p class="movie-index-title">用户评分</p>
                        <div class="movie-index-content score normal-score">
              <span class="index-left info-num ">
                <span class="stonefont">{{filmItem.data.score}}</span>
              </span>
                            <div class="index-right">
                                <div class="star-wrapper">
                                    <div class="star-on" style="width:59%;"></div>
                                </div>
                                <span class="score-num"><span class="stonefont">{{filmItem.data.scoreNum}}</span></span>
                            </div>
                        </div>
                    </div>


                    <div class="movie-index">
                        <p class="movie-index-title">累计票房</p>
                        <div class="movie-index-content box">
                            <span class="no-info">{{filmItem.data.totalBox}}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            filmItem: {
                type: Object,
                default: () => {
                }
            }
        },
    }
</script>
<style lang="scss" scoped>
    .banner {
        width: 100%;
        min-width: 1200px;
        background: #392f59 url(/assets/img/bg-banner.png) no-repeat 50%;
        .wrapper {
            width: 1200px;
            margin: 0 auto;
            height: 376px;
            position: relative;
            .celeInfo-left {
                width: 300px;
                float: left;
                position: relative;
                top: 70px;
                overflow: hidden;
                z-index: 9;
                .avatar-shadow {
                    position: relative;
                    margin: 0 30px;
                    /*width: 240px;*/
                    /*height: 330px;*/
                    /*padding-bottom: 40px;*/
                    border: 4px solid #fff;
                    /*background: url(/assets/img/bg-shadow.png) no-repeat bottom;*/
                    .avatar {
                        height: 322px;
                        width: 232px;
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
            .celeInfo-right {
                position: relative;
                min-height: 306px;
                margin-right: 30px;
                margin-left: 300px;
                margin-top: 70px;
                .movie-brief-container {
                    position: absolute;
                    color: #fff;
                    font-size: 14px;
                    z-index: 1;
                    .name {
                        width: 900px;
                        margin-top: 0;
                        font-size: 26px;
                        line-height: 32px;
                        font-weight: 700;
                        margin-bottom: 0;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        max-height: 64px;
                    }
                    .ellipsis {
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                    ul {
                        width: 250px;
                        list-style: none;
                        padding-left: 0;
                        margin-bottom: 20px;
                        li {
                            margin: 12px 0;
                            line-height: 100%;
                        }
                    }
                }
                .action-buyBtn {
                    position: absolute;
                    bottom: 20px;
                    .action {
                        > a {
                            cursor: pointer;
                            float: left;
                            display: block;
                            width: 120px;
                            background-color: #756189;
                            margin-right: 10px;
                            padding: 11px 0;
                            text-align: center;
                            font-size: 14px;
                            line-height: 16px;
                            color: #fff;
                            border-radius: 2px;
                            .icon {
                                display: inline-block;
                                vertical-align: middle;
                                margin-top: -2px;
                                margin-right: 2px;
                                width: 16px;
                                height: 16px;
                                &.wish-icon {
                                    background: url(/assets/img/icon-wish.png) no-repeat;
                                }
                                &.score-btn-icon {
                                    background: url(/assets/img/icon-score.png) no-repeat;
                                }
                            }
                        }
                    }
                    .btn-buy {
                        margin-top: 10px;
                        width: 250px;
                        height: 40px;
                        font-size: 16px;
                        line-height: 40px;
                        text-align: center;
                        border-radius: 2px;
                        padding: 0;
                        display: inline-block;
                        color: #fff;
                        background-color: #ff6637;
                        &:hover {
                            background-color: #f35d2f;
                        }
                    }
                }
                .movie-stats-container {
                    position: absolute;
                    top: 158px;
                    left: 342px;
                    .movie-index {
                        margin-bottom: 16px;
                        color: #fff;
                        .movie-index-title {
                            font-size: 12px;
                            margin-bottom: 8px;
                        }
                        .movie-index-content {
                            overflow: hidden;
                            .no-info {
                                display: inline-block;
                                font-size: 24px;
                                color: #9c87b8;
                                color: hsla(0, 0%, 100%, .4);
                            }
                            .index-left {
                                float: left;
                            }
                            .index-right {
                                margin-left: 54px;
                                font-size: 12px;
                                .star-wrapper {
                                    width: 60px;
                                    height: 12px;
                                    position: relative;
                                    background: url("/assets/img/icon-star-white.png") repeat-x;
                                    margin-bottom: 4px;
                                    .star-on {
                                        height: 12px;
                                        background: url("/assets/img/icon-star-yellow.png") repeat-x;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
