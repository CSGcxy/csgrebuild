<template>
  <div class="securityAssessTwo_css">
    <!--    securityAssessTwo页面-->
    <div class="container-flex" tabindex="0" hidefocus="true">
      <div class="box-left">
        <div class="left-top">
          <div class="title-box">
            <h6>综合评分</h6>
          </div>
          <div class="left-top-Count">
            <overallScore />
          </div>
        </div>
        <div class="left-mid">
          <div class="title-box">
            <h6>评分详情</h6>
          </div>
          <div class="left-mid-company">
            <scoreDetails />
          </div>
        </div>
      </div>
      <div class="box-center">
        <div class="center-top">
          <div class="title-box">
            <h6>PacketProportion</h6>
          </div>
          <div class="center-top-Map">
            <scoreSheet />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import overallScore from "./viewCharts/securityAssessTwo/overallScore";
import scoreDetails from "./viewCharts/securityAssessTwo/scoreDetails";
import scoreSheet from "./viewCharts/securityAssessTwo/scoreSheet";
export default {
  name: "SecurityAssessTwo",
  components: { overallScore, scoreDetails, scoreSheet },
};
</script>



<style scoped src="../assets/css/securityAssessTwo.css">
@import "../assets/css/securityAssessTwo.css";
</style>