<template>
  <div class="terminalStatus_css">
    <!--    terminalStatus页面-->
    <div class="container-flex" tabindex="0" hidefocus="true">
      <div class="box-left">
        <div class="title-box">
          <h6>网段终端总体统计</h6>
          <!--          <select class='terminalFlow' v-model="selectNetSeg" @change="toSelectNetSeg">-->
          <!--            <option :value="netSeg.id" v-for="netSeg in netSegList">{{ netSeg.name }}</option>-->
          <!--          </select>-->
          <el-cascader v-model="selectNetSeg"
                       :options="netSegList"
                       @change="toSelectNetSeg"
                       placeholder="选择网段">
          </el-cascader>
        </div>
        <div class="left-top">
          <NetworkSegmentTerminalTotal v-if="isRouterAlive"/>
        </div>
      </div>
      <div class="box-center">
        <div class="center-top">
          <div class="center-left">
            <div class="center-left-active">
              <!--              <div id="left-active"></div>-->
                            <ActiveTerminal v-if="isRouterAlive"/>
            </div>
          </div>
          <div class="center-center">
            <!--            <TerminalLocationMap v-if="isRouterAlive"/>-->
             <shenzhen v-if="isRouterAlive"/>
          </div>
          <div class="center-right">
            <div class="center-right-hosts">
              <!--              <div id="topHosts"></div>-->
              <AlertIP v-if="isRouterAlive"/>
            </div>
          </div>
        </div>
        <div class="center-mid">
          <div class="title-box">
            <h6>终端通信情况表</h6>
          </div>
          <div class="center-active">
                        <terminalCommunication v-if="isRouterAlive"/>
          </div>
        </div>
        <div class="center-bottom">
          <div class="title-box">
            <h6>终端流量时序图</h6>
            <select class='terminalFlow'>
              <option :value="ip" v-for="ip in ipList">{{ ip }}</option>
              <!--              <option value="2">终端2</option>-->
              <!--              <option value="3">终端3</option>-->
              <!--              <option value="4">终端4</option>-->
              <!--              <option value="5">终端5</option>-->
              <!--              <option value="6">终端6</option>-->
              <!--              <option value="7">终端7</option>-->
            </select>
          </div>
                    <FlowTimingRecived v-if="isRouterAlive"/>
                    <FlowTimingSent v-if="isRouterAlive"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import netSegStatus from "@/api/netSegStatus";
import NetworkSegmentTerminalTotal from "./viewCharts/terminalStatus/NetworkSegmentTerminalTotal";
import AlertIP from "./viewCharts/terminalStatus/AlertIP";
import TerminalCommunication from "./viewCharts/terminalStatus/TerminalCommunication";
import FlowTimingRecived from "./viewCharts/terminalStatus/FlowTimingRecived";
import FlowTimingSent from "./viewCharts/terminalStatus/FlowTimingSent";
import shenzhen from "./viewCharts/terminalStatus/shenzhen";
import ActiveTerminal from "./viewCharts/terminalStatus/ActiveTerminal";
export default {
  name: "TerminalStatus",
  components:{NetworkSegmentTerminalTotal,AlertIP,TerminalCommunication,FlowTimingRecived,FlowTimingSent,shenzhen,ActiveTerminal },
  data() {

    return {
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      selectNetSeg:'',
      isRouterAlive: true,
      ipList: [],
      netSegList:[
        {
          value:"innerNet",
          label:"内网",
          children:[
            {
              value: '10.x.x.x',
              label: '10.x.x.x',
            }
          ]
        },
        {
          value:"outNet",
          label: '外网',
          children: [
            {
              value: '外网IPx.x.x.x',
              label: '外网IPx.x.x.x',
            }
          ],
        }
      ],
    }
  },
  mounted() {
    this.GLOBAL.NETSEG = '10.x.x.x';
    this.getIpList();
  },
  watch: {
    selectNetSeg:{
      handler(newName) {
        this.getIpList(newName[1])
      }
    }
  },
  methods:{
    toSelectNetSeg() {
      this.GLOBAL.NETSEG = this.selectNetSeg[1];
      this.reloadPage();
    },
    reloadPage() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
    getIpList() {
      netSegStatus.getIpList(this.GLOBAL.NETSEG).then(resp => {
        this.ipList = resp.data;
        console.log(resp)
      });
    }
  }
}
</script>

<style scoped>
@import "../assets/css/terminalStatus.css";
</style>
