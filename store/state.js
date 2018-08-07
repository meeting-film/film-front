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
            isSold: false,
            seatNo: 7
          }, {
            isSold: false,
            seatNo: 6
          }, {
            isSold: false,
            seatNo: 5
          }, {
            isSold: false,
            seatNo: 4
          }, {
            isSold: false,
            seatNo: 3
          }, {
            isSold: false,
            seatNo: 2
          },
          {
            isSold: true,
            seatNo: 1
          }
        ],
        [
          {
            isSold: false,
            seatNo: 7
          }, {
            isSold: false,
            seatNo: 6
          }, {
            isSold: false,
            seatNo: 5
          }, {
            isSold: false,
            seatNo: 4
          }, {
            isSold: false,
            seatNo: 3
          }, {
            isSold: false,
            seatNo: 2
          },
          {
            isSold: true,
            seatNo: 1
          }
        ]
      ],
      couple: [
        [
          {
            isSold: true,
            seatNo: 6
          }, {
            isSold: false,
            seatNo: 5
          }, {
            isSold: false,
            seatNo: 4
          }, {
            isSold: false,
            seatNo: 3
          }, {
            isSold: false,
            seatNo: 2
          }, {
            isSold: false,
            seatNo: 1
          }
        ],
        [
          {
            isSold: true,
            seatNo: 6
          }, {
            isSold: false,
            seatNo: 5
          }, {
            isSold: false,
            seatNo: 4
          }, {
            isSold: false,
            seatNo: 3
          }, {
            isSold: false,
            seatNo: 2
          }, {
            isSold: false,
            seatNo: 1
          }
        ]
      ]
    }
  },
  selectedSeatList:[],//选中的座位列表
  setSeatSelected: false,
  showDialogFlag: false,
})
export default state
