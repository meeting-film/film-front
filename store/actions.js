import {getData} from '../plugins/axios'

export const actions = {
    // nuxtServerInit is called by Nuxt.js before server-rendering every page
    nuxtServerInit({commit}, {req}) {
        if (req.session && req.session.TOKEN) {
            commit('SET_TOKEN', req.session.TOKEN)
        }
    },
    //获取电影列表
    //之所以在这里调用getFilms接口，是因为影片页和搜索共用一个接口
    getFilms({commit}, params) {
        getData(process.env.baseUrl + '/film/getFilms', 'get', params).then((res) => {
            if (res && res.status == 0) {
                commit('GET_FILMSLIST', res);
            } else {
                if (res.msg) {
                    alert(res.msg)
                }
            }
        }, (err) => {
            console.log(err);
        })
    },
    //添加到选择的座位列表
    addToSingleSeatList({commit}, params) {
        commit('ADD_SINGLE_SEAT', params);
    },
    //添加到选择的座位列表
    addToCoupleSeatList({commit}, params) {
        commit('ADD_COUPLE_SEAT', params);
    },
    //删除选中的座位
    deleteSingleSeat({commit}, params) {
        commit('DELETE_SINGLE_SEAT', params)
    },
    //删除选中的座位
    deleteCoupleSeat({commit}, params) {
        commit('DELETE_COUPLE_SEAT', params)
    }
}
export default actions
