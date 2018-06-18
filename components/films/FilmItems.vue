<template>
  <div class="film-panel">
    <ul class="film-items">
      <li v-for="(film,index) in filmList" :key="index" class="film-item">
        <a href="">
          <img :src="film.url" :alt="film.filmName" />
          <span class="film-name">{{ film.filmName }}</span>
        </a>
        <span class="film-score">{{ film.filmScore }}</span>
      </li>
    </ul>
  </div>
</template>
<style>
  .film-panel{
    width: 1180px;
    margin: 0 auto;
  }
  .film-items{
    margin-bottom: 50px;
    overflow: hidden;
  }
  .film-items .film-item{
    height: 285px;
    width: 160px;
    margin: 30px 0 0 31px;
  }
  .film-items .film-item a:visited{
    color: #333;
  }
  .film-items .film-item img{
    height: 220px;
    width: 160px;
  }
  .film-items .film-item .film-name{
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
  }
  .film-items .film-item .film-score{
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
</style>
<script>
export default {
  data () {
    return {
      filmList : [
        {
          url       : "http://img.meetingshop.cn/films/floor/1-1.jpg",
          filmName  : "侏罗纪世界2",
          filmScore : "8.6"
        },{
          url       : "http://img.meetingshop.cn/films/floor/1-2.jpg",
          filmName  : "猛虫过江",
          filmScore : "8.2"
        },{
          url       : "http://img.meetingshop.cn/films/floor/1-3.jpg",
          filmName  : "厕所英雄",
          filmScore : "8.2"
        },{
          url       : "http://img.meetingshop.cn/films/floor/1-4.jpg",
          filmName  : "超时空同居",
          filmScore : "8.6"
        },{
          url       : "http://img.meetingshop.cn/films/floor/1-5.jpg",
          filmName  : "泄密者",
          filmScore : "8.0"
        },{
          url       : "http://img.meetingshop.cn/films/floor/1-6.jpg",
          filmName  : "复仇者联盟3：无限战争",
          filmScore : "8.6"
        },{
          url       : "http://img.meetingshop.cn/films/floor/2-1.jpg",
          filmName  : "幸福马上来",
          filmScore : "7.2"
        },{
          url       : "http://img.meetingshop.cn/films/floor/2-2.jpg",
          filmName  : "动物世界",
          filmScore : "暂无评分"
        },{
          url       : "http://img.meetingshop.cn/films/floor/2-3.jpg",
          filmName  : "深海越狱",
          filmScore : "6.4"
        },{
          url       : "http://img.meetingshop.cn/films/floor/2-4.jpg",
          filmName  : "哆啦A梦：大雄的金银岛",
          filmScore : "8.1"
        },{
          url       : "http://img.meetingshop.cn/films/floor/2-5.jpg",
          filmName  : "第七个小矮人",
          filmScore : "8.4"
        },{
          url       : "http://img.meetingshop.cn/films/floor/2-6.jpg",
          filmName  : "超人总动员2",
          filmScore : "暂无评分"
        },{
          url       : "http://img.meetingshop.cn/films/floor/3-1.jpg",
          filmName  : "龙虾刑警",
          filmScore : "暂无评分"
        },{
          url       : "http://img.meetingshop.cn/films/floor/3-2.jpg",
          filmName  : "吃货宇宙",
          filmScore : "暂无评分"
        },{
          url       : "http://img.meetingshop.cn/films/floor/3-3.jpg",
          filmName  : "金蝉脱壳2",
          filmScore : "暂无评分"
        },{
          url       : "http://img.meetingshop.cn/films/floor/3-4.jpg",
          filmName  : "寂静之地",
          filmScore : "7.3"
        },{
          url       : "http://img.meetingshop.cn/films/floor/3-5.jpg",
          filmName  : "完美陌生人",
          filmScore : "8.5"
        },{
          url       : "http://img.meetingshop.cn/films/floor/3-6.jpg",
          filmName  : "爱情公寓",
          filmScore : "暂无评分"
        },{
          url       : "http://img.meetingshop.cn/films/floor/4-1.jpg",
          filmName  : "恐怖浴室",
          filmScore : "3.6"
        },{
          url       : "http://img.meetingshop.cn/films/floor/4-2.jpg",
          filmName  : "潜艇总动员：海底两万里",
          filmScore : "8.2"
        },{
          url       : "http://img.meetingshop.cn/films/floor/4-3.jpg",
          filmName  : "后来的我们",
          filmScore : "8.1"
        },{
          url       : "http://img.meetingshop.cn/films/floor/4-4.jpg",
          filmName  : "狂暴巨兽",
          filmScore : "9.0"
        },{
          url       : "http://img.meetingshop.cn/films/floor/4-5.jpg",
          filmName  : "游侠索罗：星球大战外传",
          filmScore : "7.9"
        },{
          url       : "http://img.meetingshop.cn/films/floor/4-6.jpg",
          filmName  : "血十三",
          filmScore : "暂无评分"
        },{
          url       : "http://img.meetingshop.cn/films/floor/5-1.jpg",
          filmName  : "泡菜爱上小龙虾",
          filmScore : "暂无评分"
        },{
          url       : "http://img.meetingshop.cn/films/floor/5-2.jpg",
          filmName  : "快乐星球之三十六号",
          filmScore : "暂无评分"
        },{
          url       : "http://img.meetingshop.cn/films/floor/5-3.jpg",
          filmName  : "一纸婚约",
          filmScore : "5.4"
        },{
          url       : "http://img.meetingshop.cn/films/floor/5-4.jpg",
          filmName  : "新乌龙院之笑闹江湖",
          filmScore : "暂无评分"
        },{
          url       : "http://img.meetingshop.cn/films/floor/5-5.jpg",
          filmName  : "爵迹2",
          filmScore : "暂无评分"
        },{
          url       : "http://img.meetingshop.cn/films/floor/5-6.jpg",
          filmName  : "狄仁杰之四大天王",
          filmScore : "暂无评分"
        }
      ]
    }
  }
}
</script>
