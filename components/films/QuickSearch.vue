<template>
  <div class="tags-panel">
    <ul class="tags-lines">
      <li class="tags-line">
        <div class="tags-title">类型</div>
        <ul class="tags">
          <li v-for="(cat,index) in quickSearchData.catInfo" :key="index+'-cat'"  @click="setCurrentFlag(index)">
            <nuxt-link :to=cat.catId >{{cat.catName}}</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="tags-line">
        <div class="tags-title">区域</div>
        <ul class="tags">
          <li v-for="(source,index) in quickSearchData.sourceInfo" :key="index+'-source'"  @click="setCurrentFlag(index)">
            <nuxt-link :to=source.sourceId >{{source.sourceName}}</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="tags-line">
        <div class="tags-title">年代</div>
        <ul class="tags">
          <li v-for="(year,index) in quickSearchData.yearInfo" :key="index+'-year'"  @click="setCurrentFlag(index)">
            <nuxt-link :to=year.yearId >{{year.yearName}}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  .tags-panel{
    margin: 0 auto;
    width: 1120px;
    height: 230px;
    border: 1px solid #ddd;
    border-top: 0;
    .tags-line{
      margin: 0 20px;
      padding: 16px 0;
      border-bottom: 1px dashed #ddd;
      .tags-title {
        height: 24px;
        line-height: 24px;
        float: left;
        color: #999;
        font-size: 14px;
      }
      ul.tags {
        width: 1020px;
        margin-left: 40px!important;
        li{
          border-radius: 14px;
          padding: 3px 9px;
          display: inline-block;
          margin-left: 12px;
          &.active{
            background:red;
            a{
              color:#fff;
            }
          }
          a {
            color: #333;
            font-size: 14px;
            &:hover {
              color: #f00;
            }
          }
        }
      }
    }
  }
</style>
<script>
export default {
  props: {
    quickSearchData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      isActive: ''
    }
  },
  methods:{
    setCurrentFlag: function (index) {
      this.isActive = index
    },
  }
}
</script>
