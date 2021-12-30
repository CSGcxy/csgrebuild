<template>
  <div class="securityAss_css">
    <div class="container-flex" tabindex="0" hidefocus="true">
      <div class="box-top">

        <div class="top-left">
          <div class="title-box">
            <h6>主站安全评分</h6>
          </div>
          <div class="top-left-radar">
            <MasterStaSecurity/>
          </div>

        </div>

        <div class="top-right">
          <div class="title-box">
            <h6>主站评分趋势图</h6>
          </div>
          <div class="top-right-line">
            <MasterStaTrend/>
          </div>
        </div>

      </div>

      <div class="box-bottom">
        <div class="bottom-left">
          <div class="title-box">
            <h6>紧急</h6>
          </div>
          <div class="bottom-left-urgent">
            <Urgent/>
          </div>
        </div>
        <div class="bottom-right">
          <div class="title-box">
            <h6>终端评分</h6>
          </div>
          <div class="bottom-right-scroll">
            <TerminalScore/>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
import MasterStaSecurity from "./viewCharts/securityAssess/MasterStaSecurity";
import MasterStaTrend from "./viewCharts/securityAssess/MasterStaTrend";
import Urgent from "./viewCharts/securityAssess/Urgent";
import TerminalScore from "./viewCharts/securityAssess/TerminalScore";
export default {
  name: "SecurityAssess",
  components:{Urgent, MasterStaSecurity,MasterStaTrend ,TerminalScore},
}
</script>

<style scoped src="../assets/css/securityAssess.css">
@import "../assets/css/securityAssess.css";
</style>
