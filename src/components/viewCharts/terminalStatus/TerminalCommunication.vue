<template>
<div>
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
      <td>{{value.ip}}</td>
      <td>{{value.location}}</td>
      <td>{{value.flows}}</td>
      <td>{{value.totalrecvbytes+"bytes"}}</td>
      <td>{{value.name}}</td>
      <td>{{value.lastseen}}</td>
      <td>{{value.rates.toFixed(2)+"bit/s"}}</td>
      <td>{{value.totalbytes+"bytes"}}</td>
    </tr>

  </table>
</div>
</template>

<script>
import netSegStatus from "@/api/netSegStatus";
export default {
  name: "TerminalCommunication",
  data(){
    return{
      tableValue:[],
      temp: ''
    }
  },
  mounted() {
    this.drawterminalCommunication();
    setInterval(this.drawterminalCommunication,this.GLOBAL.refreshTime);
    // this.temp = 'Others'
  },
  methods:{
    drawterminalCommunication() {
      // this.GLOBAL.NETSEG = this.temp
      netSegStatus.getTerminalCommunication(this.GLOBAL.NETSEG).then(resp => {
        this.tableValue=resp.data.segCommStatusList;
      });
    }
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
}
table thead th{
  color: #61d2f7;
  font-size: 14px;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 5px;
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
</style>
