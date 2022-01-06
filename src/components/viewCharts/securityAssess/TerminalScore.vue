<template>
  <div id="div1">
    <div id="part1">
      <div class="box-display">
        <div class="box-inner-text">终端1</div>
        <div class="box-inner-logo">
          <i class="el-icon-success" style="color:hsl(142, 62%, 70%);"></i>
        </div>
      </div>
      <!--    <div style="float: left;">-->
      <!--      <img src="../../../assets/images/scroll3.png" style="height: 20px;">-->
      <!--    </div>-->
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

    <div id="part2">
      <div class="box-display">
        <div class="box-inner-text">终端4</div>
        <div class="box-inner-logo">
          <i class="el-icon-success" style="color:hsl(142, 62%, 70%);"></i>
        </div>
      </div>

      <div class="box-display">
        <div class="box-inner-text">终端5</div>
        <div class="box-inner-logo">
          <i class="el-icon-remove" style="color:hsl(55, 100%, 70%);"></i>
        </div>
      </div>

      <div class="box-display">
        <div class="box-inner-text">终端6</div>
        <div class="box-inner-logo">
          <i class="el-icon-warning" style="color:hsl(0, 90%, 70%);"></i>
        </div>
      </div>
    </div>

    <div id="part3">
      <div class="box-display">
        <div class="box-inner-text">终端7</div>
        <div class="box-inner-logo">
          <i class="el-icon-success" style="color:hsl(142, 62%, 70%);"></i>
        </div>
      </div>

      <div class="box-display">
        <div class="box-inner-text">终端8</div>
        <div class="box-inner-logo">
          <i class="el-icon-remove" style="color:hsl(55, 100%, 70%);"></i>
        </div>
      </div>

      <div class="box-display">
        <div class="box-inner-text">终端9</div>
        <div class="box-inner-logo">
          <i class="el-icon-warning" style="color:hsl(0, 90%, 70%);"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TerminalScore",

}
</script>

<style scoped>
#div1{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 5%;
  /*background-color: #4b8df8;*/
}
.box-display{
  width: 90%;
  height:40px;
  float: left;
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
  /*background: url(../../../assets/images/scroll3.png) left bottom repeat-x;*/

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
#part1{
  width:33%;
  height:90%;
  float: left;
}
#part2{
  width:33%;
  height:90%;
  float: left;
}
#part3{
  width:33%;
  height:90%;
  float: left;
}
</style>