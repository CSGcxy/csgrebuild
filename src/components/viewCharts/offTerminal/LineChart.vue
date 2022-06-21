<template>
  <div id="left-bottom-LineChart" style="width:100%;height:100%;"></div>
</template>

<script>
import offTer from "@/api/offTer";
export default {
  name: "LineChart",
  data() {
    return {
      lineChartChart:null,
      timer: '',
      lineChartChartOption:{
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          // data: ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00"],
          data: [],
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#F8F8FF',//左边线的颜色
            }
          },
        },
        yAxis: {
          type: 'value',
          scale:true,
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
            name: this.GLOBAL.trendSEG,
            type: 'line',
            stack: 'Total',
            // data: [120, 132, 101, 134, 90, 230, 210]
            data: []
          },
          // {
          //   name: 'Union Ads',
          //   type: 'line',
          //   stack: 'Total',
          //   data: [220, 182, 191, 234, 290, 330, 310]
          // },
          // {
          //   name: 'Video Ads',
          //   type: 'line',
          //   stack: 'Total',
          //   data: [150, 232, 201, 154, 190, 330, 410]
          // }
        ],
      }

    };
  },
  mounted() {
    this.lineChartChart=this.$echarts.init(document.getElementById('left-bottom-LineChart'));
    this.drawlineChartChart();
    this.timer = setInterval(this.drawlineChartChart,this.GLOBAL.refreshTime);
  },
  methods:{
    drawlineChartChart() {

      offTer.getOffTerminalSegTimeSequence(this.GLOBAL.trendSEG).then(resp =>{
        if (resp.code == 20000) {
          this.lineChartChartOption.xAxis.data=resp.data.offTerminalSegTimeSequenceList.timestamp;
          this.lineChartChartOption.series[0].data=resp.data.offTerminalSegTimeSequenceList.offTerminalCount;
          this.lineChartChart.setOption(this.lineChartChartOption);
        }
      })
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }

}
</script>

<style scoped>

</style>
