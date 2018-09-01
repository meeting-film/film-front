<template>
  <div class="film-panel">
    <ul class="film-items">
      <li v-if="$store.state.filmList && $store.state.filmList.length > 0" v-for="(film,index) in $store.state.filmList" :key="index" class="film-item">
        <nuxt-link :to="{path:'/filmItem/'+film.filmId}" target="_blank">
          <img :src="film.imgAddress" :alt="film.filmName" />
          <span class="film-name">{{ film.filmName }}</span>
        </nuxt-link>
        <span class="film-score">{{ film.filmScore }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    mounted () {
      this.getFilms();
    },
    methods: {
      getFilms() {
        let params = {
          "showType": 1,//查询类型，1-正在热映，2-即将上映，3-经典影片
          "sortId": 1,//排序方式，1-按热门搜索，2-按时间搜索，3-按评价搜索
          "catId": "",
          "sourceId": "",
          "yearId": "",
          "nowPage":1,
          "pageSize":18,
          "offset": 0
        };
        this.$store.dispatch('getFilms', params);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .film-panel{
    width: 1180px;
    margin: 0 auto;
    .film-items{
      margin-bottom: 50px;
      overflow: hidden;
      .film-item{
        display: inline-block;
        vertical-align: middle;
        height: 285px;
        width: 160px;
        margin: 30px 0 0 31px;
        a:visited{
          color: #333;
        }
        img{
          height: 220px;
          width: 160px;
        }
        .film-name{
          display: inline-block;
          width: 160px;
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
        .film-score{
          display: inline-block;
          width: 160px;
          height: 24px;
          line-height: 21px;
          margin-top: 10px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
          font-size: 16px;
          color: rgb(255,180,0);
        }
      }
    }
  }
</style>
