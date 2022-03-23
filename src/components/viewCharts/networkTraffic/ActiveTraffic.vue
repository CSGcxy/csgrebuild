<template>
  <div>
    <div class="center-active-detail">
      <div class="active-detail-table">
        <table>
          <thead>
            <tr>
              <th>上层应用协议</th>
              <th>传输层协议</th>
              <th>客户端</th>
              <th>服务器端</th>
              <th>持续时间</th>
              <th>前向流传输速率</th>
              <th>后向流传输速率</th>
              <th>传输总字节数</th>
            </tr>
          </thead>
           <tr v-for="value in tableValue">
            <td>{{ value.appProto }}</td>
            <td>{{ value.proto }}</td>
            <td>{{ value.srcIp }}</td>
            <td>{{ value.dstIp }}</td>
            <td>{{ value.duration }}</td>
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
            :current-page.sync="pageNum"
            @current-change="drawPacketProportion"
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
      total:60,
      pageSize:5,
      PageNum:1,
    };
  },
  mounted() {
    this.drawActiveTraffic();
    this.timer = setInterval(this.drawActiveTraffic, this.GLOBAL.refreshTime);
  },
  methods: {
    drawActiveTraffic() {
      netTraffic.getActiveTraffic(this.GLOBAL.NETSEG).then((resp) => {
        console.log(resp)
        this.tableValue = resp.data.activeFlowsList;
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
.center-active-detail{
  width: 100%;
  height: 100%;
  /*position: relative;*/
}
.active-detail-table {
  width: 100%;
  height: 86%;
}
.page-box {
  width: 100%;
  height:14%;
  /*margin-top: 1%;*/
  position:absolute;
  bottom:1%;
}


.center-active-detail > .active-detail-table table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  position: absolute;
  text-align: center;
  /*background-color: aquamarine;*/
}

.center-active-detail > .active-detail-table table thead th {
  color: #61d2f7;
  font-size: 14px;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 5px;
}

.center-active-detail > .active-detail-table table tr td {
  color: #61d2f7;
  font-size: 14px;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 5px;
}
/*分页*/

.page {
  /*margin:3px auto;*/
  width: 60%;
  margin: 1px auto;
}

/deep/ .el-pager li{
  background-color:#10121A;
}
/deep/ .el-pagination .btn-prev {
  background-color:#10121A;
}
/deep/ .el-pagination .btn-next {
  background-color: #10121A;
}
/deep/ .el-pagination {
  color:#606266;
}
</style>
