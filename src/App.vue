<template>
  <div id="app">
    <app-header
      :menus="menus">
    </app-header>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default {
  name: 'App',
  components: {
    AppHeader
  },
  data () {
    return {
      menus: []
    }
  },
  mounted () {
    const userinfo = {
      id: 3,
      name: '用户c',
      role: 3
    }
    const menus = [
      {
        name: 'book',
        link: '/book'
      }, {
        name: '模板',
        link: '/template/project',
        children: [
          {
            name: '项目模板',
            link: '/template/projectlist'
          }, {
            name: '事件模板',
            link: '/template/eventlist'
          }, {
            name: '需求模板',
            link: '/template/demandlist'
          }
        ]
      }, {
        name: '管理',
        link: '/manage/sysuser',
        children: [
          {
            name: '系统成员',
            link: '/manage/sysuser'
          }, {
            name: '后台成员',
            link: '/manage/backuser'
          }
        ]
      }, {
        name: '日志',
        link: '/log/systemlog',
        children: [
          {
            name: '系统日志',
            link: '/log/system'
          }, {
            name: '项目日志',
            link: '/log/project'
          }, {
            name: '事件日志',
            link: '/log/event'
          }, {
            name: '需求日志',
            link: '/log/demand'
          }
        ]
      }
    ]
    this.menus = menus
    this.$store.dispatch('setCurrentUser', userinfo)
  },
  watch: {
    $route: function () {
      this.init()
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      if (this.$route.path === '/') {
        const name = 'Book'
        this.$router.push({ name })
      }
    }
  }
}
</script>

<style lang="scss">
@import "assets/css/global.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
