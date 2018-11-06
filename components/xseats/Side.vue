<template>
    <div class="side" v-if="fieldInfo">
        {{fieldInfo}}
        <div class="movie-info clearfix">
            <div class="poster">
                <img :src="fieldInfo.imgPre + fieldInfo.data.filmInfo.imgAddress">
            </div>
            <div class="content">
                <p class="name text-ellipsis">{{fieldInfo.data.filmInfo.filmName}}</p>
                <div class="info-item">
                    <span>类型 :</span>
                    <span class="value">{{fieldInfo.data.filmInfo.filmType}}</span>
                </div>
                <div class="info-item">
                    <span>时长 :</span>
                    <span class="value">{{fieldInfo.data.filmInfo.filmLength}}</span>
                </div>
            </div>
        </div>

        <div class="show-info">
            <div class="info-item">
                <span>影院 :</span>
                <span class="value text-ellipsis">{{fieldInfo.data.cinemaInfo.cinemaName}}</span>
            </div>
            <div class="info-item">
                <span>影厅 :</span>
                <span class="value text-ellipsis">{{fieldInfo.data.hallInfo.hallName}}</span>
            </div>
            <!--<div class="info-item">-->
            <!--<span>版本 :</span>-->
            <!--<span class="value text-ellipsis">国语2D</span>-->
            <!--</div>-->
            <!--<div class="info-item">-->
            <!--<span>场次 :</span>-->
            <!--<span class="value text-ellipsis screen">今天 8月2 18:45</span>-->
            <!--</div>-->
            <div class="info-item">
                <span>票价 :</span>
                <span class="value text-ellipsis">￥{{fieldInfo.data.hallInfo.price}}/张</span>
            </div>
        </div>

        <div class="ticket-info">
            <div class="has-ticket" v-if="($store.state.selectedSingleSeatList && $store.state.selectedSingleSeatList.length > 0) ||
        ($store.state.selectedCoupleSeatList && $store.state.selectedCoupleSeatList.length > 0)">
                <span class="text">座位：</span>
                <div class="ticket-container">
          <span class="ticket" v-for="(item, indexSingle) in $store.state.selectedSingleSeatList"
                :key="indexSingle + '-single'">
            <i class="btn-delete" @click="handleDeleteSingleSeat(item)"></i>
            {{item.row + 1}}排{{item.column + 1}}座
          </span>
                    <span class="ticket" v-for="(item, indexCouple) in $store.state.selectedCoupleSeatList"
                          :key="indexCouple + '-couple'">
            <i class="btn-delete" @click="handleDeleteCoupleSeat(indexCouple)"></i>
            {{item.row + 1}}排{{item.column + 1}}座
          </span>
                </div>
            </div>
            <div class="no-ticket" v-else>
                <p class="buy-limit" v-if="fieldInfo && fieldInfo.data
                                            && fieldInfo.data.hallInfo
                                            && fieldInfo.data.hallInfo.seatFile
                                            && fieldInfo.data.hallInfo.seatFile.limit">
                    座位：一次最多选{{fieldInfo.data.hallInfo.seatFile.limit}}个座位
                </p>
                <p class="no-selected">请<span>点击左侧</span>座位图选择座位</p>
            </div>

            <div class="total-price">
                <span>总价 :</span>
                <span class="price">{{$store.getters.totalPrice}}</span>
            </div>
        </div>

        <div class="confirm-order">
            <!--<form class="login-form">-->
            <!--<input type="text" class="input-phone" placeholder="输入手机号">-->
            <!--<div class="captcha" style="display:none">-->
            <!--<input type="text" class="input-captcha" placeholder="验证码">-->
            <!--<img class="captcha-pic" src="http://www.meituan.com/account/appcaptcha?uuid=BE3F13A0946611E8B0D39564008C52497973942AF35240E19D0CEB9EF2B39E60&amp;captchaHash=1533199343605">-->
            <!--<span class="change-captcha">看不清楚？换一张</span>-->
            <!--</div>-->
            <!--<div class="code-inputer">-->
            <!--<input type="text" class="input-code" placeholder="填写验证码">-->
            <!--<span class="send-code disable">获取验证码</span>-->
            <!--</div>-->
            <!--</form>-->

            <div class="confirm-btn" v-if="($store.state.selectedSingleSeatList && $store.state.selectedSingleSeatList.length > 0) ||
           ($store.state.selectedCoupleSeatList && $store.state.selectedCoupleSeatList.length > 0)"
                 @click="handleConfirmXseat">确认选座
            </div>
            <div class="confirm-btn disable" v-else>确认选座</div>
        </div>
        <div class="modal-container" v-show="$store.state.showDialogFlag">
            <div class="modal">
                <span class="icon"></span>
                <p class="tip" v-if="fieldInfo && fieldInfo.data
                                    && fieldInfo.data.hallInfo
                                    && fieldInfo.data.hallInfo.seatFile
                                    && fieldInfo.data.hallInfo.seatFile.limit">
                    一次最多购买{{fieldInfo.data.hallInfo.seatFile.limit}}张票
                </p>
                <div class="ok-btn btn" @click="hideDialog">我知道了</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            fieldInfo: {
                type: Object,
                default: () => {
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        created() {
            // this.showDialog();
        },
        methods: {
            //确认选座
            handleConfirmXseat() {
                this.$emit('confirmXseat');
            },
            //删除单个座位
            handleDeleteSingleSeat(params) {
                this.$store.dispatch('deleteSingleSeat', params);
            },
            /**
             * 删除情侣座位
             * index:选中座位的索引
             * 如果index%2结果为偶数，向后加1，否则向前减1
             */
            handleDeleteCoupleSeat(index) {
                let params = {};
                if (index % 2 == 0) {
                    params.seatArr = [
                        this.$store.state.selectedCoupleSeatList[index],
                        this.$store.state.selectedCoupleSeatList[index + 1]
                    ]
                } else {
                    params.seatArr = [
                        this.$store.state.selectedCoupleSeatList[index],
                        this.$store.state.selectedCoupleSeatList[index - 1]
                    ]
                }
                this.$store.dispatch('deleteCoupleSeat', params);
            },
            //隐藏弹窗
            hideDialog() {
                this.$store.state.showDialogFlag = false;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .side {
        width: 378px;
        background-color: #f9f9f9;
        padding: 20px;
        display: inline-block;
        .movie-info {
            overflow: hidden;
            .poster {
                width: 115px;
                height: 135px;
                border: 2px solid #fff;
                -webkit-box-shadow: 0 2px 7px 0 hsla(0, 0%, 53%, .5);
                box-shadow: 0 2px 7px 0 hsla(0, 0%, 53%, .5);
                float: left;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .content {
                margin-left: 140px;
                .text-ellipsis {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .name {
                    font-size: 20px;
                    font-weight: 700;
                    color: #333;
                    margin: 0 0 14px;
                }
                .info-item {
                    font-size: 12px;
                    color: #999;
                    margin-bottom: 4px;
                    .value {
                        color: #151515;
                        margin-left: 2px;
                    }
                }
            }
        }
        .show-info {
            margin-top: 20px;
            .info-item {
                font-size: 12px;
                color: #999;
                margin-bottom: 9px;
                > span {
                    display: inline-block;
                    vertical-align: top;
                    font-size: 14px;
                }
                .text-ellipsis {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .value {
                    width: 85%;
                    color: #151515;
                    margin-left: 2px;
                }
                .screen {
                    color: #ff6637;
                }
            }
        }
        .ticket-info {
            padding: 20px 0 10px;
            border-top: 1px dashed #e5e5e5;
            border-bottom: 1px dashed #e5e5e5;
            .no-ticket {
                .buy-limit {
                    font-size: 14px;
                    color: #999;
                    margin: 0;
                }
                .no-selected {
                    font-size: 14px;
                    color: #333;
                    text-align: center;
                    margin: 28px 0 39px;
                    span {
                        color: #ff6637;
                    }
                }
            }
            .text {
                font-size: 14px;
                color: #999;
                float: left;
            }
            .ticket-container {
                margin-left: 42px;
                margin-bottom: 20px;
                position: relative;
                top: -5px;
                .ticket {
                    cursor: default;
                    position: relative;
                    font-size: 12px;
                    color: #ff6637;
                    display: inline-block;
                    width: 60px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    margin: 0 12px 10px 0;
                    background: url("../../assets/img/bg-seat.png") no-repeat;
                    &:hover {
                        .btn-delete {
                            background: url(../../assets/img/icon-close.png) no-repeat;
                            width: 16px;
                            height: 16px;
                            background-size: 16px;
                            position: absolute;
                            top: -7px;
                            right: -7px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        .total-price {
            font-size: 14px;
            color: #333;
            .price {
                color: #ff6637;
                font-size: 24px;
                &:before {
                    content: "\FFE5";
                    font-size: 14px;
                }
            }
        }
        .confirm-order {
            padding: 20px 0;
            text-align: center;
            .login-form {
                display: inline-block;
                width: 260px;
                input {
                    width: 218px;
                    height: 40px;
                    border: 1px solid #e5e5e5;
                    border-radius: 50px;
                    margin-bottom: 6px;
                    padding: 0 20px;
                    font-size: 14px;
                    color: #333;
                }
                .captcha {
                    width: 300px;
                    .input-captcha {
                        width: 48px;
                        display: inline-block;
                        margin-left: -20px;
                    }
                }
                .code-inputer {
                    display: inline-block;
                    line-height: 42px;
                    position: relative;
                    .send-code {
                        font-size: 14px;
                        position: absolute;
                        top: 0;
                        right: 10px;
                        cursor: pointer;
                        color: #ff6637;
                        &.disable {
                            color: #ccc;
                        }
                    }
                }
            }
            .confirm-btn {
                cursor: default;
                width: 260px;
                height: 42px;
                line-height: 42px;
                text-align: center;
                font-size: 16px;
                color: #fff;
                border-radius: 21px;
                position: relative;
                left: 50%;
                margin: 38px 0 0 -130px;
                background-color: #ff6637;
                -webkit-box-shadow: 0 2px 10px -2px #ff6637;
                box-shadow: 0 2px 10px -2px #ff6637;
                &:hover {
                    background-color: #f35d2f;
                    -webkit-box-shadow: 0 2px 10px -2px #f35d2f;
                    box-shadow: 0 2px 10px -2px #f35d2f;
                }
                &.disable {
                    background-color: #dedede;
                    -webkit-box-shadow: none;
                    box-shadow: none;
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
        background-color: rgba(0, 0, 0, .4);
        .modal {
            width: 460px;
            height: 215px;
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
                background: url("../../assets/img/icon-warn.png") no-repeat;
            }
            .tip {
                font-size: 14px;
                color: #666;
                margin-bottom: 26px;
                margin-top: 12px;
            }
            .btn {
                display: inline-block;
                border-radius: 100px;
                height: 42px;
                line-height: 42px;
                font-size: 16px;
                width: 260px;
                padding: 0;
                cursor: default;
                &.ok-btn {
                    color: #fff;
                    background-color: #ff6637;
                    -webkit-box-shadow: 0 2px 10px -2px #ff6637;
                    box-shadow: 0 2px 10px -2px #ff6637;
                }
            }
        }
    }
</style>
