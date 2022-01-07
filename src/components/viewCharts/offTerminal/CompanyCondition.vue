<template>
  <div id="left-mid-CompanyCondition" style="width:100%;height:100%;"></div>
</template>

<script>
import offTer from "@/api/offTer";
export default {
  name: "CompanyCondition",
  data() {
    return {
      CompanyConditionChart:null,
      CompanyConditionChartOption:{
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            // data: ["百度", "阿里巴巴", "腾讯", "京东", "美团", "字节跳动", "华为"],
            data: ["百度"],
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#F8F8FF',//左边线的颜色
              }
            },
            axisLabel: {
              interval: 0
            }
          }
        ],
        yAxis: [
          {
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
          }
        ],
        series: [
          {
            name: '离线终端',
            type: 'bar',
            barWidth: '60%',
            // data: [10, 52, 200, 334, 390, 330, 220]
            data: []
          }
        ]
      }

    };
  },
  mounted() {
    this.CompanyConditionChart = this.$echarts.init(document.getElementById('left-mid-CompanyCondition'));
    this.drawCompanyConditionChart();
    this.CompanyConditionChart.setOption(this.CompanyConditionChartOption)
  },
  methods:{
    drawCompanyConditionChart() {
      offTer.getOffTerminalManufactor().then(resp =>{
        if (resp.code == 20000) {
          this.CompanyConditionChartOption.xAxis[0].data=resp.data.offTerminalManufactorVO.manufactor;
          this.CompanyConditionChartOption.series[0].data=resp.data.offTerminalManufactorVO.offTerminalCount;
          this.CompanyConditionChart.setOption(this.CompanyConditionChartOption);
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
