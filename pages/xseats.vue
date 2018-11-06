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
    import Cookies from 'js-cookie'
    import { getData } from '../plugins/axios'
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
            readTextFile(file, callback) {
                let rawFile = new XMLHttpRequest();
                rawFile.overrideMimeType("application/json");
                rawFile.open("GET", file, true);
                rawFile.onreadystatechange = function() {
                    if (rawFile.readyState === 4 && rawFile.status == "200") {
                        callback(rawFile.responseText);
                    }
                }
                rawFile.send(null);
            },
            getFieldInfo () {
                let params = {
                    "cinemaId": this.$router.history.current.query.cinemaId,//影院编号
                    "fieldId": this.$router.history.current.query.fieldId//场次编号
                };
                let _this = this, soldSeats = '';

                getData(process.env.baseUrl + '/cinema/getFieldInfo', 'post', params).then((res) => {
                    if (res && res.status == 0) {
                        _this.fieldInfo = res;
                        _this.$store.state.ticketPrice = res.data.hallInfo.price;
                        soldSeats = res.data.hallInfo.soldSeats;
                        soldSeats = soldSeats.split(',');
                        //nuxt脚手架会自动生成static文件夹，将json文件放在此目录下可以直接访问，如：('/4d.json')
                        //https://segmentfault.com/q/1010000013913258
                        _this.readTextFile("/json/4dx.json", function(text){
                            res.data.hallInfo.seatFile = JSON.parse(text);
                            if (res.data.hallInfo.seatFile) {
                                //卖掉的座添加一个isSold标识
                                //单排座
                                if (res.data.hallInfo.seatFile.single) {
                                    _this.$store.state.seatInfo.seatCharts.single = res.data.hallInfo.seatFile.single;
                                    for (let i = 0, len = soldSeats.length; i < len; i++) {
                                        for (let j = 0, len1 = res.data.hallInfo.seatFile.single.length; j < len1; j++) {
                                            for (let k = 0, len2 = res.data.hallInfo.seatFile.single[j].length; k < len2; k++) {
                                                if (soldSeats[i] == res.data.hallInfo.seatFile.single[j][k].seatId) {
                                                    res.data.hallInfo.seatFile.single[j][k].isSold = true;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                                //双排座
                                if (res.data.hallInfo.seatFile.couple) {
                                    _this.$store.state.seatInfo.seatCharts.couple = res.data.hallInfo.seatFile.couple;
                                    for (let i = 0, len = soldSeats.length; i < len; i++) {
                                        for (let j = 0, len1 = res.data.hallInfo.seatFile.couple.length; j < len1; j++) {
                                            for (let k = 0, len2 = res.data.hallInfo.seatFile.couple[j].length; k < len2; k++) {
                                                if (soldSeats[i] == res.data.hallInfo.seatFile.couple[j][k].seatId) {
                                                    res.data.hallInfo.seatFile.couple[j][k].isSold = true;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        });
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
                let _this = this,
                    totalSeatsArr = [],
                    singleList = this.$store.state.selectedSingleSeatList,
                    coupleList = this.$store.state.selectedCoupleSeatList,
                    soldSeats = [],
                    seatsName = [];
                    totalSeatsArr = totalSeatsArr.concat(singleList, coupleList);
                if (totalSeatsArr.length > 0) {
                    for (let i = 0, len = totalSeatsArr.length; i < len; i++) {
                        soldSeats.push(totalSeatsArr[i].seatId);
                    }
                }
                if (singleList.length > 0) {
                    seatsName.push('单排座');
                }
                if (coupleList.length > 0) {
                    seatsName.push('双排座');
                }
                let params = {
                    fieldId: this.$router.history.current.query.fieldId,
                    soldSeats: soldSeats.join(','),//购买的座位编号
                    seatsName: seatsName.join(',')//购买的座位名称
                };
                getData(process.env.baseUrl + '/order/buyTickets', 'post', params).then((res) => {
                    if (!res) return;
                    if (res.status == 0) {
                        Cookies.set('cinemaInfo', res.data);
                        _this.$router.push({path: '/order/confirm', query: {orderId: res.data.orderId}});
                    } else {
                        if (res.msg) {
                            alert(res.msg);
                        }
                        if (res.status == 700) {
                            _this.$router.push({path: '/login'});
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
