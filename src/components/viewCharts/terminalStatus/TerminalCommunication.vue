<template>
  <div style="background-color: antiquewhite">
    <div class="top-table">
      <table>
        <thead>
        <tr>
          <th>时间</th>
          <th>IP</th>
          <th>所属网段</th>
          <th>所属区局</th>
          <th>终端类型</th>
          <th>上行字节数</th>
          <th>下行字节数</th>
        </tr>
        </thead>
        <tr v-for="value in tableValue">
          <td>{{ value.time }}</td>
          <td>{{ value.ip }}</td>
          <td>{{ value.location }}</td>
          <td>{{ value.netseg }}</td>
          <td>{{ value.name }}</td>
          <td>{{ value.upbytes + "bytes" }}</td>
          <td>{{ value.downbytes + "bytes" }}</td>
        </tr>

      </table>
    </div>

    <div class="page-style">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="8"
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
      netSegStatus.getTerminalCommunication(this.currentPage).then(resp => {
        this.tableValue=resp.data.segCommStatusList.records;
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
  font-size: 12px;
  font-weight: 600;
  /*padding-top: 1px;*/
  /*padding-bottom:1px;*/
}
table thead th {
  color: #F5F5F5;
  font-size: 10px;
  font-weight: 600;
  /*padding-top: 2px;*/
  /*padding-bottom: 2px;*/
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
