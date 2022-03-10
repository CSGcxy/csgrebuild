import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import FormatCheck from "@/components/FormatCheck";
import TerminalStatus from "@/components/TerminalStatus";
import SecurityAssess from "@/components/SecurityAssess";
import OffTerminal from "@/components/OffTerminal";
import NetworkTraffic from "@/components/NetworkTraffic";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/formatCheck',
        name: 'FormatCheck',
        component: FormatCheck
      },
      {
        path: '/securityAssess',
        name: "SecurityAssess",
        component: SecurityAssess
      },
      {
        path: '/networkTraffic',
        name: "networkTraffic",
        component: NetworkTraffic
      },
      {
        path: '/terminalStatus',
        name: "TerminalStatus",
        component: TerminalStatus
      },
      {
        path: '/offTerminal',
        name: "OffTerminal",
        component: OffTerminal
      }
    ]
  },

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
