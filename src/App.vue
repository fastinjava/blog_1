<template>
  <div id="app">
    <a-layout >
      <a-layout-sider
        breakpoint="xxl"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
      >
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']" >
          <a-menu-item key="1">
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>

      <a-layout>

        <a-layout-content :style="{'minHeight':'1500px'}">
          <div >
            <router-view/>
          </div>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>

    </a-layout>
  </div>
</template>

<script>
  export default {
    methods: {
      onCollapse(collapsed, type) {
        console.log(collapsed, type);
      },
      onBreakpoint(broken) {
        console.log(broken);
      },
    },
  };

</script>

<style>




</style>
