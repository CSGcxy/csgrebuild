<template>
  <div class="my_table">
    <el-table
      :data="tableData"
      style="width: 100%"
      row-key="id"
      default-expand-all
    >
      <el-table-column prop="Network" label="网段"> </el-table-column>
      <el-table-column prop="IP" label="IP"> </el-table-column>
      <el-table-column prop="Location" label="位置" sortable width="80">
      </el-table-column>
      <el-table-column prop="Time" label="时间" sortable width="120">
      </el-table-column>
      <el-table-column prop="TotalSpeed" label="总速率" sortable>
      </el-table-column>
      <el-table-column prop="UplinkRate" label="上行速率" sortable>
      </el-table-column>
      <el-table-column prop="DownlinkRate" label="下行速率" sortable>
      </el-table-column>
      <el-table-column prop="Rate" label="评分" sortable> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "scoreSheet",
  data() {
    return {
      tableData: [
        {
          Network: "PW",
          IP: "172.35.68.73",
          Location: "横岗",
          Time: "2022.5.12 8:00",
          TotalSpeed: "268Kb/s",
          UplinkRate: "100Kb/s",
          DownlinkRate: "120Kb/s",
          Rate: 90,
        },
        {
          Network: "PW",
          IP: "172.35.68.73",
          Location: "横岗",
          Time: "2022.5.12 8:00",
          TotalSpeed: "268Kb/s",
          UplinkRate: "100Kb/s",
          DownlinkRate: "120Kb/s",
          Rate: 90,
        },
        {
          Network: "PW",
          IP: "172.35.68.73",
          Location: "横岗",
          Time: "2022.5.12 8:00",
          TotalSpeed: "268Kb/s",
          UplinkRate: "100Kb/s",
          DownlinkRate: "120Kb/s",
          Rate: 90,
        },
        {
          Network: "PW",
          IP: "172.35.68.73",
          Location: "横岗",
          Time: "2022.5.12 8:00",
          TotalSpeed: "268Kb/s",
          UplinkRate: "100Kb/s",
          DownlinkRate: "120Kb/s",
          Rate: 90,
        },
        {
          Network: "PW",
          IP: "172.35.68.73",
          Location: "横岗",
          Time: "2022.5.12 8:00",
          TotalSpeed: "268Kb/s",
          UplinkRate: "100Kb/s",
          DownlinkRate: "120Kb/s",
          Rate: 90,
        },
        {
          Network: "PW",
          IP: "172.35.68.73",
          Location: "横岗",
          Time: "2022.5.12 8:00",
          TotalSpeed: "268Kb/s",
          UplinkRate: "100Kb/s",
          DownlinkRate: "120Kb/s",
          Rate: 90,
        },
        {
          Network: "PW",
          IP: "172.35.68.73",
          Location: "横岗",
          Time: "2022.5.12 8:00",
          TotalSpeed: "268Kb/s",
          UplinkRate: "100Kb/s",
          DownlinkRate: "120Kb/s",
          Rate: 90,
        },
        {
          Network: "PW",
          IP: "172.35.68.73",
          Location: "横岗",
          Time: "2022.5.12 8:00",
          TotalSpeed: "268Kb/s",
          UplinkRate: "100Kb/s",
          DownlinkRate: "120Kb/s",
          Rate: 90,
        },
        {
          Network: "PW",
          IP: "172.35.68.73",
          Location: "横岗",
          Time: "2022.5.12 8:00",
          TotalSpeed: "268Kb/s",
          UplinkRate: "100Kb/s",
          DownlinkRate: "120Kb/s",
          Rate: 90,
        },
        {
          Network: "PW",
          IP: "172.35.68.73",
          Location: "横岗",
          Time: "2022.5.12 8:00",
          TotalSpeed: "268Kb/s",
          UplinkRate: "100Kb/s",
          DownlinkRate: "120Kb/s",
          Rate: 90,
        },
        {
          Network: "PW",
          IP: "172.35.68.73",
          Location: "横岗",
          Time: "2022.5.12 8:00",
          TotalSpeed: "268Kb/s",
          UplinkRate: "100Kb/s",
          DownlinkRate: "120Kb/s",
          Rate: 90,
        },
        {
          Network: "PW",
          IP: "172.35.68.73",
          Location: "横岗",
          Time: "2022.5.12 8:00",
          TotalSpeed: "268Kb/s",
          UplinkRate: "100Kb/s",
          DownlinkRate: "120Kb/s",
          Rate: 90,
        },
        {
          Network: "PW",
          IP: "172.35.68.73",
          Location: "横岗",
          Time: "2022.5.12 8:00",
          TotalSpeed: "268Kb/s",
          UplinkRate: "100Kb/s",
          DownlinkRate: "120Kb/s",
          Rate: 90,
        },
      ],
    };
  },
};
</script>

<style scoped>
.my_table >>> .el-table::before {
  /* 去除下边框 */
  height: 0;
}

/* .my_table >>> .el-table thead {
  color: #fff;
  font-size: 20px;
}
.my_table >>> .el-table {
  color: #fff;
  font-size: 16px;
} */

.my_table >>> .el-table tbody tr:hover > td {
  background-color: transparent;
}
</style>