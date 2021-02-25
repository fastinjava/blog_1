<template>


  <a-layout>
    <a-layout-sider v-if="tocVisible"
                    breakpoint="xxl"
                    collapsed-width="0"
    >
      <a-menu theme="dark" mode="inline" :default-selected-keys="['0']">
        <a-menu-item v-for="(anchor,index) in titles"
                     :key="index"

        >
          <span @click="handleAnchorClick(anchor)">{{ anchor.title }}</span>
        </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <a-layout-sider v-if="!tocVisible"
                    breakpoint="xxl"
                    collapsed-width="0"
    >
      <a-menu theme="dark" mode="inline" :default-selected-keys="['5']" >
        <a-sub-menu v-for="(zhang,zhangIndex) in chapterList" :key="zhangIndex">
          <span slot="title"><span>{{zhang.chapterName }}</span></span>
          <a-menu-item v-for="(jie,jieIndex) in zhang.children" :key="zhangIndex + '_' + jieIndex"

                       @click="blogContentGet(jie.chapterId,'3')"
          >
            {{jie.chapterName }}
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <a-layout>

      <a-layout>


        <a-layout-content :style="{'minHeight':'1500px'}">
          <a-row>
              <a-card>
                <a-button @click="tocVisible = !tocVisible">
                  <a-icon type="swap"/>
                </a-button>

                  <span style="font-size: 24px;border: none">{{currentProject.title}}</span>
              </a-card>
          </a-row>
          <a-row style="height: 20px;"></a-row>

          <a-row>

          </a-row>

          <a-row>
            <a-col :sapn="20">
              <a-row style="width: 800px;margin: 0 auto;">
                <a-card style="box-shadow: 0 4px 8px 0 rgba(28,31,33,0.1);background-color: #fff;
                border-radius: 10px;">
                  <v-md-editor
                    ref="editor"
                    :value="blogContent"
                    mode="preview"
                    style="
                    min-height: 1500px;
                  "
                  ></v-md-editor>
                </a-card>
              </a-row>
            </a-col>
          </a-row>
        </a-layout-content>
      </a-layout>


    </a-layout>


  </a-layout>

</template>

<script>

  import * as projectController from './controller/projectController'


  export default {
    name: "",
    data() {
      return {
        visible:false,
        top: 0,
        tocVisible: false,
        currentProject: {},
        chapterList: [],
        titles: [],
        blogContent: '请点击左侧具体章节进行查看阅读!!!!'
      }
    },
    methods: {

      handleOk(e) {
        this.tocVisible = false;
      },
      handleCancel(e) {
        this.tocVisible = false;
      },
      blogContentGet(projectId, projectType) {
        projectController.blogContentGet(projectId, projectType).then(res => {
          console.log(res)
          this.blogContent = res.data;
        }).then((res) => {
          this.initTitles();
        });
      },

      detailProject(id) {

        projectController.detailProject(id).then(res => {
          console.log('detailProject', res)
          this.currentProject = res.data;
          if (res.data.projectType === '2') {
            this.chapterList = res.data.chapterDTOList[0]['children']
          }
        })
      },

      initTitles() {
        const anchors = this.$refs.editor.$el.querySelectorAll(
          ".v-md-editor-preview h1,h2,h3,h4,h5,h6"
        );
        const titles = Array.from(anchors).filter(
          (title) => !!title.innerText.trim()
        );

        if (!titles.length) {
          this.titles = [];
          return;
        }

        const hTags = Array.from(
          new Set(titles.map((title) => title.tagName))
        ).sort();

        this.titles = titles.map((el) => ({
          title: el.innerText,
          lineIndex: el.getAttribute("data-v-md-line"),
          indent: hTags.indexOf(el.tagName),
        }));
      },

      handleAnchorClick(anchor) {
        const {editor} = this.$refs;
        const {lineIndex} = anchor;

        const heading = editor.$el.querySelector(
          `.v-md-editor-preview [data-v-md-line="${lineIndex}"]`
        );

        if (heading) {
          editor.previewScrollToTarget({
            target: heading,
            scrollContainer: window,
            top: 60,
          });
        }
      },

    },
    mounted() {
      this.initTitles();
      var query = this.$route.query;
      var id = query.id;
      var projectType = query.projectType;
      console.log(id, projectType)
      this.detailProject(id);
    }
  }
</script>

<style scoped>
</style>
