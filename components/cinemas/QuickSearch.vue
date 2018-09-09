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
    margin: 30px auto 0;
    width: 1120px;
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
      border-top: 1px dashed #ddd;
      &:first-child {
        border-top: 0;
      }
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
      a {
        display:inline-block;
        width:100%;
        height:100%;
        color: #333;
      }
      &:hover, &.active {
        background-color: #f35d2f;
        a {
          color: #fff;
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
