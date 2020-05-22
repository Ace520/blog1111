<template>
  <div class="container mx-auto posts">
    <div class="flex">
      <div class="flex-1">
        <div class="mb-4" v-for="(item, index) in $pagination.pages" :key="index">
          <div class="flex">
            <div
              class="posts-item-footer-item flex items-center"
              v-if="item.frontmatter.date"
            >{{item.frontmatter.date}}</div>
            <div class="posts-item-footer-item flex items-center" v-if="item.frontmatter.topic">
              <router-link
                class="link"
                :to="'/topic/' + item.frontmatter.topic"
              >{{item.frontmatter.topic}}</router-link>
            </div>
          </div>
          <div class="posts-item flex items-center justify-between">
             <router-link class="link posts-item-title" :to="item.path">{{ item.title }}</router-link>
              <div class="posts-item-footer">
                <div class="posts-item-footer-item flex items-center" v-if="item.frontmatter.tags">
                  <router-link
                    class="tag-item"
                    v-for="(item1,index1) in item.frontmatter.tags"
                    :key="index1"
                    :to="'/tag/' + item1"
                  >{{ item1 }}</router-link>
                </div>
              </div>
            </div>
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
  display: flex;
  flex-direction: column;

  .posts-item-title {
    line-height: 2.5rem;
  }
}

@media (min-width: $mdMedia) {
  .posts-item {
    flex-direction: unset;

    .posts-item-title {
      line-height: normal;
    }
  }
}
</style>