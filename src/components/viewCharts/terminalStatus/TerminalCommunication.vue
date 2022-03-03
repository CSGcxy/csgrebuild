<template>
  <div style="background-color: antiquewhite">
    <div class="top-table">
      <table>
        <thead>
        <tr>
          <th>IP</th>
          <th>位置</th>
          <th>流数</th>
          <th>总发送字节数</th>
          <th>名称</th>
          <th>上次出现时间</th>
          <th>上下行速率</th>
          <th>总字节数</th>
        </tr>
        </thead>
        <tr v-for="value in tableValue">
          <td>{{ value.ip }}</td>
          <td>{{ value.location }}</td>
          <td>{{ value.flows }}</td>
          <td>{{ value.totalrecvbytes + "bytes" }}</td>
          <td>{{ value.name }}</td>
          <td>{{ value.lastseen }}</td>
          <td>{{ value.rates.toFixed(2) + "bit/s" }}</td>
          <td>{{ value.totalbytes + "bytes" }}</td>
        </tr>

      </table>
    </div>

    <div class="page-style">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="5"
          layout="total, prev, pager, next"
          :total="dataListTotal">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import netSegStatus from "@/api/netSegStatus";
export default {
  name: "TerminalCommunication",
  data(){
    return{
      tableValue:[],
      temp: '',
      timer:'',
      currentPage:1,
      dataListTotal: 0
    }
  },
  mounted() {
    this.drawterminalCommunication();
    this.timer = setInterval(this.drawterminalCommunication,this.GLOBAL.refreshTime);
    // this.temp = 'Others'
  },
  methods:{
    drawterminalCommunication() {
      // this.GLOBAL.NETSEG = this.temp
      netSegStatus.getTerminalCommunication(this.GLOBAL.NETSEG,this.currentPage).then(resp => {
        this.tableValue=resp.data.segCommStatusList.list;
        this.dataListTotal=resp.data.segCommStatusList.total;
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      // console.log(this.currentPage)
      this.drawterminalCommunication();
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
}
</script>

<style scoped>
table{
  width: 100%;
  height: 87%;
  border-collapse: collapse;
  position: absolute;
  text-align: center;
  /*background-color: blueviolet;*/
  top: 1px;
}

table tr{
  color: #61d2f7;
  font-size: 14px;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 5px;
}
table thead th {
  color: #F5F5F5;
  font-size: 14px;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 5px;
}
td {
  color: 	#F5F5F5;
}
.top-table{
  /*background-color: #4b8df8;*/
  position:relative;
}
.page-style{
  text-align: center;
/*background-color: #61d2f7;*/
  position: absolute;
  bottom: 1px;
  left: 35%;
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
