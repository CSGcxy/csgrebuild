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
        // #region
        // series: [
        //   {
        //     type: 'gauge',
        //     radius: "86%", //仪表大小
        //     axisLine: {
        //       lineStyle: {
        //         width: 20,
        //         color: [
        //           [0.3, 'hsl(0, 100%, 70%)'],
        //           [0.7, 'hsl(213, 100%, 70%)'],
        //           [1, 'hsl(150, 49%, 70%)']
        //         ]
        //       }
        //     },
        //     pointer: {
        //       itemStyle: {
        //         color: 'auto'
        //       }
        //     },
        //     axisTick: {
        //       distance: -30,
        //       length: 8,
        //       lineStyle: {
        //         color: '#fff',
        //         width: 2
        //       }
        //     },
        //     splitLine: {
        //       distance: -30,
        //       length: 20,
        //       lineStyle: {
        //         color: '#fff',
        //         width: 4
        //       }
        //     },
        //     axisLabel: {
        //       color: 'auto',
        //       distance: 40,
        //       fontSize: 10
        //     },
        //     title: {
        //       offsetCenter: [0, '100%'], // x, y，单位px
        //       textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
        //         fontWeight: 'bolder',
        //         color: '#fff',
        //         shadowColor: '#a', //默认透明
        //         shadowBlur: 10
        //       }
        //     },
        //     detail: {
        //       valueAnimation: true,
        //       formatter: '{value}分',
        //       color: 'auto',
        //       textStyle: {
        //         fontSize: 23
        //       }
        //     },
        //     data: [
        //       {
        //         value: 50,
        //         name: "终端类型正常评分",
        //       }
        //     ]
        //   }
        // ]
        // #endRegion
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
              distance: -50,
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
                name: '终端类型正常评分'
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
      securityAssess.getTypeScore().then((resp) => {
        if(resp.data.explicitScore===undefined){
          this.typeCompreScoreChartOption.series[0].data[0].value =0.0;
        }else{
          this.typeCompreScoreChartOption.series[0].data[0].value = resp.data.explicitScore/100;
        }

        this.typeCompreScoreChart = this.$echarts.init(
            document.getElementById("center-mid-2-details")
        );
        this.typeCompreScoreChart.setOption(this.typeCompreScoreChartOption);
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
