<template>
  <div class="container-p">
    <h2>{{$frontmatter.title}}</h2>
    <div class="post-footer">
      <router-link
        v-if="$frontmatter.tags"
        class="tag-item item"
        v-for="(item,index) in $frontmatter.tags"
        :key="index"
        :to="'/tag/' + item"
      >{{ item }}</router-link>
      <span v-if="$frontmatter.topic" class="item span">/</span>
      <router-link
        v-if="$frontmatter.topic"
        class="link item"
        :to="'/topic/' + $frontmatter.topic"
      >{{$frontmatter.topic}}</router-link>
      <span v-if="$frontmatter.date" class="item span">/</span>
      <div class="item date">{{resolvePostDate($frontmatter.date)}}</div>
    </div>
    <div class="article">
      <Content />
    </div>
    <Comment />
  </div>
</template>
<script>
import Vue from "vue";
import dayjs from "dayjs";
import { Comment } from "@vuepress/plugin-blog/lib/client/components";
require("dayjs/locale/zh-cn");
export default {
  components: {
    Comment
  },
  created() {
    dayjs.locale("zh-cn");
  },
  methods: {
    resolvePostDate(date) {
      return dayjs(date).format("YYYY/MM/DD-dddd");
    }
  }
};
</script>
<style lang="stylus" scoped>
.tag-item {
  margin-right: 0.3em;
}

.container-p {
  padding-top: 0;
}

.post-footer {
  font-size: 14px;
  color: #829ebb;
  margin-bottom: 1.5rem;

  .item {
    margin-top: 1rem;
  }

  .link {
    padding-right: 0.5rem;
  }

  .span {
    display: none;
  }
}

@media (min-width: $mdMedia) {
  .post-footer {
    display: flex;
    align-items: center;

    .item {
      margin-top: 0;
    }

    .span {
      display: block;
      padding-right: 0.5rem;
    }
  }
}
</style>