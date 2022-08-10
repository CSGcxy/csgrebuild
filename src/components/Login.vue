<template >
  <div id="login-container" v-loading="fullscreenLoading">
    <h1 class="big-title">XXXX监控系统平台</h1>
    <div class="login-form-container">
      <el-form
          :model="userForm"
          status-icon
          :rules="rules"
          ref="userForm"
          class="login-form"
      >
        <div class="title-container" style="text-align: center; height: 50px">
<!--          <h3 class="title">XXXX监控系统平台</h3>-->
        </div>
        <el-form-item prop="userName" @keyup.enter.native="doLogin">
<!--          <span class="icon-container">-->
<!--            <i class="el-icon-user"></i>-->
<!--          </span>-->
          <el-input
              type="text"
              v-model="userForm.userName"
              autocomplete="off"
              placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
<!--          <span class="icon-container">-->
<!--            <i class="el-icon-unlock"></i>-->
<!--          </span>-->
          <el-input
              type="text"
              v-model="userForm.password"
              autocomplete="off"
              placeholder="密码"
              show-password
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
<!--          <span class="icon-container">-->
<!--            <i class="el-icon-message"></i>-->
<!--          </span>-->
          <el-input
              v-model="userForm.code"
              autocomplete="off"
              placeholder="验证码"
          >
            <template slot="append"><img style="margin: 0 2px 0 2px;" @click="getCatcha" :src="captchaUrl"
                                         alt="验证码" height="30" width="80">
            </template>
          </el-input>
        </el-form-item>
        <el-form-item class="btn-form-item">
          <el-button type="primary" @click="doLogin" class="btn-container"
          >登录</el-button
          >
          <el-button @click="resetForm('userForm')" class="btn-container"
          >重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <h3 class="visitorMode" >
      <router-link to="/home">访客模式</router-link>

    </h3>

  </div>
</template>

<script>
import user from "@/api/user";
// import axios from 'axios'
export default {
  name: "login",
  data() {
    return {

      userForm: {
        userName: "",
        password: "",
        code: ""
      },
      fullscreenLoading: false,
      captchaUrl: "/manage/captcha/getCaptcha" + '?' + Math.random() * 1000,
      rules: {
        // user: [{ validator: validatePass, trigger: "blur" }],
        // pass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.getCatcha();
  },

  methods: {
    doLogin() {
      // this.$message.warning("暂时不能登录！请用访客模式查看")
      this.fullscreenLoading = true;
      user.login(this.userForm).then(resp=>{

        if (resp.code==20000 && resp.success==true){
          console.log(resp)
          this.fullscreenLoading = false;
          this.$message.success(resp.message);
          window.localStorage.setItem("uToken",resp.data.token)
          // this.$router.push("/home")
          //登录成功后获取用户信息
          user.test().then(resp => {
            console.log(resp);
            // this.fullscreenLoading = false;
            this.$router.push("/home")
          });
          // localStorage
        }
      })
    },
    getCatcha() {
      this.captchaUrl = "/manage/captcha/getCaptcha" + '?' + Math.random() * 1000;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
#login-container {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: #10121a;

  .el-input {
    //display: inline-block;
    height: 47px;
    //width: 85%;

    /deep/ input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #fff !important;
      height: 47px;
      caret-color: #fff !important;
    }
  }
/deep/ .el-input-group__append, .el-input-group__prepend {
  padding:2px;
}

  /deep/ .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    text-align: center;
  }
  /deep/ .el-form-item.btn-form-item {
    border: 1px solid #10121a;
    background-color: #10121a;
    border-radius: 5px;
    text-align: center;
  }
  h1 {
    letter-spacing: 25px;
    font-size: 40px;
    font-weight: bold;
  }
  .big-title{
    //position: absolute;
    //top:100px;
    margin: 140px auto 90px auto;
    text-align: center;
    //font-size: 40px;
    color: #eee;
    //font-weight: bold;
    //background-color: #4b8df8;
  }

  .login-form-container{
    width:380px;
    margin:70px auto;
    border: solid 1px #454545;
    border-radius: 5%;

  }
  .login-form {
    width: 320px;
    max-width: 100%;
    padding: 15px 22px;
    //margin-top: 17%;
    //margin-left: 35%;
  }

  .icon-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    display: inline-block;
  }
  .icon-container-code {
    padding: 6px 5px 6px 10px;
    color: #889aa4;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: #eee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .btn-container {
    width: 20%;
    font-size: 14px;
  }
  .visitorMode{
    //font-size: 26px;
    text-align: center;
    //color: #fff;
    text-decoration: underline;
  }
  a:-webkit-any-link {
    color: dodgerblue;
  }
}
</style>
