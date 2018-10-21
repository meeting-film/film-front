<template>
  <div class="xseats-wrapper">
    <div class="xseats-container">
      <div class="order-progress-bar">
        <div class="step first done">
          <span class="step-num">1</span>
          <div class="bar"></div>
          <span class="step-text">选择影片场次</span>
        </div>
        <div class="step done">
          <span class="step-num">2</span>
          <div class="bar"></div>
          <span class="step-text">选择座位</span>
        </div>
        <div class="step ">
          <span class="step-num">3</span>
          <div class="bar"></div>
          <span class="step-text">14分钟内付款</span>
        </div>
        <div class="step last ">
          <span class="step-num">4</span>
          <div class="bar"></div>
          <span class="step-text">影院取票观影</span>
        </div>
      </div>

      <div class="main clearfix">
        <Hall :fieldInfo="fieldInfo"></Hall>
        <Side  :fieldInfo="fieldInfo" @confirmXseat="confirmXseat"></Side>
      </div>
    </div>
  </div>
</template>
<script>
    import Hall from '../components/xseats/Hall'
    import Side from '../components/xseats/Side'
    import { getData } from '../plugins/axios'
    import Cookies from 'js-cookie'
    import  Vue  from  'vue'

    import  VueJsonp  from  'vue-jsonp'

    Vue.use(VueJsonp)

    // const jsonp = require('jsonp');

    export default {
        data() {
            return {
                fieldInfo: {
                    data: {
                        filmInfo: {},
                        cinemaInfo: {},
                        hallInfo: {},
                        seatCharts:{}
                    }
                }
            }
        },
        head() {
            return {
                title: '选座购票',
                meta: [
                    {hid: '选座购票', name: '选座购票', content: '选座购票'}
                ]
            }
        },
        components: {
            Hall,
            Side
        },
        created () {
            this.getFieldInfo();
        },
        methods: {
            getFieldInfo () {
                let params = {
                    "cinemaId": this.$router.history.current.query.cinemaId,//影院编号
                    "fieldId": this.$router.history.current.query.fieldId//场次编号
                };
                let _this = this;
                getData(process.env.baseUrl + '/cinema/getFieldInfo', 'post', params).then((res) => {
                    if (res && res.status == 0) {
                        this.fieldInfo = res;
                        // getData('//img.meetingshop.cn/seats/imax.json', 'post').then((json) => {
                        //     if (json) {
                        //         this.fieldInfo.data.seatCharts = json;
                        //     }
                        // })
                        //
                        // jsonp('//img.meetingshop.cn/seats/imax.json',{prefix:'aa',name:'aa'},(err, data) => {
                        //     if (err) {
                        //         console.error(err.message);
                        //     } else {
                        //         that.articles=data.subjects
                        //     }
                        // });
                        this.$jsonp('//img.meetingshop.cn/seats/imax.json',
                            {callbackQuery: 'callback', callbackName: 'getSeats'}).then((res) => {
                            console.log(res)
                        })
                    } else {
                        if (res.msg) {
                            alert(res.msg);
                        }
                    }
                }, (err) => {
                    console.log(err);
                })
            },
            //确认选座
            confirmXseat() {
                let totalSeatsArr = [];
                totalSeatsArr = totalSeatsArr.concat(this.$store.state.selectedSingleSeatList, this.$store.state.selectedCoupleSeatList);
                let params = {
                    fieldId: this.$router.history.current.query.fieldId,
                    soldSeats: "10,12",
                    seatsName: "单排座"
                };
                getData(process.env.baseUrl + '/order/buyTickets', 'post', params).then((res) => {
                    if (!res) return;
                    if (res.status == 0) {
                        this.$router.push({path: '/order/confirm'});
                    } else {
                        if (res.msg) {
                            alert(res.msg);
                        }
                        if (res.status == 700) {
                            this.$router.push({path: '/login'});
                        }
                    }
                }, (err) => {
                    console.log(err);
                })
            },
        }
    }
</script>
<style lang="scss" scoped>
  .checked {
    color: #ff6637;
  }
  .xseats-wrapper {
    background-color: #fff;
    padding-top: 61px;
    .xseats-container {
      width: 1200px;
      margin: 0 auto;
      .order-progress-bar {
        height: 60px;
        width: 100%;
        margin: 40px 0;
        text-align: center;
        .step {
          float: left;
          width: 25%;
        }
        .step-num {
          color: #fff;
          font-size: 12px;
          display: inline-block;
          width: 16px;
          height: 16px;
          line-height: 16px;
          border-radius: 10px;
          text-align: center;
          background-color: #ffd8d7;
          position: relative;
          top: 10px;
        }
        .bar {
          width: 0;
          height: 4px;
          border-left: 150px solid #ffd8d7;
          border-right: 150px solid #ffd8d7;
        }
        .step-text {
          font-size: 14px;
          color: #999;
          display: inline-block;
          margin-top: 10px;
        }
        &.first {
          .bar {
            border-left-color: transparent!important;
          }
        }
        &.done {
          .step-num {
            background-color: #ff6637;
          }
          .bar {
            border-color: #ff6637;
          }
          .step-text {
            color: #ff6637;
          }
        }
      }
      .main {
        width: 100%;
        border: 1px solid #e5e5e5;
        font-size: 0;
      }
    }
  }
</style>
