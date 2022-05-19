<template>
  <div class="my_table">
    <el-table
      :data="tableData"
      style="width: 100%"
      row-key="id"
      default-expand-all
    >
      <el-table-column prop="" label="评分" width="110">
        <template slot-scope="scope">
          <span>{{ textArr[scope.$index] }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="" label="ZZ" width="40">
        <template slot-scope="scope">
          <span>{{ scope.row.zz }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="" label="PW" width="45">
        <template slot-scope="scope">
          <span>{{ scope.row.pw }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="" label="WX230" width="50">
        <template slot-scope="scope">
          <span>{{ scope.row.wx230 }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="" label="LT4G" width="40">
        <template slot-scope="scope">
          <span>{{ scope.row.lt4G }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="" label="YDWLW" width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.ydwlw }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="" label="YD4G" width="45">
        <template slot-scope="scope">
          <span>{{ scope.row.yd4G }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="" label="YD5G" width="45">
        <template slot-scope="scope">
          <span>{{ scope.row.yd5G }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="" label="Others" width="77">
        <template slot-scope="scope">
          <span>{{ scope.row.others.toFixed(2) }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import securityAssess from "../../../api/securityAssess";
export default {
  name: "scoreDetails",
  data() {
    return {
      textArr: [
        "上行速率评分",
        "下行速率评分",
        "在线设备评分",
        "离线设备评分",
        "告警流数评分",
        "活跃流数评分",
      ],
      tableData: [],
      // tableTime: [],
    };
  },
  mounted() {
    this.drawScoreDetails();
    this.timer = setInterval(this.drawScoreDetails, this.GLOBAL.refreshTime);
  },
  methods: {
    drawScoreDetails() {
      securityAssess.getSegAssessScore().then((resp) => {
        this.tableData = resp.data.segScoreAllTimeVo.latestTimeSegDeatils;
        // console.log(this.tableData);

        // this.tableData = res.map((v,i) => ({...v,limit: limit[i]}))

        // this.AfnData = resp.data.segScoreAllTimeVo.timeArray;
        // this.AfnData.forEach((entry) => {
        //   // console.log(entry);
        //   this.tableTime.push(entry);
        // });
        // // console.log(this.tableTime);
        // this.$bus.$emit("timer", this.AfnData);
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

/* .my_table >>> .el-table thead {
  color: #fff;
  font-size: 20px;
}
.my_table >>> .el-table {
  color: #fff;
  font-size: 16px;
} */

.my_table >>> .el-table tbody tr:hover > td {
  background-color: transparent;
}

.my_table >>> .el-table .el-table__cell {
  padding: 10px 0;
}

/* .my_table >>> .el-table th.el-table__cell > .cell {
  width: 50%; */
/* } */
</style>