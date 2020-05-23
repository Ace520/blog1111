<template>
  <div id="global-layout" class="flex flex-column">
    <div
      class="jumbotron"
      :style="{background: 'url(' + $themeConfig.staticUrl + ($page.frontmatter.bg ? $page.frontmatter.bg : $themeConfig.defaultBg) + ')',backgroundSize: 'cover',backgroundPosition: 'center'}"
    >
      <header class="header flex-none">
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
      <DefaultGlobalLayout />
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
  created() {}
};
</script>
<style lang="stylus">
#global-layout {
  min-height: 101vh;
}

.jumbotron {
  height: 26rem;
  background-position: center !important;
  background-size: cover !important;
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
      color: $accentColor;
    }
  }

  .title {
    font-size: 22px;
    color: $accentColor;
    text-align: center;
    display: none;
  }
}

.main-content {
  margin-top: -7rem;
  background: #ffffff;
  min-height: 50rem;
}

@media (min-width: $mdMedia) {
  .header {
    .title {
      display: block;
    }
  }
}

.footer {
  height: 4rem;

  a {
    color: $accentColor;

    &:hover {
      color: $accentColor;
    }
  }
}
</style>
