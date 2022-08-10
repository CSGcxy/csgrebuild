<template>
  <div>
    <div class="center-active-detail">
      <div class="active-detail-table">
        <table>
          <thead>
            <tr>
              <th>时间</th>
              <th>客户端IP</th>
              <th>客户端port</th>
              <th>服务器端IP</th>
              <th>服务器端port</th>
              <th>前向流传输速率</th>
              <th>后向流传输速率</th>
              <th>传输总字节数</th>
            </tr>
          </thead>
          <tr v-for="value in tableValue">
            <td>{{ value.duration }}</td>
            <td>{{ value.srcIp }}</td>
            <td>{{ value.sport }}</td>
            <td>{{ value.dstIp }}</td>
            <td>{{ value.dport }}</td>
            <td>{{ value.frontRate.toFixed(2) + "Mbit/s" }}</td>
            <td>{{ value.backRate.toFixed(2) + "Mbit/s" }}</td>
            <td>{{ value.byteCount.toFixed(2) + "MB" }}</td>
          </tr>
        </table>
      </div>
      <div class="page-box">
        <el-pagination
          layout="total,prev, pager, next"
          :total="total"
          class="page"
          :page-size.sync="pageSize"
          :current-page.sync="currentPage"
          @current-change="drawActiveTraffic"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import netTraffic from "@/api/netTraffic";
export default {
  name: "ActiveTraffic",
  data() {
    return {
      timer: "",
      tableValue: [],
      total: 60,
      pageSize: 8,
      currentPage: 1,
    };
  },
  mounted() {
    this.drawActiveTraffic();
    this.timer = setInterval(this.drawActiveTraffic, this.GLOBAL.refreshTime);
  },
  methods: {
    drawActiveTraffic() {
      netTraffic
        .getActiveTraffic(this.GLOBAL.NETSEG, this.currentPage)
        .then((resp) => {
          this.tableValue = resp.data.activeFlowsList.list;
          this.total = resp.data.activeFlowsList.total;
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
  /*position: relative;*/
}
.active-detail-table {
  position: relative;

  /*background-color: #4b8df8;*/
}
.page-box {
  width: 100%;
  height: 12%;
  /*margin-top: 1%;*/
  position: absolute;
  bottom: 8px;
  /*background-color: #F5F5F5;*/
}

table {
  width: 100%;
  height: 87%;
  border-collapse: collapse;
  position: absolute;
  text-align: center;
  /*background-color: blueviolet;*/
  top: 1px;
  /*border-collapse:separate;*/
  /*border-spacing:1px 1px;*/
}

table tr {
  color: #61d2f7;
  font-size: 12px;
  font-weight: 600;
  /*padding-top: 1px;*/
  /*padding-bottom:1px;*/
}
table thead th {
  color: #61d2f7;
  font-size: 12px;
  font-weight: 600;
  /*padding-top: 2px;*/
  /*padding-bottom: 2px;*/
}
td {
  font-size: 10px;
  color: #61d2f7;
  /*height: 18px;*/
}
/*分页*/

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
  padding: 0 3px;
}
</style>
