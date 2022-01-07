<template>
  <div class="networkTraffic_css">
<!--    NetworkTraffic页面-->
    <div class="container-flex" tabindex="0" hidefocus="true">
      <div class="box-left">
        <div class="title-box">
          <h6>网段终端总体统计</h6>
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
          <div class="title-box">
            <h6>网段流量桑基图</h6>
          </div>
          <div class="center-terminal">
<!--            <div id="center-terminal-detail"></div>-->
            <NetworkSangji v-if="isRouterAlive"/>
          </div>
        </div>
        <div class="center-mid">
          <div class="title-box">
            <h6>活跃流表</h6>
          </div>
          <div class="center-active">
            <ActiveTraffic v-if="isRouterAlive"/>

<!--            <div class="center-active-detail">-->
<!--              <div class="active-detail-table">-->
<!--                -->
<!--              </div>-->
<!--            </div>-->
          </div>
        </div>
        <div class="center-bottom">
          <div class="title-box">
            <h6>网段流量时序图</h6>
<!--            <select class='segmentTraffic' v-model="netSeg">-->
<!--              <option value="1">YD4G</option>-->
<!--              <option value="2">YD5G</option>-->
<!--              <option value="3">YDWLW</option>-->
<!--              <option value="4">LT4G</option>-->
<!--              <option value="5">WX230</option>-->
<!--              <option value="6">PW</option>-->
<!--              <option value="7">ZZ</option>-->
<!--              <option value="8">Others</option>-->
<!--            </select>-->
          </div>
          <div class="timeInterval">
            <template>
              <el-time-select
                placeholder="起始时间"
                v-model="startTime"
                :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
                }">
              </el-time-select>
              <el-time-select
                placeholder="结束时间"
                v-model="endTime"
                :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
                minTime: startTime
                }">
              </el-time-select>
            </template>
          </div>

          <div class="center-flowTiming">
<!--            <div id="center-flowTiming-detail"></div>-->
            <SegmentTraffic v-if="isRouterAlive"/>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

import NetworkSegmentTerminalTotal from "@/components/viewCharts/terminalStatus/NetworkSegmentTerminalTotal";
import ActiveTraffic from "@/components/viewCharts/networkTraffic/ActiveTraffic";
import SegmentTraffic from "@/components/viewCharts/networkTraffic/SegmentTraffic";
import NetworkSangji from "@/components/viewCharts/networkTraffic/NetworkSangji";

export default {
  name: "NetworkTraffic",
  components: {NetworkSangji, NetworkSegmentTerminalTotal , ActiveTraffic, SegmentTraffic},
  data() {
    return{
      flowSegList: [],
      timer: null,
      startTime: '',
      endTime: '',
      selectNetSeg:'',
      isRouterAlive: true,
      ipList: [],
      netSegList:[
        {
          value:"SIM",
          label:"SIM卡",
          children:[
            {
              value: 'YD4G',
              label: '移动4G'
            },
            {
              value: 'YD5G',
              label: '移动5G'
            },
            {
              value: 'YDWLW',
              label: '移动物联网'
            },
            {
              value: 'LT4G',
              label: '联通4G'
            }
          ]
        },
        {
          value:"WX230",
          label: '无线',
          children: [
            {
              value: 'WX230',
              label: '无线'
            }
          ]
        },
        {
          value:"PW",
          label: '配网',
          children: [
            {
              value: 'PW',
              label: '配网'
            }
          ]
        },
        {
          value:"ZZ",
          label: '主站',
          children: [
            {
              value: 'ZZ',
              label: '主站'
            }
          ]
        },
        {
          value:"Others",
          label: '其它',
          children: [
            {
              value: 'Others',
              label: '其它'
            }
          ]
        },

      ],
    }
  },
  // /*获取select下的选择值*/
  // watch: {
  //   netSeg:{
  //     handler(newName) {
  //       console.log(newName);
  //     }
  //   }
  // },
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
  }
}
</script>

<style scoped src="../assets/css/networkTraffic.css">
@import "../assets/css/networkTraffic.css";

</style>