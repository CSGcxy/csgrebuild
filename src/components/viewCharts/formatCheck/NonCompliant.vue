<template>
  <div
    id="left-bottom-NonCompliant"
    style="width: 100%; height: 100%; position: absolute; left: 1%; bottom: 1%"
  ></div>
</template>

<script>
import * as echarts from "echarts";
import checkFormat from "../../../api/checkFormat";
export default {
  name: "left-bottom-NonCompliant",
  data() {
    return {
      second: 20,
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
                var temp1 = value.substring(5, 10) + "\n";
                var temp2 = value.substring(10, 19);
                return temp1 + temp2;
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
        grid: {
          x: 50,
          y: 30,
          x2: 3,
          y2: 60,
        },
        series: [

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
      checkFormat
        .getDiffrentAfnCount(this.second)
        .then((resp) => {
          console.log(resp)
          // 显示x坐标
          this.NonCompliantChartOption.xAxis[0].data=resp.data.afnVoList.timeList;
          // 给afnHashMap一个容器
          var ydata = resp.data.afnVoList.afnHashMap;
          var dataArray=[]
          // 循环获得key值和数组
          for (var key in ydata) {
            dataArray.push(
                {
                  name: "afn = " + key,
                  type: "bar",
                  emphasis: {
                    focus: "series",
                  },
                  data: ydata[key],
                }
            )
          }
          this.NonCompliantChartOption.series=dataArray
          this.NonCompliantChart.setOption(this.NonCompliantChartOption);
        })
        .catch((err) => {
          this.$message.error(err);
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
</style>
