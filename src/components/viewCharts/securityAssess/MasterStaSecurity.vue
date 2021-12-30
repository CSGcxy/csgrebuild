<template>
  <div>
    <div class="top-left-radar-box">
      <div id="top-left-radar" style="width:100%;height:100%;"></div>
    </div>

    <div class="top-left-score">
            <table>
              <tr>
                <th>总安全评分</th>
                <th>90</th>
              </tr>
              <tr>
                <td>指标1</td>
                <td>73</td>
              </tr>
              <tr>
                <td>指标2</td>
                <td>82</td>
              </tr>
              <tr>
                <td>指标3</td>
                <td>95</td>
              </tr>
              <tr>
                <td>指标4</td>
                <td>83</td>
              </tr>
              <tr>
                <td>指标5</td>
                <td>91</td>
              </tr>
              <tr>
                <td>指标6</td>
                <td>93</td>
              </tr>
            </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MasterStaSecurity",
  data() {
    return {
      MasterStaSecurityChart: null,
      MasterStaSecurityOption: {

        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Allocated Budget', 'Actual Spending']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            {name: '指标1', max: 100},
            {name: '指标2', max: 100},
            {name: '指标3', max: 100},
            {name: '指标4', max: 100},
            {name: '指标5', max: 100},
            {name: '指标6', max: 100}
          ],
          axisName: {
            color: 'rgb(238, 197, 102)'
          },
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [73, 95, 83, 91, 93, 72],
                name: 'Allocated Budget'
              },
              {
                value: [95, 80, 70, 95, 88, 92],
                name: 'Actual Spending'
              }
            ]
          }
        ]
      },

    }

  },
  mounted() {
    this.MasterStaSecurityChart = this.$echarts.init(document.getElementById('top-left-radar'));
    this.drawMasterStaSecurityChart();
  },
  methods: {
    drawMasterStaSecurityChart() {
      this.MasterStaSecurityChart.setOption(this.MasterStaSecurityOption);
    },

  }

}
</script>

<style scoped>
.top-left-radar-box {
  width: 65%;
  height: 100%;
  position: absolute;
  left: 1%;
  /*background-color: #FFFFff;*/
}

.top-left-score {
  width: 35%;
  height:90%;
  position: absolute;
  right:1%;
  top: 10%;
  /*background-color: #4b8df8;*/
}

th {
  text-align: center;
  font-size: 25px;
  width: 15%;
  height:33px;
  color: #FFFFff;
}

td{
  text-align: center;
  height:26px;
  color: rgb(238, 197, 102);
 }
</style>