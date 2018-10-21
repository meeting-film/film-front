<template>
    <div>
        <div class="subnav">
            <ul class="navbar">
                <li @click="tab(index+1)" v-for="(item, index) in navbarItem" :key="index">
                    <nuxt-link :class="{active: isActive == index + 1}"
                               :to="{path: '/films', query: {showType: index+1}}">{{item.name}}
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <section class="container">
            <div>
                <quick-search :quickSearch="quickSearch"/>
                <FilmItems/>
            </div>
        </section>
    </div>
</template>

<script>
    import QuickSearch from '~/components/films/QuickSearch.vue'
    import FilmItems from '~/components/films/FilmItems.vue'
    import {getData} from '../plugins/axios'

    export default {
        head() {
            return {
                title: '电影',
                meta: [
                    {hid: '电影', name: '电影', content: '电影'}
                ]
            }
        },
        data() {
            return {
                isActive: 1,
                navbarItem: [
                    {name: '正在热映'},
                    {name: '即将上映'},
                    {name: '经典影片'},
                ],
                showType: 1,
                quickSearch: {
                    catInfo: [],
                    sourceInfo: [],
                    yearInfo: []
                }
            }
        },
        components: {
            QuickSearch,
            FilmItems
        },
        created() {
            this.showType = this.$router.history.current.query.showType;
            this.getConditionList();
        },
        methods: {
            tab(index) {
                this.isActive = index;
                this.getConditionList();
            },
            getConditionList() {
                let parmas = {
                    catId: this.$router.history.current.query.catId || 99,
                    sourceId: this.$router.history.current.query.sourceId || 99,
                    yearId: this.$router.history.current.query.yearId || 99,
                };
                getData(process.env.baseUrl + '/film/getConditionList', 'get', parmas).then((res) => {
                    if (res && res.status == 0) {
                        if (res.data) {
                            this.quickSearch = res.data;
                        }
                    }
                }, (err) => {
                    console.log(err);
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
    .subnav {
        margin-top: 61px;
        background-color: #47464a;
        height: 60px;
        width: 100%;
        min-width: 1200px;
        text-align: center;
        .navbar {
            display: inline-block;
            overflow: hidden;
            li {
                float: left;
                a {
                    display: block;
                    font-size: 16px;
                    color: #999;
                    height: 60px;
                    line-height: 60px;
                    padding: 0 40px;
                    &:hover {
                        color: #fff;
                    }
                    &.active {
                        color: #ff6637;
                        position: relative;
                        cursor: default;
                        &:before {
                            content: "";
                            width: 2px;
                            height: 0;
                            display: inline-block;
                            position: absolute;
                            left: 50%;
                            margin-left: -5px;
                            top: 53px;
                            border-bottom: 7px solid #fff;
                            border-left: 8px solid transparent;
                            border-right: 8px solid transparent;
                            border-top: none;
                        }
                    }
                }
            }
        }
    }

    .container {
        min-height: 100px;
        background-color: #fff;
    }
</style>
