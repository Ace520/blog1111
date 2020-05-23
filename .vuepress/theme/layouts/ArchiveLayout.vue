<template>
  <div class="container-p">
    <h1>归档</h1>
    <div class="archives">
      <div v-for="(item,index) in items" :key="index" class="archives-item">
        <div>{{item.date}}</div>
        <router-link
          :to="item1.path"
          v-for="(item1,index1) in item.pages"
          :key="index1"
          class="tag-item"
        >{{item1.frontmatter.date}}{{item1.title}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      items: []
    };
  },

  created() {
    let arr = [];
    this.$site.pages.forEach(element => {
      if (element.frontmatter.date) {
        element.index = parseInt(element.frontmatter.date.replace(/-/g, ""));
        arr.push(element);
      }
    });
    function compare(obj1, obj2) {
      let val1 = obj1.index;
      let val2 = obj2.index;
      if (val1 < val2) {
        return 1;
      } else if (val1 > val2) {
        return -1;
      } else {
        return 0;
      }
    }
    let itemsSort = arr.sort(compare);
    let items = [];
    let dateArr = [];
    itemsSort.forEach(item => {
      let arr = item.frontmatter.date.split('-');
      let ym = arr[0] + "-" + arr[1];
      if (!items[ym]) {
        items[ym] = {
          date: ym,
          pages: []
        };
      }
      items[ym]["pages"].push(item);
    });
    this.items = Object.values(items);
    console.log(this.items);
  },
  methods: {}
};
</script>