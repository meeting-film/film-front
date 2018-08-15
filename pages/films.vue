<template>
  <div>
    <div class="subnav">
      <ul class="navbar">
        <li>
          <nuxt-link class="active" :to="{path:'/films?showType/1'}">正在热映</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{path:'/films?showType/2'}">即将上映</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{path:'/films?showType/3'}">经典影片</nuxt-link>
        </li>
      </ul>
    </div>
    <section class="container">
      <div>
        <quick-search :quickSearchData="quickSearchData"/>
        <FilmItems/>
      </div>
    </section>
  </div>
</template>

<script>
  import QuickSearch from '~/components/films/QuickSearch.vue'
  import FilmItems from '~/components/films/FilmItems.vue'
  import API from '../api/films/films'

  export default {
    head () {
      return {
        title: '电影',
        meta: [
          { hid: '电影', name: '电影', content: '电影' }
        ]
      }
    },
    data () {
      return {
        isActive: '',
        quickSearchData: {
          catInfo:[],
          sourceInfo:[],
          yearInfo:[]
        }
      }
    },
    components: {
      QuickSearch,
      FilmItems
    },
    asyncData () {
      return API.getConditionList().then((res) => {
        if (res) {
          if (res.status == 0) {
            if (res.data) {
              return { quickSearchData: res.data }
            }
          }
        }
      })
        .catch((e) => {
          // error({ statusCode: 404, message: 'Post not found' })
        })
    },
    methods: {
      tab (index) {
        this.isActive = index;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .subnav {
    margin-top: 81px;
    background-color: #47464a;
    height: 60px;
    width: 100%;
    min-width: 1200px;
    text-align: center;
    .navbar {
      display: inline-block;
      overflow: hidden;
      li {
        float: left;
        a {
          display: block;
          font-size: 16px;
          color: #999;
          height: 60px;
          line-height: 60px;
          padding: 0 40px;
          &:hover {
            color: #fff;
          }
          &.active {
            color: #ef4238;
            position: relative;
            cursor: default;
            &:before {
              content: "";
              width: 2px;
              height: 0;
              display: inline-block;
              position: absolute;
              left: 50%;
              margin-left: -5px;
              top: 53px;
              border-bottom: 7px solid #fff;
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
              border-top: none;
            }
          }
        }
      }
    }
  }
  .container {
    min-height: 100px;
    background-color: #fff;
  }
</style>
