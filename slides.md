---
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 4
title: Cutting Edge Frontend Technologies
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>Cutting Edge </span>
  <span>Frontend Technologies </span>
</div>
<div text-xl mt10 forward:delay-300 v-click="1">Shao Yan Ze (Kyle Ricardo)</div>
</h1>

<div abs-br mx-10 my-11 flex="~ col gap-4 items-end" text-left v-click="1">
  <span>OCBC Group Engineering</span>
  <div text-xs opacity-75 mt--4>Jul. 29th 2024</div>
  <!-- <img src="/frontend-nation.svg" w-35 /> -->
</div>

<!--
大家好！很高兴能做这次技术分享。今天的主题是聊一聊前端技术。

[Click] 更确切地说，是前沿前端技术。

近些年前端技术发展迭代飞快，有些东西还没来得及学习，可能就被淘汰掉了。

所以想要提高生产力，我们必须紧跟时代的步伐，让前沿技术给我们带来便利。
-->

---
layout: center
class: text-center
glowX: 50
glowY: 100
title: What is cutting edge?
---

<h1 important-text-5xl>What is cutting edge?</h1>

<div text-white:50 text-2xl v-click>
Technologies that are at the forefront of current trends and advancements, representing the <span text-yellow2 v-mark.yellow.underline.delay300="2">latest</span> and <span text-lime2 v-mark.lime.underline.delay700="2">most advanced</span> stage in development
</div>

<!--
在进入主题之前呢，我们首先了解两个概念。在英文中，Cutting-Edge是什么？也就是说，什么是『前沿』？

[Click]它指的是当前技术发展中的[Click]最先进、最领先的部分。

这些技术已经经过了一定的测试和验证，虽然非常新，但已经有一定的稳定性和实用性。
-->

---
layout: center
class: text-center
glowX: 50
glowY: 100
title: What is bleeding edge?
---

<div font-hand bold absolute rotate--4 left-124 top-40 text-3xl text-red delay-1200 v-click="3">You may get hurt by using it</div>

<h1 important-text-5xl>What is <span v-mark.red.circle.delay200="3">bleeding</span> edge?</h1>

<div text-white:50 text-2xl v-click>
Technologies or products that are <span text-yellow2 v-mark.yellow.underline.delay300="1">so new</span> and <span text-lime2 v-mark.lime.underline.delay700="1">innovate</span> <br>that they <span text-red v-mark.red.underline.delay300="2">have not</span> been widely tested or used
</div>

<!--
还有一个概念就是Bleeding-edge。往往被翻译为『尖端』。那么什么是『尖端』呢？

[Click]指的是比“前沿”技术更进一步的技术，几乎处于开发、试验阶段。

[Click]这些技术非常新，甚至可能尚未完全稳定或广泛应用。创新性极高，但伴随的风险也较大。

[Click]注意『Bleeding』这个词，意味着你在使用它时，也可能会因此而受伤，流血。很形象的单词。

我们知道，银行的业务主要还是以稳定为主，尖端技术可能可以极大幅度提高生产力，但也许伴随着银行无力承担的高风险。

我们作为技术人员，可以尝试去了解这些尖端技术的背景，但真正用于生产的，还得是虽然新但也经过市场验证、久经考验的技术。
也就是下面会讲到的前沿技术。
-->

---
glowHue: 100
class: flex flex-col items-center justify-center
title: Vite
---

<div text-center absolute left-1 right-1 transition-all duration-400 op75 ease-in-out :class="$clicks === 0 ? 'scale-250 bottom-50%' : 'bottom-5'">
<span op50>https://</span>vitejs.dev
</div>

<div i-logos-vitejs text-5em mt--10 mb2 />
<h1 v-click forward:delay-400 text-center important-text-5xl font-800 important-leading-1.1em>Next Generation<br><span text-purple>Frontend Tooling</span></h1>
<div v-click text-lg op75>
"A build tool that aims to provide a faster and leaner development experience for modern web projects."
</div>

<!--
那么首当其冲的，就是我们的Vite ——
[Click]下一代的前端工具链。

[Click]它是一个构建工具，旨在为现代Web项目提供更快、更精简的开发体验。
-->

---

# What is Vite?

<div op70 v-click>French word for "quick", pronounced <code>/vɪt/</code>, like "veet"</div>

<div grid="~ cols-2 gap4" my8>
  <div flex="~ col gap2">
    <div v-click>A dev server</div>
    <div v-click flex="~ col gap4" pl4 mt6>
      <div><div flex="~ items-center gap2"><div i-logos-esbuild /><span text-yellow>Esbuild</span> under the hood</div></div>
      <div>Using native ES modules</div>
      <div>Blazing fast Hot Module Replacement(HMR)</div>
      <div><div flex="~ items-center gap2"><div i-logos-typescript-icon /><span text-blue>Typescript</span> out of the box</div></div>
    </div>
  </div>
  <div flex="~ col gap2">
    <div v-click>A build command</div>
    <div v-click flex="~ col gap4" pl4 mt6>
      <div><div flex="~ items-center gap2"><div i-logos-rollup /><span text-red>Rollup</span> under the hood</div></div>
      <div>Flexible plugin API</div>
      <div>Contributes Vite's success in the ecosystem</div>
      <div><div flex="~ items-center gap2">Much faster with <img src="/lightning-down.svg" w4 /><span text-orange>Rolldown</span><sup op50 italic font-serif>Coming soon</sup></div></div>
    </div>
  </div>
</div>

<!--
我相信在座的各位对Vite也不陌生了，但是咱们行里目前生产上暂时还没有任何一个项目是基于Vite的，我也感到有点惋惜。
因为Vite虽然是新技术，但也没那么新了。Vite第一个正式版，2.0版本是在2021年2月16日发布的，距今已过去快4年时间，而Vite的大版本号已来到5。
目前GitHub上的前端项目或框架，基本都是基于Vite进行构建，Webpack可以说已经被淘汰，但已经完成了自己的历史使命。
React官方网站早已不推荐使用Create-React-App这个脚手架（它是基于webpack），而是推荐基于Vite进行构建。同时也包括Vue，Svelte，Solid等框架，都将Vite作为脚手架的基础。

我这里还是简要介绍一下Vite。

[Click]首先是它的读音。我觉得作为专业技术人员，把工具的名字读对，还是很重要的。

[Click]首先它是一个开发服务器。

[Click]
底层是esbuild，一个go语言开发的构建工具。
使用了原生ES模块，极速的热模块替换，开箱即用的TypeScript。

[Click]同时也是一个构建命令。

[Click]
底层是Rollup，它有着非常灵活的插件API，这也是为什么Vite的生态能如此繁荣的原因。
后续这个底层将会被Rolldown替换，Rolldown是尤雨溪正在开发的一个完全兼容Rollup的打包工具。
Rolldown使用Rust完全重写，速度将会快上许多。
-->

---

# Why Vite?

<h2 v-click op70>The Problem: Slow server start</h2>

<div grid="~ cols-2 gap4" my8>
<img v-click src="/bundle-based-dev-server.svg" rounded-3xl bg-teal bg-op5 />
<img v-click src="/native-esm-based-dev-server.svg" rounded-3xl bg-teal bg-op5 />
</div>

<div v-click>Vite only needs to transform and serve source code on demand, as the browser requests it.</div>

<!--
那么我们为什么用Vite？

[Click]这里有两个问题，第一个就是服务器启动缓慢。

[Click]我们看一下这张图，它是基于打包的开发服务器。说的就是你，webpack。
当冷启动开发服务器时，基于打包器的方式启动必须优先抓取并构建你的整个应用，然后才能提供服务。

[Click]再来看看这张图，是基于ESM的开发服务器。也就是我们现在说的Vite。

Vite 在一开始就将应用中的模块区分为 依赖 和 源码 两类

依赖 大多为在开发时不会变动的纯 JavaScript，Vite将使用esbuild预构建这些依赖。

源码 通常包含一些并非直接是 JavaScript 的文件，需要转换（例如 JSX，CSS 或者 Vue/Svelte 组件），时常会被编辑。同时，并不是所有的源码都需要同时被加载（例如基于路由拆分的代码模块）。

Vite 以 原生 ESM 方式提供源码。这实际上是让浏览器接管了打包程序的部分工作：

[Click]Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。
-->

---

# Why Vite?

<h2 v-click op70>The Problem: Slow updates</h2>

<div flex="~ col gap2" mt4>
<div v-click>
  <div text-red>Bundler based build setup</div>
  <div op50>Rebuild the whole bundle</div>
</div>
<div v-click>
  <div text-orange>Invalidate part of its module graph</div>
  <div op50>Reconstructing the bundle can be expensive, and reloading the page blows away the current state of the application</div>
</div>
<div v-click>
  <div text-lime>Hot Module Replacement (HMR)</div>
  <div op50>Even HMR update speed deteriorates significantly as the size of the application grows</div>
</div>
<div v-click>
  <div text-green>HMR over native ESM</div>
  <div op50>HMR updates consistently fast regardless of the size of your application</div>
</div>
</div>

<div v-click mt4>"Once you experience how <span italic>fast</span> Vite is, we highly doubt you'd be willing to put up with bundled development again."</div>

<!--
[Click]另一个问题就是更新缓慢。

我们可以看一眼打包工具的历史与迭代进程。

[Click]最开始是基于打包启动时，当源文件被修改后，重新构建整个包是低效的，原因显而易见：更新速度会随着应用体积的增加而线性下降。

[Click]一些打包器的开发服务器将构建内容存入内存，这样它们只需要在文件更改时使模块图的一部分失活，但它也仍需要整个重新构建并重载页面。这样代价很高，并且重新加载页面会消除应用的当前状态，为调试增加诸多不便。

[Click]后来打包器支持了动态模块热替换（HMR）：允许一个模块 “热替换” 它自己，而不会影响页面其余部分。这大大改进了开发体验 —— 然而，在实践中我们发现，即使采用了 HMR 模式，其热更新速度也会随着应用规模的增长而显著下降。

[Click]在 Vite 中，HMR 是在原生 ESM 上执行的。当编辑一个文件时，Vite 只需要精确地使已编辑的模块与其最近的 HMR 边界之间的链失活（大多数时候只是模块本身），使得无论应用大小如何，HMR 始终能保持快速更新。

Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。

[Click]官网上说，一旦你体验到 Vite 的神速，你是否愿意再忍受像曾经那样使用打包器开发就要打上一个大大的问号了。
-->

---

# Why is Vite so <span font-hand text-green scale-110 ml1 inline-block>fast?</span>

<div flex="~ gap8 items-center" mt8>
  <div v-click flex="~ col gap2 items-center">
    <div flex="~ gap2 items-center" text-yellow text-5xl><div i-logos-esbuild />esbuild</div>
    <div flex="~ gap2 items-center"><span text-green>10-100x</span> faster than<div i-logos-webpack /><span text-sky>Webpack</span></div>
    <div flex="~ gap2 items-center">Written in <div i-logos-go /><span text-sky></span></div>
  </div>
  <div v-click i-ph-arrow-right-duotone />
  <div v-after flex="~ col gap2 items-center">
    <div flex="~ gap2 items-center" text-red text-5xl><div i-logos-turbopack-icon />Turbopack</div>
    <div flex="~ gap2 items-center"><span text-green>~700x</span> faster than<div i-logos-webpack /><span text-sky>Webpack</span></div>
    <div flex="~ gap2 items-center"><span text-green>"10x"</span> faster than<div i-logos-vitejs /><span text-purple>Vite</span></div>
    <div flex="~ gap2 items-center">Written in <img src="/ferris.svg" w-8 /><span text-orange>Rust</span></div>
  </div>
</div>

<div flex="~ gap8 items-center" mt8>
  <div v-click flex="~ col gap2 items-center">
    <div flex="~ gap2 items-center" text-yellow text-5xl><div i-logos-babel /></div>
    <div op50>Very slow</div>
    <div flex="~ gap2 items-center">Written in <div i-logos-javascript /><span text-yellow>JavaScript</span></div>
  </div>
  <div v-click i-ph-arrow-right-duotone />
  <div v-after flex="~ col gap2 items-center">
    <div flex="~ gap2 items-center" text-red text-5xl><div i-logos-swc /></div>
    <div flex="~ gap2 items-center"><span text-green>20-70x</span> faster than<div i-logos-babel /></div>
    <div flex="~ gap2 items-center">Written in <img src="/ferris.svg" w-8 /><span text-orange>Rust</span></div>
  </div>
  <div v-click i-ph-arrow-right-duotone />
  <div v-after flex="~ col gap2 items-center">
    <div flex="~ gap2 items-center" text-red text-5xl><img src="/lightning-down.svg" w-10 /><span text-orange>Rolldown</span></div>
    <div flex="~ gap2 items-center"><span text-green>3x</span> faster than<div i-logos-swc /></div>
    <div flex="~ gap2 items-center">Written in <img src="/ferris.svg" w-8 /><span text-orange>Rust</span></div>
  </div>
</div>

<div font-hand bold absolute rotate--4 left-74 bottom-18 text-3xl text-orange delay-600 v-click="7">Rust</div>
<div font-hand bold absolute rotate--4 left-118 bottom-18 text-3xl text-orange delay-2000 v-click="7">Rust</div>
<div v-click="6" mt16>"If a program can be written in <span v-mark.linethrough.orange="7">C</span>, it will be written in <span v-mark.linethrough.orange.delay1000="7">C</span> eventually."</div>

<!--
接下来我们聊聊为什么Vite可以这么快。

[Click]我们知道，Vite作为开发服务器，底层用的是esbuild，一个用Go语言编写的构建工具，速度极快。其构建速度可达Webpack5的100倍以上。

[Click]去年Webpack原班人马搞了个继任者Turbopack出来，号称比Webpack快接近700倍，同时比Vite还要快10倍。这下Vite的作者尤雨溪坐不住了，发了篇长文指责Turbopack不负责任虚假宣传。其当然没有它宣传的那么厉害，但比Vite快也是不争的事实，这要归功于Rust语言的高性能。尤雨溪也说，会将Turbopack纳入考量范围，如果后续表现的确优于esbuild，经过权衡取舍，或许会将其作为Vite底层。

[Click]Vite作为打包工具，底层用的是Rollup，而Rollup的底层则用到了babel这个编译器。bable是用JavaScript编写，其速度很慢，已经受到很多诟病。

[Click]Rollup从版本4开始，已经逐渐将底层替换为Rust编写的SWC，这个编译器在单核CPU上可以比babel快20倍，在四核CPU上则可以快70倍以上。很多依赖babel的库，也在渐渐迁移到SWC以获得更好的性能表现。babel也在渐渐成为时代的眼泪。

[Click]而尤雨溪正在开发的Rolldown，也是使用Rust编写，基于更加底层的OXC库，速度可以比SWC还要快3倍以上，不要小看这3倍，也就是说可以比babel快200倍以上了。由于其API基本完全兼容Rollup，后续取代Rollup也只是时间问题罢了。

[Click]发现一个问题没有？以前有句话，说的是能用C写的程序最后终将被C写。[Click]而现在，C成为了时代的眼泪，Rust已经是一颗耀眼的新星。
-->

---
glowHue: 180
class: flex flex-col items-center justify-center
title: ky
---

<div text-center absolute left-1 right-1 transition-all duration-400 op75 ease-in-out :class="$clicks <= 0 ? 'scale-250 bottom-50%' : 'bottom-5'">
<span op50>https://</span>github.com/sindresorhus/ky
</div>

<img src="/ky-logo-white.svg" w-40 text-5em mt--10 />
<h1 v-click forward:delay-400 text-transparent text-center important-text-5xl font-800 important-leading-1.2em style="background: -webkit-linear-gradient(120deg, #ffccca 30%, #f1423d);-webkit-background-clip: text;">Delightful<br>HTTP Requests</h1>
<div v-click text-xl op75>
"Tiny & elegant JavaScript HTTP client based on the Fetch API"
</div>

<!--
好，我们接下来聊聊网络请求。这里要介绍的是ky。

[Click]愉快的HTTP请求

[Click]一个新的，小巧优雅的，基于fetch的HTTP请求库。
-->

---

# Why ky over fetch?

<v-clicks flex="~ col gap2">

- Simpler API
- Method shortcuts (`ky.post()`)
- Treats non-2xx status codes as errors (after redirects)
- Retries failed requests
- JSON option
- Timeout support
- URL prefix option
- Instances with custom defaults
- Hooks
- TypeScript niceties (e.g. `.json()` resolves to `unknown`, not `any`; `.json<T>()` can be used too)

</v-clicks>

<!--
我看到现在已经有一些项目用的是原生的fetch了，那么为什么不试试这个基于fetch的库呢？有很多优势。

[Click]更简洁的API

[Click]http method快捷方式，跟axios类似

[Click]可以把非2xx开头的状态码视为错误

[Click]失败请求自动重试

[Click]JSON自定义序列号和反序列化配置

[Click]支持超时

[Click]支持URL前缀配置

[Click]可以使用自定义的默认配置来创建新实例

[Click]自定义请求生命周期钩子，包括beforeRequest, beforeRetry, beforeError, afterResponse等，类似于axios的interceptor，但我觉得更细粒度一些。

[Click]TypeScript的便利性，.json()方法返回的类型是unknown而不是any，这样会强制让你在使用它之前先做类型判断或类型断言，保证了安全性。.json()方法还支持泛型，可以方便地将返回值类型设定为你定义好的类型。
-->

---

# Why ky over fetch?

<div grid="~ cols-2 gap4">
  <div flex="~ col gap2">
    <div>Using plain fetch</div>

```ts
class HTTPError extends Error {}

const response = await fetch('https://example.com', {
  method: 'POST',
  body: JSON.stringify({ foo: true }),
  headers: {
    'content-type': 'application/json'
  }
})

if (!response.ok) {
  throw new HTTPError(`Fetch error: ${response.statusText}`)
}

const json = await response.json()

console.log(json)
// => `{data: '🦄'}`
```

  </div>
  <div flex="~ col gap2">
    <div>Using ky</div>

```ts
import ky from 'ky'

const json = await ky.post('https://example.com', {
  json: { foo: true }
}).json()

console.log(json)
// => `{data: '🦄'}`
```

  </div>
</div>

<!--
这里可以看一下代码的对比。左边是只用fetch，右边是使用ky。

可以看到，代码简洁了非常多，不用写那么多样板代码。
-->

---

# Why ky over axios?

<v-clicks flex="~ col gap4" mt8>

- Smaller bundle size (ky <span text-green>3.3KB</span> gzipped, axios <span text-yellow>11.7KB</span> gzipped)
- ESM first design
- Built-in retries, timeouts, and hooks
- Supports Readable Streams out of the box
- TypeScript out of the box

</v-clicks>

<!--
前端开发应该对axios这个库非常熟悉了，可以说提到网络请求，都绕不开这个库。那么有什么理由让我们转而使用ky呢？

[Click]最大的因素，我觉得属于包大小，可以看到，ky的包体积显著小于axios，在项目依赖越来越多的今天，减小包体积是一项很重要的优化工作。在保证开发者和用户体验的情况下，能用体积小的包，就尽量要用体积小的，能用内建函数实现的功能，尽量不引入第三方库。

那么肯定有人要说，为什么不直接用fetch呢，包体积直接为0不好么？注意我说的是保证开发者和用户体验情况下。使用ky可以比使用fetch带来好很多的开发者体验，实际上也是一种权衡取舍。

[Click]再来说说其他几个点。ky是ESM优先的设计。作为对比的是axios用的是CommonJS。ESM优先的设计，好处在于对于现代浏览器的支持更好，更高效，在打包方面可以获得更好的效果（动态导入，tree-shaking）。ESM是一种趋势，CommonJS虽然使用非常广泛，但已经走在淘汰的路上，因为ESM有着更好的性能，也能更方便地兼容JS社区最新的标准和最佳实践。

[Click]ky有内建的重试机制、超时机制和钩子，可以很方便地使用。

[Click]ES的新标准Readable Stream可以开箱即用，无需手动编写一大堆适配器。

[Click]TypeScript开箱即用，由于整个库都是用ts写的，所以对ts的支持非常好，这个各位试试就能有体会。

对于前端HTTP的请求，我相信各位都有自己的理解和习惯，每个工具也有自己的长处和短处，在此介绍ky目的也只是拓宽一下大家的视野。各位当然可以继续使用自己趁手的工具，比如fetch或axios，但我建议大家动手试试ky，应该会爱上它的。
-->

---
class: flex flex-col items-center justify-center
title: SWR
---

<div text-center absolute left-1 right-1 transition-all duration-400 op75 ease-in-out :class="$clicks <= 0 ? 'scale-250 bottom-50%' : 'bottom-5'">
<span op50>https://</span>swr.vercel.app
</div>

<div i-logos-swr invert text-4em mt--10 mb4 />
<h1 v-click forward:delay-400 text-transparent text-center important-text-5xl font-800 important-leading-1.2em text-white><span op50>React Hooks</span><br>for Data Fetching</h1>
<div v-click text-xl op75 text-center>
"With SWR, components will get a stream of data updates <span v-mark.lime.delay1000="2">constantly</span> and <span v-mark.lime.delay1600="2">automatically</span>.<br>
And the UI will be always <span v-mark.green.delay2500="2">fast</span> and <span v-mark.green.delay3000="2">reactive</span>."
</div>

<!--
接下来要介绍的才是重点，即SWR。

大家看这个图标，可能跟刚刚看到的SWC有点像。没错，是很像，而且是一家公司出的，那就是Vercel。

[Click]它是一系列用于数据请求的React Hooks。

[Click]用SWR来请求数据，组件可以持续自动更新，UI也可以保持迅速响应。
-->

---

# Why you should not directly use `useEffect` <br>to fetch data from API in React

Especially using redux dispatch in `useEffect`

<div pt6 />

<v-clicks flex="~ col gap-8">

- Most network requests should be sent in the <span text-lime2>Event Handler</span>
- First screen data can be rendered directly on the server side <span text-green2>(SSR)</span>
- "Render as you fetch" - based on <span text-teal2>Suspense</span>
- "Fetch on render" - use <span text-sky>SWR</span> or <span text-sky>React Query</span> instead
- Redux should be used for internal state management, not external

</v-clicks>

<!--
我们先阐释一个问题：为什么你不应该在React里直接使用`useEffect`来从API获取数据？特别是在`useEffect`里使用redux的dispatch

[Click]绝大部分触发网络请求的原因都是用户操作，应该在 Event Handler 中发送网络请求

[Click]大部分时候，首屏需要的数据可以通过服务端渲染 SSR 直出、无需在客户端额外发送网络请求

[Click]即使需要客户端在首屏获取数据，未来 React 和社区维护的库会提供基于 Suspense 的数据请求 Pattern、实现「Render as your fetch」

[Click]即使在使用「Fetch on render」的 Pattern，也应该直接使用第三方库如 SWR 或 React Query，而不是直接使用 useEffect

[Click]Redux这类状态管理工具，一般是用来管理应用内部的全局状态的，而不应该管理外部的状态。用来获取外部的API数据并存储到Redux然后connect到组件，本质上是一种极其错误的做法，可以说完全没有理解Redux是干嘛的。甚至很多项目引入Redux这样一个庞大的库，并完全将其用于获取外部API数据，丝毫没有用于管理内部全局状态，这种用法更是令人匪夷所思。
-->

---
class: grid grid-cols-2 gap-4 items-center justify-center
title: Start from sending a simple request
---

<div flex="~ col gap-6">
  <h1>Start from sending a simple request</h1>
  <ul flex="~ col gap-4">
    <li v-click>You are building an React app</li>
    <li v-click>You need to fetch product list data from API</li>
    <li v-click>Network request is render's side effect</li>
    <li v-click><code>useEffect</code> is the dedicated hook for side effect</li>
    <li v-click>Without hesitation, you implemented this</li>
  </ul>
</div>

<div v-click="5">

```tsx
function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <ul>
      {products.map(product => (
        <Product {...product} key={product.id} />
      ))}
    </ul>
  )
}
```

</div>

<!--
为了更好地阐述上面这个问题，我们先从发送一个简单的请求开始。

[Click]设想一下你在编写一个 React 应用

[Click]需要从 API 获取产品列表数据、并渲染到页面上

[Click]你想到了网络请求不属于渲染、而是渲染的副作用

[Click]你还想到了 React 提供了一个专门的 Hook useEffect 用于处理渲染的副作用，最常见的场景就是将属于 React 外部的状态同步到 React 内部中

[Click]你不假思索，实现了一个 <ProductList /> 组件：
-->

---
class: grid grid-cols-2 gap-4 justify-center
glow: left
title: Display loading and error
---

<div flex="~ col gap-8">
  <h1>Display loading and error</h1>
  <ul flex="~ col gap-8">
    <li v-click transition duration-200 :class="$clicks >= 8 ? 'op50' : ''">You find there's the blank screen before the whole data is loaded</li>
    <li v-click transition duration-200 :class="$clicks >= 8 ? 'op50' : ''">The user experience is terrible</li>
    <li v-click transition duration-200 :class="$clicks >= 8 ? 'op50' : ''">You decide to add a loading progress bar</li>
    <li v-click transition duration-200 :class="$clicks >= 8 ? 'op50' : ''">Introducing a new state <code>isLoading</code></li>
    <li v-click="8">You also need to display error or report it</li>
    <li v-click="9">Introducing a new state <code>error</code></li>
  </ul>
</div>

<div my--10>

````md magic-move
```tsx
function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <ul>
      {products.map(product => (
        <Product {...product} key={product.id} />
      ))}
    </ul>
  )
}
```

```tsx {*|2,6,11,15-19|*|*|*}
function ProductList() {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => {
        setProducts(data)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    { /* TODO implement a <Skeleton />
    to improve UX and avoid CLS */ }
    return <Loading>Loading...</Loading>
  }

  return (
    <ul>
      {products.map(product => (
        <Product {...product} key={product.id} />
      ))}
    </ul>
  )
}
```

```tsx {*|4,14-17,25-28}
function ProductList() {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => {
        setProducts(data)
        setIsLoading(false)
      })
      .catch((err) => {
        // TODO report error logs
        setError(err)
      })
  }, [])

  if (isLoading) {
    { /* TODO implement a <Skeleton />
    to improve UX and avoid CLS */ }
    return <Loading>Loading...</Loading>
  }

  if (error) {
    { /* TODO add Retry button */ }
    return <div>Oops, something went wrong!</div>
  }

  return (
    <ul>
      {products.map(product => (
        <Product {...product} key={product.id} />
      ))}
    </ul>
  )
}
```
````
</div>

<!--
在 UI 中展示「加载中」和错误

[Click]你发现首次加载的时候，直到数据加载完成之前页面都是白屏

[Click]用户体验很不好。

[Click]于是你决定实现一个「加载中」的进度条

[Click]引入了一个新的状态 isLoading：

[Click][Click]可以看到，我们加了个isLoading的state。

[Click][Click]然后你又意识到，除了一个「正在玩命加载中」以外，你还需要在服务器出错时显示错误提示、必要时还要上报错误日志

[Click]于是你又引入了一个新的状态 error：
-->

---

# DRY - Don't repeat yourself

<div grid="~ cols-2 gap4">
<div>
Encapsulate a new hook

```tsx
function useFetch(url, requestInit = {}) {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetch(url, requestInit)
      .then(res => res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch(err => setError(err))
  }, [url, requestInit])

  return { data, isLoading, error }
}
```

</div>

<div v-click>
Now you can directly use it in your component:

```tsx
function ProductList() {
  const { isLoading, data, error }
    = useFetch('https://dummyjson.com/products')
}

function Product({ id }) {
  const { isLoading, data, error }
    = useFetch(`https://dummyjson.com/products/${id}`)
}
```

</div>

</div>

<!--
你发现每个需要从 API 获取数据的组件都需要重复上述的代码，非常繁琐。于是你决定将其封装成一个 useFetch 的 Hook，在组件中可以直接调用：

[Click]现在，你可以直接在组件中使用 useFetch Hook 了：
-->

---
glow: left
---

# Oh and we need so much more...

<div grid="~ cols-2 gap4">
<v-clicks flex="~ col gap2">

- Race condition
- Cache network requests
- <span v-mark.teal.box.delay1500="3">Cache invalidation</span>
- Compatible for React 18 Concurrent Rendering
- <span v-mark.orange.delay1500="5">Merge and deduplicate the requests</span>
- Error retry
- Preload
- Pagination
- Mutation and Optimistic updates
- Middleware

</v-clicks>

<div flex="~ col gap6">
  <div v-click="3" bg-teal:10 rounded-3xl p6 transition duration-200>
    <p>There are two hard things in computer science: <span v-mark.teal.box.delay300="3">cache invalidation</span>, naming things, and off-by-one errors.</p>
  </div>
  <div v-click="5" bg-teal:10 rounded-3xl p6 transition duration-200>
    <p>There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.</p>
    <p><span v-mark.orange="5">Oh and weird concurrency bugs.</span></p>
    <p><span v-mark.orange.delay500="5">Oh and weird concurrency bugs.</span></p>
  </div>
</div>
</div>

<!--
以为这样就结束了么？其实要做的事情还有非常非常多

[Click]我们需要处理竞态条件，比如一个Product的轮播组件，你快速切换的时候，有时你切换完毕会显示上一个Product的信息，这是因为你的请求是异步的，上一个请求可能会比现在的请求更慢地返回结果，从而覆盖掉当前的信息。所以我们需要在useEffect的返回值里写一个清除副作用的逻辑。还可以检测浏览器是否支持`AbortController`和`AbortSignal`，用于终止网络请求。具体代码就不贴了。

[Click]我们还需要缓存，用户在多个Product之间切换的时候，我们不希望一直发送请求，而是利用之前的结果作为缓存返回，避免更多的开销。这是一个很常见也很直观的需求。

[Click]有个笑话讲的是，计算机科学领域有两个难题：缓存失效，给东西命名，还有Off-by-one错误。这里讲的就是Cache Invalidation。有了缓存，你就需要刷新缓存，不然你的显示在 UI 上的数据就可能过时。你有很多的时机可以刷新缓存，比如你可以在标签页失去 Focus 的时候刷新缓存，你还可以定时重复更新缓存（interval），你还可以当用户网络状态发生改变时（从数据流量切换到 Wi-Fi 时）更新缓存。现在你需要写更多的 useEffect 和 addEventListener 了。而且，当组件卸载、重新挂载时，你虽然可以先使用缓存渲染界面避免再次白屏，但是你随后需要异步刷新缓存、最后将最新数据再更新到 UI 上。

[Click]你还需要为React18引入的Concurrent Rendering做兼容性处理。简而言之，就是React里引入的全局变量，也就是你的缓存，可能因为更新的优先级高低不一样，不同的组件用了相同的缓存，但是获取的值却不一致，导致了Tearing（撕裂，不一致）。所以我们需要使用React18提供的`useSyncExternalStore`来避免 Tearing、通知 React 全局变量的更新并安排重新渲染。

[Click]请求合并去重。由于你在 <Product /> 组件中 Fetch on render，因此同一时刻，你的 React Tree 中可能存在不止一个 <Product id={123} />；因此在页面首次加载、没有缓存时，你可能仍然会同时向同一个 URL 发送不止一次的请求。为了合并相同请求，你需要实现一个 mutex lock，避免多个 useFetch 向同一个 URL 发送多个请求；然后你还需要实现一个 pub/sub，将 API 的响应数据广播到所有使用这个 URL 的 useFetch。

[Click]在数据加载出问题的时候，要进行有条件的重试（如仅 5xx 时重试，403、404 时放弃重试）

[Click]预加载数据，避免瀑布流请求

[Click]大量数据我们需要分页请求

[Click]数据更改和乐观更新：用户提交输入时先更新本地 UI、形成「已经修改成功」的假象，同时异步将输入发送给服务端；如果出错，还需要回滚本地 UI

[Click]中间件：日志、错误上报、Authentication
-->

---
glow: bottom
---

# Why reinvent the wheel?

<div v-click op50>Just use <code>swr</code> and make your life <span text-2xl scale-110 text-green font-hand>easier!</span></div>

<img v-after src="/swr-trend.png" mt8 />

<!--
那么问题来了，我们为什么要重复造轮子呢？

[Click]直接使用SWR就好了！它已经实现了包括但不限于上述所有功能。

大家可能听说过react-query这个库，也用过，功能是差不多的，但是SWR的API更简洁，更符合直觉，这个大家用一下就知道了。

可以看到这个趋势，SWR已经超越了react-query并且这个差距将进一步拉大。
-->

---

# Basic Usage: Combine ky and swr

<div grid="~ cols-2 gap4">

<div flex="~ col gap4">

```tsx {*|5-6}
// src/api/index.ts
import ky from 'ky'
import type { Product } from '~/types'

export const fetchProductList
                = ky.get('/products').json<Product[]>()
```

<div v-click="3">

```tsx
const { data, error, isLoading, mutate }
= useSWR('/products', ky.get('/products').json<Product[]>())
```

</div>

</div>

```tsx {*|6-7}
// src/App.tsx
import useSWR from 'swr'
import { fetchProductList } from '~/api'

export default function App() {
  const { data, error, isLoading, mutate }
          = useSWR('/products', fetchProductList)

  if (error)
    return <div>failed to load</div>
  if (isLoading)
    return <div>loading...</div>

  // render data
  return (
    <div>
      {data.length > 0 && data.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
      <button onClick={mutate}>Refresh</button>
    </div>
  )
}
```

</div>

<!--
为什么讲ky和swr呢？因为我通常将两者配合使用。请看这个例子。

[Click]左边是用ky写的一个fetcher函数，用于获取数据。

[Click]右边是一个App组件，里面使用了useSWR这个hook，用于管理外部状态，传入的是一个key和fetcher函数。

可以看到，它直接提供了4个reactive的值给我们使用。简单判断之后，我们可以在出错的时候显示错误信息，加载中的时候显示进度条，data用于渲染内容，mutate函数用于重新发起请求，刷新内容。

[Click]如果不想分开写，其实可以把fetcher内联，就像这样。一行代码就可以解决所有的问题，并且获得刚刚咱们想要实现的那个hook的所有优势。

对比之前提到的使用Redux来获取API数据，动辄几十上百行样板代码，且没有竞态条件处理、缓存、重试、分页、预加载、乐观更新、中间件等所有功能。而在这里，SWR一行搞定，且有上述诸多优势。

我想不通为什么不用SWR的原因。强烈建议大家都试一试，可以去官网看看更详细的配置，基本上所有功能都可以满足。
-->

---
glowHue: 235
glowX: 50
glowY: 50
class: flex flex-col items-center justify-center
title: Zustand
---

<div text-center absolute left-1 right-1 transition-all duration-400 op75 ease-in-out :class="$clicks <= 0 ? 'scale-250 bottom-50%' : 'bottom-5'">
<span op50>https://</span>docs.pmnd.rs/zustand
</div>

<div i-noto-bear text-5em mt--10 mb8 />
<h1 v-click forward:delay-400 text-transparent text-center important-text-5xl font-800 important-leading-1.2em text-white>Unopinionated Lightweight<br><span text-amber7>State Management</span></h1>
<div v-click text-xl op75 text-center>
"A small, fast, and scalable bearbones state management solution."
</div>

<!--
既然刚刚提到了Redux，那么我还得继续批判一番，即便是用于内部的状态管理，也请不要继续使用Redux了，facebook内部也基本上是一个批判的态度，大家可以自己去搜一搜相关帖子。

[Click]现在我们有更轻量，更好用的状态管理工具，比如这个Zustand。

[Click]它是一个小巧、快速且可扩展的简约状态管理解决方案。
-->

---

# A super simple store

<div mb2>Your store is a <span v-mark.box.green.op50>hook!</span> You can put anything in it: primitives, objects, functions.</div>

<div w-140>

```ts {*|4|5-7|*}
import { create } from 'zustand'

const useStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: newBears => set({ bears: newBears }),
}))
```

</div>

<div my2>You can use the hook anywhere, without the need of providers.</div>

<div w-140>

```tsx {*|2|7|*}
function BearCounter() {
  const bears = useStore(state => state.bears)
  return <h1>{bears}</h1>
}

function Controls() {
  const increasePopulation = useStore(state => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```

</div>

<!--
我们来看看一个极简的store。

[Click]它其实就是一个hook，我们用create函数来创建这个hook，[Click]把要管理的状态[Click]以及更改状态的方法都放在里面就行了。

[Click]然后你就可以在任意位置使用这个hook了，也不需要在App外面包一层什么Provider。

[Click]这里是使用hook获取变量。

[Click]这里是使用hook获取更改变量的函数。

[Click]是不是很方便？就这么简单。没有什么action，没有什么reducer，也没有什么dispatcher。如果你用过Vue那边的Pinia，应该感觉有点熟悉。
-->

---

# Compare to Redux

<div grid="~ cols-2 gap4">

<div flex="~ col gap2">
<div>Redux</div>

```tsx {*}{class:'!children:text-[8px]/1'}
import { createStore } from 'redux'
import { useDispatch, useSelector } from 'react-redux'

interface State {
  count: number
}

interface Action {
  type: 'increment' | 'decrement'
  qty: number
}

function countReducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.qty }
    case 'decrement':
      return { count: state.count - action.qty }
    default:
      return state
  }
}

const countStore = createStore(countReducer)

function Component() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  // ...
}
```

</div>

<div flex="~ col gap2">
<div>Zustand</div>

```tsx {*}{class:'!children:text-[9px]/1'}
import { create } from 'zustand'

interface State {
  count: number
}

interface Actions {
  increment: (qty: number) => void
  decrement: (qty: number) => void
}

const useCountStore = create<State & Actions>(set => ({
  count: 0,
  increment: (qty: number) => set(state => ({ count: state.count + qty })),
  decrement: (qty: number) => set(state => ({ count: state.count - qty })),
}))

function Component() {
  const count = useCountStore(state => state.count)
  const increment = useCountStore(state => state.increment)
  const decrement = useCountStore(state => state.decrement)
  // ...
}
```

</div>
</div>

<!--
虽然不想看到Redux，但为了说明问题，还是拉出来看一眼吧。

这里两者对比一下，可以看到，左边的switch case非常的反直觉，而右边每个action都有自己的方法，很直观，在hook里面也可以用不同的selector分别拿出来使用。

更多的对比大家可以去官网了解一下。
-->

---

# Brother libraries

All authored by Dai Shi (pmndrs)

<div grid="~ cols-3 gap2">

<div flex="~ col">
<div mb2 flex>Zustand<div v-click="7" ml4 font-hand text-teal rotate--5 scale-120>German</div></div>

```ts {*}{class:'!children:text-[9px]/1'}
import { create } from 'zustand'

interface State {
  obj: { count: number }
}

const store = create<State>(
  () => ({ obj: { count: 0 } })
)

store.setState(
  prev => ({ obj: { count: prev.obj.count + 1 } })
)
```

<div mt2 flex="~ col gap1 items-center">
<div v-click>More like Redux or Pinia</div>
<div v-click>A store makes of states & actions</div>
</div>

</div>

<div flex="~ col">
<div mb2 flex>Jotai <span v-click="8" ml4 font-hand text-teal rotate--5 scale-120>Japanese</span></div>

```ts {*}{class:'!children:text-[9px]/1'}
import { atom, useAtom } from 'jotai'

const countAtom = atom<number>(0)

function Component() {
  const [count, updateCount] = useAtom(countAtom)
  updateCount(count => count + 1)
}
```

<div mt2 flex="~ col gap1 items-center">
<div v-click>"Global" version of <code>useState</code></div>
<div v-click>Atomic approach</div>
</div>

</div>

<div flex="~ col">
<div mb2 flex>Valtio <span v-click="9" ml4 font-hand text-teal rotate--5 scale-120>Finnish</span></div>

```ts {*}{class:'!children:text-[10px]/1'}
import { proxy } from 'valtio'

const state = proxy({ obj: { count: 0 } })

state.obj.count += 1
```

<div mt2 flex="~ col gap1 items-center">
<div v-click>Minimal API yet magical</div>
<div v-click>Proxy state made simple</div>
</div>

</div>

</div>

<div mt10 v-click="10">You can choose whichever you like, all better than Redux.</div>

<!--
现在介绍一下更多的兄弟成员，它们的作者都是一个人，叫带师。只能说不愧是带师，一出手就是三个非常好用的React状态管理库。

开个玩笑啊，这个人的名字叫daishi kato，也就是斋藤大史。是个日本人。

[Click]我们先看看zustand，它更像是Redux或者Pinia[Click]一个由state和action组成的store

[Click]而jotai呢，从API我们可以看出，它像是一个`useState`的全局版本。[Click]它使用的是原子方式，非常适合用于简单的单个全局变量。

[Click]最后这个Valtio，API则更加简洁，却又很神奇。[Click]它将代理状态做到了极致简洁，使用proxy将状态对象代理之后，可以像普通的对象一样去对它读写了，非常舒适。

可能有比较敏锐的同事从jotai这里发现了这三个库命名的端倪，没错。

[Click]Zustand是德语，[Click]Jotai是日语，[Click]Valtio是芬兰语。

它们翻译成英语都是state，也就是状态的意思。

[Click]你可以选择任何你喜欢的，它们三个都比Redux好用很多。即便现在Redux推出了Redux Toolkit，也就是RTK，我也不推荐，历史包袱太重了，即便优化了很多，还是不够轻量。

值得一提的是，这三个库并不是独占的，也就是选了这个就不能选那个，它们是可以共同使用的，虽然三个一起用的场景不多见。但是zustand和jotai配合使用，亦或是zustand和valtio配合使用，也较为常见，在官网也有详细的文档。

个人推荐zustand，用惯了Redux的人，迁移过来也比较顺畅，毕竟都是基于Flux的思路。
-->

---
glowHue: 25
glowX: 50
glowY: 50
class: flex flex-col items-center justify-center
title: Tailwind CSS
---

<div text-center absolute left-1 right-1 transition-all duration-400 op75 ease-in-out :class="$clicks <= 0 ? 'scale-250 bottom-50%' : 'bottom-5'">
<span op50>https://</span>tailwindcss.com
</div>

<div i-logos-tailwindcss-icon text-5em mt--10 mb8 />
<h1 v-click forward:delay-400 text-transparent text-center important-text-5xl font-800 important-leading-1.2em text-white>Utility-first<br><span text-cyan>CSS Framework</span></h1>
<div v-click text-xl op75 text-center>
"Rapidly build modern websites without ever leaving your HTML."
</div>

<!--
OK，下面讲一讲CSS框架，这个大家应该也不陌生了吧，前段时间这个官网还允许内网访问了，查文档更方便了。

[Click]Tailwind CSS，它是个工具优先的CSS框架，也可以理解为原子CSS框架。通过各种工具class进行组合，可以完成几乎任何想要的CSS效果。

[Click]它的口号是Rapidly build modern websites without ever leaving your HTML. 也就是说，你直接在html里就把所有的样式写好了。不用去写什么css，sass，less文件。
-->

---

# Utility-First Fundamentals

<div v-click absolute transition-all duration-400 ease-in-out :class="$clicks <= 1 ? 'left-35% bottom-40%' : 'left-58% bottom-25%'">
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="size-12" src="/chitchat.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <div class="text-slate-500">You have a new message!</div>
  </div>
</div>
</div>

<div grid="~ cols-2 gap-6">
<div v-click flex="~ col gap-2">
<div flex="~ gap-2 items-center" text-xs><div i-mdi-cross-circle text-red4 />Using a traditional approach where custom designs require custom CSS</div>

```html {*}{class:'!children:text-[6px]/1'}
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    align-items: center;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```

</div>

<div v-click flex="~ col gap-2">
<div flex="~ gap-2 items-center" text-xs><div i-mdi-tick-circle text-cyan />Using utility classes to build custom designs without writing CSS</div>

```html {*}{class:'!children:text-[8px]/1'}
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl
           shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="size-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```

<div text-center font-hand mt-auto v-click="6" text-lime2 text-2xl rotate--5>You have to actually try it</div>
<div flex="~ justify-center" v-click="4"><div v-mark.linethrough.lime.delay300="5">"This is an atrocity, what a horrible mess!"</div></div>

</div>

</div>

<!--
我们来看一看Utility-First究竟是什么。

[Click]加入我们现在要写这样一个通知气泡，怎么写呢？

[Click]很常见的写法，使用自定义的classname配合css，完成样式的编写。通常css会被放在单独的文件里，这里只是为了演示方便。

事实上，我们现有的大部分项目都是采用的这种方式。

[Click]那么我们使用tailwind怎么写呢？像这样。

把需要的样式的工具类写在对应元素的class里面进行组合，就可以了。可以看到，我们一行css都没有写，但是完成了相同的功能。

[Click]那有人就要说了，这样也太乱了吧！

[Click]乍一看确实是。

[Click]但是这个东西光看没用，你得自己上手试试才知道。纸上得来终觉浅，绝知此事要躬行。
-->

---
glow: left
---

# Fundamentals

<div grid="~ cols-[max-content_min-content_max-content] items-center gap-6" w-120 mt8 py4 px4 rounded-2xl bg-teal:16>
  <div><code>display: flex;</code></div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div><code v-after>flex</code></div>

  <div><code>align-items: center;</code></div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div><code v-after>items-center</code></div>

  <div><code>max-width: 24rem;</code></div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div><code v-after>max-w-sm</code></div>

  <div><code>margin: 0 auto;</code></div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div><code v-after>mx-auto</code></div>

  <div><code>padding: 1.5rem;</code></div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div><code v-after>p-6</code></div>

  <div><code>border-radius: 0.5rem;</code></div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div><code v-after>rounded-xl</code></div>

  <div><code>background-color: #fff</code></div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div><code v-after>bg-white</code></div>
</div>

<!--
稍微讲讲基础，看一下tailwind干了些啥。这里提取了刚刚最外层的div的样式，分解讲解一下。

[Click]display: flex被封装为了classname为flex的样式。也就是当你在class里面写了flex之后，display: flex这一条css语句在编译的时候就会被应用于该元素。

[Click]那么同理，align-items: center被封装为items-center。

[Click]max-width: 24rem被封装为max-w-sm，注意这里的单位rem，这个在tailwind里是默认单位。至于sm，tailwind有自己一套大小系统，可以参照文档。大小一般有xs，sm，base，lg，xl，2xl，3xl等。

[Click]margin: 0 auto被封装为mx-auto，其中x就是指的横向。这个用的很多，常用于在flex box里面将div横向居中。

[Click]padding: 1.5rem被封装为p-6，p表示padding，注意6和1.5，是四倍的关系。

[Click]border-radius: 0.5rem被封装为rounded-xl，rounded表示圆角，xl同样是参照内部的大小系统。

[Click]background-color: #fff被封装为bg-white，这个很直观。

总之，tailwind定义了一系列的预定义的原子形态的classname工具类供你使用，你只需将它们合理组合即可。
-->

---
layout: quote
---

<div>"There are 2 hard problems in computer science: cache invalidation, <span v-mark.lime.box>naming things</span>, and off-by-1 errors."</div>

<!--
还记得咱们刚刚讲swr时提到的一个笑话么，刚刚讲的是cache invalidation，[Click]这会儿说到的就是naming things了。
-->

---

# Important Benefits

<div op50>Once you’ve actually built something this way, you’ll quickly notice these:</div>

<div flex="~ col gap1" mt12>

<div v-click flex="~ gap-2 items-center">
  <div i-emojione-zzz />
  You aren’t wasting energy inventing class names
</div>
<div v-click op70 mb4 ml6>No more adding silly class names like <code>sidebar-inner-wrapper</code> just to be able to style something</div>
<div v-click flex="~ gap-2 items-center">
  <div i-openmoji-stop-sign />
  Your CSS stops growing
</div>
<div v-click op70 mb4 ml6>With utilities, everything is reusable so you rarely need to write new CSS</div>
<div v-click flex="~ gap-2 items-center">
  <div i-ph-shield-check text-teal />
  Making changes feel safer
</div>
<div v-click op70 mb4 ml6>Classes in your HTML are local, so you can change them without worrying about something else breaking</div>

<div v-click mt8>
"When you realize how productive you can be working exclusively in HTML with predefined utility classes, working any other way will feel like torture."
</div>

</div>

<!--
Tailwind可以带来一些非常重要的好处，只要你上手试一下，你很快就可以发现。

[Click]第一个就是咱刚说到的那个笑话里面的，naming things。使用tailwind之后，你再也无需费脑筋去想那些class的名字了。因为tailwind已经帮你定好了，你负责用就行了，而tailwind要考虑的就多了。

[Click]这个我觉得是一个非常大的优点，我在写那种css分离的代码的时候，想classname真的非常痛苦，特别是那种嵌套很深，css又只有一个flex之类的，真的很烦。

[Click]第二个就是你的CSS不会再增长了

[Click]都是复用。基本不需要再写新的。

[Click]第三点，改代码的时候会更放心

[Click]因为你的html里的class都是局部的，你增减原子css class不会影响别的地方。css分离代码那种，如果你碰巧写了两个一样的类名，很有可能造成别的组件样式崩溃而不自知。

[Click]就像Vite一样，tailwind的官网也提到，当你意识到仅仅使用 HTML 和预定义的工具类能让工作变得如此高效后，其他方式就会让你觉得像受折磨。
-->

---

# Why not just use inline styles?

<div op50>Using utility classes has a few important advantages over inline styles:</div>

<div flex="~ col gap1" mt12>

<div v-click flex="~ gap-2 items-center" text-red3>
  <div i-ph-lock-bold />
  Designing with constraints
</div>
<div v-click op70 mb4 ml6>Magic nunmber VS. Predefined design system</div>
<div v-click flex="~ gap-2 items-center" text-teal>
  <div i-mdi-responsive />
  Responsive design
</div>
<div v-click op70 mb4 ml6>You can’t use media queries in inline styles</div>
<div v-click flex="~ gap-2 items-center" text-lime3>
  <div i-fluent-cursor-hover-16-regular />
  Hover, focus, and other states
</div>
<div v-click op70 mb4 ml6>Inline styles can’t target states like hover or focus</div>

</div>

<!--
可能有人要问了，为什么不直接使用内联样式呢？这两者不是很像吗？

事实上，使用工具类有不少很重要的优势。

[Click]你的设计是受到框架约束的

[Click]写内联样式的话，其实每个内联样式都是魔数，很难维护。而用工具类，你是在预定义的一套设计系统里挑选要用的样式，可以更容易地让你构建视觉上统一的UI。

[Click]响应式设计

[Click]在内联样式中你是无法使用媒体查询的，也就无法做到响应式UI。但是用tailwind的工具类，可以很轻松做到这一点。

[Click]一些用户交互的状态

[Click]同样的，内联样式无法处理类似hover，focus这样的状态，并在这些状态上应用不同的样式。
-->

---

# Tailwind CSS VS. Bootstrap

<table>
  <thead>
    <tr>
      <td></td>
      <td><div flex gap-2 items-center><div i-logos-bootstrap />Bootstrap</div></td>
      <td><div flex gap-2 items-center><div i-logos-tailwindcss-icon />Tailwind CSS</div></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Philosophy</td>
      <td>Ready-made components</td>
      <td>Utility-first customization</td>
    </tr>
    <tr>
      <td>Customization</td>
      <td>Limited</td>
      <td>Extensive</td>
    </tr>
    <tr>
      <td>Development Speed</td>
      <td>Faster initial development</td>
      <td>Slower, but more precise</td>
    </tr>
    <tr>
      <td>Performance</td>
      <td>Potentially heavier</td>
      <td>Lightweight</td>
    </tr>
    <tr>
      <td>Learning Curve</td>
      <td>Smoother</td>
      <td>Steeper</td>
    </tr>
    <tr>
      <td>Browser support</td>
      <td>Broad</td>
      <td>Modern</td>
    </tr>
  </tbody>
</table>

<!--
我们看到，tailwind有些工具类，跟bootstrap有点像。比如display: flex，在bootstrap中也有对应的类，叫d-flex。但其实它俩是有很大区别的。

可以看这张表格。设计哲学方面，bootstrap主要是一套已经设计好的组件库，形如d-flex的类只是副产品，用于轻量定制化。而tailwind则没有组件库可言，它就是个非常底层的，原子化的css工具库。所以我们可以看到，基于tailwind构建的组件库已经如雨后春笋般冒出了。

定制化方面，bootstrap可定制的地方非常有限，而tailwind主打的就是一个高度可定制。

开发速度，bootstrap当然是快速原型的一把好手，bootstrap + jquery的含金量无需多言。tailwind可能会更慢，但是也更加细粒度，更加精确。

性能方面，bootstrap肯定是更重的，因为可能会将很多用不上的东西也打包进你的项目。tailwind轻量级的同时完美支持tree-shaking，没有用到的工具类在编译的时候会被清理掉，不会打包。

学习曲线，自然是前者更平缓，后者稍微陡峭一些，但是也挺简单了，因为它的命名是经过了仔细设计的，非常符合直觉。

浏览器支持，bootstrap作为老牌组件库，对浏览器的支持当然更多一些。tailwind则对于现代浏览器的支持非常友好。

总之，这两者根本不是一种东西，bootstrap也无法在我司应用。
-->

---
glow: bottom
---

# State of CSS - Usage

<img src="/state-of-css-usage.png" />

<div mt4 text-center>
Statistics from <a href="https://2023.stateofcss.com">stateofcss.com</a>
</div>

<!--
我们可以看一眼数据。

介绍一下state of css，这是一个在全世界范围内做JavaScript相关的调查的组织。每年都会组织一场问卷调查，收集开发者们对于各种库的使用情况。

这份统计数据也是来自这个网站，stateofcss.com。

这张图是使用率的数据，我们可以看到，靛蓝色是bootstrap，深绿色是tailwind。bootstrap由于历史原因，使用率一直遥遥领先。但是tailwind作为后起之秀，涨势很猛，远远超过了其他的库。
-->

---
glow: bottom
---

# State of CSS - Retention

<img src="/state-of-css-retention.png" />

<div mt4 text-center>
Statistics from <a href="https://2023.stateofcss.com">stateofcss.com</a>
</div>

<!--
再看一眼留存率Retention。

所谓留存率，就是正在用这个库，并且打算继续用下去的开发者比例。可以反映开发者对库的喜爱程度。

我们可以发现，tailwind是最高的。purecss逆势缓慢增长。bootstrap则下滑的很厉害。

同时在2023年，有两个新的库Open Props和UnoCSS出现并位居榜一榜二。这里提一下UnoCSS，它是antfu大佬开发的一个对标tailwind的库，想作为windicss的继任者（windicss已经倒闭了）。在tailwind基础上有一些改进，把一些类名的写法做了更加极简的优化。并且所有的类都不是事先生成，而是实时按需生成，更加轻量级，更加高度定制化。

但是unocss同open props一样，我更愿意把它们列为bleeding-edge technology，太新以至于还不稳定，而且生态也比较差。
-->

---
glowHue: 80
class: flex flex-col items-center justify-center
title: Zod
---

<div text-center absolute left-1 right-1 transition-all duration-400 op75 ease-in-out :class="$clicks <= 0 ? 'scale-250 bottom-50%' : 'bottom-5'">
<span op50>https://</span>zod.dev
</div>

<div i-logos-zod text-5em mt--10 />
<h1 v-click forward:delay-400 text-transparent text-center important-text-5xl font-800 important-leading-1.2em text-white>TypeScript-first<br><span text-blue>Schema Validation</span></h1>
<div v-click text-xl op75 text-center>
"A TypeScript-first schema validation library with static type inference."
</div>

<!--
下面讲讲Zod

[Click]它是一个typescript优先的规格校验库。

[Click]同时可以静态类型推断，也就是在没有ts的情况下也可以用，只不过功能会有所削弱。
-->

---

# Great Features

<v-clicks flex="~ col gap4" mt8>

- Zero dependencies
- Works in Node.js and all modern browsers
- Tiny: <span text-green>8kb</span> minified + zipped
- Immutable: methods (e.g. `.optional()`) return a new instance
- Concise, chainable interface
- Works with plain JavaScript too! You don't need to use TypeScript.

</v-clicks>

<!--
zod有很多很棒的特性：

[Click]零依赖，不依赖任何第三方库，纯自己实现。

[Click]现代浏览器和nodejs均支持，也就是说可以用于SSR

[Click]包体积很小，gzip后仅为8kb

[Click]不可变性：函数返回的都是新实例，不会对原对象进行更改

[Click]细粒度链式接口

[Click]刚刚提到过，使用纯JS也能用，对TS不强依赖。
-->

---

# Basic Usage

<div grid="~ cols-2 gap4">
  <div flex="~ col gap2">
    <div>A simple string schema</div>

```ts {*}{class:'!children:text-[8px]'}
import { z } from 'zod'

// creating a schema for strings
const mySchema = z.string()

// parsing
mySchema.parse('tuna') // => "tuna"
mySchema.parse(12) // => throws ZodError

// "safe" parsing (doesn't throw error if validation fails)
mySchema.safeParse('tuna') // => { success: true; data: "tuna" }
mySchema.safeParse(12) // => { success: false; error: ZodError }
```

  </div>
  <div flex="~ col gap2">
    <div>A more complex object schema</div>

```ts {*}{class:'!children:text-[8px]'}
import { z } from 'zod'

const userSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(16, { message: 'Password must be at most 16 characters long' })
    .regex(/[A-Z]/, { message: 'Password must include at least one uppercase letter' })
    .regex(/[a-z]/, { message: 'Password must include at least one lowercase letter' })
    .regex(/\d/, { message: 'Password must include at least one number' })
    .regex(/[@$!%*?&]/, { message: 'Password must include at least one special character' }),
})
```

  </div>
</div>

<!--
这里看一下基础用法。

左边是一个简单的string类型的验证。

可以看到，一行就搞定了。

右边是复杂对象的验证，验证用户的邮箱和密码。

可以很明显地看到链式API。

密码设定为8-16位，包含大小写数字和特殊字符的字符串。
-->

---

# Use with `react-hook-form`

```tsx {*}{class:'!children:text-[10px]/1'}
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  age: z.number().min(10),
})

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  return (
    <form onSubmit={handleSubmit(d => console.log(d))}>
      <input {...register('name')} />
      {errors.name?.message && <p>{errors.name?.message}</p>}
      <input type="number" {...register('age', { valueAsNumber: true })} />
      {errors.age?.message && <p>{errors.age?.message}</p>}
      <input type="submit" />
    </form>
  )
}
```

<!--
zod常用于表单验证，所以一般会配合react-hook-form这个库来使用。

可以看到，schema还是由zod来创建，react-hook-form会使用这个schema来创建一些用于form的函数。

使用这些函数，可以很轻松地实现表单验证，并将错误信息实时展示在对应的表单控件下方。

其实很多UI库，表单组件底层都是基于zod和react-hook-form进行的封装。
-->

---
glow: bottom
---

# Why zod?

<img v-click src="/zod-trend.png" mt8 />

<!--
可想而知市面上的schema validation库并不少，为什么要用zod呢？

还是来看一眼npm趋势。

[Click]可以看到zod自从发布以来，一路高歌猛进，力压群雄。23年中超过了yup，最近已然超过joi成为了大哥。

事实上，zod已然成为schema validation领域事实上的标准。

zod的生态发展之迅速，着实令人吃惊。目前几乎新的、只要是跟规格校验沾边的库，都会将zod作为依赖。在此基础上，玩出了花，比如tRPC。至于tRPC是什么，可以去官网trpc.io了解一下。

zod的生态非常繁荣，可以去zod的官网看一下。不过说这么多，还是想说，zod的确好用，看这个不寻常的增长曲线就能看出来。
-->

---
class: flex flex-col items-center justify-center
title: Vitest
---

<div text-center absolute left-1 right-1 transition-all duration-400 op75 ease-in-out :class="$clicks <= 0 ? 'scale-250 bottom-50%' : 'bottom-5'">
<span op50>https://</span>vitest.dev
</div>

<div i-logos-vitest text-5em mt--10 />
<h1 v-click forward:delay-400 text-transparent text-center important-text-5xl font-800 important-leading-1.2em style="background: -webkit-linear-gradient(120deg, #86b91a 30%, #edd532);-webkit-background-clip: text;"><span text-white>Next Generation</span><br>Testing Framework</h1>
<div v-click text-xl op75>
"A Vite-native testing framework. It's fast!"
</div>

<!--
下面简单提一下Vitest。

[Click]Vitest是下一代测试框架，这个下一代针对的是Jest。

[Click]从名字就可以看出来，它跟Vite有千丝万缕的联系。不错，它就是Vite原生的测试框架，非常快。
-->

---

# Why Vitest

<div flex="~ col gap6" mt8>

<div v-click flex="~ col gap1">
  <div flex="~ gap2 items-center"><div i-logos-vitejs /><span text-purple>Vite</span> Powered</div>
  <div op50>Reuse Vite's config and plugins - consistent across your app and tests. Zero config if using Vite.</div>
</div>
<div v-click flex="~ col gap1">
  <div flex="~ gap2 items-center"><div i-logos-jest /><span text-red4>Jest</span> Compatible</div>
  <div op50>Expect, snapshot, coverage, and more - migrating from Jest is straightforward.</div>
</div>
<div v-click flex="~ col gap1">
  <div flex="~ gap2 items-center"><div i-logos-vitejs />Smart & instant watch mode</div>
  <div op50>Only rerun the related changes, just like HMR for tests!</div>
</div>
<div v-click flex="~ col gap1">
  <div flex="~ gap2 items-center"><div i-logos-typescript-icon />ESM, TypeScript, JSX</div>
  <div op50>Out-of-box ESM, TypeScript and JSX support powered by esbuild.</div>
</div>

</div>

<!--
那我们为什么要用Vitest呢？

主要有这么几点原因。

[Click]首先，它是基于Vite的。Vite的优点在最开始的时候已经详细介绍过了。Vitest基于Vite构建，可以复用Vite的配置和插件，让你的应用和测试保持一致，不必为了测试又重新配一套测试框架用的配置。如果你的应用用的是Vite，那么将可以零配置使用Vitest作为测试框架。用过Jest的人应该都有所体会，Jest的配置非常繁琐，不配置好的话，很多测试都会报错，代码不能识别。但是得益于Vite，Vitest解决了这一切，我们可以零配置开箱即用，非常爽。

[Click]再一个，它还兼容Jest。expect，快照，覆盖率，一应俱全。API基本上是完全一致的，迁移非常容易。有什么理由继续用Jest呢？

[Click]还有智能且即时的监视模式，watch mode默认就是开启的，它会重新跑代码更改相关的测试用例，就像测试的HMR一样，这个速度体验过就知道了，无需多言。非常适合做TDD开发。

[Click]最后还有开箱即用的ESM，TS和JSX支持。

综上所述，Vitest在兼容Jest的情况下，各方面都吊打了Jest，我已经找不到继续使用Jest的理由了。希望以后的项目都能切换到Vite和Vitest吧。
-->

---
glowSeed: 10
glowHue: 40
class: flex flex-col items-center justify-center
title: Slidev
---

<div text-center absolute left-1 right-1 transition-all duration-400 op75 ease-in-out :class="$clicks <= 0 ? 'scale-250 bottom-50%' : 'bottom-5'">
<span op50>https://</span>sli.dev
</div>

<img src="/slidev-logo.svg" w-5em mt--10 />
<h1 v-click forward:delay-400 text-transparent text-center important-text-5xl font-800 important-leading-1.2em text-white>Presentation Slides<br><span text-cyan>for Developers</span></h1>
<div v-click text-xl op75 text-center>
"A web-based slides maker and presenter.<br>It's designed for developers to focus on writing content in Markdown."
</div>

<!--
最后这个算一个彩蛋吧。antfu大佬开发的Slidev。

[Click]为开发者定制的PPT

[Click]它基于web和markdown，开发者既可以使用markdown专注于内容书写，还可以用web的几乎所有功能为幻灯片添加各种fancy炫酷的效果。

你们现在看到的，也就是本次演讲的PPT，就是用slidev做的。
-->

---

# Progressive on Features

<div v-click text-white:50 mt3 mb6>
Starts <b text-white:75 font-bold>minimal</b> and <b text-white:75 font-bold>grows</b> with users:
</div>

<div flex="~ col gap-6">

<div flex="~ gap-2 items-center">
  <span v-click font-bold>📝 Markdown-based</span>
  <span v-click op75 ml4>Start with a super simple markdown file and focus on the content</span>
</div>

<div flex="~ gap-2 items-center">
  <span v-click font-bold>🧑‍💻 Developer Friendly</span>
  <span v-click op75 ml4>Shiki, Magic Move and TwoSlash make Slidev the best choice for tech talks</span>
</div>

<div flex="~ gap-2 items-center">
  <span v-click font-bold>🎨 Themable</span>
  <span v-click op75 ml4 flex="~ items-center gap1">Check out the theme gallery and apply your favorite within one line of code</span>
</div>

<div flex="~ gap-2 items-center">
  <span v-click font-bold>⚡ Fast</span>
  <span v-click op75 ml4>Every change you make in the editor instantly sync to your slides in the browser</span>
</div>

<div flex="~ gap-2 items-center">
  <span v-click font-bold>🤹 Interactive & Expressive</span>
  <span v-click op75 ml4>Vue components and Monaco Editor get you covered</span>
</div>

<div flex="~ gap-2 items-center">
  <span v-click font-bold>📤 Portable</span>
  <span v-click op75 ml4 flex="~ items-center gap1">You can export your slides into PDF, PPTX, PNGs, or even deploy it as SPA</span>
</div>

<div flex="~ gap-2 items-center">
  <span v-click font-bold>🛠 Hackable</span>
  <span v-click op75 ml4 flex="~ items-center gap1">Everything that can be done in a normal web app can be applied to your slides</span>
</div>

</div>

<!--
它也贯彻了antfu和Vue团队一直依赖的progressive渐进式理念。

[Click]从一个极简的项目启动，随着用户的需要可以添加并使用更多功能。

[Click]它基于Markdown。[Click]只需要从一个极简的markdown文件开始，就可以生成还不赖的幻灯片，甚至比很多用microsoft powerpoint做出来的PPT都好看。可以让开发者专注于内容的编写。

[Click]开发者友好。[Click]作为开发者，很多时候都要讲到代码，会贴上一些代码片段。而我们知道，在PPT里直接贴上IDE里的代码截图，排版是很糟糕的，风格也很突兀。而Shiki，Shiki magic move和twoslash这几个插件，分别用于代码高亮、动画以及变量类型展示，让slidev成为了技术演讲的最佳选择。

[Click]主题丰富。[Click]每个人都希望自己的PPT能够稍微有所不同，slidev官方以npm包的形式提供了许许多多的主题，只需一行代码就可以安装并使用。也可以很方便地自定义主题。

[Click]迅捷。[Click]得益于Vite的HMR，你在编辑器中对幻灯片的每一个修改都会立即更新到浏览器中，无需刷新。非常棒的开发体验。

[Click]如果你还需要交互和表达？[Click]你还可以编写Vue组件，比如按钮之类的。还可以用Monaco编辑器，在里面实时编写代码。

[Click]跨平台。[Click]Slidev 的幻灯片支持导出为 PDF、PPTX 和图片格式，也可以通过一个简单的命令编译为静态网页，以便分享或部署到任何地方。比如该PPT，就被我一键部署到了Vercel上面。

[Click]可改造。[Click]任何可以在 Web 应用中实现的功能都可以应用到你的幻灯片中。例如，WebGL、API 请求、iframe 等。在这里，PPT只受到你想象力的限制。

动手尝试胜过千言万语。精通前端的小伙伴们可以在此大展身手，后端小伙伴也可以使用基本的Markdown语法构建简洁美观的幻灯片。为什么不试试呢？
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# Thank you!

Slides also deployed on [Vercel](https://cutting-edge-frontend.vercel.app)

<!--
我的演讲到此结束，谢谢大家，祝你们编程愉快！Happy hacking!
-->
