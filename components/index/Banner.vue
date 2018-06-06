<template>
  <div class="banner">
    <div class="slider slider-banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="" class="bk1" style="display:block;height: 100%;width: 100%;"></a>
          </div>
          <div class="swiper-slide">
            <a href="" class="bk2" style="display:block;height: 100%;width: 100%;"></a>
          </div>
          <div class="swiper-slide">
            <a href="" class="bk3" style="display:block;height: 100%;width: 100%;"></a>
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
<style lang="css">
  /* .wrapper .swiper-pagination-bullet-active {
    background: green;
  } */

  .bk1 {
    background: url('../../assets/img/swiper/bk1.jpg') no-repeat;
    /* background-size: 100% 100%; */
    background-position: center;
  }
  .bk2 {
    background: url('../../assets/img/swiper/bk2.jpg') no-repeat;
    /* background-size: 100% 100%; */
    background-position: center;
  }

  .bk3 {
    background: url('../../assets/img/swiper/bk3.jpg') no-repeat;
    /* background-size: 100% 100%; */
    background-position: center;
  }
</style>
<style scoped>
  .banner {
    width: 100%;
    min-width: 1200px;
  }

  .slider-banner.slider {
    position: relative;
    z-index: 1;
    display: block;
    height: 440px;
    width: 100%;
    margin-bottom: 88px !important;
  }

  .swiper-container {
    height: 100%;
    max-width: 1600px;
  }


</style>
