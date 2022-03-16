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
          <!-- <tr v-for="value in tableValue"> -->
          <tr>
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
    };
  },
  mounted() {
    this.drawActiveTraffic();
    this.timer = setInterval(this.drawActiveTraffic, this.GLOBAL.refreshTime);
  },
  methods: {
    drawActiveTraffic() {
      netTraffic.getActiveTraffic(this.GLOBAL.NETSEG).then((resp) => {
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
.center-active-detail > .active-detail-table {
  width: 100%;
  height: 100%;
  background: gold;
  position: relative;
}

.center-active-detail > .active-detail-table table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  position: absolute;
  text-align: center;
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
</style>