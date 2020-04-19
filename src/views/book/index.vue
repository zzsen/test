<template>
  <div class="index">
    <router-view class='route-view'/>
    <range class='range'></range>
  </div>
</template>

<script>
import Range from '@/views/book/range'
export default {
  name: 'book',
  components: {
    Range
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
      if (this.$route.path === '/book') {
        const name = 'BookList'
        this.$router.push({ name })
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.index{
  width: 90%;
  margin: 10px auto;
  .route-view {
    width:70%;
    float:left;
    position: relative;
  }
  .range {
    float:left;
    position: relative;
    margin-left: 10px;
    width: calc(30% - 10px);
  }
}
</style>
