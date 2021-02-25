<template>
  <div id="app">
    <a-layout>
      <a-layout>
        <a-layout-content :style="{'minHeight':'1500px'}">
          <div >
            <router-view/>
          </div>
        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
          fastinjava ©2020 Created by 2579547987@qq.com
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
