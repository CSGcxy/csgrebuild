<template>
  <div>
    Flow页面
    <button @click="getData">获取</button>
  </div>
</template>

<script>
import netSegStatus from "@/api/netSegStatus";
import netTraffic from "@/api/netTraffic";
export default {
  name: "Flow",
  data(){
    return{
      temp: ''
  }
  },
  mounted() {
    this.temp = 'Others'
  },
  methods:{
    getData() {
      this.GLOBAL.NETSEG = this.temp
      netTraffic.getSegTotalBytesByTime(this.GLOBAL.NETSEG, 1641127265000,1641573355000).then(resp => {
        console.log("flow222")
        console.log(resp.data)
      });
    }
  }
}
</script>

<style scoped>

</style>
