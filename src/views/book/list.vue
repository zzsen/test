<template>
  <div class="list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        项目列表
        <div class="netSwitch">
          <el-radio-group v-model="net" size="small" @change="switchNet" class="net">
            <el-radio-button
              v-for="netType in netTypes"
              :key="netType.type"
              :label="netType.type">
              {{netType.name}}
            </el-radio-button>
          </el-radio-group>
          <el-popover
            placement="top"
            width="200"
            trigger="hover"
            style="height: 20px;vertical-align: middle;"
            content="切换网段将清空页面内容">
            <i class="el-icon-info" slot="reference"></i>
          </el-popover>
        </div>
        <el-tag
          effect="light">
          <div class="projectNet">
            {{netTypes.find(a=>a.type===net).name.substr(0,1)}}
          </div>
          123
        </el-tag>
        <router-link to="/project/create">
          <el-button style="float: right; padding: 3px 0" type="text">
            <i class="el-icon-circle-plus-outline"/>新建项目
          </el-button>
        </router-link>
      </div>
      <el-tabs v-model="activeTab">
        <el-tab-pane
          v-for="projectType in projectTypes"
          :key="projectType.value"
          :label="`${projectType.name.substr(0, 2)}项目`"
          :name="`${projectType.name}`">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
              <div slot-scope="scope" :net="scope.row.net">
                <el-tag size="mini" :type="scope.row.net===netTypes.find(a=>a.name==='内网').type?'success':'danger'">
                  {{netTypes.find(a=>a.type===scope.row.net).name}}
                </el-tag>
                {{scope.row.net}}
              </div>
            </el-table-column>
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'list',
  components: {
  },
  data () {
    const projectTypes = [{
      value: 10,
      name: 'abcde'
    }, {
      value: 20,
      name: 'bcdef'
    }]
    const netTypes = [{
      type: 1,
      name: '内网'
    }, {
      type: 2,
      name: '公网'
    }, {
      type: 3,
      name: '多网段'
    }]
    return {
      net: netTypes.find(a => a.name === '多网段').type,
      netTypes,
      tableData: [{
        net: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        net: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        net: 1,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        net: 2,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      projectTypes,
      activeTab: projectTypes[0].name
    }
  },
  methods: {
    switchNet () {
      console.log(Math.max(1, 2))
    }
  }
}
</script>

<style lang="scss">
.netSwitch{
  display: inline-block;
  border-right: solid 1px #DCDFE6 !important;
  padding-right: 20px;
  .net{
    margin: 0 10px;
  }
}
.projectNet{
  border: 1px solid;
  border-radius: 50px;
  display: inline-block;
  height: 18px;
  line-height: 18px;
  padding: 1px 5px;
}
</style>
