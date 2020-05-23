<template>
  <div>
    <div>
      <a href="https://github.com/Ace520">github</a>
    </div>
    <div class="container-p">
      <Content />
      <Comment />
    </div>
  </div>
</template>
import { Comment } from "@vuepress/plugin-blog/lib/client/components";
export default {
  components: {
    Comment
  }
};
<style lang="stylus" scoped></style>