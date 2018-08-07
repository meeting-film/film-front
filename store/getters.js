export const getters = {
  TOKEN (state) {
    return state.TOKEN
  },
  seatList: state => state.seatInfo.seatList,//默认的座位列表
  selectedSeatList: state => state.selectedSeatList,//选中的座位列表
  //计算座位总价
  totalPrice: (state) => {
    let total = 0;
    state.selectedSeatList.forEach((item, index) => {
      total = state.seatInfo.price * (index+1);
    })
    return total;
  }
}
export default getters

