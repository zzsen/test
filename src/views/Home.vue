<template>
  <div class="home">
    <div class="logo"></div>
  </div>
</template>

<script>
import $ from 'jquery'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  mounted () {
    // 获取到距离顶部的垂直距离
    var banOffTop = $('.logo').offset().top
    console.log($('.logo').offset())
    var scTop = 0 // 初始化垂直滚动的距离
    $(document).scroll(function () {
      // 获取到滚动条拉动的距离
      scTop = $(this).scrollTop()
      console.log(scTop) // 查看滚动时，垂直方向上，滚动条滚动的距离
      if (scTop >= banOffTop) {
        console.log(scTop >= banOffTop)
        // 核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
        $('.logo').addClass('fixDiv')
      } else {
        $('.logo').removeClass('fixDiv')
      }
    })
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.home {
  margin-top: 20px;
  height: 2000px;
  background-color: white;
}
.logo {
  width: 100%;
  height: 200px;
  background-color: green;
}
.fixDiv {
  position:fixed;
  top:0;
  left:0;
}
</style>
