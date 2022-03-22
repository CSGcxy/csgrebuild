<template>
  <div
    id="left-bottom-NonCompliant"
    style="width: 100%; height: 100%; margin-top: 1%"
  ></div>
</template>

<script>
import * as echarts from "echarts";
import checkFormat from "../../../api/checkFormat";
export default {
  name: "left-bottom-NonCompliant",
  data() {
    return {
      second: 5,
      NonCompliantChart: null,
      timer: "",
      AfnData: "",
      NonCompliantChartOption: {
        // title: {
        //   text: "合规packet数量",
        //   // subtext: "Fake Data",
        //   left: "center",
        //   top: "top",
        //   textStyle: {
        //     color: "#fff",
        //     fontSize:14
        //   },
        // },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          left: "center",
          top: "bottom",
          textStyle: {
            fontSize: 14, //字体大小
            color: "#ffffff", //字体颜色
          },
          // data: ["afn=0", "afn=2", "afn=4"],
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true, //柱状图中心是否对齐刻度位置
              show: false,
            },
            axisLabel: {
              fontSize: 12, //字体大小
              color: "#ffffff", //字体颜色
              interval: 0,
              formatter: function (value) {
                // var ret = ""; //拼接加\n返回的类目项
                // var maxLength = 10; //每项显示文字个数
                // var valLength = value.length; //X轴类目项的文字个数
                // var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                // if (rowN > 1) {
                //   //如果类目项的文字大于5,
                //   for (var i = 0; i < rowN; i++) {
                //     var temp = ""; //每次截取的字符串
                //     var start = i * maxLength; //开始截取的位置
                //     var end = start + maxLength; //结束截取的位置
                //     //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                //     temp = value.substring(start, end) + "\n";
                //     ret += temp; //凭借最终的字符串
                //   }
                //   return ret;
                // } else {
                //   return value;
                // }
                var temp1=value.substring(5,10)+"\n"
                var temp2=value.substring(10,19)
                return temp1+temp2
              },
            },
            splitLine: {
              show: false,
            },
            data: [
              // "14:00-15:00", "15:00-16:00", "16:00-17:00", "17:00-18:00"
            ],
          },
        ],

        yAxis: [
          {
            type: "value",
            axisLabel: {
              fontSize: 14, //字体大小
              color: "#ffffff", //字体颜色
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            // name: "afn=0",
            name: "",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            // data: [1.3, 2.7, 4.5, 4],
            data: [],
          },
          {
            // name: "afn=0",
            name: "",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            // data: [1.3, 2.7, 4.5, 4],
            data: [],
          },
          {
            // name: "afn=0",
            name: "",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            // data: [1.3, 2.7, 4.5, 4],
            data: [],
          },
          {
            // name: "afn=0",
            name: "",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            // data: [1.3, 2.7, 4.5, 4],
            data: [],
          },
          {
            // name: "afn=0",
            name: "",
            type: "bar",
            emphasis: {
              focus: "series",
            },
            // data: [1.3, 2.7, 4.5, 4],
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    this.NonCompliantChart = this.$echarts.init(
      document.getElementById("left-bottom-NonCompliant")
    );
    this.drawNonCompliant();
    this.timer = setInterval(this.drawNonCompliant, this.GLOBAL.refreshTime);
  },
  methods: {
    drawNonCompliant() {
      checkFormat.getDiffrentAfnCount(this.second).then((resp) => {
          // 显示x坐标
          this.AfnData = resp.data.afnVoList.timeList;
          this.AfnData.forEach((entry) => {
            // console.log(entry);
            this.NonCompliantChartOption.xAxis[0].data.push({
              value: entry,
            });
          });
          // 给afnHashMap一个容器
          var ydata = resp.data.afnVoList.afnHashMap;
          var xArray = [];
          var yArray = [];
          // 循环获得key值和数组
          for (var key in ydata) {
            // 数组放在yArray容器中
            yArray.push(ydata[key]);
            // key值放在xArray容器中
            xArray.push(key);
          }

          // 显示data\name
          for (var i = 0; i <= yArray.length - 1; i++) {
            this.NonCompliantChartOption.series[i].data = yArray[i];
            this.NonCompliantChartOption.series[i].name =
              "afn = " + Object.keys(resp.data.afnVoList.afnHashMap)[i];
          }

          this.NonCompliantChart.setOption(this.NonCompliantChartOption);
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
  },
};
</script>

<style scoped>
</style>
