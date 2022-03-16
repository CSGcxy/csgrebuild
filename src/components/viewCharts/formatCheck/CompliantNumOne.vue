<template>
    <div class="CompliantNum" style="width: 100%; height: 100%;background-color: #61d2f7"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "CompliantNumOne",
  data() {
    return {
      list: [
        {
          id: 1,
          price: {
            name: "不同类型packet占比",
            resData: [
              { value: 735, name: "afn=0" },
              { value: 510, name: "afn=2" },
              { value: 434, name: "afn=4" },
              { value: 335, name: "afn=5" },
            ],
          },
        },
        {
          id: 2,
          price: {
            name: "合规packet占比",
            resData: [
              { value: 735, name: "合规packet" },
              { value: 510, name: "不合规packet" },
            ],
          },
        },
      ],
    };
  },
  methods: {
    BarChart() {
      var CompliantNumOne = document.getElementsByClassName("CompliantNumOne");
      for (var i = 0; i < CompliantNumOne.length; i++) {
        var myChart = echarts.init(CompliantNumOne[i]);

        var option = {
          title: {
            text: this.list[i].price.name,
            // subtext: "Fake Data",
            left: "center",
            textStyle: {
              color: "#fff",
            },
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },
          legend: {
            bottom: 10,
            left: "center",
            textStyle: {
              fontSize: 14, //字体大小
              color: "#ffffff", //字体颜色
            },
            data: [
              "afn=0",
              "afn=2",
              "afn=4",
              "afn=5",
              "合规packet",
              "不合规packet",
            ],
            formatter: function (name) {
              return name.length > 10 ? name.substr(0, 10) + "..." : name;
            },
          },

          series: [
            {
              type: "pie",
              radius: "80%",
              center: ["50%", "50%"],
              selectedMode: "single",
              name: this.list[i].price.name,
              data: this.list[i].price.resData,
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                    textStyle: {
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: "bolder",
                    },
                  },
                },
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };

        myChart.setOption(option);
      }
    },
  },
  mounted() {
    this.BarChart();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  /* background-size: 100% 100%; */
}
.wrapper {
  margin-top: 20px;
  margin-left: 10%;
  width: 70%;
  height: 100%;
}
.ConpliantNum {
  width: 70%;
  height: 100%;
}
</style>
