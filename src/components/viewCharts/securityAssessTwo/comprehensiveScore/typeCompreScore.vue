<template>
  <div
      id="center-mid-2-details"
      style="width: 100%; height: 100%; position: absolute; left: 1%; bottom: 1%"
  ></div>
</template>

<script>
import securityAssess from "@/api/securityAssess";
export default {
  name: "typeCompreScore",
  data() {
    return {
      typeCompreScoreChart: null,
      timer: "",
      typeCompreScoreChartOption: {
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
              formatter: '{value}',
              color: 'auto',
              textStyle: {
                fontSize: 23
              }
            },
            data: [
              {
                value: 50,
                name: "终端类型正常",
              }
            ]
          }
        ]
      },
    };
  },

  mounted() {
    this.drawScoreChart();
    this.typeCompreScoreChart = this.$echarts.init(
        document.getElementById("center-mid-2-details")
    );
    this.typeCompreScoreChart.setOption(this.typeCompreScoreChartOption);

    // this.timer = setInterval(this.drawOverallScore, this.GLOBAL.refreshTime);
  },
  methods: {
    drawScoreChart() {
      securityAssess.getOnlineAndTypeScore().then((resp) => {
        console.log(resp);
        this.typeCompreScoreChartOption.series[0].data[0].value = resp.data.explicitScore;
        console.log(this.typeCompreScoreChartOption.series[0].data[0].value);
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
