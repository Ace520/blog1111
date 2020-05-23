<template>
  <div class="container-p">
    <h1>{{$frontmatter.title}}</h1>
    <router-link
      class="tag-item"
      v-for="(item,index) in $frontmatter.tags"
      :key="index"
      :to="'/tag/' + item"
    >{{ item }}</router-link>

    <router-link class="link" :to="'/topic/' + $frontmatter.topic">{{$frontmatter.topic}}</router-link>

    {{$frontmatter.date}}
    <Content />
    <Comment />
  </div>
</template>
<script>
import { Comment } from "@vuepress/plugin-blog/lib/client/components";
export default {
  components: {
    Comment
  }
};
</script>
<style lang="stylus" scoped></style>