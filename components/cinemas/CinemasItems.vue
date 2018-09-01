<template>
  <div class="cinema-list">
    <h2 class="cinema-list-header">影院列表</h2>
    <div v-for="(cinema,index) in cinemasData.cinemas" :key="index" class="cinema-cell">
      <div class="cinema-info">
        <nuxt-link :to="{path:'/cinema/'+cinema.uuid}" class="cinema-name">{{cinema.cinemaName}}</nuxt-link>
        <p class="cinema-address">地址：{{cinema.address}}</p>
      </div>
      <div class="buy-btn">
        <nuxt-link :to="{path:'/cinema/'+cinema.uuid}" class="cinema-name">选座购票</nuxt-link>
      </div>
      <div class="price">
        <span>￥{{cinema.minimumPrice}}</span>起
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .cinema-list{
    margin: 30px auto;
    width: 1120px;
    .cinema-list-header{
      height: 20px;
      line-height: 20px;
      padding-left: 5px;
      border-left: 5px solid #ff6637;
    }
    .cinema-cell{
      height: 90px;
      line-height: 90px;
      overflow: hidden;
      border-bottom: 1px dashed #666;
      .cinema-info{
        width: 800px;
        float: left;
        .cinema-name{
          display: inline-block;
          text-decoration:none;
          float: left;
          font-size: 16px;
          color: #000;
          height: 18px;
          line-height: 18px;
          width: 800px;
          padding: 20px 0;
          margin-bottom: 10px;
          &:hover{
            color: #ff6637;
          }
        }
        p{
          display: inline-block;
          font-size: 14px;
          line-height: 14px;
          width: 800px;
          color: #999;
          float: left;
        }
      }
      .buy-btn {
        float: right;
        .cinema-name {
          display: inline-block;
          margin-top: 30px;
          width: 80px;
          height: 30px;
          line-height: 30px;
          color: #fff;
          text-decoration:none;
          background-color: #ff6637;
          font-size: 14px;
          border-radius: 100px;
          text-align: center;
          -webkit-box-shadow: 0 2px 10px -2px #ff6637;
          box-shadow: 0 2px 10px -2px #ff6637;
        }
      }
      .price{
        width: 90px;
        font-size: 16px;
        float: right;
        span{
          color: #ff6637;
          margin-right: 10px;
        }
      }
    }
  }
</style>
<script>
export default {
  props: {
    cinemasData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
