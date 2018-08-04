export const mutations = {
  //设置token
  SET_TOKEN: (state, token) => {
    state.TOKEN = token;
  },
  //获取电影列表
  GET_FILMSLIST: (state, data) => {
    state.filmList = data;
  },
  //获取影院列表
  GET_CINEMATAGS: (state, data) => {
    state.cinemaTags = data;
  },
  //添加座位
  ADD_SEAT: (state, params) => {
    let record = state.selectedSeats.find(index=>index == params.row);
    if (!record) {
      state.selectedSeats.push({
        row: params.row,
        column: params.column,
        selected: params.selected,
        num: 1
      })
    } else {
      record.num++
    }
  },
  //删除选中的座位
  DELETE_SEAT (state, seat) {
    state.selectedSeats.forEach((n,i) => {
      if (n.id == seat.id) {
        state.selectedSeats.splice(i,1);
      }
    })
  },
  //删除所有的座位
  DELETE_ALL (state) {
    state.selectedSeats = []
  }
}
export default mutations
