<template>


  <a-layout>
    <a-layout-sider
      breakpoint="xxl"
      collapsed-width="0"
    >
      <a-menu theme="dark" mode="inline" :default-selected-keys="['5']">
        <a-sub-menu key="sub2" >
          <span slot="title"><span>Navigation Two</span></span>
          <a-menu-item key="5">
            Option 5
          </a-menu-item>
          <a-menu-item key="6">
            Option 6
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-content :style="{'minHeight':'1500px'}">
        <a-row>
          <a-col :sapn="24">
            <a-row style="width: 800px;margin: 0 auto">
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
    <a-layout-sider
      breakpoint="xxl"
      collapsed-width="0"
      :style="{backgroundColor:'#fff'}"
    >
    </a-layout-sider>

  </a-layout>

</template>

<script>
  export default {
    name: "",
    data() {
      return {
        titles: [],
        blogContent: '# 第一章 \n **三段提交协议 - 3PC（Three-PhaseCommit）**\n' +
          '\n' +
          '核心：在2pc的基础上增加了一个询问阶段（第一阶段），确认网络，避免阻塞，二三阶段就是上面的2pc\n' +
          '\n' +
          '三阶段提交协议是两阶段提交协议的改进版本。它通过超时机制解决了阻塞的问题，并且把两个阶段增加为三个阶段：\n' +
          '\n' +
          '询问阶段：协调者询问参与者是否可以完成指令，协调者只需回答是还是不是，而不需要做真正的操作，这个阶段超时导致中止\n' +
          '\n' +
          '准备阶段：如果在询问阶段所有的参与者都返回可以执行操作，协调者向参与者发送预执行请求，然后参与者写redo和undo日志，执行操作，但是不提交操作；如果在询问阶段任何参与者返回不能执行操作的结果，则协调者向参与者发送中止请求，这里的逻辑与两阶段提交协议的的准备阶段是相似的，这个阶段超时导致成功\n' +
          '\n' +
          '提交阶段：如果每个参与者在准备阶段返回准备成功，也就是预留资源和执行操作成功，协调者向参与者发起提交指令，参与者提交资源变更的事务，释放锁定的资源；如果任何一个参与者返回准备失败，也就是预留资源或者执行操作失败，协调者向参与者发起中止指令，参与者取消已经变更的事务，执行undo日志，释放锁定的资源，这里的逻辑与两阶段提交协议的提交阶段一致 \n' +
          '' +
          '' +
          '```\n' +
          'public interface ScpPenetrationMapper {\n' +
          '    int deleteByPrimaryKey(String serviceId);\n' +
          '\n' +
          '    int insert(ScpPenetrationServiceDO record);\n' +
          '\n' +
          '    int insertOrUpdate(ScpPenetrationServiceDO record);\n' +
          '\n' +
          '    int insertOrUpdateSelective(ScpPenetrationServiceDO record);\n' +
          '\n' +
          '    int insertSelective(ScpPenetrationServiceDO record);\n' +
          '    }\n' +
          '```'
      }
    },
    methods:{


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
    mounted(){
        this.initTitles();
    }
  }
</script>

<style scoped>
</style>
