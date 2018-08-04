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


    <div class="seats-block" data-cols="11" data-section-id="1" data-section-name="全区" data-seq-no="201808020114812">
      <div class="row-id-container">
        <span class="row-id">1</span>
        <span class="row-id">2</span>
        <span class="row-id">3</span>
        <span class="row-id">4</span>
        <span class="row-id">5</span>
        <span class="row-id">6</span>
      </div>

      <div class="seats-container">
        <div class="screen-container" style="left: 0px;">
          <div class="screen">银幕中央</div>
          <div class="c-screen-line"></div>
        </div>

        <div class="seats-wrapper">
          {{$store.state}}
          <div class="row" v-for="(items, rowIndex) in $store.state.seatList" :key="items.rowIndex">
            <span class="seat" :class="item ? 'sold' : item.selected ? 'selected' : ''" v-for="(item, columnIndex) in items" :key="columnIndex" @click="selectSeat((rowIndex+1),columnIndex, item)">{{item}}{{item.status}}</span>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        styles: '',
        flag: false
      }
    },
    computed: {

    },
    methods: {
      selectSeat (rowIndex, columnIndex, item) {
        if (item.status == 'sold') {
          return false;
        } else {
          item.selected = !item.selected;
          let params = {
            row: rowIndex,
            column: columnIndex,
            selected: item.selected
          };
          console.log(item.selected)
          this.$store.dispatch('addToSeatList', params);
        }
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
            }
          }
        }
      }
    }
  }
</style>
