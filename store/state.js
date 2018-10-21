export const state = () => ({
    authUser: null,
    TOKEN: '', //存储登录token,用来写入到header头的Authorization中
    filmList: [],
    seatInfo: {
        price: 60,
        quantity: 1,
        seatCharts: {//座位分布图
            limit: 5,
            single: [
                [
                    {
                        column: 1,
                        row: 1,
                        isSold: false,
                    }, {
                    column: 2,
                    row: 1,
                    isSold: false
                }, {
                    column: 3,
                    row: 1,
                    isSold: false
                }, {
                    column: 4,
                    row: 1,
                    isSold: false
                }, {
                    column: 5,
                    row: 1,
                    isSold: false
                }, {
                    column: 6,
                    row: 1,
                    isSold: false
                }
                ],
                [
                    {
                        column: 1,
                        row: 2,
                        isSold: false
                    }, {
                    column: 2,
                    row: 2,
                    isSold: false
                }, {
                    column: 3,
                    row: 2,
                    isSold: false
                }, {
                    column: 4,
                    row: 2,
                    isSold: false
                }, {
                    column: 5,
                    row: 2,
                    isSold: false
                }, {
                    column: 6,
                    row: 2,
                    isSold: false
                }
                ],
                [
                    {
                        column: 1,
                        row: 3,
                        isSold: false
                    }, {
                    column: 2,
                    row: 3,
                    isSold: false
                }, {
                    column: 3,
                    row: 3,
                    isSold: false
                }, {
                    column: 4,
                    row: 3,
                    isSold: false
                }, {
                    column: 5,
                    row: 3,
                    isSold: false
                }, {
                    column: 6,
                    row: 3,
                    isSold: false
                }, {
                    column: 7,
                    row: 3,
                    isSold: false
                }
                ],
                [
                    {
                        column: 1,
                        row: 4,
                        isSold: false
                    }, {
                    column: 2,
                    row: 4,
                    isSold: false
                }, {
                    column: 3,
                    row: 4,
                    isSold: false
                }, {
                    column: 4,
                    row: 4,
                    isSold: false
                }, {
                    column: 5,
                    row: 4,
                    isSold: false
                }, {
                    column: 6,
                    row: 4,
                    isSold: false
                }, {
                    column: 7,
                    row: 4,
                    isSold: false
                }, {
                    column: 8,
                    row: 4,
                    isSold: false
                }
                ],
                [
                    {
                        column: 1,
                        row: 5,
                        isSold: false
                    }, {
                    column: 2,
                    row: 5,
                    isSold: false
                }, {
                    column: 3,
                    row: 5,
                    isSold: false
                }, {
                    column: 4,
                    row: 5,
                    isSold: false
                }, {
                    column: 5,
                    row: 5,
                    isSold: false
                }, {
                    column: 6,
                    row: 5,
                    isSold: false
                }, {
                    column: 7,
                    row: 5,
                    isSold: false
                }, {
                    column: 8,
                    row: 5,
                    isSold: false
                }
                ],
                [
                    {
                        column: 1,
                        row: 6,
                        isSold: false
                    }, {
                    column: 2,
                    row: 6,
                    isSold: false
                }, {
                    column: 3,
                    row: 6,
                    isSold: false
                }, {
                    column: 4,
                    row: 6,
                    isSold: false
                }, {
                    column: 5,
                    row: 6,
                    isSold: false
                }, {
                    column: 6,
                    row: 6,
                    isSold: false
                }, {
                    column: 7,
                    row: 6,
                    isSold: false
                }, {
                    column: 8,
                    row: 6,
                    isSold: false
                }, {
                    column: 9,
                    row: 6,
                    isSold: false
                }
                ],
                [
                    {
                        column: 1,
                        row: 7,
                        isSold: false
                    }, {
                    column: 2,
                    row: 7,
                    isSold: false
                }, {
                    column: 3,
                    row: 7,
                    isSold: false
                }, {
                    column: 4,
                    row: 7,
                    isSold: false
                }, {
                    column: 5,
                    row: 7,
                    isSold: false
                }, {
                    column: 6,
                    row: 7,
                    isSold: false
                }, {
                    column: 7,
                    row: 7,
                    isSold: false
                }, {
                    column: 8,
                    row: 7,
                    isSold: false
                }, {
                    column: 9,
                    row: 7,
                    isSold: false
                }
                ]
            ],
            couple: [
                [
                    {
                        column: 1,
                        row: 1,
                        isSold: false,
                    }, {
                    column: 2,
                    row: 1,
                    isSold: false
                }, {
                    column: 3,
                    row: 1,
                    isSold: false
                }, {
                    column: 4,
                    row: 1,
                    isSold: false
                }, {
                    column: 5,
                    row: 1,
                    isSold: false
                }, {
                    column: 6,
                    row: 1,
                    isSold: false
                }
                ]
            ]
        }
    },
    selectedSingleSeatList: [],//选中的单个座位列表
    selectedCoupleSeatList: [],//选中的情侣座位列表
    showDialogFlag: false,//显示座位超出提示信息
    xSeatList: [],
});
export default state
