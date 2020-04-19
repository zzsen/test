<template>
  <div class="range">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>相关排行</span>
        <el-button style="float: right; padding: 3px 0" type="text">
          更多<i class="mdi mdi-chevron-triple-right"></i>
        </el-button>
        <el-button
          type="text"
          title="切换视图"
          v-if="viewByList"
          style="float: right; padding: 3px 0; margin-right: 10px;"
          @click="() => { this.viewByList =! this.viewByList }">
          <i class="mdi mdi-view-list"></i>
        </el-button>
        <el-button
          type="text"
          title="切换视图"
          v-else
          style="float: right; padding: 3px 0; margin-right: 10px;"
          @click="() => { this.viewByList =! this.viewByList }">
          <i class="mdi mdi-view-grid-outline"></i>
        </el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'range',
  components: {
  },
  data () {
    return {
      viewByList: true
    }
  }
}
</script>

<style scoped lang="scss">
.range {
  width: 100%;
  background:red;
}
</style>
