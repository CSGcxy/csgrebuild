<template>
  <div id="CompliantNumTwo" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from "echarts";
import checkFormat from "../../../api/checkFormat";
export default {
  name: "CompliantNumTwo",
  data() {
    return {
      UnqualifiedPacketCountChart: null,
      timer: "",
      UnqualifiedPacketCountOption: {
        title: {
          text: "合规packet占比",
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

          // data: ["合规packet", "不合规packet"],
        },
        series: [
          {
            type: "pie",
            radius: "60%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              // { value: 735, name: "合规packet" },
              // { value: 510, name: "不合规packet" },
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
    this.UnqualifiedPacketCountChart = this.$echarts.init(
      document.getElementById("CompliantNumTwo")
    );
    this.drawUnqualifiedPacketCount();
    this.timer = setInterval(
      this.drawUnqualifiedPacketCount,
      this.GLOBAL.refreshTime
    );
  },
  methods: {
    drawUnqualifiedPacketCount() {
      checkFormat.getUnqualifiedPacketCount().then((resp) => {
        console.log(resp);

        var PacketUnQualifiedCountData = resp.data.packetUnQualifiedCount;
        this.UnqualifiedPacketCountOption.series[0].data.push({
          value: PacketUnQualifiedCountData.qualifiedCount,
          name: "合规packet",
        });
        this.UnqualifiedPacketCountOption.series[0].data.push({
          value: PacketUnQualifiedCountData.unqualifiedCount,
          name: "不合规packet",
        });
        this.UnqualifiedPacketCountChart.setOption(
          this.UnqualifiedPacketCountOption
        );
      });
    },
  },
};
</script>

<style scoped>
</style>
