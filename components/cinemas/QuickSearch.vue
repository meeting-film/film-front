<template>
  <div class="tags-panel">
    <ul class="tags-lines">
      <li class="tags-line">
        <div class="tags-title">品牌</div>
        <ul class="tags">
          <li v-for="(brand,index) in $store.state.cinemaTags.brandList" :key="brand.brandId" :class="{active:brand.isActive}" @click="isActive(index)">
            <nuxt-link :to="{path:'/cinema/'+brand.brandId}">{{brand.brandName}}</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="tags-line">
        <div class="tags-title">区域</div>
        <ul class="tags">
          <li v-for="(area,index) in $store.state.cinemaTags.areaList" :key="area.areaId" :class="{active:area.isActive}" @click="isActive(index)">
            <nuxt-link :to="{path:'/cinema/'+area.areaId}">{{area.areaName}}</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="tags-line">
        <div class="tags-title">影厅</div>
        <ul class="tags">
          <li v-for="(halltype,index) in $store.state.cinemaTags.halltypeList" :key="halltype.halltypeId" :class="{active:halltype.isActive}" @click="isActive(index)">
            <nuxt-link :to="{path:'/cinema/'+halltype.halltypeId}">{{halltype.halltypeName}}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  .tags-panel{
    margin:0 auto;
    margin-top:50px;
    width: 1120px;
    height: 280px;
    border: 1px solid #ddd;
    .tags-title {
      height: 24px;
      line-height: 24px;
      float: left;
      color: #999;
      font-size: 14px;
    }
    .tags-line{
      margin: 0 20px;
      padding: 16px 0;
      border-bottom: 1px dashed #ddd;
      ul{
        width: 1000px;
        overflow: hidden;
        li{
          float: left;
          list-style:none
        }
      }
    }
  }
  .tags {
    li{
      float:left;
      height:20px;
      line-height:20px;
      text-align:center;
      margin-left: 10px;
      margin-bottom: 5px;
      padding: 0 10px 5px 10px;
      border-radius:10px 10px;
      &.active{
        background-color: #ff6637;
        a{
          color:#fff;
        }
      }
      a {
        display:inline-block;
        width:100%;
        height:100%;
        color: #333;
        &:hover {
          color: #ff6637;
        }
      }
    }
  }
</style>
<script>
  export default {
    props: {
      cinemasTagsData: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
