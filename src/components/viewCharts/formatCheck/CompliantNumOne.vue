<template>
  <div id="CompliantNumOne" style="width: 100%; height: 100%"></div>
</template>

<script>
import checkFormat from "../../../api/checkFormat";
import * as echarts from "echarts";
export default {
  name: "CompliantNumOne",
  data() {
    return {
      PacketCountChart: null,
      timer: "",
      PacketCountData:"",
      PacketCountOption: {
        title: {
          text: "不同类型packet占比",
          // subtext: "Fake Data",
          top:"4%",
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize:14
          },
        },
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} : {c} ({d}%)",
          formatter: "{b} : {c} ({d}%)",
        },
        legend: {
          bottom: 5,
          left: "center",
          align: "auto",
          itemWidth: 8,
          itemGap:4,
          textStyle: {
            fontSize: 10, //字体大小
            color: "#ffffff", //字体颜色
          },

          // data: ["afn=-1","afn=0", "afn=2", "afn=4", "afn=5"],
        },
        series: [
          {
            type: "pie",
            radius: "70%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              // { value: 735, name: "afn=0" },
              // { value: 510, name: "afn=2" },
              // { value: 434, name: "afn=4" },
              // { value: 335, name: "afn=5" },
            ],
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
      },
    };
  },

  mounted() {
    this.PacketCountChart = this.$echarts.init(
      document.getElementById("CompliantNumOne")
    );
    this.drawPacketCount();
    this.timer = setInterval(this.drawPacketCount, this.GLOBAL.refreshTime);
    // this.PacketCountChart .setOption(this.PacketCountOption);
  },
  methods: {
    drawPacketCount() {
      checkFormat.getPacketCount().then((resp) => {
        this.PacketCountData = resp.data.packetCountVoList;
        this.PacketCountOption.series[0].data = []
        this.PacketCountData.forEach((entry) => {
          this.PacketCountOption.series[0].data.push({
            value: entry.count,
            name: "afn=" + entry.afn,
          });
        });
        this.PacketCountChart.setOption(this.PacketCountOption);
      });
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>

<style scoped>
</style>
