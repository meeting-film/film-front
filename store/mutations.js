import Cookies from 'js-cookie'

export const mutations = {
    SET_USER: (state, user) => {
        state.authUser = user;
    },
    //设置token
    SET_TOKEN: (state, token) => {
        state.TOKEN = token;
    },
    //获取电影列表
    GET_FILMSLIST: (state, data) => {
        state.filmList = data;
    },
    //添加单个座位
    ADD_SINGLE_SEAT: (state, params) => {
        //1.将选中的座位添加到selectedSingleSeatList数组中，给右侧展示用
        //2.选中的才可以添加
        if (params.selected == true) {
            state.selectedSingleSeatList.push(params);
        } else {
            //取消选择座位需要将右侧选中的座位删掉
            state.selectedSingleSeatList.forEach((item, index) => {
                if (item.row == params.row && item.column == params.column) {
                    state.selectedSingleSeatList.splice(index, 1);
                }
            });
        }
    },
    //添加情侣座位
    ADD_COUPLE_SEAT: (state, params) => {
        //如果选中，将选中的座位添加到要渲染的座位列表中
        if (params.coupleSelected == true) {
            if (params.seatArr && params.seatArr != []) {
                state.selectedCoupleSeatList = state.selectedCoupleSeatList.concat(params.seatArr);
            }
        }
        //取消选中，将渲染出来的座位删掉
        //用要取消的座位排号和座位号跟渲染出的座位排号和座位号对比，如果相等就删除
        else {
            params.seatArr.forEach((item, index) => {
                state.selectedCoupleSeatList.forEach((item1, index1) => {
                    if (item.row == item1.row && item.column == item1.column) {
                        state.selectedCoupleSeatList.splice(index1, 1);
                    }
                })
            })
        }
    },
    //删除单排座选中的座位
    DELETE_SINGLE_SEAT(state, params) {
        //删除选中的座位
        state.selectedSingleSeatList.forEach((item, index) => {
            if (item.row == params.row && item.column == params.column) {
                state.selectedSingleSeatList.splice(index, 1);
            }
        })
        //清除座位列表的选中状态
        state.seatInfo.seatCharts.single.forEach((item, index) => {
            item.forEach((item1, index1) => {
                if (params.row == index && params.column == index1) {
                    item1.selected = false;
                }
            })
        });
    },
    //删除情侣座选中的座位
    DELETE_COUPLE_SEAT(state, params) {
        params.seatArr.forEach((itemParams, indexParams) => {
            //删除选中的座位
            state.selectedCoupleSeatList.forEach((item, index) => {
                if (itemParams.row == item.row && itemParams.column == item.column) {
                    state.selectedCoupleSeatList.splice(index, 1);
                }
            });
            //清除座位列表的选中状态
            state.seatInfo.seatCharts.couple.forEach((itemParent, indexParent) => {
                //1.情侣座跟在单排座之后，排号在本身的基础上会加上单排座的总长度，所以这里要减去单排座的总长度
                //2.通过点击删除传递的座位排号/座位号进行对比，如果传递进来的座位排号/列号跟右侧选中的排号/座位号相等，将选中的座位高亮状态去掉
                let row = itemParams.row - state.seatInfo.seatCharts.single.length;//排号
                itemParent.forEach((itemChild, indexChild) => {
                    let column = itemParams.column;//座位号
                    if (row == indexParent && column == indexChild) {
                        itemChild.selected = false;
                    }
                })
            })
        })
    },
};

export default mutations
