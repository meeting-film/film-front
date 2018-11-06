<template>
    <div class="hall">
        <div class="seat-example">
            <div class="selectable-example example">
                <span>可选座位</span>
            </div>
            <div class="sold-example example">
                <span>已售座位</span>
            </div>
            <div class="selected-example example">
                <span>已选座位</span>
            </div>
            <div class="couple-example example">
                <span>情侣座位</span>
            </div>
        </div>

        <div class="seats-block">
            <div class="row-id-container">
                <!--<span class="row-id"-->
                <!--v-if="($store.state.seatInfo.seatCharts.single && $store.state.seatInfo.seatCharts.single.length > 0) ||-->
                <!--($store.state.seatInfo.seatCharts.couple && $store.state.seatInfo.seatCharts.couple.length > 0)"-->
                <!--v-for="(item, index) in ($store.state.seatInfo.seatCharts.single.length + $store.state.seatInfo.seatCharts.couple.length)"-->
                <!--:key="index">{{index + 1}}-->
                <!--</span>-->
            </div>
            <div class="seats-container">
                <div class="screen-container">
                    <div class="screen">银幕中央</div>
                    <div class="c-screen-line"></div>
                </div>

                <div class="seats-wrapper">
                    <div class="row"
                         v-if="$store.state.seatInfo.seatCharts.single && $store.state.seatInfo.seatCharts.single.length > 0"
                         v-for="(items, rowIndex) in $store.state.seatInfo.seatCharts.single"
                         :key="items.rowIndex">
            <span :class="item.isSold == true ? 'seat sold' : item.selected == true ? 'seat selected' : 'seat selectable'"
                  v-for="(item, columnIndex) in items"
                  :key="columnIndex"
                  @click="selectSingleSeat(rowIndex,columnIndex, item, $store.state.seatInfo.seatCharts.limit)">
              {{item.status}}
            </span>
                    </div>
                    <div class="row"
                         v-if="$store.state.seatInfo.seatCharts.couple && $store.state.seatInfo.seatCharts.couple.length > 0"
                         v-for="(items, rowIndex) in $store.state.seatInfo.seatCharts.couple"
                         :key="rowIndex">
            <span :class="(columnIndex % 2 == 0) ?
                  item.selected == true ? 'seat lover lover-left selected' : 'seat lover lover-left selectable':
                  item.selected == true ? 'seat lover lover-right selected' : 'seat lover lover-right selectable'"
                  v-for="(item, columnIndex) in items"
                  :key="columnIndex"
                  @click="selectCoupleSeat(($store.state.seatInfo.seatCharts.single.length + rowIndex),columnIndex, item.seatId, items, $store.state.seatInfo.seatCharts.limit)">
              {{item}}
            </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            fieldInfo: {
                type: Object,
                default: () => {
                }
            }
        },
        methods: {
            /**
             * 设置高亮状态
             * item：需要设置高亮状态的项
             * */
            setSelectedFlag(item, limit) {
                if (typeof item.selected == 'undefined') {
                    this.$set(item, 'selected', true);
                } else {
                    item.selected = !item.selected;
                }
                //如果有selected状态表示添加
                if (item.selected == true) {
                    //如果单个座位的数组长度等于4 或者情侣座位的数组等于4 或者单排座+情侣座数组总和等于4都不可以再选中
                    if ((this.$store.state.selectedSingleSeatList.length == limit || this.$store.state.selectedCoupleSeatList.length == limit) ||
                        (this.$store.state.selectedSingleSeatList.length + this.$store.state.selectedCoupleSeatList.length >= limit)) {
                        this.$set(item, 'selected', false);
                        this.$store.state.showDialogFlag = true;
                    }
                }
            },
            /**
             * 单个座选择事件
             * rowIndex：排号
             * columnIndex：座位号
             * item：第几个座位
             * */
            selectSingleSeat(rowIndex, columnIndex, item, limit) {
                let params = {};
                //如果座位号已售出不可选
                if (item.isSold == true) {
                    return false;
                } else {
                    //1.座位选择最多不能超过4个
                    //2.给选中的座位添加高亮状态
                    //3.将选中的座位号添加到选择座位事件中，座位号由行-列索引拼接
                    this.setSelectedFlag(item, limit);
                    params = {
                        row: rowIndex,
                        column: columnIndex,
                        seatId: item.seatId,
                        selected: item.selected
                    };
                    //调用添加事件
                    this.$store.dispatch('addToSingleSeatList', params);
                }
            },
            /**
             * 情侣座选择事件
             * rowIndex：排号
             * columnIndex：座位号
             * items：第几排
             * */
            selectCoupleSeat(rowIndex, columnIndex, seatId, items, limit) {
                let params = {};
                // 给当前选中的元素设置样式
                this.setSelectedFlag(items[columnIndex], limit);
                // 如果当前选中的元素为偶数项，在该项的后一项添加高亮状态，
                // 否则给前一项添加高亮状态
                // 将选中的座位行号和列号放在数组中，给模板渲染
                if (columnIndex % 2 == 0) {
                    this.setSelectedFlag(items[columnIndex + 1], limit);
                    params = {
                        coupleSelected: items[columnIndex].selected || items[columnIndex + 1].selected,
                        seatArr: [{
                            row: rowIndex,
                            seatId: seatId,
                            column: columnIndex
                        }, {
                            row: rowIndex,
                            seatId: seatId + 1,
                            column: columnIndex + 1
                        }]
                    };
                } else {
                    this.setSelectedFlag(items[columnIndex - 1], limit);
                    params = {
                        coupleSelected: items[columnIndex].selected || items[columnIndex - 1].selected,
                        seatArr: [{
                            row: rowIndex,
                            seatId: seatId - 1,
                            column: columnIndex - 1
                        }, {
                            row: rowIndex,
                            seatId: seatId,
                            column: columnIndex
                        }]
                    };
                }
                //调用添加事件
                this.$store.dispatch('addToCoupleSeatList', params);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .hall {
        width: 820px;
        display: inline-block;
        vertical-align: top;
        .seat-example {
            margin: 30px 0 30px 118px;
            .example {
                display: inline-block;
                font-size: 16px;
                color: #666;
                height: 26px;
                line-height: 26px;
                padding-left: 38px;
                background-repeat: no-repeat;
                margin-right: 50px;
                &.selectable-example {
                    background: url("../../assets/img/selectable-seat.png") no-repeat;
                }
                &.sold-example {
                    background: url("../../assets/img/sold-seat.png") no-repeat;
                }
                &.selected-example {
                    background: url("../../assets/img/selected-seat.png") no-repeat;
                }
                &.couple-example {
                    padding-left: 77px;
                    background: url("../../assets/img/couple-seat.png") no-repeat;
                }
            }
        }
        .seats-block {
            font-size: 0;
            overflow: hidden;
            margin-left: 20px;
            white-space: nowrap;
            .row-id-container {
                width: 20px;
                float: left;
                margin-top: 112px;
                white-space: normal;
                .row-id {
                    font-size: 16px;
                    color: #999;
                    margin-right: 40px;
                    margin-bottom: 10px;
                    display: inline-block;
                    width: 20px;
                    height: 26px;
                    line-height: 29px;
                    text-align: center;
                }
            }
            .seats-container {
                margin-left: 50px;
                overflow: auto;
                position: relative;
                padding-top: 112px;
                .screen-container {
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    .screen {
                        width: 550px;
                        padding-top: 50px;
                        text-align: center;
                        font-size: 16px;
                        color: #666;
                        background: url("../../assets/img/screen-center.png") top center no-repeat;
                        position: relative;
                        margin-bottom: 40px;
                    }
                }
                .c-screen-line {
                    width: 0;
                    border-left: 1px dashed #e5e5e5;
                    position: absolute;
                    top: 90px;
                    bottom: 0;
                    left: 50%;
                }
                .seats-wrapper {
                    display: inline-block;
                    min-width: 550px;
                    position: relative;
                    .row {
                        white-space: nowrap;
                        margin-bottom: 10px;
                        text-align: center;
                        .seat {
                            display: inline-block;
                            font-size: 0;
                            width: 30px;
                            height: 26px;
                            margin: 0 5px;
                            background: url("../../assets/img/selectable-seat.png") no-repeat;
                            &.sold {
                                background: url("../../assets/img/sold-seat.png") no-repeat;
                            }
                            &.selected {
                                background: url("../../assets/img/selected-seat.png") no-repeat;
                            }
                            &.lover {
                                width: 35px;
                                background: url("../../assets/img/couple-selectable-seat.png") no-repeat;
                                &.selected {
                                    background: url("../../assets/img/couple-selected-seat.png") no-repeat;
                                }
                                &.lover-left {
                                    margin-right: 0;
                                    background-position: 1px 0;
                                }
                                &.lover-right {
                                    margin-left: 0;
                                    background-position: -34px 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
