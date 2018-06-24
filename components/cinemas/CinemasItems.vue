<template>
  <div class="cinema-list">
    <h2 class="cinema-list-header">影院列表</h2>
    <div v-for="(cinema,index) in cinemaList" :key="index" class="cinema-cell">
      <div class="cinema-info">
        <a :href="cinema.cinemaUrlPre/cinema.uuid" class="cinema-name">{{cinema.cinemaName}}</a>
        <p class="cinema-address">地址：{{cinema.cinemaAddress}}</p>
      </div>
      <div class="buy-btn">
        <a href="">选座购票</a>
      </div>
      <div class="price">
        <span>￥{{cinema.cinemaPrice}}</span>起
      </div>
    </div>
  </div>
</template>
<style>
  .cinema-list-header{
    height: 20px;
    line-height: 20px;
    padding-left: 5px;
    border-left: 5px solid red;
  }
  .cinema-cell{
    height: 90px;
    line-height: 90px;
    border-bottom: 1px dashed #666;
  }
  .cinema-cell .cinema-info{
    width: 800px;
    float: left;
  }
  .cinema-cell .cinema-info a{
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
  }
  .cinema-cell .cinema-info a:hover{
    color: #ff0000;
  }
  .cinema-cell .cinema-info p{
    display: inline-block;
    font-size: 14px;
    line-height: 14px;
    width: 800px;
    color: #999;
    float: left;
  }
  .cinema-cell .buy-btn a{
    display: inline-block;
    margin-top: 30px;
    width: 80px;
    height: 30px;
    line-height: 30px;
    float: right;
    color: #fff;
    text-decoration:none;
    background-color: #f03d37;
    font-size: 14px;
    border-radius: 100px;
    text-align: center;
    -webkit-box-shadow: 0 2px 10px -2px #f03d37;
    box-shadow: 0 2px 10px -2px #f03d37;
  }
  .cinema-cell .price{
    width: 90px;
    font-size: 16px;
    float: right;
  }
  .cinema-cell .price span{
    color: #ff0000;
    margin-right: 10px;
  }
</style>
<script>
export default {
  data() {
    return {
      cinemaList:[
        {
          uuid            : '1',
          cinemaName     : '青春光影电影院',
          cinemaAddress  : '东城区滨河路乙1号雍和航星园74-76号楼',
          cinemaPrice    : '48',
          cinemaUrlPre   : 'http://www.meetingshop.cn/cinemas/'
        },
        {
          uuid            : '2',
          cinemaName     : '万达影院(京港城店)',
          cinemaAddress  : '丰台区光彩路京港城生活广场6楼（京深海鲜市场对面）',
          cinemaPrice    : '30',
          cinemaUrlPre   : 'http://www.meetingshop.cn/cinemas/'
        },
        {
          uuid            : '2',
          cinemaName     : '万达影院(京港城店)',
          cinemaAddress  : '丰台区光彩路京港城生活广场6楼（京深海鲜市场对面）',
          cinemaPrice    : '30',
          cinemaUrlPre   : 'http://www.meetingshop.cn/cinemas/'
        },
        {
          uuid            : '3',
          cinemaName     : '百誉朗克影城',
          cinemaAddress  : '朝阳区林萃西里16号楼华创生活广场F1层',
          cinemaPrice    : '33',
          cinemaUrlPre   : 'http://www.meetingshop.cn/cinemas/'
        },
        {
          uuid            : '4',
          cinemaName     : '门头沟影剧院',
          cinemaAddress  : '门头沟区新桥大街12号',
          cinemaPrice    : '33',
          cinemaUrlPre   : 'http://www.meetingshop.cn/cinemas/'
        },
        {
          uuid            : '5',
          cinemaName     : '大观楼电影院',
          cinemaAddress  : '西城区前门大街大栅栏街36号',
          cinemaPrice    : '34',
          cinemaUrlPre   : 'http://www.meetingshop.cn/cinemas/'
        },
        {
          uuid            : '6',
          cinemaName     : 'SFC上影影城(房山绿地店)',
          cinemaAddress  : '房山区黄辛庄路口绿地缤纷城3层',
          cinemaPrice    : '24',
          cinemaUrlPre   : 'http://www.meetingshop.cn/cinemas/'
        },
        {
          uuid            : '7',
          cinemaName     : '良乡影剧院',
          cinemaAddress  : '房山区良乡拱辰大街31号',
          cinemaPrice    : '23',
          cinemaUrlPre   : 'http://www.meetingshop.cn/cinemas/'
        },
        {
          uuid            : '8',
          cinemaName     : '枫花园汽车电影院(朝阳公园店)',
          cinemaAddress  : '朝阳区亮马桥路21号（朝阳公园北门对面）',
          cinemaPrice    : '51',
          cinemaUrlPre   : 'http://www.meetingshop.cn/cinemas/'
        },
        {
          uuid            : '9',
          cinemaName     : '百老汇电影中心(万国城店)',
          cinemaAddress  : '东城区香河园路1号当代MOMA北区T4座（近东直门公交枢纽）',
          cinemaPrice    : '45',
          cinemaUrlPre   : 'http://www.meetingshop.cn/cinemas/'
        },
        {
          uuid            : '10',
          cinemaName     : '百尚影城',
          cinemaAddress  : '通州区马驹桥镇百尚生活广场3楼',
          cinemaPrice    : '36',
          cinemaUrlPre   : 'http://www.meetingshop.cn/cinemas/'
        },
        {
          uuid            : '11',
          cinemaName     : 'DMG国际影城(悦秀店)',
          cinemaAddress  : '丰台区开阳路8号悦秀城6层',
          cinemaPrice    : '27',
          cinemaUrlPre   : 'http://www.meetingshop.cn/cinemas/'
        },
        {
          uuid            : '12',
          cinemaName     : '百丽宫影城(国贸店)',
          cinemaAddress  : '朝阳区建国门外大街1号国贸商城北区B1层B120',
          cinemaPrice    : '45',
          cinemaUrlPre   : 'http://www.meetingshop.cn/cinemas/'
        }
      ]
    }
  }
}
</script>
