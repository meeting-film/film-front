<template>
    <div class="cinema-wrapper">
        <div class="cinema-list">
            <h2 class="cinema-list-header">影院列表</h2>
            <div class="has-movies" v-if="cinemasData.length > 0">
                <div v-for="(cinema,index) in cinemasData" :key="index" class="cinema-cell">
                    <div class="cinema-info">
                        <nuxt-link :to="{path:'/cinema', query: {cinemaId:cinema.uuid}}" class="cinema-name">{{cinema.cinemaName}}</nuxt-link>
                        <p class="cinema-address">地址：{{cinema.address}}</p>
                    </div>
                    <div class="buy-btn">
                        <nuxt-link :to="{path:'/cinema', query: {cinemaId:cinema.uuid}}" class="cinema-name">选座购票
                        </nuxt-link>
                    </div>
                    <div class="price">
                        <span>￥{{cinema.minimumPrice}}</span>起
                    </div>
                </div>
            </div>
            <div class="no-cinemas" v-else>
                抱歉，没有找到相关结果，请尝试用其他条件筛选。
            </div>
        </div>
        <div class="cinema-pager" v-if="cinemasData && cinemasData.length > 0">
            <ul class="list-pager">
                <li v-if="currentPage > 1"><a v-on:click="currentPage--, pageClick()">上一页</a></li>
                <li v-if="currentPage == 1"><a class="banclick">上一页</a></li>
                <li v-for="index in indexs" v-bind:class="{ 'active': currentPage == index }" :key="index">
                    <a v-on:click="btnClick(index)">{{ index }}</a>
                </li>
                <li v-if="currentPage != totalPage"><a v-on:click="currentPage++, pageClick()">下一页</a></li>
                <li v-if="currentPage == totalPage"><a class="banclick">下一页</a></li>
                <li><a>共<i>{{totalPage}}</i>页</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Cookies from 'js-cookie'
    function getCinemaListQueryParams (content) {
        return {
            brandId: content.$router.history.current.query.brandId || 99,
            areaId: content.$router.history.current.query.areaId || 99,
            halltypeId: content.$router.history.current.query.halltypeId || 99,
            pageSize: 12,
            nowPage: content.currentPage
        }
    }
    export default {
        props: [
            'cinemasData',
            'totalPage'
        ],
        data() {
            return {
                currentPage: 1
            }
        },
        watch: {
            currentPage: function (oldValue, newValue) {
                const params = getCinemaListQueryParams(this);
                Cookies.set('cinemaNowPage', params.nowPage);
                this.$emit('getCinemaList', params);
            }
        },
        methods: {
            btnClick: function (data) {//页码点击事件
                const params = getCinemaListQueryParams(this);
                if (data != params.nowPage) {
                    params.nowPage = data
                }
                Cookies.set('cinemaNowPage', params.nowPage);
                this.$emit('getCinemaList', params);
            },
            pageClick: function () {
                // console.log('现在在' + this.currentPage + '页');
                const params = getCinemaListQueryParams(this);
                Cookies.set('cinemaNowPage', params.nowPage);
                this.$emit('getCinemaList', params);
            }
        },

        computed: {
            indexs: function () {
                let left = 1;
                let right = this.totalPage;
                let array = [];
                if (this.totalPage >= 5) {
                    if (this.currentPage > 3 && this.currentPage < this.totalPage - 2) {
                        left = this.currentPage - 2;
                        right = this.currentPage + 2;
                    } else {
                        if (this.currentPage <= 3) {
                            left = 1;
                            right = 5;
                        } else {
                            right = this.totalPage;
                            left = this.totalPage - 4;
                        }
                    }
                }
                while (left <= right) {
                    array.push(left);
                    left++
                }
                return array
            }

        }
    }
</script>
<style lang="scss" scoped>
    .cinema-list {
        margin: 30px auto;
        width: 1120px;
        .cinema-list-header {
            height: 20px;
            line-height: 20px;
            padding-left: 5px;
            border-left: 5px solid #ff6637;
        }
        .cinema-cell {
            height: 90px;
            line-height: 90px;
            overflow: hidden;
            border-bottom: 1px dashed #666;
            .cinema-info {
                width: 800px;
                float: left;
                .cinema-name {
                    display: inline-block;
                    text-decoration: none;
                    float: left;
                    font-size: 16px;
                    color: #000;
                    height: 18px;
                    line-height: 18px;
                    width: 800px;
                    padding: 20px 0;
                    margin-bottom: 10px;
                    &:hover {
                        color: #ff6637;
                    }
                }
                p {
                    display: inline-block;
                    font-size: 14px;
                    line-height: 14px;
                    width: 800px;
                    color: #999;
                    float: left;
                }
            }
            .buy-btn {
                float: right;
                .cinema-name {
                    display: inline-block;
                    margin-top: 30px;
                    width: 80px;
                    height: 30px;
                    line-height: 30px;
                    color: #fff;
                    text-decoration: none;
                    background-color: #ff6637;
                    font-size: 14px;
                    border-radius: 100px;
                    text-align: center;
                    -webkit-box-shadow: 0 2px 10px -2px #ff6637;
                    box-shadow: 0 2px 10px -2px #ff6637;
                    &:hover {
                        background-color: #f35d2f;
                    }
                }
            }
            .price {
                width: 90px;
                font-size: 16px;
                float: right;
                span {
                    color: #ff6637;
                    margin-right: 10px;
                }
            }
        }
        .no-cinemas {
            margin-top: 40px;
            font-size: 16px;
            color: #333;
        }
    }

    .cinema-pager {
        text-align: center;
        .list-pager {
            li {
                display: inline-block;
                height: 30px;
                margin: 0 4px;
                border: 1px solid #d8d8d8;
                line-height: 30px;
                text-align: center;
                color: #999;
                a {
                    display: block;
                    padding: 0 12px;
                    font-size: 14px;
                    color: #333;
                }
                &.active {
                    border-color: #ff6637;
                    background-color: #ff6637;
                    a {
                        color: #fff;
                    }
                }
                &.sep {
                    padding: 0 12px;
                }
            }
        }
    }
</style>
