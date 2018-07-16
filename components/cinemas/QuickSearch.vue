<template>
  <div class="tags-panel">
    <ul class="tags-lines">
      <li class="tags-line">
        <div class="tags-title">品牌</div>
        <ul class="tags">
          <li v-for="(brand,index) in brandList" :key="brand.catId" :class="{active:brand.isActive}" @click="isActive(index)">
            <a :href="brand.hrefStr">{{brand.tagName}}</a>
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
        <div class="tags-title">影厅</div>
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
    height: 280px;
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
    width: 1000px;
  }

  .tags li{
    float:left;
    height:20px;
    line-height:20px;
    text-align:center;
    margin-left: 10px;
    margin-bottom: 5px;
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
      brandList:[
        {
          tagName:"全部",
          hrefStr:"?showType=1",
          isActive:true
        },{
          tagName:"大地影院",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"耀莱成龙国际影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"保利国际影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"万达影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"博纳国际影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"金逸影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"中影国际影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"CGV影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"橙天嘉禾影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"新华国际影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"星美国际影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"百老汇影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"UME国际影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"幸福蓝海国际影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"首都电影院",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"华谊兄弟影院",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"卢米埃影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"沃美影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"美嘉欢乐影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"嘉华国际影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"17.5影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"太平洋电影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"SFC上影影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"嘉美国际影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"东都影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"鲁信影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"华影国际影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"搜秀影城",
          hrefStr:"?showType=1&catId=2&sourceId=3",
          isActive:false
        },{
          tagName:"横店电影城",
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
          tagName:"地铁附近",
          hrefStr:"?catId=2",
          isActive:true
        },{
          tagName:"朝阳区",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"海淀区",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"丰台区",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"大兴区",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"东城区",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"西城区",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"通州区",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"房山区",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"昌平区",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"顺义区",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"怀柔区",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"门头沟",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"石景山区",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"密云区",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"平谷区",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"延庆区",
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
          tagName:"IMAX厅",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"CGS中国巨幕厅",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"杜比全景声厅",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"杜比影院",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"RealD厅",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"RealD 6FL厅",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"LUXE巨幕厅",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"4DX厅",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"DTS:X 临境音厅",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"儿童厅",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"4K厅",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"4D厅",
          hrefStr:"?catId=2",
          isActive:false
        },{
          tagName:"巨幕厅",
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
