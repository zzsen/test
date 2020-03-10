<template>
  <div id="app">
    <app-header></app-header>
    <Home></Home>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import Home from '@/views/Home'
export default {
  name: 'App',
  components: {
    AppHeader,
    Home
  }
}
</script>

<style lang="scss">
@import "assets/css/global.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
