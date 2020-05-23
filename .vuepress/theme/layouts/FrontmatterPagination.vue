<template>
  <div class="posts container-p">
    <div class="mb-4 posts-item" v-for="(item, index) in $pagination.pages" :key="index">
      <div class="flex desc items-center">
        <div v-if="item.frontmatter.date">{{item.frontmatter.date}}</div>
        <span v-if="item.frontmatter.topic" style="padding:0 0.5rem">/</span>
        <router-link
          v-if="item.frontmatter.topic"
          class="link"
          :to="'/topic/' + item.frontmatter.topic"
        >{{item.frontmatter.topic}}</router-link>
      </div>
      <div class="content">
        <router-link class="link title" :to="item.path">{{ item.title }}</router-link>
        <div class="flex items-center" v-if="item.frontmatter.tags">
          <router-link
            class="tag-item"
            v-for="(item1,index1) in item.frontmatter.tags"
            :key="index1"
            :to="'/tag/' + item1"
          >{{ item1 }}</router-link>
        </div>
      </div>
    </div>
    <div id="pagination">
      <Pagination />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Pagination } from "@vuepress/plugin-blog/lib/client/components";
export default {
  components: {
    Pagination
  },
  created() {}
};
</script>
<style lang="stylus" scoped>
.posts-item {
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.posts-item {
  .desc {
    line-height: 2.5em;
    font-size: 14px;
    color: #829ebb;
  }

  .title {
    font-size: 1.3em;
    font-weight: 300;
  }

  .tag-item {
    margin-right: 1.2em;
    margin-top: 0.7rem;
  }
}

@media (min-width: $mdMedia) {
  .posts-item {
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .tag-item {
      margin-right: 0;
      margin-left: 1.2em;
      margin-top: 0;
    }
  }
}
</style>