<template>
  <a-row>

    <a-card>

      <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="登录名称">
          <a-input v-model="loginForm.username"
          />
        </a-form-item>
        <a-form-item label="登录密码">
          <a-input v-model="loginForm.password"
          />
        </a-form-item>
        <a-form-item label=" ">
          <a-button type="primary" @click="loginClick">确定登录</a-button>
        </a-form-item>
      </a-form>

    </a-card>

  </a-row>
</template>

<script>

  import * as loginController from './controller/loginController'
  var jwtUtil = require("jsonwebtoken");
  export default {
    name: "",
    data() {
      return {

        loginForm: {
          username: 'lifuyong',
          password: '123456',
          clientId: 'fastdevelop',
          clientSecret: '123456',
        },

      }
    },
    methods: {
      loginClick() {

        this.login(this.loginForm);

      }
      ,
      login(reload) {
        loginController.userLogin(reload).then(res => {
          console.log(res)
          if (res.success) {
            this.$message.success('登陆成功');
            window.localStorage.setItem("fastdevelop_user_info", JSON.stringify(jwtUtil.decode(res.data)));
            window.localStorage.setItem("token", res.data);
            let this_ = this;
            setTimeout(function(){
              this_.$router.push({name: 'INDEX'})
              }, 1000);
          }
        })
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
