<template>
  <div class="networkTraffic_css">
    <!--    NetworkTraffic页面-->
    <div class="container-flex" tabindex="0" hidefocus="true">
      <div class="box-left">
        <div class="left-top">
          <div class="title-box">
            <h6>CompliantNum</h6>
          </div>
          <div class="left-top-Count">
            <div class="compliantNumOne">
              <CompliantNumOne />
            </div>
            <div class="compliantNumTwo ">
              <CompliantNumTwo />
            </div>
          </div>
        </div>
        <div class="left-mid">
          <div class="title-box">
            <h6>NonCompliant</h6>
          </div>
          <div class="left-mid-company">
            <NonCompliant />
          </div>
        </div>
      </div>
      <div class="box-center">
        <div class="center-top">
          <div class="title-box">
            <h6>PacketProportion</h6>
          </div>
          <div class="center-top-Map">
            <PacketProportion />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompliantNumOne from "./viewCharts/formatCheck/CompliantNumOne";
import CompliantNumTwo from "./viewCharts/formatCheck/CompliantNumTwo";
import NonCompliant from "./viewCharts/formatCheck/NonCompliant";
import PacketProportion from "./viewCharts/formatCheck/PacketProportion";

export default {
  name: "OfflineTerminal",
  components: {
    NonCompliant,
    CompliantNumOne,
    CompliantNumTwo,
    PacketProportion,
  },
  mounted() {},
  data() {
    return {
      netSeg: "",
      terTrendAlive: true,
    };
  },
  methods: {
    toSelectTrend() {
      this.GLOBAL.trendSEG = this.netSeg;
      this.reloadPage();
    },
    reloadPage() {
      this.terTrendAlive = false;
      this.$nextTick(function () {
        this.terTrendAlive = true;
      });
    },
  },
};
</script>

<style scoped src="../assets/css/FormatCheck.css">
@import "../assets/css/FormatCheck.css";
</style>
