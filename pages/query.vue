<template>
  <section class="container">
    <div class="search-box">
      <form @submit.prevent="getFilms" class="search-form">
        <input class="kw" type="text" name="kw" maxlength="32" v-model="form.search" placeholder="找影视剧、影人、影院" autocomplete="off">
        <button class="submit" type="submit"></button>
      </form>
    </div>
    <!--<div class="subnav">-->
      <!--<ul class="navbar">-->
        <!--<li>-->
          <!--<nuxt-link active-class="is-active" to="/query?kw=11&amp;type=0" target="_blank" class="link nav-item is-tab"-->
                     <!--exact>影视剧 (0)-->
          <!--</nuxt-link>-->
        <!--</li>-->
        <!--<li>-->
          <!--<nuxt-link active-class="is-active" to="/query?kw=11&amp;type=1" target="_blank" class="link nav-item is-tab"-->
                     <!--exact>影人 (0)-->
          <!--</nuxt-link>-->
        <!--</li>-->
        <!--<li>-->
          <!--<nuxt-link active-class="is-active" to="/query?kw=11&amp;type=2" target="_blank" class="link nav-item is-tab"-->
                     <!--exact>影院 (0)-->
          <!--</nuxt-link>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
    <div class="search-container">
      <div class="search-result-box">
        <dl class="movie-list" v-if="$store.state.filmList.data && $store.state.filmList.data.length > 0">
          <dd v-for="(item, index) in $store.state.filmList.data" :key="index">
            <div class="movie-item">
              <nuxt-link :to="{path:'/filmItem/'+item.filmId}" target="_blank">
                <div class="movie-poster">
                  <img class="poster-default" :src="$store.state.filmList.imgPre+item.imgAddress">
                  <img :src="$store.state.filmList.imgPre+item.imgAddress">
                </div>
              </nuxt-link>
              <div class="movie-ver"></div>
            </div>
            <div class="channel-detail movie-item-title" title="11">
              <nuxt-link :to="{path:'/filmItem/'+item.filmId}" target="_blank">
                11
              </nuxt-link>
            </div>
            <div class="movie-item-subtitle">11</div>
            <div class="absolute-info">
              <div class="channel-detail channel-detail-orange">{{item.filmScore}}</div>
              <div class="movie-item-cat">{{item.filmName}}</div>
              <div class="movie-item-pub">2014-11-11美国上映</div>
            </div>
          </dd>
        </dl>
        <dl class="movie-list" v-else>
          <span class="no-data">暂无数据</span>
        </dl>
        <div class="pager" v-if="$store.state.filmList && $store.state.filmList.length > 20">
          <ul class="list-pager">
            <li class="active">
              <a class="page_1" href="javascript:void(0);">1</a>
            </li>
            <li>
              <a class="page_2" href="javascript:void(0);">2</a>
            </li>
            <li>
              <a class="page_3" href="javascript:void(0);">3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    head () {
      return {
        title: '搜索',
        meta: [
          { hid: 'query', name: 'query', content: 'query' }
        ]
      }
    },
    data() {
      return {
        form: {
          search:''
        }
      }
    },
    methods: {
      getFilms() {
        let params = {
          "showType": this.$router.history.current.query.showType || 1,//查询类型，1-正在热映，2-即将上映，3-经典影片
          "sortId": 1,//排序方式，1-按热门搜索，2-按时间搜索，3-按评价搜索
          "catId": this.$router.history.current.query.catId || 99,
          "sourceId": this.$router.history.current.query.sourceId || 99,
          "yearId": this.$router.history.current.query.yearId || 99,
          "offset": 0
        };
        this.$store.dispatch('getFilms', params);
        this.$router.push('/query?kw=' + this.form.search);
      }
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    padding-top: 61px;
    background-color: #fff;
  }
  .search-box {
    width: 100%;
    min-width: 1200px;
    background: #47464a;
    padding-bottom: 60px;
    //margin-bottom: -60px;
    form {
      width: 630px;
      margin: 0 auto;
      padding-top: 38px;
      padding-bottom: 8px;
      position: relative;
    }
    .kw {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      line-height: 18px;
      width: 630px;
      padding: 15px 50px 15px 20px;
      border: 1px solid #999;
      border-radius: 50px;
    }
    .submit {
      position: absolute;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border: none;
      left: auto;
      top: 51px;
      right: 12px;
      width: 27px;
      height: 27px;
      cursor: pointer;
      background: url("../assets/img/btn-search-light.png") no-repeat;
    }
  }
  .subnav {
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
          &.active {
            color: #ef4238;
            position: relative;
            cursor: default;
          }
        }
      }
    }
  }
  .search-container {
    width: 1200px;
    margin: 0 auto;
    .search-result-box {
      width: 950px;
      margin: 0 auto;
      padding-bottom: 40px;
      .movie-list {
        &:after {
          content: '';
          display: table;
          clear: both;
        }
        dd, li {
          width: 460px;
          float: left;
          margin-top: 40px;
          margin-right: 15px;
          line-height: 1.2;
          position: relative;
          .movie-item {
            float: left;
            margin-right: 20px;
            position: relative;
            border: 1px solid #efefef;
            .movie-poster {
              background-color: #fcfcfc;
              width: 160px;
              height: 220px;
              overflow: hidden;
              position: relative;
              img {
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                &.poster-default {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  width: 68px;
                  height: 62px;
                  margin-top: -31px;
                  margin-left: -34px;
                }
              }
            }
            .movie-ver {
              position: absolute;
              top: 4px;
              left: -2px;
              font-size: 12px;
              color: #fff;
            }
          }
          .channel-detail {
            width: 160px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
            color: #333;
            margin-top: 10px;
            &.movie-item-title {
              text-align: left;
              font-size: 26px;
              margin-top: 27px;
              padding-bottom: 1px;
              margin-bottom: -1px;
            }
            a {
              color: #333;
            }
          }
          .movie-item-subtitle {
            font-size: 14px;
            color: #999;
            margin-top: 3px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding-bottom: 1px;
            margin-bottom: -1px;
          }
          .absolute-info {
            position: absolute;
            right: 0;
            bottom: 0;
            border-bottom: 1px solid #e5e5e5;
            width: 280px;
            height: 133px;
            .channel-detail {
              text-align: left;
              font-size: 16px;
              &.channel-detail-orange {
                margin-bottom: 13px;
                color: #ffb400;
                height: 31px;
                line-height: 31px;
              }
            }
            .movie-item-cat,.movie-item-pub {
              margin-top: 5px;
              font-size: 16px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              padding-bottom: 1px;
              margin-bottom: -1px;
            }
            .movie-item-cat {
              color: #333;
            }
            .movie-item-pub {
              color: #999;
            }
          }
        }
        .no-data {
          font-size: 18px;
          display: block;
          margin: 100px 0;
          text-align: center;
        }
      }
      .celebrity-list {
        overflow: hidden;
        margin-top: 0;
        margin-left: -30px;
      }
    }
  }
  .pager {
    margin-top: 80px;
    text-align: center;
    ul {
      margin-bottom: 20px;
      li {
        display: inline-block;
        height: 30px;
        margin: 0 4px;
        border: 1px solid #d8d8d8;
        line-height: 30px;
        text-align: center;
        color: #999;
        a {
          display: block;
          padding: 0 12px;
          color: #333;
        }
        &.sep {
          padding: 0 12px;
        }
        &:hover {
          border-color: #ef4238;
        }
        &.active {
          border-color: #ef4238;
          background-color: #ef4238;
          a {
            color: #fff;
          }
        }
      }
    }
  }
</style>
