<template>
    <div class="film-panel">
        <ul class="film-items" v-if="$store.state.filmList.data && $store.state.filmList.data.length > 0">
            <li v-for="(film,index) in $store.state.filmList.data" :key="index" class="film-item">
                <nuxt-link :to="{path:'/filmItem/'+film.filmId}" target="_blank">
                    <img :src=" $store.state.filmList.imgPre + film.imgAddress " :alt="film.filmName"/>
                    <span class="film-name">{{ film.filmName }}</span>
                </nuxt-link>
                <span class="film-score">{{ film.filmScore }}</span>
            </li>
        </ul>
        <div class="no-cinemas" v-else>
            抱歉，没有找到相关结果，请尝试用其他条件筛选。
        </div>
    </div>
</template>
<script>
    import Cookies from 'js-cookie'
    export default {
        props: [
            'showType'
        ],
        data () {
            return {
                currentPage: 1
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
            },
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
    .film-panel {
        width: 1180px;
        margin: 0 auto;
        .film-items {
            margin-bottom: 50px;
            overflow: hidden;
            .film-item {
                display: inline-block;
                vertical-align: middle;
                width: 160px;
                margin: 30px 0 0 31px;
                a:visited {
                    color: #333;
                }
                .film-name {
                    display: inline-block;
                    width: 100%;
                    height: 21px;
                    line-height: 21px;
                    margin-top: 10px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-align: center;
                    font-size: 16px;
                    color: #666;
                }
                .film-score {
                    display: inline-block;
                    width: 100%;
                    height: 24px;
                    line-height: 21px;
                    margin-top: 10px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-align: center;
                    font-size: 16px;
                    color: rgb(255, 180, 0);
                }
            }
        }
        .no-cinemas {
            margin: 40px 30px;
            font-size: 16px;
            color: #333;
        }
    }
</style>
