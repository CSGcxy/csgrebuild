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
            <select class='segmentTraffic' v-model="netSeg" @change="toSelectTrend">
              <option value="YD4G">移动4G</option>
              <option value="YD5G">移动5G</option>
              <option value="YDWLW">移动物联网</option>
              <option value="LT4G">联通4G</option>
              <option value="WX230">无线230</option>
              <option value="PW">配网</option>
              <option value="ZZ">主站</option>
              <option value="Others">其它</option>
            </select>
          </div>
          <div class="center-bottom-Line">
            <LineChart v-if="terTrendAlive"/>
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
      netSeg: '',
      terTrendAlive: true
    }
  },
  methods:{
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
  }
}
</script>

<style scoped src="../assets/css/offlineTerminal.css">
@import "../assets/css/offlineTerminal.css";

</style>
