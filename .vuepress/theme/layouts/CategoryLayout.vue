<template>
  <div class="container-p">
    <div class="topics">
      <h1>话题</h1>
      <router-link
        :to="item.path"
        v-for="(item,index) in $topic.list"
        :key="index"
        class="tag-item"
      >{{item.name}}{{item.pages.length}}</router-link>
    </div>
    <div class="tags">
      <h1>标签</h1>
      <router-link
        :to="item.path"
        v-for="(item,index) in $tag.list"
        :key="index"
        class="tag-item"
      >{{item.name}}{{item.pages.length}}</router-link>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.tag-item {
  margin: 10px;
  display: -webkit-inline-box;
  display: inline-flex;
  border: 1px solid #eaecef;
  background: linear-gradient(120deg, #fff 65%, #f1f6f5 0);
  position: relative;
  overflow: hidden;
}
</style>