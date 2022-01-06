<template>
  <div id="alertIP" style="width:100%;height:100%;">
    <div class="h1">告警IP</div>

    <el-table
        :data="tableData"
        height="270"
        style="width: 100%">
      <el-table-column
          prop="timestamp"
          label="出现时间"
          align="center"
          width="100">
      </el-table-column>
      <el-table-column
          prop="netWorkSeg"
          label="网段"
          align="center"
      >
      </el-table-column>
      <el-table-column
          prop="alertFlow"
          label="告警流"
          align="center"
          width="80">
      </el-table-column>
    </el-table>

  </div>

</template>

<script>
import netSegStatus from "@/api/netSegStatus";
export default {
  name: "AlertIP",
  data() {
    return {
      list1: [],
      tableData:[],

    };
  },
  mounted() {
    this.drawTopHosts();
    setInterval(this.drawTopHosts,5000);
  },
  methods: {
    drawTopHosts() {
      netSegStatus.getAlertFlow().then(resp =>{
        this.tableData = resp.data
      })

    }
  }
}
</script>

<style>

.h1 {
  font-size: 20px;
  font-weight: bolder;
  color: #F5F5F5;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

#alertIP .el-table {
  color: gold;
  background-color: #10121A;
}

.el-table .el-table__header-wrapper .el-table__header .has-gutter tr th {
  background-color: #10121A;
  border: 0;
}

.el-table .el-table__body-wrapper .el-table__body .el-table__row {
  background-color: #10121A;
}


.el-table th.is_leaf{
  border: none;
  cursor: pointer;
}

.el-table .el-table__body-wrapper .el-table__body .el-table__row td{
  /* 去除表格线 */
  border: none;
}

#alertIP .el-table::before{
  /* 去除下边框 */
  height: 0;
}
</style>
