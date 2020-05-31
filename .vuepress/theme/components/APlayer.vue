<template>
  <aplayer
    :music="$page.frontmatter.audio[0]"
    :list="$page.frontmatter.audio.length>0 ? $page.frontmatter.audio : []"
  ></aplayer>
</template>

<script>
import Vue from "vue";
import Aplayer from "vue-aplayer";
export default {
  name: "APlayer",
  components: { Aplayer }
};
</script>
<style lang="stylus" scoped></style>
