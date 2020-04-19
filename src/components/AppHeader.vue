<template>
  <div class="app-header">
    <div class="header-icon"></div>
    <el-menu
      class="el-menu-demo menu-header"
      mode="horizontal"
      :default-active="$route.path"
      :router="true">
      <div
        class="el-menu-demo menu-body el-menu--horizontal el-menu"
        v-for="menu in menus"
        :key="menu.name">
        <el-menu-item
          v-if="!menu.children || !menu.children.length"
          :index="menu.link">
          {{menu.name}}
        </el-menu-item>
        <el-submenu v-if="menu.children && menu.children.length" :index="menu.link">
          <template slot="title"><span>{{menu.name}}</span></template>
          <el-menu-item
            v-for="child in menu.children"
            :index="child.link"
            :key="child.name">
            {{child.name}}
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
    <el-input
      :size="searchBarSize"
      placeholder="请输入内容"
      v-model="keyword"
      class="search-bar">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <div class="info-bar">
      <div class="userinfo">
        <i class="mdi mdi-account"/>
          {{currentUser.name}}
        <i class="mdi mdi-logout-variant logout link"/>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'
export default {
  name: 'AppHeader',
  props: {
    menus: { type: Array, default: () => { return [] } }
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  data () {
    return {
      keyword: '',
      searchBarSize: 'mini'
    }
  },
  mounted () {
    const _this = this
    // 获取到距离顶部的垂直距离
    const banOffTop = $('.app-header').offset().top
    const height = $('.app-header').height()
    var scTop = 0 // 初始化垂直滚动的距离
    $(document).scroll(function () {
      // 获取到滚动条拉动的距离
      scTop = $(this).scrollTop()
      // 查看滚动时，垂直方向上，滚动条滚动的距离
      if (scTop > banOffTop + height) {
        console.log(scTop > banOffTop + height)
        // 核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
        $('.app-header').addClass('fix-div')
        _this.searchBarSize = 'large'
      } else {
        $('.app-header').removeClass('fix-div')
        _this.searchBarSize = 'mini'
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-header {
  background-color: #f1f1f1;
  height: 40px;
  line-height: 40px;
  width: 100%;
  z-index: 10;
  .header-icon {
    height: 40px;
    width: 40px;
    float: left;
    position: absolute;
    margin-left: 10px;
    background: url('../assets/image/icon.png') no-repeat;
    background-color: #f1f1f1;
    background-size: contain;
  }
  .menu-header {
    background-color: #473d3d;
    float: left;
    height: 39px !important;
    left: 100px;
    margin-right: 100px;
    .menu-body {
      float: left;
      height: 100%;
      line-height: 40px;
      .el-menu-item,.el-submenu{
        height: 100%;
        line-height: 40px;
        min-width: 80px;
        text-align: center;
      }
    }
  }
  .search-bar {
    min-width: 300px;
    max-width: 40%;
  }
  .info-bar {
    float: right;
    margin-right: 20px;
    font-size: 14px;
  }
}
.app-header.fix-div {
  position:fixed;
  height: 60px;
  text-align: center;
  .menu-header,.info-bar {
    display: none;
  }
  .header-icon {
    height: 60px;
    width: 60px;
  }
  .search-bar {
    margin-top: 10px;
  }
}
</style>

<style lang="scss">
.menu-header {
  .el-submenu__title{
    height: 100% !important;
  }
  .el-menu-item,.el-submenu__title{
    background-color: #f1f1f1 !important;
    &:hover{
      background-color: #fbfbfb !important;
    }
  }
}
</style>
