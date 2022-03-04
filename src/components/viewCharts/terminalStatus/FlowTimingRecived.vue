<template>
  <div id="center-flowTiming-recived" style="width:100%;height:48%;"></div>
</template>

<script>
import netSegStatus from "@/api/netSegStatus";
export default {
  name: "FlowTimingRecived",
  data() {
    return {
      flowTimingReceivedChart:null,
      timer: '',
      flowTimingRecivedChartOption:{
        color: ['#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: '下行速率',
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
            name: '下行速率',
            type: 'line',
            stack: '总量',
            data: []
          },

        ]
      }

    };
  },
  mounted() {
    this.flowTimingRecivedChart = this.$echarts.init(document.getElementById('center-flowTiming-recived'));
    this.drawFlowTimingRecived();
    this.timer = setInterval(this.drawFlowTimingRecived,this.GLOBAL.refreshTime);
  },
  methods:{
    drawFlowTimingRecived() {
      netSegStatus.getFlowTiming(this.GLOBAL.NETSEG).then(resp => {
        var  xdata=  resp.data.terminalTrendList.timeStamp;
        let changexData=[]
        xdata.forEach((item,index) =>{
          changexData.push(item.slice(5))
        })
        this.flowTimingRecivedChartOption.xAxis.data=changexData
        this.flowTimingRecivedChartOption.series[0].data = resp.data.terminalTrendList.downrate;
        this.flowTimingRecivedChart.setOption(this.flowTimingRecivedChartOption);

      });
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
