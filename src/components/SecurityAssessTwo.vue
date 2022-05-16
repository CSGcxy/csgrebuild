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
            <CompliantNum />
          </div>
        </div>
        <div class="left-mid">
          <div class="title-box">
            <h6>评分详情</h6>
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
export default {};
</script>


<style scoped src="../assets/css/securityAssessTwo.css">
@import "../assets/css/securityAssessTwo.css";
</style>