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
很高兴能做这次技术分享。
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

---

# What is Vite?

<div op70>French word for "quick", pronounced <code>/vɪt/</code>, like "veet"</div>

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

---

# Why Vite?

<h2 v-click op70>The Problem: Slow server start</h2>

<div grid="~ cols-2 gap4" my8>
<img v-click src="/bundle-based-dev-server.svg" rounded-3xl bg-teal bg-op5 />
<img v-click src="/native-esm-based-dev-server.svg" rounded-3xl bg-teal bg-op5 />
</div>

<div v-click>Vite only needs to transform and serve source code on demand, as the browser requests it.</div>

---

# Why Vite?

<h2 v-click op70>The Problem: Slow updates</h2>

<div flex="~ col gap2" mt4>
<div v-click>
  <div>Bundler based build setup</div>
  <div op50>Rebuild the whole bundle</div>
</div>
<div v-click>
  <div>Invalidate part of its module graph</div>
  <div op50>Reconstructing the bundle can be expensive, and reloading the page blows away the current state of the application</div>
</div>
<div v-click>
  <div>Hot Module Replacement (HMR)</div>
  <div op50>Even HMR update speed deteriorates significantly as the size of the application grows</div>
</div>
<div v-click>
  <div>HMR over native ESM</div>
  <div op50>HMR updates consistently fast regardless of the size of your application</div>
</div>
</div>

<div v-click mt4>"Once you experience how fast Vite is, we highly doubt you'd be willing to put up with bundled development again."</div>

---

# Why is Vite so <span font-hand text-green scale-110 ml1 inline-block>fast?</span>

<div flex="~ gap8 items-center" mt8>
  <div flex="~ col gap2 items-center">
    <div flex="~ gap2 items-center" text-yellow text-5xl><div i-logos-esbuild />esbuild</div>
    <div flex="~ gap2 items-center"><span text-green>10-100x</span> faster than<div i-logos-webpack /><span text-sky>Webpack</span></div>
    <div flex="~ gap2 items-center">Written in <div i-logos-go /><span text-sky></span></div>
  </div>
  <div i-ph-arrow-right-duotone />
  <div flex="~ col gap2 items-center">
    <div flex="~ gap2 items-center" text-red text-5xl><div i-logos-turbopack-icon />Turbopack</div>
    <div flex="~ gap2 items-center"><span text-green>~700x</span> faster than<div i-logos-webpack /><span text-sky>Webpack</span></div>
    <div flex="~ gap2 items-center"><span text-green>"10x"</span> faster than<div i-logos-vitejs /><span text-purple>Vite</span></div>
    <div flex="~ gap2 items-center">Written in <img src="/ferris.svg" w-8 /><span text-orange>Rust</span></div>
  </div>
</div>

<div flex="~ gap8 items-center" mt8>
  <div flex="~ col gap2 items-center">
    <div flex="~ gap2 items-center" text-yellow text-5xl><div i-logos-babel /></div>
    <div op50>Very slow</div>
    <div flex="~ gap2 items-center">Written in <div i-logos-javascript /><span text-yellow>JavaScript</span></div>
  </div>
  <div i-ph-arrow-right-duotone />
  <div flex="~ col gap2 items-center">
    <div flex="~ gap2 items-center" text-red text-5xl><div i-logos-swc /></div>
    <div flex="~ gap2 items-center"><span text-green>20-70x</span> faster than<div i-logos-babel /></div>
    <div flex="~ gap2 items-center">Written in <img src="/ferris.svg" w-8 /><span text-orange>Rust</span></div>
  </div>
  <div i-ph-arrow-right-duotone />
  <div flex="~ col gap2 items-center">
    <div flex="~ gap2 items-center" text-red text-5xl><img src="/lightning-down.svg" w-10 /><span text-orange>Rolldown</span></div>
    <div flex="~ gap2 items-center"><span text-green>3x</span> faster than<div i-logos-swc /></div>
    <div flex="~ gap2 items-center">Written in <img src="/ferris.svg" w-8 /><span text-orange>Rust</span></div>
  </div>
</div>

<div font-hand bold absolute rotate--4 left-74 bottom-18 text-3xl text-orange delay-600 v-click="2">Rust</div>
<div font-hand bold absolute rotate--4 left-118 bottom-18 text-3xl text-orange delay-2000 v-click="2">Rust</div>
<div v-click="1" mt16>"If a program can be written in <span v-mark.linethrough.orange="2">C</span>, it will be written in <span v-mark.linethrough.orange.delay1000="2">C</span> eventually."</div>

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

---

# Why ky over axios?

<v-clicks flex="~ col gap4" mt8>

- Smaller bundle size (ky <span text-green>3.3KB</span> gzipped, axios <span text-yellow>11.7KB</span> gzipped)
- ESM first design
- Built-in retries, timeouts, and hooks
- Supports Readable Streams out of the box
- TypeScript out of the box

</v-clicks>

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

---

# Why you should not directly use `useEffect` <br>to fetch data from API in React

Especially using redux dispatch in `useEffect`

<div pt6 />

<v-clicks flex="~ col gap-8">

- Most network requests should be sent in the <span text-lime2>Event Handler</span>
- First screen data can be rendered directly on the server side <span text-green2>(SSR)</span>
- "Render as you fetch" - based on <span text-teal2>Suspense</span>
- "Fetch on render" - use <span text-sky>SWR</span> or <span text-sky>React Query</span> instead

</v-clicks>

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

---
glow: bottom
---

# Why reinvent the wheel?

<div v-click op50>Just use <code>swr</code> and make your life <span text-2xl scale-110 text-green font-hand>easier!</span></div>

<img v-after src="/swr-trend.png" mt8 />

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

---
layout: quote
---

<div>"There are 2 hard problems in computer science: cache invalidation, <span v-mark.lime.box>naming things</span>, and off-by-1 errors."</div>

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

---
glow: bottom
---

# State of CSS - Usage

<img src="/state-of-css-usage.png" />

<div mt4 text-center>
Statistics from <a href="https://2023.stateofcss.com">stateofcss.com</a>
</div>

---
glow: bottom
---

# State of CSS - Retention

<img src="/state-of-css-retention.png" />

<div mt4 text-center>
Statistics from <a href="https://2023.stateofcss.com">stateofcss.com</a>
</div>

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

---

# Great Features

<v-clicks flex="~ col gap4" mt8>

- Zero dependencies
- Works in Node.js and all modern browsers
- Tiny: <span text-green>8kb</span> minified + zipped
- Immutable: methods (e.g. `.optional()`) return a new instance
- Concise, chainable interface
- Functional approach: parse, don't validate
- Works with plain JavaScript too! You don't need to use TypeScript.

</v-clicks>

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

---
glow: bottom
---

# Why zod?

<img v-click src="/zod-trend.png" mt8 />

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

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# Thank you!

Slides also deployed on [Vercel](https://cutting-edge-frontend.vercel.app)

<!--
That's all for my talk, thank you, and happy hacking!
-->
