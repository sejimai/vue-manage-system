<template>
  <div class="wrapper">
    <div class="header">
      <div class="collapse-btn">
        <i class="el-icon-s-fold"></i>
      </div>
      <div class="logo">注册</div>
    </div>
    <div class="register-box">
      <div class="content">
        <div class="form">
          <div class="title">欢迎注册</div>
          <el-form
            :model="param"
            :rules="rules"
            ref="login"
            label-width="0px"
            class="ms-content"
          >
            <el-form-item prop="username">
              <el-input v-model="param.username" placeholder="请输入用户名">
                <el-button
                  class="primary"
                  slot="prepend"
                  icon="el-icon-lx-people"
                ></el-button>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                placeholder="请输入密码"
                v-model="param.password"
              >
                <el-button
                  class="primary"
                  slot="prepend"
                  icon="el-icon-lx-lock"
                ></el-button>
              </el-input>
            </el-form-item>
            <el-form-item prop="confirmPassword">
              <el-input
                type="password"
                placeholder="请输入确认密码"
                v-model="param.password"
              >
                <el-button
                  class="primary"
                  slot="prepend"
                  icon="el-icon-lx-lock"
                ></el-button>
              </el-input>
            </el-form-item>
            <div class="register-btn">
              <el-button
                class="primary"
                type="primary"
                @click="submitForm()"
                >注册</el-button
              >
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: {
        username: "",
        password: "",
        confirmPassword: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
        ],
        confirmPassword: [
          {
            required: true,
            message: "请输入确认密码",
            trigger: "blur"
          },
        ],
      },
    }
  },
  methods: {
    submitForm() {
      this.$router.replace("/login");
    }
  },
};
</script>

<style>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.form {
  top: 80px;
  left: 20%;
  width: 60%;
  padding: 60px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  position: relative;
}
.title {
  text-align: center;
  font-size: 30px;
}
.ms-content {
  padding-top: 50px;
  padding-left: 180px;
  padding-right: 180px;
}
.register-btn {
  text-align: center;
}
.register-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
</style>
