export const state = () => ({
    authUser: null,
    TOKEN: '', //存储登录token,用来写入到header头的Authorization中
    filmList: [],
    seatInfo: {
        price: 60,
        quantity: 1,
        seatCharts: {//座位分布图
            limit: 5,
            single: [],
            couple: []
        }
    },
    selectedSingleSeatList: [],//选中的单个座位列表
    selectedCoupleSeatList: [],//选中的情侣座位列表
    showDialogFlag: false,//显示座位超出提示信息
    xSeatList: [],
});
export default state
