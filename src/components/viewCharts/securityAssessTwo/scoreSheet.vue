<template>
  <div class="my_table">
    <el-table
      :data="tableData"
      style="width: 100%"
      row-key="id"
      default-expand-all
    >
      <el-table-column prop="Network" label="网段">
        <template slot-scope="scope">
          <span> {{ scope.row.segment }} </span>
        </template>
      </el-table-column>
      <el-table-column prop="ip" label="IP" width="130">
        <template slot-scope="scope">
          <span> {{ scope.row.ip }} </span>
        </template>
      </el-table-column>
      <el-table-column prop="Location" label="位置" sortable width="80">
        <template slot-scope="scope">
          <span> {{ scope.row.location }} </span>
        </template>
      </el-table-column>
      <el-table-column prop="Time" label="时间" sortable width="110">
        <template slot-scope="scope">
          <span> {{ scope.row.ts }} </span>
        </template>
      </el-table-column>
      <el-table-column prop="TotalSpeed" label="总速率" sortable>
        <template slot-scope="scope">
          <span> {{ scope.row.totalrate }} </span>
        </template>
      </el-table-column>
      <el-table-column prop="UplinkRate" label="上行速率" sortable>
        <template slot-scope="scope">
          <span> {{ scope.row.uprate }} </span>
        </template>
      </el-table-column>
      <el-table-column prop="DownlinkRate" label="下行速率" sortable>
        <template slot-scope="scope">
          <span> {{ scope.row.downrate }} </span>
        </template>
      </el-table-column>
      <el-table-column prop="Rate" label="评分" sortable>
        <template slot-scope="scope">
          <span> {{ scope.row.totalrateScore.toFixed(2) }} </span>
        </template>
      </el-table-column>
    </el-table>
    <div class="page-box">
      <el-pagination
        layout="total,prev, pager, next"
        :total="total"
        class="page"
        :page-size.sync="pageSize"
        :current-page.sync="pageNum"
        @current-change="drawScoreSheet"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import securityAssess from "../../../api/securityAssess";
export default {
  name: "scoreSheet",
  data() {
    return {
      total: 100,
      pageNum: 1,
      pageSize: 7,
      timer: "",
      tableData: [],
    };
  },
  mounted() {
    this.drawScoreSheet();
    this.timer = setInterval(this.drawScoreSheet, this.GLOBAL.refreshTime);  // 每5s执行一次
  },
  methods: {
    drawScoreSheet() {
      securityAssess
        .getTerminalTotalRateScore(this.pageNum, this.pageSize)
        .then((resp) => {
          this.total = resp.data.pageInfoVo.totalNum;
          this.tableData = resp.data.pageInfoVo.terminalScoreEntityVoPage;
          // console.log(resp.data.pageInfoVo.pageNum);
          // console.log(resp.data);
        });
    },
    beforeDestroy() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
};
</script>

<style scoped>
.my_table >>> .el-table::before {
  /* 去除下边框 */
  height: 0;
}

 .my_table >>> .el-table thead {
  color: #61d2f7;
  /*font-size: 20px;*/
}
.my_table >>> .el-table {
  color: #fff;
  /*font-size: 16px;*/
}

.my_table >>> .el-table tbody tr:hover > td {
  background-color: transparent;
}

.my_table >>> .el-table .el-table__cell {
  padding: 5px 0;
}
.page-box {
  width: 100%;
  height: 8%;
  margin-top: 2%;
  /*position: absolute;*/
  /*bottom:3px;*/
  float: left;
}
.page {
  /*margin:3px auto;*/
  width: 60%;
  margin: 1px auto;
}

.my_table >>> .el-pager li {
  background-color: #10121a;
}
.my_table >>> .el-pagination .btn-prev {
  background-color: #10121a;
}
.my_table >>> .el-pagination .btn-next {
  background-color: #10121a;
}
.my_table >>> .el-pagination {
  color: #606266;
}
</style>
