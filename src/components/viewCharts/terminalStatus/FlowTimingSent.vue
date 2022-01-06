<template>
  <div id="center-flowTiming-sent" style="width:100%;height:48%;"></div>
</template>

<script>
import netSegStatus from "@/api/netSegStatus";
export default {
  name: "FlowTimingSent",
  data() {
    return {
      flowTimingSentChart:null,
      flowTimingSentChartOption:{
        color: ['#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: '上行速率',
          subtext: '(kbps)',
          textStyle: {
            fontSize: 15,
            fontWeight: 'bolder',
            color: '#F8F8FF'                             // 主标题文字颜色
          },
          subtextStyle: {//副标题的属性
            color: '#F8F8FF',
          },
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['']
        },
        grid: {
          left: '5.5%',
          right: '4%',
          bottom: '3%',
          width:'92%',  // 调整折线图大小
          height:'100%',
          containLabel: true
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#F8F8FF',//左边线的颜色
            }
          },
          data: []
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#F8F8FF',//左边线的颜色
              width:'2'//坐标线的宽度
            }
          },
          splitLine:{
            show:false
          }
        },
        series: [
          {
            name: '上行速率',
            type: 'line',
            stack: '总量',
            data: []
          },

        ]
      }

    };
  },
  mounted() {
    this.flowTimingSentChart = this.$echarts.init(document.getElementById('center-flowTiming-sent'));
    this.drawFlowTimingSent();
    setInterval(this.drawFlowTimingSent,5000);
  },
  methods:{
    drawFlowTimingSent() {
      netSegStatus.getFlowTiming(this.GLOBAL.NETSEG).then(resp => {
        this.flowTimingSentChartOption.xAxis.data = resp.data.timeStamp;
        this.flowTimingSentChartOption.series[0].data = resp.data.uprate;
        this.flowTimingSentChart.setOption(this.flowTimingSentChartOption);
      });
    }
  }
}
</script>

<style scoped>

</style>
