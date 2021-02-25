<template>
  <a-row>

    <a-card>

      <a-form  :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" >
        <a-form-item label="登录名称">
          <a-input
          />
        </a-form-item>
        <a-form-item label="登录密码">
          <a-input
          />
        </a-form-item>
        <a-form-item label=" ">
          <a-button type="primary">确定登录</a-button>
        </a-form-item>
      </a-form>

    </a-card>

  </a-row>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>

</style>
