<template>
  <div>
    <div class="center-active-detail">
      <div class="active-detail-table">
        <h3>不合规packet明细</h3>
        <table>
          <thead>
            <tr>
              <th>timestamp</th>
              <th>Src ip</th>
              <th>Src port</th>
              <th>Dst ip</th>
              <th>Dst port</th>
            </tr>
          </thead>
          <tr>
            <td>111</td>
            <td>222</td>
            <td>333</td>
            <td>444</td>
            <td>5555</td>
          </tr>
          <tr>
            <td>111</td>
            <td>222</td>
            <td>333</td>
            <td>444</td>
            <td>5555</td>
          </tr>
          <tr>
            <td>111</td>
            <td>222</td>
            <td>333</td>
            <td>444</td>
            <td>5555</td>
          </tr>
          <tr>
            <td>111</td>
            <td>222</td>
            <td>333</td>
            <td>444</td>
            <td>5555</td>
          </tr>
          <tr>
            <td>111</td>
            <td>222</td>
            <td>333</td>
            <td>444</td>
            <td>5555</td>
          </tr>
          <tr>
            <td>111</td>
            <td>222</td>
            <td>333</td>
            <td>444</td>
            <td>5555</td>
          </tr>
          <tr>
            <td>111</td>
            <td>222</td>
            <td>333</td>
            <td>444</td>
            <td>5555</td>
          </tr>
          <tr>
            <td>111</td>
            <td>222</td>
            <td>333</td>
            <td>444</td>
            <td>5555</td>
          </tr>
          <tr>
            <td>111</td>
            <td>222</td>
            <td>333</td>
            <td>444</td>
            <td>5555</td>
          </tr>
          <tr>
            <td>111</td>
            <td>222</td>
            <td>333</td>
            <td>444</td>
            <td>5555</td>
          </tr>
        </table>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100"
        class="page"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "PacketProportion",
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
  /* background: gold; */
  position: relative;
}
.center-active-detail > .active-detail-table h3 {
  /* background: #000; */
  text-align: center;
  color: #fff;
}
.center-active-detail > .active-detail-table table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  position: absolute;
  text-align: center;
  margin-top: 2.5%;
  margin-left: 2.5%;
}

.center-active-detail > .active-detail-table table thead th {
  color: #61d2f7;
  font-size: 25px;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 50px;
}

.center-active-detail > .active-detail-table table tr td {
  color: #61d2f7;
  font-size: 20px;
  font-weight: 600;
  padding-top: 25px;
  padding-bottom: 25px;
}
.page {
  margin-left: 37%;
  padding-top: 82%;
}
</style>
