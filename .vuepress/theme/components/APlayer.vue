<template>
  <aplayer
    :music="{
          title: $page.frontmatter.audio.title ? $page.frontmatter.audio : $frontmatter.title,
          artist: $page.frontmatter.audio.artist ? $page.frontmatter.audio.artist : ' ',
          src: $themeConfig.staticUrl + $page.frontmatter.audio.src,
          pic: $themeConfig.staticUrl + ( $page.frontmatter.audio.pic ?  $page.frontmatter.audio.pic : $page.frontmatter.bg),
        }"
  ></aplayer>
</template>

<script>
import Vue from "vue";
import Aplayer from "vue-aplayer";
export default {
  components: { Aplayer }
};
</script>
<style lang="stylus" scoped></style>
