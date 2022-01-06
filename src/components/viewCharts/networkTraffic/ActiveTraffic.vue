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
          <tr>
            <td>HTTP</td>
            <td>TCP</td>
            <td>192.168.1.2</td>
            <td>178.62.3.29</td>
            <td>00:58</td>
            <td>3.12 Mbit/s</td>
            <td>2.56 Mbit/s</td>
            <td>11.32 MB</td>
          </tr>
          <tr>
            <td>HTTP</td>
            <td>TCP</td>
            <td>192.168.1.2</td>
            <td>178.62.3.29</td>
            <td>00:58</td>
            <td>3.12 Mbit/s</td>
            <td>2.56 Mbit/s</td>
            <td>11.32 MB</td>
          </tr>
          <tr>
            <td>HTTP</td>
            <td>TCP</td>
            <td>192.168.1.2</td>
            <td>178.62.3.29</td>
            <td>00:58</td>
            <td>3.12 Mbit/s</td>
            <td>2.56 Mbit/s</td>
            <td>11.32 MB</td>
          </tr>
          <tr>
            <td>HTTP</td>
            <td>TCP</td>
            <td>192.168.1.2</td>
            <td>178.62.3.29</td>
            <td>00:58</td>
            <td>3.12 Mbit/s</td>
            <td>2.56 Mbit/s</td>
            <td>11.32 MB</td>
          </tr>
          <tr>
            <td>HTTP</td>
            <td>TCP</td>
            <td>192.168.1.2</td>
            <td>178.62.3.29</td>
            <td>00:58</td>
            <td>3.12 Mbit/s</td>
            <td>2.56 Mbit/s</td>
            <td>11.32 MB</td>
          </tr>
<!--          <tr>-->
<!--            <td>HTTP</td>-->
<!--            <td>TCP</td>-->
<!--            <td>192.168.1.2</td>-->
<!--            <td>178.62.3.29</td>-->
<!--            <td>00:58</td>-->
<!--            <td>3.12 Mbit/s</td>-->
<!--            <td>2.56 Mbit/s</td>-->
<!--            <td>11.32 MB</td>-->
<!--          </tr>-->

        </table>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ActiveTraffic",
  data() {
    return {
      tableValue: []

    }
  },
  mounted() {
    // this.drawActiveTraffic();
  },
  methods: {
    // drawActiveTraffic() {
    //   this.getRequest("/networkTraffic/activeTraffic").then(resp=>{
    //     if (resp.status != 200) {
    //       this.$message.error("数据获取失败");
    //     } else {
    //       this.tableValue=resp.data.data;
    //     }
    //   })
    // }
  }
}
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