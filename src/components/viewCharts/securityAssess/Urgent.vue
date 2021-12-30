<template>
<div id="bottom-left-urgent">
  <div class="part1">
    <div class="box-display">
      <div class="box-inner-text">终端1</div>
      <div class="box-inner-logo">
        <i class="el-icon-success" style="color:hsl(142, 62%, 70%);"></i>
      </div>
    </div>
    <div class="box-display">
      <div class="box-inner-text">终端2</div>
      <div class="box-inner-logo">
        <i class="el-icon-remove" style="color:hsl(55, 100%, 70%);"></i>
      </div>
    </div>
    <div class="box-display">
      <div class="box-inner-text">终端3</div>
      <div class="box-inner-logo">
        <i class="el-icon-warning" style="color:hsl(0, 90%, 70%);"></i>
      </div>
    </div>
  </div>
  <div class="part2">
    <div class="box-display">
      <div class="box-inner-text">终端4</div>
<!--      <div class="box-inner-green">-->
<!--      </div>-->
      <div class="box-inner-logo">
        <i class="el-icon-warning" style="color:hsl(0, 90%, 70%);"></i>
      </div>
    </div>
    <div class="box-display">
      <div class="box-inner-text">终端5</div>
<!--      <div class="box-inner-red">-->
<!--      </div>-->
      <div class="box-inner-logo">
        <i class="el-icon-remove" style="color:hsl(55, 100%, 70%);"></i>
      </div>
    </div>
    <div class="box-display">
      <div class="box-inner-text">终端6</div>
<!--      <div class="box-inner-red">-->
<!--      </div>-->
      <div class="box-inner-logo">
        <i class="el-icon-success" style="color:hsl(142, 62%, 70%);"></i>
      </div>
    </div>
  </div>



</div>
</template>

<script>
export default {
  name: "Urgent"
}
</script>

<style scoped>
#bottom-left-urgent{
  width: 100%;
  height: 90%;
  /*background-color: #cdddf7;*/
  position: absolute;
  top:6%;
  float:left;
}
.part1{
  width:50%;
  height:90%;
  float: left;
  /*background: url(../../../assets/images/line_img.png) top right repeat-y;*/
  /*border-right-style: solid;*/
  /*border-right-color: hsl(160, 6%, 45%);*/
}


.part2{
  width:49%;
  height:90%;
  float: left;
}

.box-display{
  width: 90%;
  height:40px;
  border-style: solid;
  border-width:2px 2px 2px 9px;
  /*border-color:  hsl(0, 0%, 30%) hsl(0, 0%, 30%) hsl(2, 0%, 51%) rgb(0, 68, 111);*/
  border-color:  black black black  hsl(210, 65%, 29%);
  /*border-color: hsl(2, 0%, 51%);*/
  margin: 10px;
  display: flex;
  justify-content: space-around;
  /*background-color: hsl(0, 0%, 30%);*/
  background-color: hsl(210, 35%, 30%);
  /*background-color: hsl(191, 8%, 29%);*/
  padding: 3px 0;

}

.box-inner-text {
  text-align: center;
  padding: 10px 0;
  font-family: Arial, Helvetica, sans-serif ;
  font-size: 16px;
  color: hsl(0, 0%, 70%);
}

.box-inner-logo{
  padding: 10px 0;
  font-size: 20px;
  /*background-color: #FFFFff;*/
}
.box-inner-red{
  width: 20px;
  height: 20px;
  /*border-radius: 8px;*/
  /*border-style:  5px white;*/
  border:solid 1px white;
  background-color: hsl(0, 90%, 70%);
  /*padding: 5px 0;*/
  margin: 5px ;
  /*outline-style: ridge;*/
  /*outline-width:6px;*/
  /*outline-color:hsl(0,100%,75%);*/
  /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);*/
}

.box-inner-yellow{
  width: 20px;
  height: 20px;
  /*border-radius: 8px;*/
  background-color: hsl(55, 100%, 70%);
  /*padding: 10px 0;*/
  margin: 6px;
  /*outline-style: ridge;*/
  /*outline-width:5px;*/
  /*outline-color:hsl(55,90%,75%);*/
  /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);*/
}

.box-inner-green{
  width: 20px;
  height: 20px;
  /*border-radius: 8px;*/
  background-color: hsl(142, 62%, 70%);
  /*padding: 10px 0;*/
  margin: 6px;
  /*outline-style: ridge;*/
  /*outline-width:5px;*/
  /*outline-color:hsl(142,70%,70%);*/
  /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);*/
}
</style>