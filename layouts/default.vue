<template>
  <div>
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

*{
  margin: 0;
  padding: 0;
}
body{
  font: 12px/1.5 tahoma, arial, Microsoft YaHei, sans-serif;
}
li{
  list-style: none;
}
img{
  display: block;
  border: none;
}
label{
  cursor: pointer;
}
input[type='checkbox']{
  cursor: pointer;
}

/* 定宽布局 */
.w{
  width: 1080px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

/* panel */
/* 全局通用样式 */
/* 隐藏类 */
.hide{
  display: none;
}
/* 超链样式 */
.link{
  color: #999;
  cursor: pointer;
  text-decoration: none;
}
.link:hover{
  color: #e80012;
}
.link-text{
  color: #999;
  text-decoration: none;
}
/* btn */
.btn{
  display: inline-block;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
  border: none;
  background: #c60023;
  font-size: 17px;
  font-weight: bold;
  color: #fff;
  outline: none;
  cursor: pointer;
  text-decoration: none;
}
.btn-mini{
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  padding: 0 10px;
}

</style>
<script>
  import Header from '~/components/common/Header.vue'
  import Footer from '~/components/common/Footer.vue'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>
