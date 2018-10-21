<template>
    <div class="banner cinema-banner">
        <div class="wrapper clearfix" v-if="cinemaBanner && cinemaBanner.data">
            <div class="cinema-left">
                <div class="avatar-shadow">
                    <img class="avatar" :src="cinemaBanner.imgPre+cinemaBanner.data.cinemaInfo.imgUrl">
                    <!--<div class="avatar-num">查看全部50张图片</div>-->
                </div>
            </div>
            <div class="cinema-main clearfix">
                <div class="cinema-brief-container">
                    <h3 class="name text-ellipsis">{{cinemaBanner.data.cinemaInfo.cinemaName}}</h3>
                    <div class="address text-ellipsis">{{cinemaBanner.data.cinemaInfo.cinemaAdress}}</div>
                    <div class="telphone">电话：{{cinemaBanner.data.cinemaInfo.cinemaPhone}}</div>

                    <div class="features-group">
                        <div class="group-title">影院服务</div>

                        <div class="feature">
                            <span class="tag ">{{cinemaBanner.data.cinemaInfo.cinemaName}}</span>
                            <p class="desc text-ellipsis" title="免押金">免押金</p>
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
            cinemaBanner: {}
        }
    }
</script>
<style lang="scss" scoped>
    .banner {
        width: 100%;
        min-width: 1200px;
        background: #392f59 url(/assets/img/bg-banner.png) no-repeat 50%;
        .wrapper {
            width: 1200px;
            height: 320px;
            position: relative;
            top: 70px;
            margin: 0 auto;
            .cinema-left {
                width: 360px;
                float: left;
                overflow: hidden;
                z-index: 9;
                .avatar-shadow {
                    width: 300px;
                    height: 332px;
                    position: relative;
                    margin: 0 30px;
                    padding-bottom: 40px;
                    .avatar {
                        border: 4px solid #fff;
                        height: 292px;
                        width: 292px;
                    }
                    .avatar-num {
                        position: absolute;
                        left: 4px;
                        bottom: 44px;
                        width: 284px;
                        line-height: 32px;
                        background-color: rgba(0, 0, 0, .6);
                        color: #fff;
                        font-size: 14px;
                        text-align: center;
                    }
                }
            }
            .cinema-main {
                position: relative;
                float: left;
                max-width: 600px;
                .cinema-brief-container {
                    color: #fff;
                    .text-ellipsis {
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .name {
                        margin: 0;
                        font-size: 26px;
                        margin-bottom: 9px;
                        font-weight: 400;
                    }
                    .address, .telphone {
                        font-size: 14px;
                        margin-bottom: 6px;
                    }
                    .features-group {
                        position: relative;
                        .group-title {
                            font-size: 14px;
                            margin-bottom: 5px;
                            overflow: hidden;
                            width: 410px;
                            &:after {
                                border-top: 1px solid hsla(0, 0%, 100%, .7);
                                display: block;
                                content: "";
                                position: relative;
                                top: -10px;
                                left: 70px;
                            }
                        }
                        .feature {
                            font-size: 12px;
                            margin-bottom: 2px;
                            position: relative;
                            min-height: 22px;
                            line-height: 23px;
                            -webkit-transform-origin: 0;
                            -ms-transform-origin: 0;
                            transform-origin: 0;
                            -webkit-transform: scale(.8);
                            -ms-transform: scale(.8);
                            transform: scale(.8);
                            .tag {
                                display: inline-block;
                                border: 1px solid hsla(0, 0%, 100%, .6);
                                border-radius: 2px;
                                min-width: 60px;
                                height: 22px;
                                line-height: 23px;
                                text-align: center;
                            }
                            .desc {
                                display: inline-block;
                                max-width: 438px;
                                margin-left: 5px;
                                vertical-align: middle;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
