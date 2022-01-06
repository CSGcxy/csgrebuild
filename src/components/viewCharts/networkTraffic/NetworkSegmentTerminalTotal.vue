<template>
  <div class="chart-box">
    <div class="left-name">
      <div class="txt">
        <h2>上传速率</h2>
      </div>
      <div class="txt">
        <h2>下载速率</h2>
      </div>
      <div class="txt">
        <h2>告警流数</h2>
      </div>
      <div class="txt">
        <h2>上行字节数</h2>
      </div>
      <div class="txt">
        <h2>下行字节数</h2>
      </div>
      <div class="txt">
        <h2>在线设备数</h2>
      </div>
      <div class="txt">
        <h2>离线设备数</h2>
      </div>
      <div class="txt">
        <h2>活跃流数</h2>
      </div>
    </div>
    <div class="left-num">
      <div class="Num">
        <h1>60</h1>
        <h1>kbps</h1>
      </div>
      <div class="Num">
        <h1>80</h1>
        <h1>kbps</h1>
      </div>
      <div class="Num">
        <h1>36</h1>
<!--        <h1>{{ temp  }}</h1>-->
      </div>
      <div class="Num">
        <h1>45</h1>
      </div>
      <div class="Num">
        <h1>25</h1>
      </div>
      <div class="Num">
        <h1>46</h1>
      </div>
      <div class="Num">
        <h1>39</h1>
      </div>
      <div class="Num">
        <h1>112</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NetworkSegmentTerminalTotal",
  data() {
    return{
      dataList:[],
      temp: '',
      // upload:'',
      // download:'',
      // warnFlow:'',
      // localHost:'',
      // remoteHost:'',
      // onlineNum:'',
      // offlineNum:'',
      // activeFlow:'',
      timer: null
    }
  },
  mounted() {
    // this.drawNetworkSegmentTerminalTotal();
    // setInterval(this.drawNetworkSegmentTerminalTotal,5000);
    // this.temp = this.GLOBAL.NETSEG

  },
  methods:{
    // drawNetworkSegmentTerminalTotal(){
    //   this.getRequest("/terminalStatus/getNetworkSegmentTerminalTotal/" + this.GLOBAL.NETSEG).then(resp => {
    //     if (resp.status != 200) {
    //
    //       this.$message.error("数据获取失败");
    //     } else {
    //       this.dataList = resp.data.data[0];
    //
    //     }
    //   });
    // }
  }
}
</script>

<style scoped>
.left-top>.chart-box {
  position: absolute;
  top: 0%;
  bottom: 0;
  width: 90%;
  margin: auto;
  left: 0;
  right: 0;
  height: 100%;
}
.left-top>.chart-box>.left-name {
  width: 50%;
  height: 100%;
  float: left;
  background: aqua;
}
.left-top>.chart-box>.left-num {
  width: 50%;
  height: 100%;
  float: left;
  background: gold;
}
.left-top>.chart-box>.left-num>.Num{
  width: 100%;
  height: 12.5%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  background: #10121A;
  margin-left: 0px;
}
.left-top>.chart-box>.left-name>.txt{
  width: 100%;
  height: 12.5%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  background: #10121A;
  margin-left: 0px;
}

.left-top>.chart-box>.left-num>.Num h1 {
  font-size:100%;
  color : gold;
}
.left-top>.chart-box>.left-name>.txt h2 {
  font-size:100%;
  color : white;
}
</style>
