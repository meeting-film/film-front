export const getters = {
    userInfo: state => state.userInfo,
    TOKEN: state => state.TOKEN,
    selectedSingleSeatList: state => state.selectedSingleSeatList,//选中的单个座位列表
    selectedCoupleSeatList: state => state.selectedCoupleSeatList,//选中的情侣座位列表
    //计算座位总价
    totalPrice: (state) => {
        let totalSingle = 0, totalCouple = 0, total = 0;
        state.selectedSingleSeatList.forEach((item, index) => {
            totalSingle = state.ticketPrice * (index + 1);
        });
        state.selectedCoupleSeatList.forEach((item, index) => {
            totalCouple = state.ticketPrice * (index + 1);
        });
        total = totalSingle + totalCouple;
        return total;
    }
}
export default getters

