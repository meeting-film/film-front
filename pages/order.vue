<template>
    <div class="order-container" id="app">
        <div class="order-progress-bar">
            <div class="step first done">
                <span class="step-num">1</span>
                <div class="bar"></div>
                <span class="step-text">选择影片场次</span>
            </div>
            <div class="step done">
                <span class="step-num">2</span>
                <div class="bar"></div>
                <span class="step-text">选择座位</span>
            </div>
            <div class="step done">
                <span class="step-num">3</span>
                <div class="bar"></div>
                <span class="step-text">14分钟内付款</span>
            </div>
            <div class="step last ">
                <span class="step-num">4</span>
                <div class="bar"></div>
                <span class="step-text">影院取票观影</span>
            </div>
        </div>


        <!--<div class="count-down-wrapper">-->
            <!--<div class="count-down" data-payleftseconds="839">-->
                <!--<p class="time-left">-->
                    <!--请在-->
                    <!--<span class="minute">13</span>-->
                    <!--分钟-->
                    <!--<span class="second">12</span>秒内完成支付-->
                <!--</p>-->
                <!--<p class="tip">超时订单会自动取消，如遇支付问题，请致电猫眼客服：1010-5335</p>-->
            <!--</div>-->
        <!--</div>-->

        <p class="warning">请仔细核对场次信息，出票后将<span class="attention">无法退票和改签</span></p>

        <table class="order-table" v-if="cinemaInfo">
            <thead>
            <tr>
                <th>影片</th>
                <th>时间</th>
                <th>影院</th>
                <th>座位</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="movie-name">{{cinemaInfo.cinemaName}}</td>
                <td class="showtime">{{cinemaInfo.fieldTime}}</td>
                <td class="cinema-name">{{cinemaInfo.filmName}}</td>
                <td>
                    <!--<span class="hall">7号厅</span>-->
                    <div class="seats">
                        <div>
                            <!--<span v-for="(item, index) in seatData.totalSeatsArr" :key="index" class="">-->
                                <!--<i>{{item.row + 1}}</i>排<i>{{item.column + 1}}</i>座-->
                            <!--</span>-->
                            <span>{{cinemaInfo.seatsName}}</span>
                        </div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>


        <div class="right">
            <div class="price-wrapper" v-if="cinemaInfo && cinemaInfo.orderPrice">
                <span>实际支付 :</span>
                <span class="price">{{cinemaInfo.orderPrice}}</span>
            </div>
            <div class="order-pay">
                <div class="pay-btn" @click="confirmOrder">扫码支付</div>
                <a href="javascript:;" class="qrcode" v-show="showQrcode">
                    <img :src=qrcodeImg alt="">
                </a>
            </div>
        </div>

        <form name="cashierForm" method="post" action="https://mpay.meituan.com/cashier/pc/index">
            <input type="hidden" name="token" value="">
            <input type="hidden" name="tradeno" value="">
            <input type="hidden" name="pay_token" value="">
            <input type="hidden" name="website" value="mtmaoyan">
            <input type="hidden" name="pay_success_url" value="http://www.maoyan.com/order/result/3401446999">
            <input type="hidden" name="nb_platform" value="www">
            <input type="hidden" name="nb_source" value="cashier-pcforcustomer">
        </form>


        <div class="modal-container" v-if="showModal">
            <div class="modal">
                <span class="icon"></span>

                <p class="tip">支付成功</p>
            </div>
        </div>
    </div>
</template>
<script>
    import Cookies from 'js-cookie'
    import { getData } from '../plugins/axios'
    export default {
        head () {
            return {
                title: '支付',
                meta: [
                    { hid: '支付', name: '支付', content: '支付' }
                ]
            }
        },
        data () {
            return {
                showModal: false,
                showQrcode: false,
                cinemaInfo: {},
                tryNums: 0,
                qrcodeImg: '',
            }
        },
        mounted () {
            this.getSeatList();
        },
        methods: {
            getSeatList () {
                this.cinemaInfo = JSON.parse((Cookies.get('cinemaInfo')));
            },
            confirmOrder () {
                let timer = null,
                    params = {
                        orderId: this.$router.history.current.query.orderId
                    },
                    _this = this;
                getData(process.env.baseUrl + '/order/getPayInfo', 'post', params).then((res) => {
                    if (!res) return;
                    if (res) {
                        if (res.status == 0) {
                            _this.showQrcode = true;
                            _this.qrcodeImg = res.imgPre + res.data.qRCodeAddress;
                            _this.tryNums++;
                            if (_this.qrcodeImg) {
                                clearTimeout(timer);
                                let resultParams = {
                                    orderId: res.data.orderId,
                                    tryNums: _this.tryNums,
                                };
                                timer = setTimeout(() => {
                                    getData(process.env.baseUrl + '/order/getPayResult', 'post', resultParams).then((res1) => {
                                        if (!res1) return;
                                        if (res1 && res1.data) {
                                            if (res1.data.orderStatus == 0) {
                                                if (res1.data.orderMsg) {
                                                    alert(res1.data.orderMsg);
                                                    _this.showQrcode = false;
                                                }
                                            } else if (res1.data.orderStatus == 1) {
                                                if (res1.data.orderMsg) {
                                                    alert(res1.data.orderMsg);
                                                    _this.$router.push({path: '/myorder', query: {orderId: res.data.orderId, tryNums: _this.tryNums}});
                                                }
                                            } else {
                                                if (res1.msg) {
                                                    alert(res1.msg);
                                                }
                                            }
                                        }
                                    });
                                }, 5000);
                            }
                        } else {
                            if (res.msg) {
                                alert(res.msg);
                                if (res.status && res.status == 700) {
                                    this.$router.push({path: '/login'});
                                }
                            }
                        }
                    }
                }, (err) => {
                    console.log(err);
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .order-container {
        padding-top: 61px;
        width: 1200px;
        margin: 0 auto;
        .order-progress-bar {
            height: 60px;
            width: 100%;
            margin: 40px 0;
            text-align: center;
            .step {
                float: left;
                width: 25%;
                .step-num {
                    color: #fff;
                    font-size: 12px;
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    line-height: 16px;
                    border-radius: 10px;
                    text-align: center;
                    background-color: #ffd8d7;
                    position: relative;
                    top: 10px;
                }
                .bar {
                    width: 0;
                    height: 4px;
                    border-left: 150px solid #ffd8d7;
                    border-right: 150px solid #ffd8d7;
                }
                .step-text {
                    font-size: 14px;
                    color: #999;
                    display: inline-block;
                    margin-top: 10px;
                }

                &.done {
                    .step-num {
                        background-color: #f03d37;
                    }
                    .bar {
                        border-color: #f03d37;
                    }
                    .step-text {
                        color: #f03d37;
                    }
                }
                &.first {
                    .bar {
                        border-left-color: transparent!important;
                    }
                }
                &.last {
                    .bar {
                        border-right-color: transparent!important;
                    }
                }
            }
        }
        .count-down-wrapper {
            width: 100%;
            height: 120px;
            padding-top: 20px;
            margin-bottom: 40px;
            background-color: #fff3f3;
            .count-down {
                padding-left: 55px;
                min-height: 41px;
                margin-left: 30px;
                background: url("../assets/img/cup.png") no-repeat;
                background-position: 0 17px;
            }
            .time-left {
                font-size: 16px;
                color: #666;
                margin-bottom: 4px;
                .minute, .second {
                    font-size: 32px;
                    color: #f03d37;
                    margin: 0 5px;
                }
            }
            .tip {
                font-size: 14px;
                color: #f03d37;
            }
        }
        .warning {
            font-size: 12px;
            color: #666;
            padding-left: 18px;
            background: url("../assets/img/warning.png") no-repeat;
            background-size: 12px;
            background-position-y: 2px;
            margin-bottom: 8px;
            .attention {
                color: #faaf00;
            }
        }
        .order-table {
            width: 100%;
            border: 1px solid #e5e5e5;
            border-spacing: 0;
            margin-bottom: 60px;
            thead {
                background-color: #f7f7f7;
                th {
                    font-size: 16px;
                    color: #333;
                    width: 25%;
                    padding: 14px 0;
                    font-weight: 400;
                }
            }
            td {
                text-align: center;
                padding: 20px 0;
                color: #333;
                .movie-name {
                    font-size: 16px;
                }
                .showtime {
                    font-size: 14px;
                    color: #f03d37;
                }
                .cinema-name {
                    font-size: 14px;
                }
                .hall {
                    display: inline-block;
                    font-size: 14px;
                    color: #424242;
                    font-weight: 700;
                    margin-right: 10px;
                    vertical-align: top;
                }
                .seats {
                    display: inline-block;
                    text-align: left;
                    span {
                        font-size: 12px;
                        margin-right: 2px;
                        i {
                            font-size: 16px;
                            font-style: normal;
                            margin: 0 2px;
                        }
                        &.border {
                            border-left: 1px solid #e5e5e5;
                            padding-left: 5px;
                        }
                    }
                }
            }
        }
        .right {
            text-align: right;
            margin-bottom: 50px;
            .price-wrapper {
                font-size: 14px;
                color: #333;
                margin-bottom: 17px;
                .price {
                    font-size: 36px;
                    color: #ff6637;
                    &:before {
                        content: "\FFE5";
                        font-size: 24px;
                    }
                }
            }
            .order-pay {
                position: relative;
                .pay-btn {
                    cursor: pointer;
                    display: inline-block;
                    width: 190px;
                    height: 42px;
                    line-height: 42px;
                    text-align: center;
                    color: #fff;
                    background-color: #ff6637;
                    border-radius: 100px;
                    -webkit-box-shadow: 0 2px 10px -2px #ff6637;
                    box-shadow: 0 2px 10px -2px #ff6637;
                    &:hover {
                        background-color: #f73f41;
                        -webkit-box-shadow: 0 2px 10px -2px #f73f41;
                        box-shadow: 0 2px 10px -2px #f73f41;
                    }
                }
                .qrcode {
                    position: absolute;
                    right: 20px;
                    bottom: 44px;
                    img {
                        width: 150px;
                    }

                }
            }
        }
        .modal-container {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1000;
            background-color: rgba(0,0,0,.4);
            .modal {
                width: 460px;
                height: 220px;
                padding: 30px 0;
                position: absolute;
                margin: auto;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: #fff;
                text-align: center;
                .icon {
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                    background: url("../assets/img/warning.png") no-repeat;
                }
                .tip {
                    font-size: 14px;
                    color: #666;
                    margin-bottom: 26px;
                    margin-top: 12px;
                }
                .ok-btn {
                    border-radius: 100px;
                    height: 42px;
                    line-height: 42px;
                    font-size: 16px;
                    width: 260px;
                    padding: 0;
                    cursor: default;
                    color: #fff;
                    background-color: #ff6637;
                    -webkit-box-shadow: 0 2px 10px -2px #ff6637;
                    box-shadow: 0 2px 10px -2px #ff6637;
                    &:hover {
                        background-color: #f73f41;
                        -webkit-box-shadow: 0 2px 10px -2px #f73f41;
                        box-shadow: 0 2px 10px -2px #f73f41;
                    }
                }
            }
        }
    }
</style>