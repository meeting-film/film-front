import Cookies from 'js-cookie'
export const actions = {
  nuxtServerInit({commit}, {req}) {
    if (req.session && req.session.TOKEN) {
      commit('SET_TOKEN', req.session.TOKEN)
    }
  },
  //获取电影列表
  getFilms ({commit}, params) {
    fetch(process.env.baseUrl + '/meetingfilm/film/getFilms', params)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          return res.json()
        }
      })
      .then((res) => {
        if (res) {
          if (res.status == 0) {
            if (res.data) {
              commit('GET_FILMSLIST', res.data);
            }
          }else {
            if (res.msg) {
              alert(res.msg)
            }
          }
        }
      })
  },
  //获取影院标签
  getCinemaTags ({commit}, params) {
    fetch(process.env.baseUrl + '/meetingfilm/cinemaTags', params)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          return res.json()
        }
      })
      .then((res) => {
        if (res) {
          if (res.status == 0) {
            if (res.data) {
              commit('GET_CINEMATAGS', res.data);
            }
          }else {
            if (res.msg) {
              alert(res.msg)
            }
          }
        }
      })
  },
  //添加到选择的座位列表
  addToSeatList ({commit}, params) {
    commit('ADD_SEAT', params);
  },
  //删除选中的座位
  deleteSeat ({commit}, params) {
    commit('DELETE_SEAT', params)
  },
  //登录
  login: ({commit}, {username, password}) => {
    fetch(process.env.baseUrl + '/auth',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      }
    ).then((res) => {
      if (res.status === 401) {
        throw new Error('Bad credentials')
      } else {
        return res.json()
      }
    })
      .then((res) => {
        if (res) {
          if (res.status == 0) {
            if (res.data && res.data.token) {
              commit('SET_TOKEN', res.data.token);
              Cookies.set('token', res.data.token);
            }
          } else {
            if (res.msg) {
              alert(res.msg)
            }
          }
        }
      })
  },
  //退出
  logout({commit}) {
    return fetch(process.env.baseUrl + '/meetingfilm/user/logout', {
      credentials: 'same-origin',
      method: 'GET'
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          return res.json()
        }
      }).then((res) => {
        if (res) {
          if(res.status == 0) {
            commit('SET_TOKEN', null);
            Cookies.remove('token');
          }else {
            if (res.msg) {
              alert(res.msg)
            }
          }
        }
      })
  }
}
export default actions
