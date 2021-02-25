<template>
  <a-layout>


    <a-layout-sider
      breakpoint="xxl"
      collapsed-width="0"
    >
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
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
            <div v-for="(item,index) in projectList" :key="index" style="border: none;">
              <div style="display: flex;">
                <div>
                  <img :src="item.img" alt="" style="width: 66px;height: 66px;border-radius: 8px;margin-right: 8px;">
                </div>
                <div style="border-bottom: 1px solid rgba(28,31,33,.1);padding: 0px 0px 10px;width: 100%">
                  <div>
                    <a href="javascript:void(0);" class=""
                      @click="$router.push({
                          name:'ARTICLE',
                          query:{

                              projectType:item.projectType,
                              id:item.id,

                          }
                      })"
                    ><p class="title">{{item.title}}</p></a>
                    <span>{{item.subTitle}}</span>
                  </div>
                  <div style="padding: 5px">
                    <a-tag>{{item['categoryName']}}</a-tag>
                    <a-tag>{{item['username']}}</a-tag>
                    <a-tag>{{item['projectTypeName']}}</a-tag>
                  </div>
                </div>
              </div>
            </div>
          </a-card>
        </a-row>
      </a-layout-content>

    </a-layout>


  </a-layout>
</template>

<script>
  import * as projectController from './controller/projectController'

  export default {
    name: "",
    data() {
      return {
        projectList: []
      }
    },
    methods: {

      listProjects() {
        projectController.listProjects({pageSize: 1000}).then(res => {
          if (res.success) {
            this.projectList = res.data;
          }
        })
      }

    },
    mounted() {
      this.listProjects();
    }
  }
</script>

<style scoped>
  .title {
    margin-bottom: 4px;
    font-size: 16px;
    color: #1c1f21;
    line-height: 30px;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
  }
</style>
