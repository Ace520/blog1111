<template>
  <div id="global-layout" class="flex flex-column">
    <div class="jumbotron">
      <header
        class="header flex-none"
        :style="{background: 'url(' + $themeConfig.staticUrl + $page.frontmatter.bg + ')',backgroundSize: 'cover',backgroundPosition: 'center'}"
      >
        <div class="container mx-auto h-full flex items-center justify-between">
          <router-link class="title" to="/">{{ $site.title }}</router-link>
          <div class="nav">
            <router-link
              :class="item.layouts.indexOf($page.frontmatter.layout) > -1 ? 'nav-active':''"
              v-for="(item, index) in $themeConfig.nav"
              :key="index"
              :to="item.link"
            >{{ item.text }}</router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="flex-1 main-content container mx-auto">
      <div class="container-p">
        <DefaultGlobalLayout />
      </div>
    </div>
    <footer class="footer flex-none">
      <div class="container mx-auto h-full flex items-center justify-center">
        <a href="https://github.com/Ace520">Github</a> · Powered by VuePress
      </div>
    </footer>
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";

export default {
  components: { DefaultGlobalLayout: GlobalLayout },
  created() {
    console.log(this.$page);
  }
};
</script>
<style lang="stylus">
#global-layout {
  min-height: 101vh;
}

.jumbotron {
  height: 20rem;
  // background: linear-gradient(180deg, #2c3e50, #bdc3c7);
}

.header {
  width: 100%;
  height: 4rem;
  position: absolute;
  background: transparent;

  .nav {
    a {
      color: #ffffff;
      margin-left: 1rem;
    }

    .nav-active {
      color: $primaryColor;
    }
  }

  .title {
    font-size: 22px;
    color: $primaryColor;
    text-align: center;
    display: none;
  }
}

.main-content {
  margin-top: -7rem;
  background: #ffffff;
  min-height: 50rem;
}

.container-p {
  padding: 1rem;
}

@media (min-width: $mdMedia) {
  .header {
    .title {
      display: block;
    }
  }

  .container-p {
    padding: 2rem;
  }
}

.footer {
  height: 4rem;

  a {
    color: $primaryColor;

    &:hover {
      color: $primaryColor;
    }
  }
}
</style>
