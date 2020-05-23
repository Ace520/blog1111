(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{512:function(t,a,s){"use strict";s.r(a);var e=s(9),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://github.com/barryvdh/laravel-debugbar",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/barryvdh/laravel-debugbar"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"laravel-debugbar"}},[t._v("Laravel Debugbar")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://choosealicense.com/licenses/mit/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/barryvdh/laravel-debugbar/license.png",alt:"Packagist License"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/barryvdh/laravel-debugbar",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/barryvdh/laravel-debugbar/version.png",alt:"Latest Stable Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://packagist.org/packages/barryvdh/laravel-debugbar",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://poser.pugx.org/barryvdh/laravel-debugbar/d/total.png",alt:"Total Downloads"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("This is a package to integrate "),s("a",{attrs:{href:"http://phpdebugbar.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP Debug Bar"),s("OutboundLink")],1),t._v(" with Laravel.\nIt includes a ServiceProvider to register the debugbar and attach it to the output. You can publish assets and configure it through Laravel.\nIt bootstraps some Collectors to work with Laravel and implements a couple custom DataCollectors, specific for Laravel.\nIt is configured to display Redirects and (jQuery) Ajax Requests. (Shown in a dropdown)\nRead "),s("a",{attrs:{href:"http://phpdebugbar.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("the documentation"),s("OutboundLink")],1),t._v(" for more configuration options.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/973269/79428890-196cc680-7fc7-11ea-8229-189f5eac9009.png",alt:"Debugbar 3.3 Screenshot"}})]),t._v(" "),s("p",[t._v("Note: Use the DebugBar only in development. It can slow the application down (because it has to gather data). So when experiencing slowness, try disabling some of the collectors.")]),t._v(" "),s("p",[t._v("This package includes some custom collectors:")]),t._v(" "),s("ul",[s("li",[t._v("QueryCollector: Show all queries, including binding + timing")]),t._v(" "),s("li",[t._v("RouteCollector: Show information about the current Route.")]),t._v(" "),s("li",[t._v("ViewCollector: Show the currently loaded views. (Optionally: display the shared data)")]),t._v(" "),s("li",[t._v("EventsCollector: Show all events")]),t._v(" "),s("li",[t._v("LaravelCollector: Show the Laravel version and Environment. (disabled by default)")]),t._v(" "),s("li",[t._v("SymfonyRequestCollector: replaces the RequestCollector with more information about the request/response")]),t._v(" "),s("li",[t._v("LogsCollector: Show the latest log entries from the storage logs. (disabled by default)")]),t._v(" "),s("li",[t._v("FilesCollector: Show the files that are included/required by PHP. (disabled by default)")]),t._v(" "),s("li",[t._v("ConfigCollector: Display the values from the config files. (disabled by default)")]),t._v(" "),s("li",[t._v("CacheCollector: Display all cache events. (disabled by default)")])]),t._v(" "),s("p",[t._v("Bootstraps the following collectors for Laravel:")]),t._v(" "),s("ul",[s("li",[t._v("LogCollector: Show all Log messages")]),t._v(" "),s("li",[t._v("SwiftMailCollector and SwiftLogCollector for Mail")])]),t._v(" "),s("p",[t._v("And the default collectors:")]),t._v(" "),s("ul",[s("li",[t._v("PhpInfoCollector")]),t._v(" "),s("li",[t._v("MessagesCollector")]),t._v(" "),s("li",[t._v("TimeDataCollector (With Booting and Application timing)")]),t._v(" "),s("li",[t._v("MemoryCollector")]),t._v(" "),s("li",[t._v("ExceptionsCollector")])]),t._v(" "),s("p",[t._v("It also provides a Facade interface for easy logging Messages, Exceptions and Time")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[t._v("Installation")]),t._v(" "),s("p",[t._v("Require this package with composer. It is recommended to only require the package for development.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("composer require barryvdh/laravel-debugbar --dev\n")])])]),s("p",[t._v("Laravel uses Package Auto-Discovery, so doesn't require you to manually add the ServiceProvider.")]),t._v(" "),s("p",[t._v("The Debugbar will be enabled when "),s("code",[t._v("APP_DEBUG")]),t._v(" is "),s("code",[t._v("true")]),t._v(".")]),t._v(" "),s("blockquote",[s("p",[t._v("If you use a catch-all/fallback route, make sure you load the Debugbar ServiceProvider before your own App ServiceProviders.")])]),t._v(" "),s("h3",{attrs:{id:"laravel-without-auto-discovery"}},[t._v("Laravel without auto-discovery:")]),t._v(" "),s("p",[t._v("If you don't use auto-discovery, add the ServiceProvider to the providers array in config/app.php")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("Barryvdh\\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Debugbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("If you want to use the facade to log messages, add this to your facades in app.php:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Debugbar'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Barryvdh\\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Debugbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facade")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("The profiler is enabled by default, if you have APP_DEBUG=true. You can override that in the config ("),s("code",[t._v("debugbar.enabled")]),t._v(") or by setting "),s("code",[t._v("DEBUGBAR_ENABLED")]),t._v(" in your "),s("code",[t._v(".env")]),t._v(". See more options in "),s("code",[t._v("config/debugbar.php")]),t._v("\nYou can also set in your config if you want to include/exclude the vendor files also (FontAwesome, Highlight.js and jQuery). If you already use them in your site, set it to false.\nYou can also only display the js or css vendors, by setting it to 'js' or 'css'. (Highlight.js requires both css + js, so set to "),s("code",[t._v("true")]),t._v(" for syntax highlighting)")]),t._v(" "),s("h4",{attrs:{id:"copy-the-package-config-to-your-local-config-with-the-publish-command"}},[t._v("Copy the package config to your local config with the publish command:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("php artisan vendor:publish --provider"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Barryvdh\\Debugbar\\ServiceProvider"')]),t._v("\n")])])]),s("h3",{attrs:{id:"lumen"}},[t._v("Lumen:")]),t._v(" "),s("p",[t._v("For Lumen, register a different Provider in "),s("code",[t._v("bootstrap/app.php")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'APP_DEBUG'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Barryvdh\\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Debugbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("LumenServiceProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("To change the configuration, copy the file to your config folder and enable it:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'debugbar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"usage"}},[t._v("Usage")]),t._v(" "),s("p",[t._v("You can now add messages using the Facade (when added), using the PSR-3 levels (debug, info, notice, warning, error, critical, alert, emergency):")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("Debugbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDebugbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Error!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDebugbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("warning")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Watch out…'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDebugbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Another message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'mylabel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("And start/stop timing:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("Debugbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startMeasure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'render'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Time for rendering'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDebugbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopMeasure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'render'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDebugbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addMeasure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'now'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LARAVEL_START")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("microtime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDebugbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("measure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'My long operation'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something…")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Or log exceptions:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'foobar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Exception "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Debugbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addThrowable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("There are also helper functions available for the most common calls:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// All arguments will be dumped as a debug message")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$var1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$someString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$intValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start_measure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'render'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Time for rendering'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stop_measure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'render'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_measure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'now'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LARAVEL_START")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("microtime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("measure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'My long operation'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something…")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("If you want you can add your own DataCollectors, through the Container or the Facade:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("Debugbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addCollector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DebugBar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DataCollector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessagesCollector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'my_messages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Or via the App container:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$debugbar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'debugbar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$debugbar")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addCollector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DebugBar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DataCollector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MessagesCollector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'my_messages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("By default, the Debugbar is injected just before "),s("code",[t._v("</body>")]),t._v(". If you want to inject the Debugbar yourself,\nset the config option 'inject' to false and use the renderer yourself and follow http://phpdebugbar.com/docs/rendering.html")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$renderer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Debugbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getJavascriptRenderer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Note: Not using the auto-inject, will disable the Request information, because that is added After the response.\nYou can add the default_request datacollector in the config as alternative.")]),t._v(" "),s("h2",{attrs:{id:"enabling-disabling-on-run-time"}},[t._v("Enabling/Disabling on run time")]),t._v(" "),s("p",[t._v("You can enable or disable the debugbar during run time.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("\\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Debugbar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Debugbar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("disable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("NB. Once enabled, the collectors are added (and could produce extra overhead), so if you want to use the debugbar in production, disable in the config and only enable when needed.")]),t._v(" "),s("h2",{attrs:{id:"twig-integration"}},[t._v("Twig Integration")]),t._v(" "),s("p",[t._v("Laravel Debugbar comes with two Twig Extensions. These are tested with "),s("a",{attrs:{href:"https://github.com/rcrowe/TwigBridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("rcrowe/TwigBridge"),s("OutboundLink")],1),t._v(" 0.6.x")]),t._v(" "),s("p",[t._v("Add the following extensions to your TwigBridge config/extensions.php (or register the extensions manually)")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Barryvdh\\Debugbar\\Twig\\Extension\\Debug'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Barryvdh\\Debugbar\\Twig\\Extension\\Dump'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Barryvdh\\Debugbar\\Twig\\Extension\\Stopwatch'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("The Dump extension will replace the "),s("a",{attrs:{href:"http://twig.sensiolabs.org/doc/functions/dump.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("dump function"),s("OutboundLink")],1),t._v(" to output variables using the DataFormatter. The Debug extension adds a "),s("code",[t._v("debug()")]),t._v(" function which passes variables to the Message Collector,\ninstead of showing it directly in the template. It dumps the arguments, or when empty; all context variables.")]),t._v(" "),s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("categories")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n")])])]),s("p",[t._v("The Stopwatch extension adds a "),s("a",{attrs:{href:"http://symfony.com/blog/new-in-symfony-2-4-a-stopwatch-tag-for-twig",target:"_blank",rel:"noopener noreferrer"}},[t._v("stopwatch tag"),s("OutboundLink")],1),t._v("  similar to the one in Symfony/Silex Twigbridge.")]),t._v(" "),s("div",{staticClass:"language-twig extra-class"},[s("pre",{pre:!0,attrs:{class:"language-twig"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("stopwatch")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token other"}},[t._v("…some things that gets timed")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token ld"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endstopwatch")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token rd"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);