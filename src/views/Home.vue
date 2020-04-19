<template>
  <div class="home">
    <div class="logo"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.home {
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
