<template>
    <div class="tags-panel">
        <ul class="tags-lines">
            <li class="tags-line">
                <div class="tags-title">品牌</div>
                <ul class="tags">
                    <li v-for="brand in cinemaTags.brandList"
                        :key="brand.brandId"
                        :class="{active:brandActive==brand.brandId}"
                        @click="selectBrand(brand.brandId)">
                        <nuxt-link :to="{path:'/cinemas'}">
                            {{brand.brandName}}
                        </nuxt-link>
                    </li>
                </ul>
            </li>
            <li class="tags-line">
                <div class="tags-title">区域</div>
                <ul class="tags">
                    <li v-for="area in cinemaTags.areaList"
                        :key="area.areaId"
                        :class="{active:areaActive==area.areaId}"
                        @click="selectArea(area.areaId)">
                        <nuxt-link :to="{path:'/cinemas'}">
                            {{area.areaName}}
                        </nuxt-link>
                    </li>
                </ul>
            </li>
            <li class="tags-line">
                <div class="tags-title">影厅</div>
                <ul class="tags">
                    <li v-for="halltype in cinemaTags.halltypeList"
                        :key="halltype.halltypeId"
                        :class="{active:halltypeActive==halltype.halltypeId}"
                        @click="selectHalltype(halltype.halltypeId)">
                        <nuxt-link :to="{path:'/cinemas'}">
                            {{halltype.halltypeName}}
                        </nuxt-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
    import Cookies from 'js-cookie'
    function getCinemaListQueryParams (content) {
        return {
            brandId: content.brandActive || 99,
            areaId: content.areaActive || 99,
            halltypeId: content.halltypeActive || 99,
            pageSize: 12,
            nowPage: Cookies.get('cinemaNowPage') || 1
        }
    }
    export default {
        props: {
            cinemaTags: {
                type: Object,
                default: () => {
                }
            },
        },
        data() {
            return {
                brandActive: this.$router.history.current.query.brandId || 99,
                areaActive: this.$router.history.current.query.areaId || 99,
                halltypeActive: this.$router.history.current.query.halltypeId || 99,
            }
        },
        methods: {
            selectBrand(brandId) {
                this.brandActive = brandId;
                this.$router.push({path: '/cinemas', query: {brandId: brandId, areaId: this.areaActive, halltypeId: this.halltypeActive}});
                const params = getCinemaListQueryParams(this);
                this.$emit('getCinemaList', params);
            },
            selectArea(areaId) {
                this.areaActive = areaId;
                this.$router.push({path: '/cinemas', query: {brandId: this.brandActive, areaId: areaId, halltypeId: this.halltypeActive}});
                const params = getCinemaListQueryParams(this);
                this.$emit('getCinemaList', params);
            },
            selectHalltype(halltypeId) {
                this.halltypeActive = halltypeId;
                this.$router.push({path: '/cinemas', query: {brandId: this.brandActive, areaId: this.areaActive, halltypeId: halltypeId}});
                const params = getCinemaListQueryParams(this);
                this.$emit('getCinemaList', params);
            },
        }
    }
</script>
<style lang="scss" scoped>
    .tags-panel {
        margin: 30px auto 0;
        width: 1120px;
        border: 1px solid #ddd;
        .tags-title {
            height: 24px;
            line-height: 24px;
            float: left;
            color: #999;
            font-size: 14px;
        }
        .tags-line {
            margin: 0 20px;
            padding: 16px 0;
            border-top: 1px dashed #ddd;
            &:first-child {
                border-top: 0;
            }
            ul {
                width: 1000px;
                overflow: hidden;
                li {
                    float: left;
                    list-style: none
                }
            }
        }
    }

    .tags {
        li {
            float: left;
            height: 20px;
            line-height: 20px;
            text-align: center;
            margin-left: 10px;
            margin-bottom: 5px;
            padding: 0 10px 5px 10px;
            border-radius: 10px 10px;
            a {
                display: inline-block;
                width: 100%;
                height: 100%;
                color: #333;
            }
            &:hover, &.active {
                background-color: #f35d2f;
                a {
                    color: #fff;
                }
            }
        }
    }
</style>
