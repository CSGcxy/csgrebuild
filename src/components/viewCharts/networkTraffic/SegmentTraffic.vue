<template>
  <div id="center-flowTiming-detail" style="width:100%;height:100%;"></div>
</template>

<script>
export default {
  name: "SegmentTraffic",
  data() {
    return {
      SegmentTrafficChart:null,
      SegmentTrafficOption:{
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          // data: ['Line 1']
          data: ['']
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data:  ["21:00", "21:10", "21:20", "21:30", "21:40", "21:50", "22:00"],
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#F8F8FF',//左边线的颜色
              }
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#F8F8FF',//左边线的颜色
              }
            },
            splitLine:{
              show:false
            }
          }
        ],
        series: [
          {
            name: 'Line 1',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(128, 255, 165)'
              }, {
                offset: 1,
                color: 'rgba(1, 191, 236)'
              }])
            },
            emphasis: {
              focus: 'series'
            },
            data:[140, 232, 101, 264, 90, 340, 250]
          },
        ]
      }


    };
  },
  mounted() {
    this.SegmentTrafficChart=this.$echarts.init(document.getElementById('center-flowTiming-detail'));
    // this.drawSegmentTraffic();
    this.SegmentTrafficChart.setOption(this.SegmentTrafficOption);
  },
  methods:{
    // drawSegmentTraffic() {
    //   this.getRequest("/networkTraffic/segmentTraffic").then(resp=>{
    //     if (resp.status != 200) {
    //       this.$message.error("数据获取失败");
    //     } else {
    //       this.SegmentTrafficOption.xAxis.data=resp.data.data[0];
    //       this.SegmentTrafficOption.series[0].data=resp.data.data[1];
    //       this.SegmentTrafficChart.setOption(this.SegmentTrafficOption);
    //     }
    //   })
    // }
  }

}
</script>

<style scoped>

</style>