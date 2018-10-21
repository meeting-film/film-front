<template>
    <div class="banner">
        <div class="slider slider-banner">
            <div class="swiper-container" v-if="homeBanner">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) in homeBanner.banners" :key="index">
                        <nuxt-link active-class="is-active" :to="{path: '//'+item.bannerUrl}"
                                   class="bk1"
                                   style="display:block;height: 100%;width: 100%;" exact>
                            <img :src="'http://img.meetingshop.cn/'+item.bannerAddress" alt="">
                        </nuxt-link>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.min.css';

    import Swiper from 'swiper'

    export default {
        name: 'Banner',
        props: {
            homeBanner: {
                type: Object,
                default: () => {
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: true,
                effect: 'fade',
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        }
    }

</script>
<style lang="scss" scoped>
    .banner {
        width: 100%;
        min-width: 1200px;
        .slider-banner {
            position: relative;
            z-index: 1;
            display: block;
            height: 440px;
            width: 100%;
            .swiper-container {
                height: 100%;
                max-width: 1600px;
                position: relative;
                img {
                    width: 100%;
                }
                .swiper-pagination {
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    padding: 15px 0;
                }
            }
        }
    }
</style>
