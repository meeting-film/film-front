export const state = () => ({
  TOKEN: '', //存储登录token,用来写入到header头的Authorization中
  filmList: [],
  cinemaTags: {},
  seatInfo: {
    price: 80,
    quantity: 1,
    seatCharts: {//座位分布图
      single: [
        [
          {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: true
          }
        ],
        [
          {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: true
          }
        ]
      ],
      couple: [
        [
          {
            isSold: true
          }, {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: false
          }
        ],
        [
          {
            isSold: true
          }, {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: false
          }, {
            isSold: false
          }
        ]
      ]
    }
  },
  selectedSingleSeatList:[],//选中的单个座位列表
  selectedCoupleSeatList:[],//选中的情侣座位列表
  setSeatSelected: false,
  showDialogFlag: false
});
export default state
