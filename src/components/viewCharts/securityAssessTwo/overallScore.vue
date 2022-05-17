<template>
  <div
    id="left-top-overallScore"
    style="width: 100%; height: 100%; position: absolute; left: 1%; bottom: 1%"
  ></div>
</template>      

<script>
export default {
  name: "overallScore",
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      var myChart = this.$echarts.init(
        document.getElementById("left-top-overallScore")
      );
      myChart.setOption({
        grid: {
          x: "5%", //x 偏移量
          y: "9%", // y 偏移量
          width: "87%", // 宽度
          height: "79%", // 高度
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["PW", "YD5G", "LT4G"],
          textStyle: {
            color: "#fff",
          },
        },
        xAxis: {
          show: true,
          type: "category",
          name: "t",
          nameLocation: "end", // 坐标轴名称显示位置
          nameGap: 5, // 坐标轴名称与轴线之间的距离
          nameTextStyle: {
            color: "#fff", // 坐标轴名称的颜色
            fontSize: "20", // 文字字体大小
          },
          axisLine: {
            show: true,
            symbol: ["none", "arrow"], // 轴线两端箭头，两个值，none表示没有箭头，arrow表示有箭头
            symbolSize: [10, 15], // 轴线两端箭头大小，数值一表示宽度，数值二表示高度
            lineStyle: {
              color: "#fff",
            },
          },
          axisTick: { show: false },
          splitLine: { show: false },

          data: ["10:00", "10:05"],
        },

        yAxis: {
          show: true,
          type: "value",
          axisLine: {
            show: true,
            symbol: ["none", "arrow"], // 轴线两端箭头，两个值，none表示没有箭头，arrow表示有箭头
            symbolSize: [10, 15],
            lineStyle: {
              color: "#fff",
            },
          },
          axisTick: { show: false },
          splitLine: { show: false },
        },

        series: [
          {
            name: "PW",
            type: "bar",
            barGap: 0,
            emphasis: {
              focus: "series",
            },
            data: [96, 22],
            itemStyle: {
              normal: {
                label: {
                  formatter: "{c}",
                  show: true,
                  position: "top",
                  textStyle: {
                    fontWeight: "bolder",
                    fontSize: "12",
                    color: "#fff",
                  },
                },
              },
            },
          },
          {
            name: "YD5G",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            data: [86, 52],
            itemStyle: {
              normal: {
                label: {
                  formatter: "{c}",
                  show: true,
                  position: "top",
                  textStyle: {
                    fontWeight: "bolder",
                    fontSize: "12",
                    color: "#fff",
                  },
                },
              },
            },
          },
          {
            name: "LT4G",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            data: [78, 25],
            itemStyle: {
              normal: {
                label: {
                  formatter: "{c}",
                  show: true,
                  position: "top",
                  textStyle: {
                    fontWeight: "bolder",
                    fontSize: "12",
                    color: "#fff",
                  },
                },
              },
            },
          },
        ],
      });
    },
  },
};
</script>

<style>
</style>