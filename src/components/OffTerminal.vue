<template>
  <div class="networkTraffic_css">
    <!--    NetworkTraffic页面-->
    <div class="container-flex" tabindex="0" hidefocus="true">
      <div class="box-left">
        <div class="left-top">
          <div class="title-box">
            <h6>离线终端数量变化折线图</h6>
          </div>
          <div class="left-top-Count">
            <CountChange/>
          </div>
        </div>
        <div class="left-mid">
          <div class="title-box">
            <h6>离线终端的厂商情况</h6>
          </div>
          <div class="left-mid-company">
            <CompanyCondition/>
          </div>
        </div>
        <div class="left-bottom">
          <div class="title-box">
            <h6>离线终端网段分布情况</h6>
          </div>
          <div class="left-bottom-NetworkSegment">
            <NetworkSegmentDistribution/>
          </div>
        </div>
      </div>
      <div class="box-center">
        <div class="center-top">
          <div class="title-box">
            <h6>离线终端地区分布</h6>
          </div>
          <div class="center-top-Map">
            <OfflineMap/>
          </div>
        </div>
        <div class="center-bottom">
          <div class="title-box">
            <h6>折线图堆叠</h6>
          </div>
          <div class="center-bottom-Line">
            <LineChart/>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

import CountChange from "@/components/viewCharts/offTerminal/CountChange";
import CompanyCondition from "@/components/viewCharts/offTerminal/CompanyCondition";
import NetworkSegmentDistribution from "@/components/viewCharts/offTerminal/NetworkSegmentDistribution";
import LineChart from "@/components/viewCharts/offTerminal/LineChart";
import OfflineMap from "@/components/viewCharts/offTerminal/OfflineMap";
export default {
  name: "OfflineTerminal",
  components: {LineChart, NetworkSegmentDistribution, CompanyCondition, CountChange,OfflineMap},
  mounted() {

  },
  data() {
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped src="../assets/css/offlineTerminal.css">
@import "../assets/css/offlineTerminal.css";

</style>