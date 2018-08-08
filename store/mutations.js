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
    //1.将选中的座位添加到selectedSeatList数组中，给右侧展示用
    //2.选中的才可以添加
    if (params.selected == true) {
      state.selectedSeatList.push(params);
    } else {
      //取消选择座位需要将右侧选中的座位删掉
      state.selectedSeatList = state.selectedSeatList.filter((item) => {
        return item.seatNo != params.seatNo;
      });
      if (state.selectedSeatList && state.selectedSeatList.length > 4) {
        state.showDialogFlag = true;
      }
    }
  },
  //删除选中的座位
  DELETE_SEAT (state, params) {
    //清除座位列表的选中状态
    state.seatInfo.seatList.forEach((item) => {
      item.forEach((item1) => {
        if (item1.seatNo == params.seatNo) {
          item1.selected = false;
        }
      })
    });
    //删除选中的座位
    state.selectedSeatList.forEach((item,index) => {
      if (item.seatNo == params.seatNo) {
        state.selectedSeatList.splice(index,1);
      }
    })
  }
}
export default mutations
