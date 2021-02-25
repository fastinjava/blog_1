<template>
  <a-layout>


    <a-layout-sider
      breakpoint="xxl"
      collapsed-width="0"
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
        <a-row style="width: 700px;margin: 0 auto">
          <a-card style="box-shadow: 0 4px 8px 0 rgba(28,31,33,0.1);background-color: #fff;
                border-radius: 10px;">
            <a-card v-for="(item,index) in 10" :key="index" style="margin-top: 10px;border: none;
              ">
              <div style="display: flex;">
                <div>
                  <img src="http://img3.sycdn.imooc.com/5bd1355a0001a27c04000294-200-200.jpg" alt="" style="width: 66px;
                height: 66px;
                border-radius: 8px;
                margin-right: 8px;
                ">
                </div>
                <div style="    border-bottom: 1px solid rgba(28,31,33,.1);padding: 10px;">
                  <div>
                    Java开发专属成长路线，新手入门看这个就够了！ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                  </div>
                  <div>
                    <a-button type="link">java</a-button>
                    <a-button type="link">后端</a-button>
                  </div>
                </div>
              </div>
            </a-card>
          </a-card>


        </a-row>
      </a-layout-content>

    </a-layout>





  </a-layout>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>
</style>
