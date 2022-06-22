<template>
  <div style="width: 100%; height: 100%">
    <div class="center-active-detail">
      <div class="active-detail-table">
        <!--        <h3>不合规packet明细</h3>-->
        <div class="h1_title">不合规packet明细</div>
        <div class="table-box">
          <table>
            <thead>
              <tr>
                <th v-for="(item, ind) in columnList" :key="ind">
                  {{ item.name }}
                </th>
              </tr>
            </thead>
            <tr v-for="(item, index) in tableValue" :key="index">
              <td v-for="(it, ind) in columnList" :key="ind">
                {{ item[it.eng] }}
              </td>
            </tr>
            <!--            <tr>-->
            <!--              <td>111</td>-->
            <!--              <td>222</td>-->
            <!--              <td>333</td>-->
            <!--              <td>444</td>-->
            <!--              <td>5555</td>-->
            <!--            </tr>-->
          </table>
        </div>
      </div>
      <div class="page-box">
        <el-pagination
          layout="total,prev, pager, next"
          :total="total"
          class="page"
          :page-size.sync="pageSize"
          :current-page.sync="pageNum"
          @current-change="drawPacketProportion"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import checkFormat from "../../../api/checkFormat";

export default {
  name: "PacketProportion",
  data() {
    return {
      total: 100,
      pageNum: 1,
      pageSize: 10,
      timer: "",
      // columnList:["timestamp","Src ip","Src port","Dst ip","Dst port"],
      columnList: [
        { eng: "ts", name: "timestamp" },
        { eng: "srcip", name: "Src ip" },
        { eng: "srcport", name: "Src port" },
        { eng: "dstip", name: "Dst ip" },
        { eng: "dstport", name: "Dst port" },
      ],
      tableValue: [],
      test: [],
    };
  },
  mounted() {
    this.drawPacketProportion();
    this.timer = setInterval(
      this.drawPacketProportion,
      this.GLOBAL.refreshTime
    );
  },
  methods: {
    drawPacketProportion() {
      checkFormat
        .getUnqualifiedDetails(this.pageNum, this.pageSize)
        .then((resp) => {
          this.total = resp.data.unqualifiedDetails.total;
          this.tableValue = resp.data.unqualifiedDetails.list;
        });
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style scoped>
.center-active-detail {
  width: 100%;
  height: 100%;
  position: relative;
}

.center-active-detail > .active-detail-table {
  width: 100%;
  /*height: 88%;*/
  float: left;
  /*overflow: auto;*/
}

table-box {
  width: 100%;
  /*height: 90%;*/
}
.h1_title {
  font-size: 14px;
  font-weight: bolder;
  color: #fff;
  width: 100%;
  margin: 3% auto;
  text-align: center;
}

/*.center-active-detail > .active-detail-table h3 {*/
/*  !* background: #000; *!*/
/*  text-align: center;*/
/*  color: #fff;*/
/*}*/

.center-active-detail > .active-detail-table table {
  width: 100%;
  /*height: 100%;*/
  border-collapse: collapse;
  text-align: center;
}

.center-active-detail > .active-detail-table table thead th {
  color: #61d2f7;
  font-size: 150%;
  font-weight: 600;
  padding-bottom: 2%;
}

.center-active-detail > .active-detail-table table tr td {
  color: #61d2f7;
  font-size: 100%;
  font-weight: 600;
  padding: 1% 1%;
  margin-bottom: 1%;
  /*height:10px;*/
}

.page-box {
  width: 100%;
  height: 8%;
  margin-top: 5%;
  /*position: absolute;*/
  /*bottom:3px;*/
  float: left;
}
.page {
  /*margin:3px auto;*/
  width: 60%;
  margin: 1px auto;
}

/deep/ .el-pager li {
  background-color: #10121a;
}
/deep/ .el-pagination .btn-prev {
  background-color: #10121a;
}
/deep/ .el-pagination .btn-next {
  background-color: #10121a;
}
/deep/ .el-pagination {
  color: #606266;
}
</style>
