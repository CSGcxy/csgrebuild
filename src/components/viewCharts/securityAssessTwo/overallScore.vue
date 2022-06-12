<template>
  <div
    id="left-top-overallScore"
    style="width: 100%; height: 100%; position: absolute; left: 1%; bottom: 1%"
  ></div>
</template>

<script>
import securityAssess from "../../../api/securityAssess";
export default {
  name: "overallScore",
  data() {
    return {
      overallScoreChart: null,
      timer: "",
      overallScoreChartOption: {
        grid: {
          x: "5%", //x 偏移量
          y: "9%", // y 偏移量
          width: "87%", // 宽度
          height: "79%", // 高度
        },
        tooltip: {
          trigger: "axis",
          //提示框保留小数点后两位
          formatter: function (datas) {
            let res = datas[0].name + "<br/>";
            let val;
            let length = datas.length;
            let i = 0;
            for (; i < length; i++) {
              val = datas[i].value
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,");
              res +=
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' +
                datas[i].color +
                ';"></span>' +
                datas[i].seriesName +
                "：" +
                val +
                "<br/>";
            }
            return res;
          },
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          // data: ["PW", "YD5G", "LT4G"],
          textStyle: {
            color: "#fff",
          },
        },

        xAxis: [
          {
            show: true,
            type: "category",
            name: "t",
            nameLocation: "end", // 坐标轴名称显示位置
            nameGap: 5, // 坐标轴名称与轴线之间的距离
            nameTextStyle: {
              color: "#fff", // 坐标轴名称的颜色
              fontSize: "20", // 文字字体大小
            },

            axisLabel: {
              fontSize: 12, //字体大小
              color: "#ffffff", //字体颜色
              interval: 0,
              formatter: function (value) {
                var temp1 = value.substring(5, 10) + "\n";
                var temp2 = value.substring(10, 19);
                return temp1 + temp2;
              },
            },
            axisLine: {
              show: true,
              symbol: ["none", "arrow"], // 轴线两端箭头，两个值，none表示没有箭头，arrow表示有箭头
              symbolSize: [10, 15], // 轴线两端箭头大小，数值一表示宽度，数值二表示高度
              lineStyle: {
                color: "#fff",
              },
            },
            axisTick: {
              alignWithLabel: true, //柱状图中心是否对齐刻度位置
              show: false,
            },
            splitLine: { show: false },

            // data: ["10:00", "10:05"],
            data: [],
          },
        ],

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
            // name: "PW",
            name: "",
            type: "bar",
            barGap: 0,
            emphasis: {
              focus: "series",
            },
            // data: [96, 22],
            data: [],
            itemStyle: {
              normal: {
                label: {
                  formatter: function (datas) {
                    return datas.value.toFixed(0);
                  },
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
            // name: "YD5G",
            name: "",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            // data: [86, 52],
            data: [],
            itemStyle: {
              normal: {
                label: {
                  formatter: function (datas) {
                    return datas.value.toFixed(0);
                  },
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
            // name: "LT4G",
            name: "",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            // data: [78, 25],
            data: [],
            itemStyle: {
              normal: {
                label: {
                  formatter: function (datas) {
                    return datas.value.toFixed(0);
                  },
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
      },
    };
  },
  mounted() {
    this.overallScoreChart = this.$echarts.init(
      document.getElementById("left-top-overallScore")
    );
    this.drawOverallScore();
    this.timer = setInterval(this.drawOverallScore, 5000);  // 每5s执行一次
  },
  methods: {
    drawOverallScore() {
      securityAssess
        .getSegAssessScore()
        .then((resp) => {
          // console.log(resp.data.segScoreAllTimeVo);

          this.AfnData = resp.data.segScoreAllTimeVo.timeArray;
          this.overallScoreChartOption.xAxis[0].data = [];
          this.AfnData.forEach((entry) => {
            // console.log(entry);
            this.overallScoreChartOption.xAxis[0].data.push({
              value: entry,
            });
          });

          var ydata = resp.data.segScoreAllTimeVo.segAllTimeScoreList;

          // console.log(ydata);
          var yArray = [];
          for (var key in ydata) {
            yArray.push(ydata[key]);
          }
          // console.log(yArray);
          for (var i = 0; i <= yArray.length - 1; i++) {
            this.overallScoreChartOption.series[i].data = yArray[i];
            this.overallScoreChartOption.series[i].name =
              resp.data.segScoreAllTimeVo.segmentList[i];
          }

          this.overallScoreChart.setOption(this.overallScoreChartOption);
        })
        .catch((err) => {
          this.$message.error(err);
        });
      // myChart.setOption({});
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style>
</style>
