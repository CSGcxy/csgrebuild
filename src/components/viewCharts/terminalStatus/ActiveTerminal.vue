<template>
  <div id="left-active" style="width:100%;height:100%;"></div>
</template>

<script>
import netSegStatus from "@/api/netSegStatus";
export default {
  name: "ActiveTerminal",
  data() {
    return {
      activeTerminalChart:null,
      activeTerminalOption:{
        color: ['#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: '在\n线\n终\n端\n数\n量\n',
          top:'25%',
          // subtext: '(kbit/s)',
          textStyle: {
            fontSize: 18,
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
          left: '8%',
          right: '4%',
          // top:'2%',
          bottom: '6%',
          width:'92%',  // 调整折线图大小
          height:'80%',
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
            name: '在线终端',
            type: 'line',
            stack: '总量',
            data: []
          },

        ]
      }

    };
  },
  mounted() {
    this.activeTerminalChart = this.$echarts.init(document.getElementById('left-active'));
    this.drawActiveTerminal();
    setInterval(this.drawActiveTerminal,this.GLOBAL.refreshTime);
  },
  methods:{
    drawActiveTerminal() {
      netSegStatus.getFlowTiming(this.GLOBAL.NETSEG).then(resp => {
        this.activeTerminalOption.xAxis.data = resp.data.terminalTrendList.timeStamp;
        this.activeTerminalOption.series[0].data = resp.data.terminalTrendList.onlineNum;
        this.activeTerminalChart.setOption(this.activeTerminalOption);
      });
      }
    }
}
</script>

<style scoped>

</style>
