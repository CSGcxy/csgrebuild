<template>
  <div
      id="center-mid-3-details"
      style="width: 100%; height: 100%; position: absolute; left: 1%; bottom: 1%"
  ></div>
</template>

<script>

export default {
  name: "overallScore",
  data() {
    return {
      ipTerminalCompreScoreChart: null,
      timer: "",
      ipTerminalCompreScoreChartOption: {
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
                value: 80.5,
                name: "IP终端在线",
              }
            ]
          }
        ]
      },
    };
  },
  mounted() {
    this.ipTerminalCompreScoreChart = this.$echarts.init(
        document.getElementById("center-mid-3-details")
    );
    this.ipTerminalCompreScoreChart.setOption(this.ipTerminalCompreScoreChartOption);
    // this.timer = setInterval(this.drawOverallScore, this.GLOBAL.refreshTime);
  },
  methods: {

  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style>
</style>
