export const getters = {
  TOKEN (state) {
    return state.TOKEN
  },
  // seatList: state => state.seatList,//座位列表
  //选择之后的座位列表
  selectedSeatList: state => {
    return state.selectedSeats.map((items) => {
      console.log(items)
      return {
        ...items
      }
    })
  },
  //计算座位总价
  totalPrice: (state, getters) => {
    let total = 0;
    getters.selectedSeatList.forEach(n => {
      total += n.price * n.num;
    })
    return total;
  },
  //计算座位总数
  totalNum: (state, getters) => {
    let total = 0;
    getters.selectedSeatList.forEach(n => {
      total += n.num;
    })
    return total;
  }
}
export default getters

