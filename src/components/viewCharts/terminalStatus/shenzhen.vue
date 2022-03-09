<template>
  <div
      id="shenzhenMap"
      style="width: 100%; height: 100%;"
  ></div>
</template>


<script>
import netSegStatus from "@/api/netSegStatus";
import * as echarts from "echarts";


export default {

  data() {
    return {
      realData: [],
      timer:'',
      // 各个分局坐标
      geoCoordMap: {
        宝安区: [113.88308, 22.55329],
        光明区: [113.93588, 22.74894],
        龙华区: [114.04495, 22.69005],
        福田区: [114.05454, 22.52291],
        罗湖区: [114.13166, 22.54836],
        盐田区: [114.23679, 22.557],
        龙岗区: [114.24779, 22.71991],
        坪山区: [114.34632, 22.69084],
        南山区: [113.92822, 22.52777],
        光明供电局: [113.891472, 22.781691],
        光明局: [113.932858, 22.730477],
        南山供电局: [113.915507, 22.566429],
        南山局: [113.925390, 22.733802],
        坪地供电分局: [114.308916, 22.773071],
        坪山供电局: [114.352779, 22.69993],
        大鹏供电局: [114.47554, 22.592491],
        大鹏局: [114.526014, 22.458254],
        宝城供电分局: [113.914939, 22.547284],
        宝安供电局: [113.909397, 22.562338],
        小漠供电分局: [113.840714, 22.611820],
        布吉供电分局: [114.126904, 22.605956],
        平湖供电分局: [114.131127, 22.693391],
        松岗供电分局: [113.848455, 22.767851],
        横岗供电分局: [114.211287, 22.648233],
        沙井供电分局: [113.834586, 22.71905],
        深圳供电局: [114.121894, 22.533173],
        盐田局: [114.240728, 22.558262],
        石岩供电分局: [113.935585, 22.680113],
        福永供电分局: [113.825484, 22.666104],
        福田供电局: [114.084151, 22.546263],
        福田局: [114.052436, 22.520950],
        罗湖供电局: [114.129702, 22.564424],
        罗湖局: [114.129418, 22.564390],
        龙华供电局: [114.039984, 22.703801],
        龙华局: [114.018353, 22.662638],
        龙城供电分局: [114.126843, 22.606075],
        龙岗一部: [114.253873, 22.711718],
        龙岗二部: [114.195135, 22.633001],
        龙岗供电局: [114.226750, 22.721236]
      },
    }
  },

  mounted() {
    this.getLocs()
    this.timer = setInterval(this.getLocs,this.GLOBAL.refreshTime);
    // this.initCharts();
  },
  methods: {
    getLocs() {
      netSegStatus.getlocation(this.GLOBAL.NETSEG).then(resp => {
        console.log("地图")
        // console.log(resp.data.locationList)
        // this.realData= JSON.parse(resp.data.locationList)
        this.realData = resp.data.locationList
        // console.log(this.realData[0].name)
        this.initCharts()
      })

    },

    initCharts() {
      let res = []
      let data = this.realData
      for (var i = 0; i < data.length; i++) {
        var geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          });
        }
      }

      this.initshenzhen(res)


    },
    initshenzhen(shenzhendata) {
      // console.log(shenzhendata)
      var shenzhenChart = document.getElementById("shenzhenMap");
      echarts.registerMap("shenzhen", this.GLOBAL.mapData);
      var myChart = echarts.init(shenzhenChart);
      var shenzhenOption;
      shenzhenOption = {
        cityId: {
          宝安区: 0,
          光明区: 1,
          龙华区: 2,
          福田区: 3,
          罗湖区: 4,
          盐田区: 5,
          龙岗区: 6,
          坪山区: 7,
          南山区: 8,
        },
        title: {
          // text: "深圳XX地图",
          // subtext: "Data from Mr.He",
          // sublink: "http://www.badu.com",
        },
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            return params.name + " : " + params.value[2];
          },
        },
        toolbox: {
          show: false,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {},
          },
        },
        visualMap: {
          show: false,
          min: 0,
          max: 25,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["lightskyblue", "yellow", "orangered"],
          },
        },
        geo: {
          map: "shenzhen",

          label: {
            normal: {
              show: false,
              color: "#fff",
            },
            emphasis: {
              show: true,
              color: "#fff",
            },
          },
          itemStyle: {
            normal: {
              areaColor: "rgb(41,134,162)",
              borderColor: "#111",
            },
            emphasis: {
              // areaColor: "#2a333d",
              areaColor: "rgb(255,201,14)",
            },
          },
        },
        series: [
          {
            name: "南方电网深圳地图",
            type: "scatter",
            coordinateSystem: "geo",
            data: shenzhendata,

            symbol: "circle",
            symbolSize: function (value) {
              var r = value[2] / 5;
              return r > 2 ? (r > 5 ? 20 : r*2) : 5;
            },
            symbolOffset: [0, 0],
            label: {
              normal: {
                show: true,
                color: "#fff",
                offset: [30, 0],
                formatter: function (params) {
                  return params.name;
                },
                textStyle: {
                  fontSize: 8
                }
              },
              emphasis: {
                show: true,
                color: "#fff",
                offset: [30, 0],
              },
            },
            itemStyle: {
              normal: {
                color: "#2982a2",
              },
              emphasis: {
                borderColor: "#fff",
                borderWidth: 1,
              },
            },
          },
        ],
      };
      myChart.setOption(shenzhenOption);
    },

    beforeDestroy() {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

}
</script>


<style>
</style>
