<template>
  <div>
    <div class="container-p">
      <div class="index-title">开源项目</div>
      <div class="projects">
        <div v-for="(item,index) in $themeConfig.projects" :key="index">
          <div
            class="project-item flex items-center justify-center"
            :style="{background: 'url(' + $themeConfig.staticUrl + item.img + ')',backgroundSize: 'cover',backgroundPosition: 'center'}"
          >
            <div>
              <a :href="item.url" target="_blank">
                <h2 class="text-center">{{item.title}}</h2>
              </a>
              <div class="summary">{{item.summary}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-title">网站统计</div>
    <div class="counts">
      <div class="container mx-auto flex">
        <div class="counts-item flex-1">
          <div class="icon">
            <i class="iconfont icon-biaoqian-" />
          </div>
          <h1>{{postsLen}}</h1>
          <div>帖子 | POSTS</div>
        </div>
        <div class="counts-item flex-1">
          <div class="icon">
            <i class="iconfont icon-biaoqian-" />
          </div>
          <h1>{{$tag.list.length}}</h1>
          <div>标签 | TAG</div>
        </div>
        <div class="counts-item flex-1">
          <div class="icon">
            <i class="iconfont icon-biaoqian-" />
          </div>
          <h1>{{$topic.list.length}}</h1>
          <div>话题 | TOPIC</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  components: {},
  data() {
    return {
      postsLen: 0,
      cheatSheetLen: 0,
      poetry: {}
    };
  },
  created() {
    let postsLen = 0;
    let cheatSheetLen = 0;
    this.$site.pages.forEach(item => {
      if (item.id == "post") {
        postsLen++;
      } else if (item.id == "cheatsheet") {
        cheatSheetLen++;
      }
    });
    this.postsLen = postsLen;
    this.cheatSheetLen = cheatSheetLen;
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
.index {
  height: 28rem;
  width: 100%;
  color: #ffffff;

  img {
    max-width: 90%;
  }
}

.index-title {
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 3.5rem;
  color: $primaryColor;
  font-size: 1.6rem;
}

.projects {
  padding: 0 5rem;

  .project-item {
    margin-bottom: 4rem;
    height: 17rem;
    width: 100%;
    z-index: 1;
    border: 0 none;
    color: #ffffff;

    a {
      color: #ffffff;

      &:hover {
        text-shadow: 0 0 0.1em, 0 0 0.3em;
      }
    }

    .summary {
      font-size: 15px;
      font-weight: 200;
      line-height: 1.8;
      display: -webkit-box;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
    }
  }

  .project-item-left {
    flex-direction: column;
  }

  .project-item-right {
    flex-direction: column-reverse;
  }

  @media (min-width: $mdMedia) {
    .project-item-left {
      flex-direction: row;
    }

    .project-item-right {
      flex-direction: row;
    }
  }
}

.counts {
  background: $primaryColor;
  padding: 3rem 0;
  color: #ffffff;

  .counts-item {
    text-align: center;

    .icon {
      width: 5.5rem;
      height: 5.5rem;
      text-align: center;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 1rem 3rem rgba(13, 20, 49, 0.175);
      background: #ffffff;

      i {
        font-size: 1.5rem;
        color: $primaryColor;
      }
    }
  }
}
</style>