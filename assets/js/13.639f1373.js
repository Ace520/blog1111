(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{513:function(e,t,a){"use strict";a.r(t);var n=a(9),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Any markdown file that contains a YAML front matter block will be processed by "),a("a",{attrs:{href:"https://github.com/jonschlinkert/gray-matter",target:"_blank",rel:"noopener noreferrer"}},[e._v("gray-matter"),a("OutboundLink")],1),e._v(". The front matter must be the first thing in the markdown file and must take the form of valid YAML set between triple-dashed lines. Here is a basic example:")]),e._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[e._v("---")]),e._v("\ntitle: Blogging Like a Hacker\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[e._v("lang: en-US\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")])]),e._v("\n")])])]),a("p",[e._v("Between these triple-dashed lines, you can set predefined variables (see "),a("a",{attrs:{href:"#predefined-variables"}},[e._v("below")]),e._v(" for a reference), or even create custom ones of your own. These variables will then be available to you to access using "),a("code",[a("RouterLink",{attrs:{to:"/_posts/global-computed.html#frontmatter"}},[e._v("$frontmatter")])],1),e._v(" at the rest of the page, plus all custom and theming components.")]),e._v(" "),a("p",[e._v("::: tip\nFront matter variables are "),a("strong",[e._v("optional")]),e._v(" in VuePress.\n:::")]),e._v(" "),a("h2",{attrs:{id:"alternative-front-matter-formats"}},[e._v("Alternative Front Matter Formats")]),e._v(" "),a("p",[e._v("In addition, VuePress also supports JSON or "),a("a",{attrs:{href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"}},[e._v("TOML"),a("OutboundLink")],1),e._v(" front matter.")]),e._v(" "),a("p",[e._v("JSON front matter needs to start and end in curly braces:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('---\n{\n  "title": "Blogging Like a Hacker",\n  "lang": "en-US"\n}\n---\n')])])]),a("p",[e._v("TOML front matter needs to be explicitly marked as TOML:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('---toml\ntitle = "Blogging Like a Hacker"\nlang = "en-US"\n---\n')])])]),a("h2",{attrs:{id:"predefined-variables"}},[e._v("Predefined Variables")]),e._v(" "),a("h3",{attrs:{id:"title"}},[e._v("title")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("h1_title || siteConfig.title")])])]),e._v(" "),a("p",[e._v("Title of current page.")]),e._v(" "),a("h3",{attrs:{id:"lang"}},[e._v("lang")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("en-US")])])]),e._v(" "),a("p",[e._v("Language of current page.")]),e._v(" "),a("h3",{attrs:{id:"description"}},[e._v("description")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("siteConfig.description")])])]),e._v(" "),a("p",[e._v("Description of current page.")]),e._v(" "),a("h3",{attrs:{id:"layout"}},[e._v("layout")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("Layout")])])]),e._v(" "),a("p",[e._v("Set the layout component of the current page.")]),e._v(" "),a("h3",{attrs:{id:"permalink"}},[e._v("permalink")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("siteConfig.permalink")])])]),e._v(" "),a("p",[e._v("Refer to: "),a("RouterLink",{attrs:{to:"/_posts/permalinks.html"}},[e._v("Permalinks")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"metatitle"}},[e._v("metaTitle")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("`${page.title} | ${siteConfig.title}`")])])]),e._v(" "),a("p",[e._v("Override the default meta title.")]),e._v(" "),a("h3",{attrs:{id:"meta"}},[e._v("meta")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("array")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("Specify extra meta tags to be injected:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" description\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" hello\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" keywords\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" super duper SEO\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")]),e._v("\n")])])]),a("h2",{attrs:{id:"predefined-variables-powered-by-default-theme"}},[e._v("Predefined Variables Powered By Default Theme")]),e._v(" "),a("h3",{attrs:{id:"navbar"}},[e._v("navbar")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("See: "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#disable-the-navbar"}},[e._v("Default Theme Config > Disable the Navbar")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"sidebar"}},[e._v("sidebar")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("boolean|'auto'")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("See: "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#sidebar"}},[e._v("Default Theme Config > Sidebar")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);