<template>
  <div class="tags-panel">
    <ul class="tags-lines">
      <li class="tags-line">
        <div class="tags-title">类型</div>
        <ul class="tags">
          <li v-for="(type,index) in typeList" :key="type.catId" :class="{active:type.isActive}" @click="isActive(index)">
            <a :href="type.hrefStr">{{type.tagName}}</a>
          </li>
        </ul>
      </li>
      <li class="tags-line">
        <div class="tags-title">区域</div>
        <ul class="tags">
          <li v-for="(area,index) in areaList" :key="area.catId" :class="{active:area.isActive}" @click="isActive(index)">
            <a :href="area.hrefStr">{{area.tagName}}</a>
          </li>
        </ul>
      </li>
      <li class="tags-line">
        <div class="tags-title">年代</div>
        <ul class="tags">
          <li v-for="(time,index) in timeList" :key="time.catId" :class="{active:time.isActive}" @click="isActive(index)">
            <a :href="time.hrefStr">{{time.tagName}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style>
  a{
    color:#333;
    text-decoration:none;
  }
  ul,li{
    list-style:none;
  }
  .tags-panel{
    margin:0 auto;
    margin-top:50px;
    width: 1120px;
    height: 230px;
    border: 1px solid #ddd;
  }
  .tags-panel .tags-title {
    height: 24px;
    line-height: 24px;
    float: left;
    color: #999;
    font-size: 14px;
  }

  .tags-panel .tags-line{
    margin: 0 20px;
    padding: 16px 0;
    border-bottom: 1px dashed #ddd;
  }

  .tags-line ul,li{
      float: left;
      list-style:none
  }

  .tags-line ul{
    width: 1020px;
  }

  .tags li{
    float:left;
    height:20px;
    line-height:20px;
    text-align:center;
    margin-left: 10px;
    padding: 0 10px 5px 10px;
    border-radius:10px 10px;
  }
  .tags li a {
    display:inline-block;
    width:100%;
    height:100%;
  }
  .tags li a:hover {
    color: #f00;
  }

  .tags li.active{
    background:red;
  }
  .tags li.active a{
    color:#fff;
  }
</style>
<script>
export default {
  data : function () {
    return {
      typeList:[
        {
          tagName:"全部",
          hrefStr:"?showType=1",
          isActive:true
        },{
          tagName:"爱情",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"喜剧",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"动画",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"剧情",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"恐怖",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"惊悚",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"科幻",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"动作",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"悬疑",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"犯罪",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"冒险",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"战争",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"奇幻",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"运动",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"家庭",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"古装",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"武侠",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"西部",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"历史",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"传记",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"歌舞",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"黑色电影",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"短片",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"纪录片",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"其他",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        }
      ],
      areaList:[
        {
          tagName:"全部",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"大陆",
          hrefStr:"?catId=2",
          isActive:true
        },{
          tagName:"美国",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"韩国",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"日本",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"中国香港",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"中国台湾",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"泰国",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"印度",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"法国",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"英国",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"俄罗斯",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"意大利",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"西班牙",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"德国",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"波兰",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"澳大利亚",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"伊朗",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"其他",
          hrefStr:"?catId=2",
          isActive:false
        }
      ],
      timeList:[
        {
          tagName:"全部",
          hrefStr:"?catId=2",
          isActive:true
        },{
          tagName:"2018以后",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"2018",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"2017",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"2016",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"2015",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"2014",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"2013",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"2012",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"2011",
          hrefStr:"?catId=2",
          isActive:false
        }
      ]
    }
  },
  methods:{
    isActive:function (index) {

    },
  }
}
</script>
