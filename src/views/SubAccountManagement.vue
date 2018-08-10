
<template>
  <!--<div id="app">-->
    <!--子账户管理页面-->
  <!--</div>-->
  <el-row>
    <el-col :span="24"><div class="grid-content">策略基本信息</div></el-col>
    <el-col :span="24">
      <div class="basicInfo">
        <el-row :gutter="30" :type="flex">
          <el-col :span="4"><div class="grid-content">策略名称：<span>我的名字真的很长</span></div></el-col>
          <el-col :span="4"><div class="grid-content">期初资金：<span>111</span></div></el-col>
          <el-col :span="4"><div class="grid-content">盈亏：<span>222</span></div></el-col>
          <el-col :span="4"><div class="grid-content">总资产：<span>222</span></div></el-col>
          <el-col :span="4"><div class="grid-content">资产净值：<span>3333</span></div></el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="24"><div class="grid-content">子账户列表</div>
      <div>
        <el-row :gutter="10">
            <el-col :span="8">
              <div class="grid-content">
                <el-col :span="24" class="subAccount">
                  <div class="subtitle bg-purple">子账户名称 <span>611101</span>
                  </div>
                  <el-col :span="24" class="accountContent">
                    <el-row>
                      <el-col :span="12"><div class="grid-content">账户类型：<span>股票</span></div></el-col>
                      <el-col :span="12"><div class="grid-content">账户状态：<span>111</span></div></el-col>
                      <el-col :span="12"><div class="grid-content">账户资产：<span>222</span></div></el-col>
                      <el-col :span="12"><div class="grid-content">备注：<span>222</span></div></el-col>
                    </el-row>
                  </el-col>
                </el-col>
              </div>
            </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-col :span="24" class="subAccount">
                <div class="subtitle bg-purple">子账户名称 <span>611101</span>
                </div>
                <el-col :span="24" class="accountContent">
                  <el-row>
                    <el-col :span="12"><div class="grid-content">账户类型：<span>股票</span></div></el-col>
                    <el-col :span="12"><div class="grid-content">账户状态：<span>111</span></div></el-col>
                    <el-col :span="12"><div class="grid-content">账户资产：<span>222</span></div></el-col>
                    <el-col :span="12"><div class="grid-content">备注：<span>222</span></div></el-col>
                  </el-row>
                </el-col>
              </el-col>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-col :span="24" class="subAccount">
                <div class="subtitle bg-purple">子账户名称 <span>611101</span>
                </div>
                <el-col :span="24" class="accountContent">
                  <el-row>
                    <el-col :span="12"><div class="grid-content">账户类型：<span>股票</span></div></el-col>
                    <el-col :span="12"><div class="grid-content">账户状态：<span>111</span></div></el-col>
                    <el-col :span="12"><div class="grid-content">账户资产：<span>222</span></div></el-col>
                    <el-col :span="12"><div class="grid-content">备注：<span>222</span></div></el-col>
                  </el-row>
                </el-col>
              </el-col>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-col :span="24" class="subAccount">
                <div class="subtitle bg-purple">子账户名称 <span>611101</span>
                </div>
                <el-col :span="24" class="accountContent">
                  <el-row>
                    <el-col :span="12"><div class="grid-content">账户类型：<span>股票</span></div></el-col>
                    <el-col :span="12"><div class="grid-content">账户状态：<span>111</span></div></el-col>
                    <el-col :span="12"><div class="grid-content">账户资产：<span>222</span></div></el-col>
                    <el-col :span="12"><div class="grid-content">备注：<span>222</span></div></el-col>
                  </el-row>
                </el-col>
              </el-col>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="24"><div class="grid-content">出入金列表</div>
      <div class="block datePanel">
        <el-date-picker
                v-model="time"
                type="datetimerange"
                placeholder="选择时间范围">
        </el-date-picker>
      </div>
      <el-table
              :data="tableData2"
              style="width: 100%"
              :row-class-name="tableRowClassName">
        <el-table-column
                prop="date"
                label="日期">
        </el-table-column>
        <el-table-column
                prop="date"
                label="时间">
        </el-table-column>
        <el-table-column
                prop="date"
                label="操作">
        </el-table-column>
        <el-table-column
                prop="name"
                label="出入金明细">
        </el-table-column>
        <el-table-column
                prop="address"
                label="对应子账户">
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>

</template>

<script>
    export default {
        name: 'subAccountManage',
        data () {
            return {
                time: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                tableData2: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
        methods: {
            tableRowClassName (row, index) {
                if (index === 1) {
                    return 'info-row'
                } else if (index === 3) {
                    return 'positive-row'
                }
                return ''
            }
        },
        mounted: function () {
        },
        components: {}
    }
</script>

<style scoped lang="scss">
  .el-row {
    margin-bottom: 20px;
    /*margin-left:60px;*/
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-col {
    border-radius: 4px;
    .datePanel{
      margin-bottom:10px;
    }
    .basicInfo{
      margin-left:20px;
      .el-row{
        padding: 15px 0;
        margin-bottom: 20px;
        border: 1px solid #d1dbe5;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
      }

    }
  }
  .subAccount{
    /*padding: 15px 0;*/
    padding:0px !important;
    margin-bottom: 20px;
    border: 1px solid #d1dbe5;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-table .info-row {
    background: #c9e5f5;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .el-table .positive-row {
    background: #e2f0e4;
  }
  .subtitle{
    padding:5px;
  }
  .accountContent{
    padding-top:10px;
  }
</style>

