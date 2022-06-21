<template>
  <div
      id="center-mid-3-details"
      style="width: 100%; height: 100%; position: absolute; left: 1%; bottom: 1%"
  ></div>
</template>

<script>

import securityAssess from "@/api/securityAssess";

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
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 1,
            splitNumber: 10,
            axisLine: {
              lineStyle: {
                width: 2,
                color: [
                  [0.25, '#FF6E76'],
                  [0.5, '#FDDD60'],
                  [0.75, '#58D9F9'],
                  [1, '#7CFFB2']
                ]
              }
            },
            pointer: {
              icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
              length: '30%',
              width: 10,
              offsetCenter: [0, '-35%'],
              itemStyle: {
                color: 'auto'
              }
            },
            axisTick: {
              length: 12,
              lineStyle: {
                color: 'auto',
                width: 2
              }
            },
            splitLine: {
              length: 15,
              lineStyle: {
                color: 'auto',
                width: 4
              }
            },
            axisLabel: {
              color: '#edefe8',
              fontSize: 15,
              distance: -60,
              formatter: function (value) {
                if (value === 0.00) {
                  return 0;
                }else if (value === 0.20) {
                  return 20;
                } else if (value === 0.40) {
                  return 40;
                } else if (value === 0.60) {
                  return 60;
                } else if (value === 0.80) {
                  return 80;
                }else if (value === 1.00) {
                  return 100;
                }
                return '';
              }
            },
            title: {
              offsetCenter: [0, '40%'],
              fontSize: 16,
              color:'#fff',
            },
            detail: {
              fontSize: 15,
              offsetCenter: [0, '0%'],
              valueAnimation: true,
              formatter: function (value){
                return value*100 + '分'
              } ,
              color: 'auto'
            },
            data: [
              {
                value: 0.7,
                name: 'IP终端在线评分'
              }
            ]
          }
        ]

      },
    };
  },
  mounted() {
    this.drawScoreChart();
    // this.timer = setInterval(this.drawScoreChart, 20000);  // 每20s执行一次
  },
  methods: {
    drawScoreChart() {
      securityAssess.getOnlineIPScore().then((resp) => {
        if(resp.data.onlineIPScore===undefined){
          this.ipTerminalCompreScoreChartOption.series[0].data[0].value =0.0;
        }else{
          this.ipTerminalCompreScoreChartOption.series[0].data[0].value = resp.data.onlineIPScore/100;
        }

        this.ipTerminalCompreScoreChart = this.$echarts.init(
            document.getElementById("center-mid-3-details")
        );
        this.ipTerminalCompreScoreChart.setOption(this.ipTerminalCompreScoreChartOption);
      });
    }
  },
  beforeDestroy() {
    // clearInterval(this.timer);
    // this.timer = null;
  },
};
</script>

<style>
</style>
