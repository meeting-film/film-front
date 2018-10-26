<template>
  <section class="cinema-div">
    <div class="cinema-panel">
      <QuickSearch :cinemaTags="cinemaTags" @getCinemaList="getCinemaList"/>
      <CinemasItems :cinemasData="cinemasData" :totalPage="totalPage" @getCinemaList="getCinemaList"/>
    </div>
  </section>
</template>
<script>
    import CinemasItems from '~/components/cinemas/CinemasItems.vue'
    import QuickSearch from '~/components/cinemas/QuickSearch.vue'
    import Cookies from 'js-cookie'
    import {getData} from '../plugins/axios'

    export default {
        head() {
            return {
                title: '影院',
                meta: [
                    {hid: '影院', name: '影院', content: '影院'}
                ]
            }
        },
        components: {
            CinemasItems,
            QuickSearch
        },
        data() {
            return {
                cinemaTags: {},
                cinemasData: {},
                totalPage: 0,
                nowPage: 1
            }
        },
        mounted() {
            this.getCinemaTags();
        },
        methods: {
            getCinemaTags() {
                let _this = this;
                let params = {
                    "brandId": this.$router.history.current.query.brandId || 99,//影院编号
                    "hallType": this.$router.history.current.query.halltypeId || 99,//影厅类型
                    "areaId": this.$router.history.current.query.areaId || 99,//行政区编号
                };
                getData(process.env.baseUrl + '/cinema/getCondition', 'get', params).then((res) => {
                    if (res && res.status == 0) {
                        _this.cinemaTags = res.data;
                        let cinemaParams = Object.assign({}, params,
                            {
                                pageSize: 12,//每页条数
                                nowPage: _this.nowPage//当前页数
                            })
                        _this.getCinemaList(cinemaParams);
                    } else {
                        if (res.message) {
                            alert(res.message)
                        }
                    }
                }, (err) => {
                    console.log(err);
                })
            },
            getCinemaList(params) {
                getData(process.env.baseUrl + '/cinema/getCinemas', 'get', params).then((res) => {
                    if (res && res.status == 0) {
                        if (res.data && res.data.length > 0) {
                            this.cinemasData = res.data;
                            this.nowPage = res.nowPage;
                            this.totalPage = res.totalPage;
                            Cookies.set('cinemaNowPage', this.nowPage, { expires: 7, path: '' });
                        } else {
                            this.cinemasData = [];
                            if (res.msg) {
                                alert(res.msg)
                            }
                        }
                    } else {
                        if (res.msg) {
                            alert(res.msg)
                        }
                    }
                }, (err) => {
                    console.log(err);
                });
            }
        }
    }
</script>
<style>
  .cinema-div{
    background-color: #fff;
    padding: 61px 0;
  }
  .cinema-panel{
    margin: 0 auto;
    width: 1200px;
  }
  .cinema-list{
    margin: 50px 0;
  }
</style>
