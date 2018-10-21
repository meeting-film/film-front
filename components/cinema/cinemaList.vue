<template>
    <div class="cinemaList-container" v-if="cinemasItem && cinemasItem.data">
        <div class="movie-list-container">
            <div class="movie-list">
                <div class="movie" :class="{active:tabShow==index}" v-for="(item, index) in cinemasItem.data.filmList"
                     :key="index" @click="tab(index)">
                    <img :src="cinemasItem.imgPre+item.imgAddress" alt="">
                </div>
            </div>
        </div>
        <div class="show-list" v-for="(item, index) in cinemasItem.data.filmList" v-show="tabShow==index" :key="index">
            <div class="movie-info">
                <div>
                    <h3 class="movie-name">{{item.filmName}}</h3>
                    <!--<span class="score sc">8.6</span>-->
                </div>

                <div class="movie-desc">
                    <div>
                        <span class="key">时长 :</span>
                        <span class="value">{{item.filmLength}}</span>
                    </div>
                    <div>
                        <span class="key">类型 :</span>
                        <span class="value"> {{item.filmCats}} </span>
                    </div>
                    <div>
                        <span class="key">主演 :</span>
                        <span class="value"> {{item.actors}}</span>
                    </div>
                </div>
            </div>
            <div class="show-date">
                <span>观影时间 :</span>
                <span class="date-item"></span>
            </div>

            <div class="plist-container">
                <table class="plist">
                    <thead>
                    <tr>
                        <th>放映时间</th>
                        <th>语言版本</th>
                        <th>放映厅</th>
                        <th>售价（元）</th>
                        <th>选座购票</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="(filmFields, index) in item.filmFields" :key="index">
                        <td>
                            <span class="begin-time">{{filmFields.beginTime}}</span>
                            <br>
                            <span class="end-time">{{filmFields.endTime}}散场</span>
                        </td>
                        <td>
                            <span class="lang">{{filmFields.language}}</span>
                        </td>
                        <td>
                            <span class="hall">{{filmFields.hallName}}</span>
                        </td>
                        <td>
                            <span class="sell-price"><span class="stonefont">{{filmFields.price}}</span></span>
                        </td>
                        <td>
                            <nuxt-link class="buy-btn normal"
                                       :to="{path:'/xseats/', query: {cinemaId: cinemasItem.data.cinemaInfo.cinemaId, fieldId: filmFields.fieldId}}">
                                选座购票
                            </nuxt-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            cinemasItem: {
                type: Object,
                default: () => {
                }
            }
        },
        data() {
            return {
                tabShow: 0
            }
        },
        methods: {
            tab(index) {
                this.tabShow = index;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .cinemaList-container {
        width: 1200px;
        margin: 0 auto;
        .movie-list-container {
            height: 280px;
            padding: 22px 5px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            overflow: hidden;
            -webkit-box-shadow: inset 0 0 100px 80px #ededed;
            box-shadow: inset 0 0 100px 80px #ededed;
            position: relative;
            .movie-list {
                white-space: nowrap;
                position: relative;
                display: table;
                left: 0;
                -webkit-transition: left .2s ease;
                transition: left .2s ease;
                .movie {
                    width: 162px;
                    height: 227px;
                    border: 4px solid #fff;
                    -webkit-box-shadow: 0 1px 3px 0 hsla(0, 0%, 66%, .5);
                    box-shadow: 0 1px 3px 0 hsla(0, 0%, 66%, .5);
                    display: inline-block;
                    -webkit-transform-origin: 50%;
                    -ms-transform-origin: 50%;
                    transform-origin: 50%;
                    -webkit-transform: scale(.82);
                    -ms-transform: scale(.82);
                    transform: scale(.82);
                    -webkit-transition: -webkit-transform .1s;
                    transition: -webkit-transform .1s;
                    transition: transform .1s;
                    transition: transform .1s, -webkit-transform .1s;
                    word-spacing: 0;
                    &.active {
                        -webkit-transform: scale(1);
                        -ms-transform: scale(1);
                        transform: scale(1);
                        border-color: #f24030;
                    }
                }
            }
        }
        .show-list {
            .movie-info {
                margin-top: 20px;
                border-bottom: 1px solid #e5e5e5;
                .movie-name {
                    display: inline-block;
                    margin: 0 20px 20px 0;
                    font-size: 26px;
                    font-weight: 400;
                    color: #333;
                }
                .score {
                    display: inline-block;
                    font-size: 24px;
                    color: #faaf00;
                    &:after {
                        content: "分";
                        font-size: 12px;
                    }
                }
                .movie-desc {
                    > div {
                        display: inline-block;
                        font-size: 14px;
                        color: #151515;
                        margin-bottom: 20px;
                        margin-right: 40px;
                    }
                    .key {
                        color: #999;
                    }
                }
            }
            .show-date {
                padding: 30px 0;
                font-size: 14px;
                color: #999;
                .date-item {
                    display: inline-block;
                    background-color: transparent;
                    border-radius: 100px;
                    color: #333;
                    padding: 2px 10px;
                    margin-left: 12px;
                    cursor: default;
                    &:hover,
                    &.active {
                        color: #fff;
                        background-color: #ff6637;
                    }
                }
            }
            .plist {
                width: 100%;
                border: none;
                border-spacing: 0;
                thead {
                    background-color: #f7f7f7;
                    color: #333;
                    font-size: 16px;
                    padding: 18px 0;
                    th {
                        padding: 16px 0;
                    }
                }
                tbody {
                    tr {
                        height: 82px;
                        &.even {
                            background-color: #f9f9f9;
                        }
                        td {
                            text-align: center;
                            width: 20%;
                            .begin-time {
                                font-size: 18px;
                                color: #333;
                                font-weight: 700;
                            }
                            .end-time {
                                font-size: 12px;
                                color: #999;
                            }
                            .hall, .lang {
                                font-size: 14px;
                                color: #333;
                            }
                            .sell-price {
                                font-size: 18px;
                                color: #ff6637;
                                font-weight: 700;
                                &:before {
                                    content: "\FFE5";
                                    font-size: 12px;
                                }
                            }

                            .buy-btn {
                                display: inline-block;
                                width: 80px;
                                height: 30px;
                                color: #fff;
                                background-color: #ff6637;
                                font-size: 14px;
                                line-height: 30px;
                                border-radius: 100px;
                                text-align: center;
                                &.normal {
                                    -webkit-box-shadow: 0 2px 10px -2px #ff6637;
                                    box-shadow: 0 2px 10px -2px #ff6637;
                                    &:hover {
                                        background-color: #f35d2f;
                                    }
                                }
                                &.full {
                                    background-color: #f3f3f3;
                                    color: #999
                                }
                                &.unavailable {
                                    background-color: #ffbab8
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
