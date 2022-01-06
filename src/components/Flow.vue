<template>
  <div>
    Flow页面
    <button @click="getData">获取</button>
  </div>
</template>

<script>
import netSegStatus from "@/api/netSegStatus";
export default {
  name: "Flow",
  data(){
    return{
      temp: ''
  }
  },
  mounted() {
    this.temp = '10.x.x.x'
  },
  methods:{
    getData() {
      this.GLOBAL.NETSEG = this.temp
      netSegStatus.getNetworkSegmentTerminalTotal(this.GLOBAL.NETSEG).then(resp => {
        console.log("flow222")
        console.log(resp)
      });
    }
  }
}
</script>

<style scoped>

</style>
