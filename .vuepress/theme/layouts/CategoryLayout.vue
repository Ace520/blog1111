<template>
  <div class="container-p">
    <div class="topics">
      <h2>话题</h2>
      <ur>
        <li v-for="(item,index) in $topic.list" :key="index">
          <router-link :to="item.path" class="link">
            {{item.name}}
            <em>{{item.pages.length}}</em>
          </router-link>
        </li>
      </ur>
    </div>
    <div class="tags">
      <h2>标签</h2>
      <router-link :to="item.path" v-for="(item,index) in $tag.list" :key="index" class="tag-item">
        {{item.name}}
        <em>{{item.pages.length}}</em>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  created() {}
};
</script>
<style lang="stylus" scoped>
.container-p {
  padding-top: 0;
}

.tag-item {
  margin-right: 1.5em;
  margin-bottom: 1rem;
  font-size: 16px;
}

.topics li {
  line-height: 2;
  font-size: 16px;
}

em {
  font-size: 12px;
  color: #acce ntColor;
  background: #ccc;
  padding: 0 0.4rem;
  border-radius: 1rem;
}
</style>