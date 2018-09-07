<template>
  <div>
    <div class="subnav">
      <ul class="navbar">
        <li @click="tab(index+1)" v-for="(item, index) in navbarItem" :key="index">
          <nuxt-link :class="{active: isActive == index + 1}" :to="{path: '/films', query: {showType: index+1}}">{{item.name}}</nuxt-link>
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
        isActive: 1,
        navbarItem: [
            {name: '正在热映'},
            {name: '即将上映'},
            {name: '经典影片'},
        ],
        showType: 1,
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
        let parmas = {
            catId: 99,
            sourceId: 99,
            yearId: 99,
        };
        return API.getConditionList(parmas).then((res) => {
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
    created() {
        this.showType = this.$router.history.current.query.showType;
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
    margin-top: 61px;
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
            color: #ff6637;
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
