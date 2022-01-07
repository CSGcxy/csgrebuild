<template>
  <div id="center-terminal-detail" style="width:100%;height:100%;"></div>
</template>

<script>
import netTraffic from "@/api/netTraffic";
export default {
  name: "NetworkSangji",
  data() {
    return {
      colorALL:["hsl(160,50%,50%)","hsl(180,50%,50%)","hsl(340,50%,50%)","hsl(200,50%,50%)","hsl(320,50%,50%)","hsl(220,50%,50%)","hsl(300,50%,50%)","hsl(240,50%,50%)","hsl(140,50%,50%)","hsl(280,50%,50%)","hsl(280,50%,50%)","hsl(150,50%,50%)","hsl(350,50%,50%)","hsl(170,50%,50%)","hsl(330,50%,50%)","hsl(190,50%,50%)","hsl(310,50%,50%)"],
      NetworkSangjiChart: null,
      NetworkSangjiChartOption:{
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: {
          type: 'sankey',
          layout: 'none',
          left:'3%',
          right:'7%',
//        textStyle: {
//        color = "#fff"
//         },
          lineStyle: {
            color:'gradient',
            curveness: 0.5
          },
          emphasis: {
            focus: 'adjacency'
          },
          label:{
            color:'#fff'
          },
          data:  [

          ],
          links: [ {
            "source": "192.168.128.1",
            "target": "Localhost",
            "value": 110
          },
            {
              "source": "Localhost",
              "target": "173.24.56.72",
              "value": 110
            },
            {
              "source": "192.168.1.2",
              "target": "178.62.3.29",
              "value": 3
            },
            {
              "source": "192.168.1.2",
              "target": "175.24.84.198",
              "value": 3
            },
            {
              "source": "192.168.1.4",
              "target": "178.35.84.125",
              "value": 3
            },
            {
              "source": "192.168.1.4",
              "target": "178.62.5.84",
              "value": 3
            },
            {
              "source": "178.62.3.29",
              "target": "175.24.9.126",
              "value": 3
            },
            {
              "source": "178.35.84.125",
              "target": "175.24.84.198",
              "value": 3
            },
            {
              "source": "178.62.5.84",
              "target": "175.24.9.126",
              "value": 3
            }]
        }
      }
    };
  },
  mounted() {
    this.NetworkSangjiChart = this.$echarts.init(document.getElementById('center-terminal-detail'));
    this.drawNetworkSegmentTerminal();
    setInterval(this.drawNetworkSegmentTerminal,this.GLOBAL.refreshTime);
  },
  methods:{
    drawNetworkSegmentTerminal() {
      netTraffic.getSangji(this.GLOBAL.NETSEG).then(resp => {
        if (resp.code == 20000) {
          let ipList = resp.data.flowSankeyVOList.ip
          for (var i = 0; i < ipList.length; i++) {
            let sourceData = {"name": "", "itemStyle": {"color":""}};
            sourceData.name = ipList[i];
            sourceData.itemStyle.color = this.colorALL[i];
            this.NetworkSangjiChartOption.series.data.push(sourceData)
          }
          this.NetworkSangjiChartOption.series.links = resp.data.flowSankeyVOList.flowSankeys;
          this.NetworkSangjiChart.setOption(this.NetworkSangjiChartOption);
        }
      })
    }
  }
}
</script>

<style scoped>

</style>