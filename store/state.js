export const state = () => ({
  TOKEN: '', //存储登录token,用来写入到header头的Authorization中
  filmList: [],
  cinemaTags: {},
  seatList: [//所有座位列表
    [
      {
        id: '0',
        status: 'sold',
        selected: true
      }, {
        id: '1',
        status: 'selectable',
        selected: false
      }, {
        id: '2',
        status: 'selectable',
        selected: false
      }, {
        id: '3',
        status: 'selectable',
        selected: false
      }, {
        id: '4',
        status: 'selectable',
        selected: false
      }, {
        id: '5',
        status: 'selectable',
        selected: false
      }, {
        id: '6',
        status: 'selectable',
        selected: false
      }, {
        id: '7',
        status: 'selectable',
        selected: false
      }, {
        id: '8',
        status: 'selectable',
        selected: false
      }
    ],
    [
      {
        id: '0',
        status: 'sold',
        selected: true
      }, {
        id: '1',
        status: 'selectable',
        selected: false
      }, {
        id: '2',
        status: 'selectable',
        selected: false
      }, {
        id: '3',
        status: 'selectable',
        selected: false
      }, {
        id: '4',
        status: 'selectable',
        selected: false
      }, {
        id: '5',
        status: 'selectable',
        selected: false
      }, {
        id: '6',
        status: 'selectable',
        selected: false
      }
    ],
  ],
  selectedSeats: [],//选中的座位列表
})
export default state
