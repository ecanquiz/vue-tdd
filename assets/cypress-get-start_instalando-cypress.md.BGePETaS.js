import{_ as e,c as a,o as s,a3 as i}from"./chunks/framework.D2SfkUqD.js";const r="/vue-tdd/assets/installing-cli.3465fe6.Dh5JXWvR.mp4",o="/vue-tdd/assets/installing-global.437b00b.CnpWYaxg.mp4",y=JSON.parse('{"title":"Instalando Cypress","description":"","frontmatter":{},"headers":[],"relativePath":"cypress-get-start/instalando-cypress.md","filePath":"cypress-get-start/instalando-cypress.md"}'),n={name:"cypress-get-start/instalando-cypress.md"},t=i('<h1 id="instalando-cypress" tabindex="-1">Instalando Cypress <a class="header-anchor" href="#instalando-cypress" aria-label="Permalink to &quot;Instalando Cypress&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">Lo que aprenderás</p><ul><li>Cómo instalar Cypress a través de npm</li><li>Cómo instalar Cypress mediante descarga directa</li><li>Cómo versionar y ejecutar Cypress a través de <code>package.json</code></li></ul></div><p>Primero, asegúrese de tener todos los <a href="./instalando-cypress.html#requisitos-del-sistema">requisitos del sistema</a>.</p><h2 id="instalacion" tabindex="-1">Instalación <a class="header-anchor" href="#instalacion" aria-label="Permalink to &quot;Instalación&quot;">​</a></h2><h2 id="npm-install" tabindex="-1"><code>npm install</code> <a class="header-anchor" href="#npm-install" aria-label="Permalink to &quot;`npm install`&quot;">​</a></h2><p>Instale Cypress a través de npm:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /your/project/path</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install cypress --save-dev</span></span></code></pre></div><p>Esto instalará Cypress localmente como una dependencia de desarrollo para su proyecto.</p><blockquote><p>Asegúrese de haber ejecutado <a href="https://docs.npmjs.com/cli/v8/commands/npm-init" target="_blank" rel="noreferrer"><code>npm init</code></a> o tener una carpeta <code>node_modules</code> o un archivo <code>package.json</code> en la raíz de su proyecto para asegurarse de que cypress esté instalado en el directorio correcto.</p></blockquote><video controls><source src="'+r+'"></video><div class="info custom-block"><p class="custom-block-title">Nota</p><p>Tenga en cuenta que el paquete <code>npm</code> Cypress es un contenedor del binario Cypress. La versión del paquete <code>npm</code> determina la versión del binario descargado. A partir de la versión <code>3.0</code>, el binario se descarga en un directorio de caché global para usarse en todos los proyectos.</p><p>Las propiedades del proxy del sistema <code>http_proxy</code>, <code>https_proxy</code> y <code>no_proxy</code> se respetan para la descarga del binario Cypress. También puede usar las propiedades de npm <code>npm_config_proxy</code> y <code>npm_config_https_proxy</code>. Esos tienen una prioridad más baja, por lo que solo se usarán si las propiedades del sistema se resuelven para no usar un proxy.</p></div><div class="tip custom-block"><p class="custom-block-title">Mejores prácticas</p><p>El enfoque recomendado es instalar Cypress con npm porque:</p><ul><li>Cypress se versiona como cualquier otra dependencia.</li><li>Simplifica la ejecución de Cypress en integración continua.</li></ul></div><h2 id="yarn-add" tabindex="-1"><code>yarn add</code> <a class="header-anchor" href="#yarn-add" aria-label="Permalink to &quot;`yarn add`&quot;">​</a></h2><p>Instalación de Cypress a través de <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer"><code>yarn</code></a>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /your/project/path</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add cypress --dev</span></span></code></pre></div><p>Las propiedades del proxy del sistema <code>http_proxy</code>, <code>https_proxy</code> y <code>no_proxy</code> se respetan para la descarga del binario Cypress.</p><h2 id="descarga-directa" tabindex="-1">Descarga directa <a class="header-anchor" href="#descarga-directa" aria-label="Permalink to &quot;Descarga directa&quot;">​</a></h2><p>Si no está utilizando Node o <code>npm</code> en su proyecto o desea probar Cypress rápidamente, siempre puede <a href="https://download.cypress.io/desktop" target="_blank" rel="noreferrer">descargar Cypress directamente desde su CDN</a>.</p><div class="warning custom-block"><p class="custom-block-title">Advertencia</p><p>El registro de ejecuciones en el Dashboard no es posible desde la descarga directa. Esta descarga solo pretende ser una forma rápida de probar Cypress. Para registrar pruebas en el Dashboard, deberá instalar Cypress como una dependencia de <code>npm</code>.</p></div><p>La descarga directa siempre obtendrá la última versión disponible. Su plataforma será detectada automáticamente.</p><p>Luego puede descomprimir manualmente y hacer doble clic. Cypress se ejecutará sin necesidad de instalar ninguna dependencia.</p><video controls><source src="'+o+`"></video><div class="info custom-block"><p class="custom-block-title">Descarga directa para versiones antiguas</p><p>Es posible descargar una versión anterior del CDN agregando el sufijo URL con la versión deseada (por ejemplo, <a href="https://download.cypress.io/desktop/6.8.0" target="_blank" rel="noreferrer">https://download.cypress.io/desktop/6.8.0</a>).</p></div><h2 id="instalacion-avanzada" tabindex="-1">Instalación Avanzada <a class="header-anchor" href="#instalacion-avanzada" aria-label="Permalink to &quot;Instalación Avanzada&quot;">​</a></h2><p>Si tiene requisitos más complejos, desea mejorar su flujo de trabajo de Cypress o simplemente necesita ayuda para solucionar problemas, consulte la referencia de <a href="https://docs.cypress.io/guides/references/advanced-installation" target="_blank" rel="noreferrer">instalación avanzada</a>.</p><h2 id="integracion-continua" tabindex="-1">Integración Continua <a class="header-anchor" href="#integracion-continua" aria-label="Permalink to &quot;Integración Continua&quot;">​</a></h2><p>Lea los documentos de <a href="https://docs.cypress.io/guides/continuous-integration/introduction" target="_blank" rel="noreferrer">Integración Continua</a> para obtener ayuda con la instalación de Cypress en CI. Cuando se ejecuta en Linux, deberá instalar algunas <a href="https://docs.cypress.io/guides/continuous-integration/introduction#Dependencies" target="_blank" rel="noreferrer">dependencias del sistema</a> o puede usar las <a href="https://docs.cypress.io/examples/examples/docker" target="_blank" rel="noreferrer">imágenes de Docker</a> que tienen todo lo que necesita prediseñado.</p><h2 id="requisitos-del-sistema" tabindex="-1">Requisitos del sistema <a class="header-anchor" href="#requisitos-del-sistema" aria-label="Permalink to &quot;Requisitos del sistema&quot;">​</a></h2><h2 id="sistema-operativo" tabindex="-1">Sistema Operativo <a class="header-anchor" href="#sistema-operativo" aria-label="Permalink to &quot;Sistema Operativo&quot;">​</a></h2><p>Cypress es una aplicación de escritorio que se instala en su computadora. La aplicación de escritorio es compatible con estos sistemas operativos:</p><ul><li><strong>macOS</strong> 10.9 y superior (Intel o Apple Silicon de 64 bits (x64 o arm64))</li><li><strong>Linux</strong> Ubuntu 12.04 y superior, Fedora 21 y Debian 8 (x86_64 o Arm de 64 bits (x64 o arm64)) (consulte los <a href="./instalando-cypress.html#requisitos-previos-de-linux">requisitos previos</a> de Linux a continuación)</li><li><strong>Windows</strong> 7 y superior (solo 64 bits)</li></ul><h2 id="node-js" tabindex="-1">Node.js <a class="header-anchor" href="#node-js" aria-label="Permalink to &quot;Node.js&quot;">​</a></h2><p>Si está utilizando <code>npm</code> para instalar Cypress, se admite:</p><ul><li>Node.js 12 o 14 y superior</li></ul><h2 id="hardware" tabindex="-1">Hardware <a class="header-anchor" href="#hardware" aria-label="Permalink to &quot;Hardware&quot;">​</a></h2><p>Cuando se ejecuta Cypress localmente, debería ejecutarse cómodamente en cualquier máquina que sea capaz de desarrollar una web moderna.</p><p>Sin embargo, cuando se ejecuta Cypress en CI, es posible que algunas de las configuraciones de nivel inferior no puedan ejecutar Cypress de manera confiable, especialmente cuando se graban videos o se realizan pruebas más largas.</p><p>Algunos problemas con los que se puede encontrar en CI que podrían ser un signo de recursos insuficientes son:</p><ul><li>Salir temprano durante el <code>run cypress</code> o cerrar abruptamente (&quot;chocarse&quot;)</li><li>Marcos congelados o faltantes en el video que se captura</li><li>Mayor tiempo de ejecución</li></ul><p>Al ejecutar Cypress en CI, le recomendamos que tenga los siguientes requisitos de hardware:</p><h2 id="cpu" tabindex="-1">CPU <a class="header-anchor" href="#cpu" aria-label="Permalink to &quot;CPU&quot;">​</a></h2><ul><li>2 CPU mínimo para ejecutar Cypress</li><li>1 CPU adicional si la grabación de video está habilitada</li><li>1 CPU adicional por proceso que ejecute fuera de Cypress, como: <ul><li>Servidor de aplicaciones (frontend)</li><li>Servidor de aplicaciones (backend)</li><li>Base de datos de la aplicación</li><li>Cualquier infraestructura adicional (Redis, Kafka, etc.)</li></ul></li></ul><h2 id="memoria" tabindex="-1">Memoria <a class="header-anchor" href="#memoria" aria-label="Permalink to &quot;Memoria&quot;">​</a></h2><ul><li>Mínimo de 4GB, 8GB+ para ejecuciones de prueba más largas</li></ul><h2 id="requisitos-previos-de-linux" tabindex="-1">Requisitos Previos de Linux <a class="header-anchor" href="#requisitos-previos-de-linux" aria-label="Permalink to &quot;Requisitos Previos de Linux&quot;">​</a></h2><p>Si está utilizando Linux, querrá tener las dependencias necesarias instaladas en su sistema.</p><h2 id="ubuntu-debian" tabindex="-1">Ubuntu/Debian <a class="header-anchor" href="#ubuntu-debian" aria-label="Permalink to &quot;Ubuntu/Debian&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb</span></span></code></pre></div><h2 id="centos" tabindex="-1">CentOS <a class="header-anchor" href="#centos" aria-label="Permalink to &quot;CentOS&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib</span></span></code></pre></div><h2 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h2><p>Las imágenes de Docker con todas las dependencias requeridas instaladas están disponibles en <a href="https://github.com/cypress-io/cypress-docker-images" target="_blank" rel="noreferrer">cypress/base</a></p><p>Si está ejecutando sus proyectos en contenedores, querrá Cypress en el contenedor con el proceso Node.js.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ui:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cypress/base:latest</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # if targeting a specific node version, use e.g.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # image: cypress/base:14</span></span></code></pre></div><p><code>cypress/base</code> es un reemplazo directo para las <a href="https://hub.docker.com/_/node/" target="_blank" rel="noreferrer">images base docker de node</a>.</p><p>Genial, ¡ahora <a href="./instalando-cypress.html#instalando-cypress">instala Cypress!</a></p><h2 id="proximos-pasos" tabindex="-1">Próximos pasos <a class="header-anchor" href="#proximos-pasos" aria-label="Permalink to &quot;Próximos pasos&quot;">​</a></h2><p>¡Abre la aplicación y pruébala!</p>`,60),l=[t];function d(c,p,u,h,m,b){return s(),a("div",null,l)}const k=e(n,[["render",d]]);export{y as __pageData,k as default};
