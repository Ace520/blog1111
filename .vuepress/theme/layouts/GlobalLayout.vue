<template>
  <div id="global-layout" class="flex flex-column">
    <div
      class="jumbotron"
      :style="{background: 'url(' + $themeConfig.staticUrl + ($page.frontmatter.bg ? $page.frontmatter.bg : $themeConfig.defaultBg) + ')',backgroundSize: 'cover',backgroundPosition: 'center'}"
    >
      <header class="header flex-none">
        <div class="container mx-auto h-full flex items-center justify-between">
          <div class="flex items-center">
            <router-link class="title" to="/">{{ $site.title }}</router-link>
            <SearchBox />
          </div>
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
      <div class="jumbotron-dark"></div>
      <div class="slogan h-full w-full" v-if="dynamicSlogan">
        <div class="content" v-text="dynamicSlogan.content"></div>
        <span class="meta">
          《{{dynamicSlogan.origin.title}}》·
          <span v-text="dynamicSlogan.origin.author"></span>
        </span>
      </div>
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
import SearchBox from "@SearchBox";

export default {
  components: { DefaultGlobalLayout: GlobalLayout, SearchBox },
  data() {
    return {
      dynamicSlogan: undefined
    };
  },
  created() {
    // this.todayPoetry();
     console.log(this)
  },
  methods: {
    fetchToken() {
      return fetch("https://v2.jinrishici.com/token")
        .then(data => {
          return data.json();
        })
        .then(response => {
          window.localStorage.setItem("SEEKER_POETRY_TOKEN", response.data);
          return Promise.resolve(response.data);
        });
    },
    todayPoetry() {
      let token = window.localStorage.getItem("SEEKER_POETRY_TOKEN");
      if (token) {
        return this.fetchPoetry(token);
      } else {
        return this.fetchToken().then(token => {
          return this.fetchPoetry(token);
        });
      }
    },
    fetchPoetry(token) {
      fetch(
        "https://v2.jinrishici.com/one.json?X-User-Token=" +
          encodeURIComponent(token)
      )
        .then(data => {
          return data.json();
        })
        .then(response => {
          this.dynamicSlogan = response.data;
        });
    }
  }
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

  .jumbotron-dark {
    position: absolute;
    width: 100%;
    height: 13rem;
    margin-top: 13rem;
    background-image: linear-gradient(to bottom, transparent, $bgColor);
  }
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
      background-color: rgba(10, 10, 1, 0.2);
      border-radius: 1rem;
      padding: 0.3rem 0.9rem;
      font-size: 14px;
    }

    .nav-active {
      color: $accentColor;
    }
  }

  .title {
    font-size: 22px;
    color: #ffffff;
    text-align: center;
    display: none;
  }
}

.main-content {
  margin-top: -7rem;
  background: #ffffff;
  min-height: 50rem;
  box-shadow: 10px rgba(0, 0, 0, 0.05);
  z-index: 1;
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

.slogan {
  text-align: center;
  padding-top: 7.8rem;
  color: #ffffff;

  .content {
    font-size: 1.5em;
    line-height: 1.5em;
    margin-bottom: 0.5rem;
  }

  .meta {
    font-size: 14px;
  }
}
</style>
