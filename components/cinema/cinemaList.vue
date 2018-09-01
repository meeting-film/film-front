<template>
  <div class="cinemaList-container" id="app">
    <div class="show-list">
      <div class="show-date" v-if="cinemasData.filmInfo && cinemasData.filmInfo.dateList">
        <span>观影时间 :</span>
        <span :class="{active : isActive == item.data}"  class="date-item" v-for="(item, index) in cinemasData.filmInfo.dateList" @click="showCinemaListByDate(item.data)" :key="index" >{{item.data}}</span>
      </div>

      <div class="plist-container" v-if="cinemasData.filmInfo && cinemasData.filmInfo.filmField">
        <table class="plist">
          <thead>
          <tr>
            <th>放映时间</th>
            <th>语言版本</th>
            <th>放映厅</th>
            <th>售价（元）</th>
            <th>选座购票</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="(item, index) in cinemasData.filmInfo.filmField" :key="index">
            <td>
              <span class="begin-time">{{item.beginTime}}</span>
              <br>
              <span class="end-time">{{item.endTime}}散场</span>
            </td>
            <td>
              <span class="lang">{{item.language}}</span>
            </td>
            <td>
              <span class="hall">{{item.hallName}}</span>
            </td>
            <td>
              <span class="sell-price"><span class="stonefont">{{item.price}}</span></span>
            </td>
            <td>
              <nuxt-link class="buy-btn normal" :to="{path:'/xseats/'+item.fieldId}">选座购票</nuxt-link>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      cinemasData: {
        type: Object,
        default: () => {}
      }
    },
    data () {
      return {
        isActive: ''
      }
    },
    methods: {
      showCinemaListByDate (date) {
        this.isActive = date;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .cinemaList-container {
    width: 1200px;
    margin: 0 auto;
    .show-list {
      .movie-info {
        margin-top: 20px;
        border-bottom: 1px solid #e5e5e5;
        .movie-name {
          display: inline-block;
          margin: 0 20px 20px 0;
          font-size: 26px;
          font-weight: 400;
          color: #333;
        }
        .score {
          display: inline-block;
          font-size: 24px;
          color: #faaf00;
          &:after {
            content: "分";
            font-size: 12px;
          }
        }
        .movie-desc {
          >div {
            display: inline-block;
            font-size: 14px;
            color: #151515;
            margin-bottom: 20px;
            margin-right: 40px;
          }
          .key {
            color: #999;
          }
        }
      }
      .show-date {
        padding: 30px 0;
        font-size: 14px;
        color: #999;
        .date-item {
          display: inline-block;
          background-color: transparent;
          border-radius: 100px;
          color: #333;
          padding: 2px 10px;
          margin-left: 12px;
          cursor: default;
          &:hover,
          &.active {
            color: #fff;
            background-color: #ff6637;
          }
        }
      }
      .plist {
        width: 100%;
        border: none;
        border-spacing: 0;
        thead {
          background-color: #f7f7f7;
          color: #333;
          font-size: 16px;
          padding: 18px 0;
          th {
            padding: 16px 0;
          }
        }
        tbody {
          tr {
            height: 82px;
            &.even {
              background-color: #f9f9f9;
            }
            td {
              text-align: center;
              width: 20%;
              .begin-time {
                font-size: 18px;
                color: #333;
                font-weight: 700;
              }
              .end-time {
                font-size: 12px;
                color: #999;
              }
              .hall, .lang {
                font-size: 14px;
                color: #333;
              }
              .sell-price {
                font-size: 18px;
                color: #ff6637;
                font-weight: 700;
                &:before {
                  content: "\FFE5";
                  font-size: 12px;
                }
              }

              .buy-btn {
                display: inline-block;
                width: 80px;
                height: 30px;
                color: #fff;
                background-color: #ff6637;
                font-size: 14px;
                line-height: 30px;
                border-radius: 100px;
                text-align: center;
                &.normal {
                  -webkit-box-shadow: 0 2px 10px -2px #ff6637;
                  box-shadow: 0 2px 10px -2px #ff6637;
                  &:hover{
                    background-color:#f73f41
                  }
                }
                &.full {
                  background-color: #f3f3f3;
                  color: #999
                }
                &.unavailable {
                  background-color: #ffbab8
                }
              }
            }
          }
        }
      }
    }
  }
</style>
