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
      <el-table-column prop="" label="ZZ" width="70">
        <template slot-scope="scope">
          <span>{{ scope.row.zz }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="" label="PW" width="71">
        <template slot-scope="scope">
          <span>{{ scope.row.pw}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="" label="WX230" width="85">
        <template slot-scope="scope">
          <span>{{ scope.row.wx230 }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="" label="LT4G" width="67">
        <template slot-scope="scope">
          <span>{{ scope.row.lt4G }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="" label="YDWLW" width="80" >
        <template slot-scope="scope">
          <span>{{ scope.row.ydwlw}}</span>
        </template>
      </el-table-column>
<!--      <el-table-column prop="" label="YDWLW" width="80">-->
<!--        <template slot-scope="scope">-->
<!--          <span>{{ scope.row.ydwlw.toFixed(2)}}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
      <el-table-column prop="" label="YD4G" width="77">
        <template slot-scope="scope">
          <span>{{ scope.row.yd4G }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="" label="YD5G" width="77">
        <template slot-scope="scope">
          <span>{{ scope.row.yd5G }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="" label="Others" width="77">
        <template slot-scope="scope">
          <span>{{ scope.row.others}}</span>
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
    this.timer = setInterval(this.drawScoreDetails, this.GLOBAL.refreshTime);  // 每5s执行一次
  },
  methods: {
    drawScoreDetails() {
      securityAssess.getSegAssessScore().then((resp) => {
        let rowTableData = resp.data.segScoreAllTimeVo.latestTimeSegDeatils;
        rowTableData.forEach(function (tableList){
          tableList.pw=tableList.pw.toFixed(2)
          tableList.others=tableList.others.toFixed(2)
          if (tableList.ydwlw==="NaN"){
            tableList.ydwlw=NaN
          }else{
            tableList.ydwlw=tableList.ydwlw.toFixed(2)
          }
        })
        this.tableData=rowTableData

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
.my_table{
  margin-top:20px;
}
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
  padding: 10px 0;
}

/* .my_table >>> .el-table th.el-table__cell > .cell {
  width: 50%; */
/* } */
</style>
