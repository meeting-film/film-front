<template>
  <div class="banner">
    <div class="slider slider-banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in banners" :key="index">
            <nuxt-link active-class="is-active" :to=item.bannerUrl class="bk1" style="display:block;height: 100%;width: 100%;" exact>
              <img :src=item.bannerAddress alt="">
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
      banners: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {

      }
    },
    computed: {

    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: 1000,
        effect: 'fade',
        loop: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        pagination: '.swiper-pagination',
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
      margin-bottom: 88px;
      .swiper-container {
        height: 100%;
        max-width: 1600px;
        .bk1 {
          background: url('../../assets/img/swiper/bk1.jpg') center no-repeat;
        }
        .bk2 {
          background: url('../../assets/img/swiper/bk2.jpg') center no-repeat;
        }
        .bk3 {
          background: url('../../assets/img/swiper/bk3.jpg') center no-repeat;
        }
      }
    }
  }
</style>
