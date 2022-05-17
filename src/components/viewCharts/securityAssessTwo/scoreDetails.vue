<template>
  <div class="my_table">
    <el-table :data="AllData" style="width: 100%">
      <el-table-column prop="title" label="统计"> </el-table-column>
      <el-table-column
        v-for="(item, index) in allList"
        :prop="item.key"
        :key="index"
        :label="item.feeName"
      >
      </el-table-column>
      <!-- <el-table-column prop="join" label="合计"> </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
export default {
  name: "scoreDetails",
  data() {
    return {
      AllData: [],
      allList: [],
    };
  },
  methods: {
    setData() {
      //这里请求后台的统计信息，合计可以在我这里进行运算
      var getData = [
        {
          title: "上行速率评分",
          data: [
            {
              feeName: "网段1",
              num: 86,
            },
            {
              feeName: "网段2",
              num: 82,
            },
            {
              feeName: "网段3",
              num: 89,
            },
          ],
        },
        {
          title: "下行速率评分",
          data: [
            {
              feeName: "网段1",
              num: 52,
            },
            {
              feeName: "网段2",
              num: 47,
            },
            {
              feeName: "网段3",
              num: 57,
            },
          ],
        },
        {
          title: "在线设备评分",
          data: [
            {
              feeName: "网段1",
              num: 89,
            },
            {
              feeName: "网段2",
              num: 98,
            },
            {
              feeName: "网段3",
              num: 98,
            },
          ],
        },
        {
          title: "离线设备评分",
          data: [
            {
              feeName: "网段1",
              num: 78,
            },
            {
              feeName: "网段2",
              num: 72,
            },
            {
              feeName: "网段3",
              num: 63,
            },
          ],
        },
        {
          title: "告警流数评分",
          data: [
            {
              feeName: "网段1",
              num: 96,
            },
            {
              feeName: "网段2",
              num: 86,
            },
            {
              feeName: "网段3",
              num: 92,
            },
          ],
        },
        {
          title: "活跃流数评分",
          data: [
            {
              feeName: "网段1",
              num: 71,
            },
            {
              feeName: "网段2",
              num: 72,
            },
            {
              feeName: "网段3",
              num: 80,
            },
          ],
        },
      ];
      for (var i in getData) {
        var a = {};
        var b = [];
        a["title"] = getData[i].title;
        var x = 0;
        // var join = 0;
        getData[i].data.forEach(function (e) {
          x += 1;
          // join += e.num;
          b.push({ feeName: e.feeName, key: "num" + x });
          a["num" + x] = e.num;
          // a["join"] = join;
        });
        this.AllData.push(a);
        this.allList = b;
      }
    },
  },
  created() {
    this.setData();
  },
};
</script>

<style scoped>
.my_table >>> .el-table::before {
  /* 去除下边框 */
  height: 0;
}

.my_table >>> .el-table thead {
  color: #fff;
  font-size: 20px;
}
.my_table >>> .el-table {
  color: #fff;
  font-size: 16px;
}

.my_table >>> .el-table tbody tr:hover > td {
  background-color: transparent;
}
</style>