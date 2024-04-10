import{_ as s,c as i,o as a,a3 as e}from"./chunks/framework.D2SfkUqD.js";const F=JSON.parse('{"title":"Entorno de prueba","description":"","frontmatter":{},"headers":[],"relativePath":"vitest/entorno-de-prueba.md","filePath":"vitest/entorno-de-prueba.md"}'),n={name:"vitest/entorno-de-prueba.md"},t=e(`<h1 id="entorno-de-prueba" tabindex="-1">Entorno de prueba <a class="header-anchor" href="#entorno-de-prueba" aria-label="Permalink to &quot;Entorno de prueba&quot;">​</a></h1><h2 id="crear-aplicacion-con-vite" tabindex="-1">Crear aplicación con Vite <a class="header-anchor" href="#crear-aplicacion-con-vite" aria-label="Permalink to &quot;Crear aplicación con Vite&quot;">​</a></h2><p>Para arrancar nuestra aplicación, y ya tener preparado el entorno de pruebas, debemos tener instalado <a href="https://nodejs.org/es/" target="_blank" rel="noreferrer">Node</a>. Avanzaremos y <a href="https://vuejs.org/guide/quick-start.html#creating-a-vue-application" target="_blank" rel="noreferrer">crearemos una aplicación con Vue</a>.</p><p>Ejecute lo siguiente en la línea de comando:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init vue@latest</span></span></code></pre></div><blockquote><p>Como habrá notado, para este curso estamos usando <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer"><code>npm</code></a> para el manejo de paquetes. Siéntase libre de usar <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer"><code>yarn</code></a> si lo desea.</p></blockquote><p>Inmediatamente se establecerá un diálogo con el terminal, lo primero que nos preguntará será definir el nombre del proyecto, en mi caso le colocaré <code>vue-tdd</code>, usted puede colocar el nombre que desee:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vue.js</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> - The Progressive JavaScript Framework</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Project name: › vue-tdd</span></span></code></pre></div><p>Luego el terminal nos hará una serie de preguntas a las cuales responderemos afirmativamente solo para seleccionar lo que está aquí resaltado (<a href="https://router.vuejs.org/guide/" target="_blank" rel="noreferrer">Vue Router</a> + <a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">Pinia</a> + <a href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a> + <a href="https://www.cypress.io/" target="_blank" rel="noreferrer">Cypress</a>), lo demás no lo necesitaremos para el objetivo de este tutorial.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vue.js</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> - The Progressive JavaScript Framework</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Project name: … vue-tdd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Add TypeScript? … No / Yes</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Add JSX Support? … No / Yes</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Add Vue Router for Single Page Application development? … No / Yes</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Add Pinia for state management? … No / Yes</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Add Vitest for Unit Testing? … No / Yes</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Add Cypress for End-to-End testing? … No / Yes</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">✔</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Add ESLint for code quality? … No / Yes</span></span></code></pre></div><p>Finlamente, seguimos las siguientes intrucciones:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Scaffolding</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project in ../vue-tdd...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Done.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Now run:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue-ydd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run dev</span></span></code></pre></div><p>Ya está creado nuestra aplicación Vue, solo hace falta ejecutar las 3 instrucciones anteriores.</p><blockquote><p>Tenga en cuenta que automaticamente tambien se instaló <a href="https://test-utils.vuejs.org/" target="_blank" rel="noreferrer">Vue Test Utils</a>, la biblioteca oficial de <strong>Utilidades de Prueba para Vue</strong>.</p></blockquote><h2 id="configurar-vite-con-vitest" tabindex="-1">Configurar Vite con Vitest <a class="header-anchor" href="#configurar-vite-con-vitest" aria-label="Permalink to &quot;Configurar Vite con Vitest&quot;">​</a></h2><p>Aún nos falta entonar el proyecto realizando los siguientes cambios en el archivo <code>vite.config.js</code>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line highlighted"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">reference</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> types</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitest&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { fileURLToPath, URL } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;node:url&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    alias: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;@&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fileURLToPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./src&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.url))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  test: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    globals: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    environment: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jsdom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>Esto lo hacemos con el propósito de auto-importar las correspondientes funcionalidades de Vitest en los archivos de pruebas.</p><h2 id="probar-el-entorno" tabindex="-1">Probar el Entorno <a class="header-anchor" href="#probar-el-entorno" aria-label="Permalink to &quot;Probar el Entorno&quot;">​</a></h2><p>Comencemos escribiendo una prueba para una función hipotética que suma dos números.</p><blockquote><p>Dentro de la carpeta raiz del proyecto, creemos la carpeta <code>tests</code>. Aquí colocaremos todos nuestros archivos de pruebas.</p></blockquote><p>Nuestra estructura de carpetas debería lucir de la siguiente manera:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue-tdd/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node_modules/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests/</span></span></code></pre></div><p>Creemos un archivo <code>sum.js</code> dentro de la carpeta <code>src/</code> del proyecto:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sum;</span></span></code></pre></div><p>Luego, cree un archivo llamado <code>sum.spec.js</code> dentro de la carpeta <code>tests/</code> para las pruebas. Esto contendrá nuestra prueba real:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/sum&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;adds 1 + 2 to equal 3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>Entonces, ejecute en su terminal:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run test:unit</span></span></code></pre></div><p>En pocos segundos aparecerá en su terminal lo siguiente:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vue-tdd@0.0.0 test:unit</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vitest --environment jsdom</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DEV</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  v0.23.2 /vue-tdd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ✓</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests/sum.spec.js </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ✓</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/components/__tests__/HelloWorld.spec.js </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Files  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> passed </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     Tests</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> passed </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> at  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:42:02</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Duration</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  1.76</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">s </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transform</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 655</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ms, setup </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ms, collect </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">204</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ms, tests </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">38</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PASS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Waiting for file changes...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">       press</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> h to show help, press q to quit</span></span></code></pre></div><p>Excelente, ya realizamos nuestra primera prueba.</p><blockquote><p>Tenga en cuenta que al momento de la creación de nuestra aplicación, Vue también creó una prueba conjunta denominada <code>HelloWorld.spec.js</code>.</p></blockquote><h2 id="instalar-vue-testing-library" tabindex="-1">Instalar Vue Testing Library <a class="header-anchor" href="#instalar-vue-testing-library" aria-label="Permalink to &quot;Instalar Vue Testing Library&quot;">​</a></h2><blockquote><p><a href="https://testing-library.com/docs/vue-testing-library/intro" target="_blank" rel="noreferrer">Vue Testing Library</a> es una solución muy liviana para probar componentes de Vue. Proporciona funciones de utilidad livianas además de <code>@vue/test-utils</code>, de una manera que fomenta mejores prácticas de prueba.</p></blockquote><p>Para instalar Vue Testing Library ejecutemos las siguientes instrucciones:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i -D @testing-library/vue@next</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i -D @testing-library/jest-dom</span></span></code></pre></div><h2 id="instalar-pinia-testing" tabindex="-1">Instalar Pinia Testing <a class="header-anchor" href="#instalar-pinia-testing" aria-label="Permalink to &quot;Instalar Pinia Testing&quot;">​</a></h2><p>Para los componentes con Pinia instalaremos su corredor de pruebas:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i -D @pinia/testing</span></span></code></pre></div><h2 id="instalar-axios" tabindex="-1">Instalar Axios <a class="header-anchor" href="#instalar-axios" aria-label="Permalink to &quot;Instalar Axios&quot;">​</a></h2><p>Para probar algunos ejemplos relacionados con <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Messages" target="_blank" rel="noreferrer">Mensajes HTTP</a> necesitamos instalar <a href="https://axios-http.com/docs/intro" target="_blank" rel="noreferrer">Axios</a>:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i axios</span></span></code></pre></div><blockquote><p>Ahora sí, ha llegado el momento de profundizar sobre el tema.</p></blockquote>`,44),l=[t];function p(h,r,k,o,d,c){return a(),i("div",null,l)}const E=s(n,[["render",p]]);export{F as __pageData,E as default};