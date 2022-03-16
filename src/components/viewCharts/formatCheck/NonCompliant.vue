<template>
  <div
    id="left-bottom-NonCompliant"
    style="width: 100%; height: 200%; margin-top: 5%"
  ></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "NonCompliant",
  mounted() {
    var myChart = echarts.init(
      document.getElementById("left-bottom-NonCompliant")
    );
    const posList = [
      "left",
      "right",
      "top",
      "bottom",
      "inside",
      "insideTop",
      "insideLeft",
      "insideRight",
      "insideBottom",
      "insideTopLeft",
      "insideTopRight",
      "insideBottomLeft",
      "insideBottomRight",
    ];
    app.configParameters = {
      rotate: {
        min: -90,
        max: 90,
      },
      align: {
        options: {
          left: "left",
          center: "center",
          right: "right",
        },
      },
      verticalAlign: {
        options: {
          top: "top",
          middle: "middle",
          bottom: "bottom",
        },
      },
      position: {
        options: posList.reduce(function (map, pos) {
          map[pos] = pos;
          return map;
        }, {}),
      },
      distance: {
        min: 0,
        max: 100,
      },
    };
    app.config = {
      rotate: 90,
      align: "left",
      verticalAlign: "middle",
      position: "insideBottom",
      distance: 15,
      onChange: function () {
        const labelOption = {
          rotate: app.config.rotate,
          align: app.config.align,
          verticalAlign: app.config.verticalAlign,
          position: app.config.position,
          distance: app.config.distance,
        };
        myChart.setOption({
          series: [
            {
              label: labelOption,
            },
            {
              label: labelOption,
            },
            {
              label: labelOption,
            },
            {
              label: labelOption,
            },
          ],
        });
      },
    };
    const labelOption = {
      show: false,
      position: app.config.position,
      distance: app.config.distance,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      rotate: app.config.rotate,
      formatter: "{c}  {name|{a}}",
      fontSize: 16,
      rich: {
        name: {},
      },
    };
    var option = {
      title: {
        text: "合规packet数量",
        // subtext: "Fake Data",
        left: "center",
        top: "top",
        textStyle: {
          color: "#fff",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        left: "center",
        top: "bottom",
        textStyle: {
          fontSize: 18, //字体大小
          color: "#ffffff", //字体颜色
        },
        data: ["afn=0", "afn=2", "afn=4"],
      },
      // toolbox: {
      //   show: true,
      //   orient: "vertical",
      //   left: "right",
      //   top: "center",
      //   feature: {
      //     mark: { show: true },
      //     dataView: { show: true, readOnly: false },
      //     magicType: { show: true, type: ["line", "bar", "stack"] },
      //     restore: { show: true },
      //     saveAsImage: { show: true },
      //   },
      // },
      xAxis: [
        {
          type: "category",
          axisTick: { show: false },
          axisLabel: {
            fontSize: 18, //字体大小
            color: "#ffffff", //字体颜色
          },
          splitLine: {
            show: false,
          },
          data: ["14:00-15:00", "15:00-16:00", "16:00-17:00", "17:00-18:00"],
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            fontSize: 18, //字体大小
            color: "#ffffff", //字体颜色
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: "afn=0",
          type: "bar",
          barGap: 0,
          label: labelOption,
          emphasis: {
            focus: "series",
          },
          data: [1.3, 2.7, 4.5, 4],
        },
        {
          name: "afn=2",
          type: "bar",
          label: labelOption,
          emphasis: {
            focus: "series",
          },
          data: [1.1, 2, 4, 3],
        },
        {
          name: "afn=4",
          type: "bar",
          label: labelOption,
          emphasis: {
            focus: "series",
          },
          data: [4.1, 2.3, 1.8, 3.5],
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>

<style scoped>
</style>
