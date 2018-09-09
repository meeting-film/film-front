export const state = () => ({
  TOKEN: '', //存储登录token,用来写入到header头的Authorization中
  filmList: [],
  cinemaTags: {},
  seatInfo: {
    price: 80,
    quantity: 1,
    seatCharts: {//座位分布图
      limit:5,
      single: [
        [
          {
            column:1,
            row:1,
            isSold: false,
          }, {
            column:2,
            row:1,
            isSold: false
          }, {
            column:3,
            row:1,
            isSold: false
          }, {
            column:4,
            row:1,
            isSold: false
          }, {
            column:5,
            row:1,
            isSold: false
          }, {
            column:6,
            row:1,
            isSold: false
          }, {
            column:7,
            row:1,
            isSold: true
          }
        ],
        [
          {
            column:1,
            row:2,
            isSold: false
          }, {
            column:2,
            row:2,
            isSold: false
          }, {
            column:3,
            row:2,
            isSold: false
          }, {
            column:4,
            row:2,
            isSold: false
          }, {
            column:5,
            row:2,
            isSold: false
          }, {
            column:6,
            row:2,
            isSold: false
          }, {
            column:7,
            row:2,
            isSold: true
          }
        ]
      ],
      couple: [
        [
          {
            column:1,
            row:1,
            isSold: false
          }, {
            column:2,
            row:1,
            isSold: false
          }, {
            column:3,
            row:1,
            isSold: false
          }, {
            column:4,
            row:1,
            isSold: false
          }, {
            column:5,
            row:1,
            isSold: false
          }, {
            column:6,
            row:1,
            isSold: false
          }
        ],
        [
          {
            column:1,
            row:2,
            isSold: false
          }, {
            column:2,
            row:2,
            isSold: false
          }, {
            column:3,
            row:2,
            isSold: false
          }, {
            column:4,
            row:2,
            isSold: false
          }, {
            column:5,
            row:2,
            isSold: false
          }, {
            column:6,
            row:2,
            isSold: false
          }
        ]
      ]
    }
  },
  selectedSingleSeatList:[],//选中的单个座位列表
  selectedCoupleSeatList:[],//选中的情侣座位列表
  showDialogFlag: false,//显示座位超出提示信息
    xSeatList:[],
});
export default state
