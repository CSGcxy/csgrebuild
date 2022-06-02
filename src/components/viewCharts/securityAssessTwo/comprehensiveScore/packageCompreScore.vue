<template>
  <div
    id="center-mid-1-details"
    style="width: 100%; height: 100%; position: absolute; left: 1%; bottom: 1%"
  ></div>
</template>

<script>

import securityAssess from "@/api/securityAssess";

export default {
  name: "packageCompreScore",
  data() {
    return {
      packageCompreScoreChart: null,
      timer: "",
      packageCompreScoreChartOption: {
        series: [
          {
            type: 'gauge',
            radius: "86%", //仪表大小
            axisLine: {
              lineStyle: {
                width: 20,
                color: [
                  [0.3, '#fd666d'],
                  [0.7, '#37a2da'],
                  [1, '#67e0e3']
                ]
              }
            },
            pointer: {
              itemStyle: {
                color: 'auto'
              }
            },
            axisTick: {
              distance: -30,
              length: 8,
              lineStyle: {
                color: '#fff',
                width: 2
              }
            },
            splitLine: {
              distance: -30,
              length: 20,
              lineStyle: {
                color: '#fff',
                width: 4
              }
            },
            axisLabel: {
              color: 'auto',
              distance: 40,
              fontSize: 10
            },
            title: {
              offsetCenter: [0, '100%'], // x, y，单位px
              textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#a', //默认透明
                shadowBlur: 10
              }
            },
            detail: {
              valueAnimation: true,
              formatter: '{value}分',
              color: 'auto',
              textStyle: {
                fontSize: 23
              }
            },
            data: [
              {
                value: 80.5,
                name: "包格式正常评分",
              }
            ]
          }
        ]
      },
    };
  },
  mounted() {
    this.drawScoreChart();


    // this.timer = setInterval(this.drawOverallScore, this.GLOBAL.refreshTime);
  },
  methods: {
    drawScoreChart() {
      securityAssess.getPackageScore().then((resp) => {
        this.packageCompreScoreChartOption.series[0].data[0].value = resp.data.packageScore;
        this.packageCompreScoreChart = this.$echarts.init(
            document.getElementById("center-mid-1-details")
        );
        this.packageCompreScoreChart.setOption(this.packageCompreScoreChartOption);
      });
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style>
</style>
