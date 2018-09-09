<template>
    <section class="cinema-div">
        <div class="header-placeholder" style="height: 81px;" data-v-36ae7e9a=""></div>
        <div class="profile-container">
            <!-- 个人中心 start -->
            <div class="pc-left__aside" data-before="个人中心">
                <ul>
                    <li>
                        <nuxt-link to="/myorder" class="orders txt active">我的订单</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/profile" class="profile txt">基本信息</nuxt-link>
                    </li>
                </ul>
            </div>
            <!-- 个人中心 end -->
            <!-- 我的订单 start -->
            <div class="orders-container">
                <div class="profile-title">我的订单</div>

                <div class="order-box" data-orderid="3233291685">
                    <div class="order-header">
                        <span class="order-date">2018-07-08</span>
                        <span class="order-id">订单号:3233291685</span>
                        <span class="del-order" data-orderid="3233291685"></span>
                    </div>

                    <div class="order-body">
                        <div class="poster">
                            <img width="100" height="95" src="http://img.meetingshop.cn/films/imgs/5709b4f83a669c0dd8c78461da4ece33208095.jpg">
                        </div>

                        <div class="order-content">
                            <div class="movie-name">基于SpringBoot 十分钟搞定后台管理平台</div>
                            <div class="cinema-name">青春光线电影院</div>
                            <div class="hall-ticket">
                                <span>1号厅</span>
                                <span v-for="(item, index) in seatData.totalSeatsArr" :key="index" class="">
                                    {{item.row + 1}}排{{item.column + 1}}座
                                </span>
                            </div>
                            <div class="show-time">周日 7月8日 18:50</div>
                        </div>

                        <div class="order-price">￥31.9</div>

                        <div class="order-status">
                            已完成
                        </div>

                        <div class="actions">
                            <div>
                                <!--<a href="javascript:;" class="order-detail" data-act="orders-detail-click" data-bid="b_y190atas">查看详情</a>-->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="orders-pager">

                </div>
            </div>
            <!-- 我的订单 end -->
        </div>
    </section>
</template>
<script>
    import Cookies from 'js-cookie'
    export default {
        head () {
            return {
                title: '我的订单',
                meta: [
                    { hid: '我的订单', name: '我的订单', content: '我的订单' }
                ]
            }
        },
        data () {
            return {
                seatData: {}
            }
        },
        mounted () {
            this.getSeatList();
        },
        methods: {
            getSeatList () {
                this.seatData = JSON.parse(Cookies.get('xSeatList'));
            }
        }
    }
</script>
<style lang="scss" scoped>
    .profile-container {
        width: 1200px;
        margin: 0 auto;
        position: relative;
        background-color: #fff;
        &:after {
            content: '';
            display: table;
            clear: both;
        }
        .pc-left__aside {
            float: left;
            width: 200px;
            min-height: 800px;
            background-color: #f4f3f4;
            text-align: center;
            border-right: 1px solid #e1e1e1;
            &:before {
                content: attr(data-before);
                display: block;
                margin:30px 0;
                font-size: 22px;
                color: #222;
                font-weight: 400;
            }
            ul {
                margin:0;
                padding:0;
                li {
                    list-style: none;
                    .txt {
                        display: block;
                        font-weight: 400;
                        color: #333;
                        height: 40px;
                        line-height: 40px;
                        font-size: 18px;
                        text-decoration: none;
                        &.active {
                            color: #fff;
                            background-color: #ff6637;
                        }
                    }
                }
            }
        }
        .orders-container {
            float: left;
            padding-left: 40px;
            width: 922px;
            min-height: 900px;
            .profile-title {
                padding: 26px 0;
                color: #ff6637;
                font-size: 18px;
                border-bottom: 1px solid #e1e1e1;
                margin-bottom: 30px;
            }
            .order-box {
                border: 1px solid #e5e5e5;
                margin: 0 40px 30px 0;
                .order-header {
                    background-color: #f7f7f7;
                    font-size: 14px;
                    padding: 16px 20px;
                    .order-date {
                        color: #333;
                        display: inline-block;
                        margin-right: 30px;
                    }
                    .order-id {
                        color: #999;
                    }
                    .del-order {
                        width: 15px;
                        height: 16px;
                        background: url("/assets/img/remove.png") no-repeat;
                        float: right;
                    }
                }
                .order-body {
                    padding: 20px;
                    padding-right: 0;
                    >div {
                        display: inline-block;
                        vertical-align: top;
                    }
                    .poster {
                        border: 2px solid #fff;
                        -webkit-box-shadow: 0 1px 2px 0 hsla(0,0%,53%,.5);
                        box-shadow: 0 1px 2px 0 hsla(0,0%,53%,.5);
                        margin-right: 11px;
                        font-size: 0;
                        /*img {*/
                            /*width: 100%;*/
                            /*height: 100%;*/
                        /*}*/
                    }
                    .order-content {
                        width: 49%;
                        .movie-name {
                            font-size: 16px;
                            font-weight: 700;
                            color: #333;
                            margin: 4px 0 7px -6px;
                        }
                        .cinema-name, .hall-ticket {
                            font-size: 12px;
                            color: #999;
                            margin-bottom: 4px;
                        }
                        .show-time {
                            font-size: 12px;
                            color: #ff6637;
                        }
                    }

                    .order-price,.order-status {
                        font-size: 14px;
                        color: #333;
                        width: 12%;
                        line-height: 95px;
                    }
                    .actions {
                        line-height: 95px;
                        text-align: center;
                        .order-detail {
                            color: #333;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
    }
</style>