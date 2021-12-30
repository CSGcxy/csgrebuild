<template>
  <div>
    <div class="top-right-line-box">
      <div id="top-right-line" style="width:100%;height:100%;"></div>
    </div>
    <div class="top-right-text">
      每小时评分一次
    </div>
  </div>

</template>

<script>
export default {
  name: "MasterStaTrend",
  data(){
    return{
      MasterStaTrendChart:null,
      MasterStaTrendOption:{
        xAxis: {
          type: 'category',
          data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
          axisLabel:{
            textStyle:{
              fontsize:22,
              color:'#fff',
            }
          },

        },
        yAxis: {
          type: 'value',
          axisLabel:{
            textStyle:{
              fontsize:22,
              color:'#fff',
            }
          }
        },
        series: [
          {
            data: [88, 70, 90, 68, 89, 93, 90],
            type: 'line'
          }
        ]
      }
    }
  },
  mounted(){
    this.MasterStaTrendChart = this.$echarts.init(document.getElementById("top-right-line"));
    this.drawMasterStaTrendChart();
  },
  methods:{
    drawMasterStaTrendChart(){
      this.MasterStaTrendChart.setOption(this.MasterStaTrendOption);
    }
  }
}
</script>

<style scoped>
.top-right-line-box{
  width: 100%;
  height: 85%;
  position: absolute;
  top: 1%;

}

.top-right-text{
  width: 100%;
  height: 15%;
  position: absolute;
  bottom: 1%;
  text-align: center;
  color:rgb(238, 197, 102) ;

}
</style>