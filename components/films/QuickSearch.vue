<template>
    <div class="tags-panel">
        <ul class="tags-lines">
            <li class="tags-line">
                <div class="tags-title">类型</div>
                <ul class="tags">
                    <li v-for="cat in quickSearch.catInfo" :key="cat.catId+'-cat'" :class="{'active': catActive == cat.catId}" @click="selectCat(cat.catId)">
                        <nuxt-link :to="{path:'/films'}">
                            {{cat.catName}}
                        </nuxt-link>
                    </li>
                </ul>
            </li>
            <li class="tags-line">
                <div class="tags-title">区域</div>
                <ul class="tags">
                    <li v-for="source in quickSearch.sourceInfo" :key="source.sourceId+'-source'" :class="{'active': sourceActive == source.sourceId}" @click="selectSource(source.sourceId)">
                        <nuxt-link :to="{path:'/films'}">
                            {{source.sourceName}}
                        </nuxt-link>
                    </li>
                </ul>
            </li>
            <li class="tags-line">
                <div class="tags-title">年代</div>
                <ul class="tags">
                    <li v-for="year in quickSearch.yearInfo" :key="year.yearId+'-year'" :class="{'active': yearActive == year.yearId}" @click="selectYear(year.yearId)">
                        <nuxt-link :to="{path:'/films'}">
                            {{year.yearName}}
                        </nuxt-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
    function getConditionListQueryParams (content) {
        return {
            catId: content.catActive || 99,
            sourceId: content.sourceActive || 99,
            yearId: content.yearActive || 99
        }
    }
    function getFilmsQueryParams (content) {
        return {
            showType: content.$router.history.current.query.showType || 1,//查询类型，1-正在热映，2-即将上映，3-经典影片
            sortId: 1,//排序方式，1-按热门搜索，2-按时间搜索，3-按评价搜索
            catId: content.catActive || 99,
            sourceId: content.sourceActive || 99,
            yearId: content.yearActive || 99,
            nowPage: content.currentPage,
            pageSize: 18,
            offset: 0
        }
    }
    export default {
        props: [
            'quickSearch',
            'showType'
        ],
        data() {
            return {
                catActive: this.$router.history.current.query.catId || 99,
                sourceActive: this.$router.history.current.query.sourceId || 99,
                yearActive: this.$router.history.current.query.yearId || 99,
            }
        },
        methods: {
            selectCat: function (catId) {
                this.catActive = catId;
                this.$router.push({path: '/films', query: {showType: this.showType, catId: catId, sourceId: this.sourceActive, yearId: this.yearActive}});
                const params = getFilmsQueryParams(this);
                this.$emit('getFilms', params);
            },
            selectSource: function (sourceId) {
                this.sourceActive = sourceId;
                this.$router.push({path: '/films', query: {showType: this.showType, catId: this.catActive, sourceId: sourceId, yearId: this.yearActive}});
                const params = getFilmsQueryParams(this);
                this.$emit('getFilms', params);
            },
            selectYear: function (yearId) {
                this.yearActive = yearId;
                this.$router.push({path: '/films', query: {showType: this.showType, catId: this.catActive, sourceId: this.sourceActive, yearId: yearId}});
                const params = getFilmsQueryParams(this);
                this.$emit('getFilms', params);
            },
        }
    }
</script>
<style lang="scss" scoped>
    .tags-panel {
        margin: 30px auto 0;
        width: 1120px;
        border: 1px solid #ddd;
        .tags-line {
            margin: 0 20px;
            padding: 16px 0;
            border-top: 1px dashed #ddd;
            &:first-child {
                border-top: 0;
            }
            .tags-title {
                height: 24px;
                line-height: 24px;
                float: left;
                color: #999;
                font-size: 14px;
            }
            ul.tags {
                width: 1020px;
                margin-left: 40px !important;
                li {
                    border-radius: 14px;
                    padding: 3px 9px;
                    display: inline-block;
                    margin-left: 12px;
                    a {
                        color: #333;
                        font-size: 14px;
                        display: inline-block;
                        padding: 2px 10px;
                        border-radius: 20px;
                        &:hover {
                            color: #ff6637;
                        }
                    }
                    &.active {
                        background-color: #ff6637;
                        a {
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
</style>
