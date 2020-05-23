<template>
  <div class="container-p">
    <h2>归档</h2>
    <div class="archives">
      <div v-for="(item,index) in items" :key="index" class="archives-item">
        <h3>{{item.date}}</h3>
        <div class="archives-item-1" v-for="(item1,index1) in item.pages" :key="index1">
          <router-link :to="item1.path" class="link">
            {{item1.frontmatter.date}}
            <span style="padding:0 0.8rem">/</span>
            {{item1.title}}
          </router-link>
        </div>
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
      let arr = item.frontmatter.date.split("-");
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
<style lang="stylus" scoped>
.container-p {
  padding-top: 0;
}

.archives-item-1 {
  line-height: 2.5;
}
</style>