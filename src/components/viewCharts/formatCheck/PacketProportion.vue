<template>
  <div style="width: 100%;height:100%;">
    <div class="center-active-detail">
      <div class="active-detail-table">
        <h3>不合规packet明细</h3>
        <div class="table-box">
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

      </div>
      <div class="page-box">
        <el-pagination
            background
            layout="total,prev, pager, next"
            :total="total"
            class="page"
            :page-size.sync="pageSize"
            :current-page.sync="pageNum"

        >
        </el-pagination>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "PacketProportion",
  data() {
    return {
      total:100,
      pageNum:1,
      pageSize:10,
      timer: "",
      tableValue: [],
      test: [],
    };
  },
  mounted() {
    this.drawActiveTraffic();
    this.timer = setInterval(this.drawActiveTraffic, this.GLOBAL.refreshTime);
  },
  methods: {
    drawActiveTraffic() {
      // netTraffic.getActiveTraffic(this.GLOBAL.NETSEG).then((resp) => {
      //   this.tableValue = resp.data.activeFlowsList;
      // });
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

}

.center-active-detail > .active-detail-table {
  width: 100%;
  height: 92%;
  float: left;
  /*overflow: auto;*/
}

table-box{
  width:100%;
  height:92%;
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
  text-align: center;

}

.center-active-detail > .active-detail-table table thead th {
  color: #61d2f7;
  font-size: 150%;
  font-weight: 600;
  padding-bottom: 3%;
}

.center-active-detail > .active-detail-table table tr td {
  color: #61d2f7;
  font-size: 100%;
  font-weight: 600;
  padding:1% 1%;
  /*height:10px;*/
}

.page-box {
  width: 100%;
  height: 8%;
  margin-top:2%;
  float: left;
}
.page {
  /*margin:3px auto;*/
  width:60%;
  margin:1px auto;
}
</style>
