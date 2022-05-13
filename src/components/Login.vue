<template>
  <div class="wrap" id="login" v-title data-title="登录">
    <el-form ref="userForm" :model="userForm" :rules="rules">
      <div class="center">
        <div class="center-con">
          <h1>Nice To See You Again!</h1>
          <h3>用户名</h3>
          <el-form-item prop="account">
            <el-input
              type="text"
              class="text"
              placeholder="用户名"
              v-model="userForm.account"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <h3>密&nbsp;&nbsp;&nbsp;&nbsp;码</h3>
            <el-input
              type="password"
              class="text"
              placeholder="密码"
              v-model="userForm.password"
            ></el-input>
          </el-form-item>
          <el-button
            type="primary"
            @click.native.prevent="login('userForm')"
            class="btn"
            value="LOGIN"
            >确&nbsp;&nbsp;&nbsp;&nbsp;定</el-button
          >
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userForm: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login(formName) {
      let that = this;

      this.$refs[formName].validate((valid) => {
        if (valid) {
          that.$store
            .dispatch("login", that.userForm)
            .then(() => {
              that.$router.go(-1);
            })
            .catch((error) => {
              if (error !== "error") {
                that.$message({
                  message: error,
                  type: "error",
                  showClose: true,
                });
              }
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow: hidden;
}

.wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #10121a;
}

.el-form {
  width: 450px;
  height: 320px;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
}

.center {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.center-con {
  width: 70%;
  display: flex;
  flex-direction: column;
  text-align: center;
}

h1 {
  font-size: 26px;
  color: rgb(0, 0, 0);
  font-weight: 400;
  padding-bottom: 10px;
}

h3 {
  font-size: 18px;
  font-weight: 400;
  color: rgb(0, 0, 0);
  /* padding: -20px 0; */
}

.text {
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(0, 0, 0);
  color: #366ae6;
  background-color: rgba(0, 0, 0, 0);
}

.btn {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  background-color: rgb(36, 108, 136);
}

.btn:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}
</style>