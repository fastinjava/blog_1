<template>
  <a-layout>


    <!--<a-layout-sider-->
    <!--breakpoint="xxl"-->
    <!--collapsed-width="0"-->
    <!--&gt;-->
    <!--<a-menu theme="dark" mode="inline" :default-selected-keys="['1']">-->
    <!--<a-menu-item key="1">-->
    <!--<span>首页</span>-->
    <!--</a-menu-item>-->
    <!--</a-menu>-->
    <!--</a-layout-sider>-->

    <a-layout>

      <a-layout-content :style="{'minHeight':'1500px'}">

        <!--<a-row style="width: 1300px;margin: 0 auto;">-->
        <!--<a-card style="box-shadow: 0 4px 8px 0 rgba(28,31,33,0.1);background-color: #fff;-->
        <!--border-radius: 10px;">-->

        <!--{{currentProject.title}}-->

        <!--</a-card>-->

        <!--</a-row>-->


        <a-row style="width: 800px;margin: 0 auto;">
          <a-card v-for="(answer,index) in answerList" :key="index" :title="'答案' + (index + 1)" style="box-shadow: 0 4px 8px 0 rgba(28,31,33,0.1);background-color: #fff;
                border-radius: 10px;">
            <v-md-editor
              ref="editor"
              :value="answer.contentStr"
              mode="preview"
            ></v-md-editor>
            <!--<div  v-for="(answer,index) in answerList" :key="index">-->
            <!--<span v-html="answer.contentStr"></span>-->
            <!--</div>-->

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

        currentProject: {},
        answerList: []


      }
    },
    methods: {

      listAnswersClick(questionId) {
        let reload = {};
        reload.projectId = questionId;
        projectController.answerListAnswers(reload).then(res => {
          if (res.success) {
            this.answerList = res.data;
          }

        })
      },

      detailProject(id) {

        projectController.detailProject(id).then(res => {
          console.log('detailProject', res)
          this.currentProject = res.data;

        }).then(res => {
          this.listAnswersClick(this.$route.query.id);
        })
      },


    },
    mounted() {

      var query = this.$route.query;
      var id = query.id;
      var projectType = query.projectType;
      console.log(id, projectType);
      this.detailProject(id);
    }
  }
</script>

<style scoped>

</style>
