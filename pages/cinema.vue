<template>
  <section class="container">
    <div class="cinema-container">
      <Banner :cinemaInfo="cinemasData.cinemaInfo"></Banner>
      <div class="main-content-container clearfix">
        <CinemaItem :cinemasData="cinemasData"></CinemaItem>
      </div>
    </div>
  </section>
</template>
<script>
  import Banner from '~/components/cinema/Banner'
  import CinemaItem from '~/components/cinema/cinemaList'
  import API from '../api/cinemas/cinemas'
  export default {
    head () {
      return {
        title: '详情',
        meta: [
          { hid: '详情', name: '详情', content: '详情' }
        ]
      }
    },
    data () {
      return {
        cinemasData: {
          cinemaInfo: {}
        }
      }
    },
    components: {
      Banner,
      CinemaItem
    },
    asyncData (context) {
      let params = {
        "cinemaId": 1,
        "movieId": 1,
      };
      return API.cinema(params).then((res) => {
        if (res) {
          if (res.status == 0) {
            if (res.data) {
              return { cinemasData: res.data }
            }
          } else {
            if (res.msg) {
              alert(res.msg)
            }
          }
        }
      })
        .catch((e) => {
          // error({ statusCode: 404, message: 'Post not found' })
        });
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    padding-top: 61px;
    background-color: #fff;
    .main-content-container {
      margin: 80px auto;
      width: 1200px;
      &:after {
        content: '';
        display: table;
        clear: both;
      }
      .related {
        margin-left: 840px;
        width: 360px;
      }
    }
  }
</style>
