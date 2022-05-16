<template>
  <div class="homeWrap">
    <el-container class="home-container">
      <el-header class="home-header" height="70px">
        <div class="topTitle">
          <div class="left nav">
            <ul style="margin-right: 2%; margin-left: 1%">
              <li :class="{ nav_active: show == '/formatCheck' }">
                <router-link to="/formatCheck"
                  ><i class="nav_1"></i>格式校验</router-link
                >
              </li>
              <li :class="{ nav_active: show == '/securityAssess' }">
                <router-link to="/securityAssessTwo"
                  ><i class="nav_2"></i>安全评估</router-link
                >
              </li>
              <li :class="{ nav_active: show == '/networkTraffic' }">
                <router-link to="/networkTraffic"
                  ><i class="nav_6"></i>网段流量</router-link
                >
              </li>
            </ul>
          </div>
          <div class="center-topTitle">
            <h1>XXXX监控系统平台</h1>
          </div>
          <div class="right nav">
            <ul style="margin-left: 2%">
              <li :class="{ nav_active: show == '/terminalStatus' }">
                <router-link to="/terminalStatus"
                  ><i class="nav_4"></i>终端状态</router-link
                >
              </li>
              <li :class="{ nav_active: show == '/offTerminal' }">
                <router-link to="/offTerminal"
                  ><i class="nav_5"></i>离线状态</router-link
                >
              </li>
            </ul>
          </div>
          <!-- <template v-show="info.isLogin">
            <div class="login">
              <router-link to="/login">登录</router-link>
            </div>
          </template> -->
          <div class="username">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-notebook-1"
                  >菜单一</el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-notebook-2"
                  >菜单二</el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-user-solid"
                  >用户管理</el-dropdown-item
                >
                <router-link to="/login">
                  <el-dropdown-item icon="el-icon-remove"
                    >退出
                  </el-dropdown-item></router-link
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-main class="home-main">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      show: 0,
      username: "",
    };
  },
  /*高亮选中：用路由跳转来判断*/
  watch: {
    $route() {
      this.show = this.$route.path;
    },
  },
  computed: {},
  methods: {},
  mounted() {
    this.username = window.sessionStorage.getItem("user");
    this.username = eval(this.username);
    // console.log(this.username);
  },
};
</script>

<style scoped>
@import "../assets/css/header.css";

.homeWrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.home-container {
  height: 100%;
}

.home-header {
  background-color: #10121a;
}

.home-main {
  background-color: #10121a;
  height: 80%;
}
</style>
