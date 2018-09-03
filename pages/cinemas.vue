<template>
  <section class="cinema-div">
    <div class="cinema-panel">
      <QuickSearch />
      <CinemasItems :cinemasData="cinemasData"/>
    </div>
  </section>
</template>
<style>
  .cinema-div{
    background-color: #fff;
    padding: 61px 0;
  }
  .cinema-panel{
    margin: 0 auto;
    width: 1200px;
  }
  .cinema-list{
    margin: 50px 0;
  }
</style>
<script>
  import API from '../api/cinemas/cinemas'
  import CinemasItems from '~/components/cinemas/CinemasItems.vue'
  import QuickSearch from '~/components/cinemas/QuickSearch.vue'

  export default {
    head () {
      return {
        title: '影院',
        meta: [
          { hid: '影院', name: '影院', content: '影院' }
        ]
      }
    },
    components: {
      CinemasItems,
      QuickSearch
    },
    data () {
      return {
        cinemasData:{}
      }
    },
    asyncData () {
      let params = {
        "movieId": 1,//查询类型，1-正在热映，2-即将上映，3-经典影片
        "showDate": 1,//排序方式，1-按热门搜索，2-按时间搜索，3-按评价搜索
        "brandId": "",
        "hallType": "",
        "districtId": ""
      };
      return API.cinemas(params).then((res) => {
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
    },
    mounted () {
      this.getCinemaTags();
    },
    methods: {
      getCinemaTags() {
        this.$store.dispatch('getCinemaTags');
      }
    }
  }
</script>
