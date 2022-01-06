<template>
  <div id="center-terminal-detail" style="width:100%;height:100%;"></div>
</template>

<script>
export default {
  name: "NetworkSegmentTerminal",
  data() {
    return {
      colorALL:["hsl(160,50%,50%)","hsl(180,50%,50%)","hsl(340,50%,50%)","hsl(200,50%,50%)","hsl(320,50%,50%)","hsl(220,50%,50%)","hsl(300,50%,50%)","hsl(240,50%,50%)","hsl(140,50%,50%)","hsl(280,50%,50%)","hsl(280,50%,50%)","hsl(150,50%,50%)","hsl(350,50%,50%)","hsl(170,50%,50%)","hsl(330,50%,50%)","hsl(190,50%,50%)","hsl(310,50%,50%)"],
      networkSegmentTerminalChart: null,
      networkSegmentTerminalOption:{
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
          data:  [{
            "name": "192.168.128.1",
            "itemStyle": {
              "color":"hsl(160,50%,50%)"
            }
          }, {
            "name": "Localhost",
            "itemStyle": {
              "color": "hsl(180,50%,50%)"
            }
          }, {
            "name": "173.24.56.72",
            "itemStyle": {
              "color": "hsl(340,50%,50%)"
            }
          },{
            "name": "192.168.1.2",
            "itemStyle": {
              "color": "hsl(200,50%,50%)"
            }
          }, {
            "name": "192.168.1.4",
            "itemStyle": {
              "color": "hsl(320,50%,50%)"
            }
          }, {
            "name": "178.62.3.29",
            "itemStyle": {
              "color": "hsl(300,50%,50%)"
            }
          }, {
            "name": "178.35.84.125",
            "itemStyle": {
              "color": "hsl(240,50%,50%)"
            }
          }, {
            "name": "178.62.5.84",
            "itemStyle": {
              "color": "hsl(140,50%,50%)"
            }
          }, {
            "name": "175.24.84.198",
            "itemStyle": {
              "color": "hsl(280,50%,50%)"
            }
          }, {
            "name": "175.24.9.126",
            "itemStyle": {
              "color": "hsl(150,50%,50%)"
            }
          }],
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
    this.networkSegmentTerminalChart = this.$echarts.init(document.getElementById('center-terminal-detail'));
    // this.drawNetworkSegmentTerminal();
    this.networkSegmentTerminalChart.setOption(this.networkSegmentTerminalOption);
  },
  methods:{
    // drawNetworkSegmentTerminal() {
    //   this.getRequest("/networkTraffic/networkSegmentTerminal").then(resp=>{
    //     if (resp.status != 200) {
    //       this.$message.error("数据获取失败");
    //     } else {
    //       for(var i=0;i<resp.data.data[0].length;i++)
    //       {
    //         console.log(Math.floor(Math.random()*36)*10);
    //         this.networkSegmentTerminalOption.series.data[i].name = resp.data.data[0][i];
    //         this.networkSegmentTerminalOption.series.data[i].itemStyle.color=this.colorALL[i];
    //
    //       }
    //       this.networkSegmentTerminalOption.series.links = resp.data.data[1];
    //       this.networkSegmentTerminalChart.setOption(this.networkSegmentTerminalOption);
    //     }
    //   })
    // }
  }
}
</script>

<style scoped>

</style>