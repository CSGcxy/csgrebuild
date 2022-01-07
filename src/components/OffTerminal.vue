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
            <OfflineShenzhen/>
          </div>
        </div>
        <div class="center-bottom">
          <div class="title-box">
            <h6>不同网段离线终端变化</h6>
            <select class='segmentTraffic' >
              <option value="1">YD4G</option>
              <option value="2">YD5G</option>
              <option value="3">YDWLW</option>
              <option value="4">LT4G</option>
              <option value="5">WX230</option>
              <option value="6">PW</option>
              <option value="7">ZZ</option>
              <option value="8">Others</option>
            </select>
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
import OfflineShenzhen from "./viewCharts/offTerminal/OfflineShenzhen";
export default {
  name: "OfflineTerminal",
  components: {LineChart, NetworkSegmentDistribution, CompanyCondition, CountChange,OfflineShenzhen},
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
