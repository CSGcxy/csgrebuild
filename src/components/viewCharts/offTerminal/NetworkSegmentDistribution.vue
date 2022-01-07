<template>
  <div id="left-bottom-NetworkSegmentDistribution" style="width:100%;height:100%;"></div>
</template>

<script>
import offTer from "@/api/offTer";
export default {
  name: "NetworkSegmentDistribution",
  data() {
    return {
      NetworkSegmentDisChart:null,
      NetworkSegmentDisChartOption:{
          // title: {
          //   text: '流数排名前10主机',
          //   textStyle: {
          //     fontSize: 18,
          //     fontWeight: 'bolder',
          //     color: '#F8F8FF'                             // 主标题文字颜色
          //   },
          // },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {},
          grid: {
            y2:25,
            x:25,
            y:25,
            x2:25,
            containLabel: true
          },
          xAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#F8F8FF',//左边线的颜色
                width:'1'//坐标线的宽度
              }
            },
            splitLine:{
              show:false
            },
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#F8F8FF',//左边线的颜色
                width:'1'//坐标线的宽度
              }
            },
            splitLine:{
              show:false
            },
            data: ["192.168.1.2","178.62.3.29","175.24.84.198","172.17.0.16","173.24.56.72","174.18.1.12"]
          },
          series: [
            {
              name: '',
              type: 'bar',
              color: 'white',
              data: [18203, 223489,  348203, 453489, 609034, 724970]
            }
          ]
        }


    };
  },
  mounted(){
    this.NetworkSegmentDisChart = this.$echarts.init(document.getElementById('left-bottom-NetworkSegmentDistribution'));
    this.drawNetworkSegmentDisChart();
    setInterval(this.drawNetworkSegmentDisChart,this.GLOBAL.refreshTime);
  },
  methods:{
    drawNetworkSegmentDisChart(){
      offTer.getOffTerminalSegment().then(resp =>{
        if (resp.code == 20000) {
          this. NetworkSegmentDisChartOption.yAxis.data=resp.data.offTerminalSegmentList.netSegment;
          this. NetworkSegmentDisChartOption.series[0].data=resp.data.offTerminalSegmentList.offTerminalCount;
          this.NetworkSegmentDisChart.setOption(this. NetworkSegmentDisChartOption);
        }
      })
    }
    }

}
</script>

<style scoped>

</style>
