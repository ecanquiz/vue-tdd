import{_ as e,c as s,o as a,a3 as n}from"./chunks/framework.D2SfkUqD.js";const i="/vue-tdd/assets/mouting-components1.BXw2TNIk.png",o="/vue-tdd/assets/mouting-components2.BB9yc56H.png",t="/vue-tdd/assets/mouting-components3.D8u9CsI3.png",b=JSON.parse('{"title":"Montando Componentes","description":"","frontmatter":{},"headers":[],"relativePath":"cypress-vtc/montando-componentes.md","filePath":"cypress-vtc/montando-componentes.md"}'),r={name:"cypress-vtc/montando-componentes.md"},p=n(`<h1 id="montando-componentes" tabindex="-1">Montando Componentes <a class="header-anchor" href="#montando-componentes" aria-label="Permalink to &quot;Montando Componentes&quot;">​</a></h1><p>Muchas pruebas, independientemente del <em>framework</em> o el tipo, siguen un formato similar: <strong>Arreglar, Actuar y Afirmar</strong>. Este patrón <em>&quot;Arreglar, Actuar, Afirmar&quot;</em> fue acuñado por primera vez en 2001 por Bill Wilke y se explica detalladamente en su publicación de blog <a href="https://xp123.com/articles/3a-arrange-act-assert/" target="_blank" rel="noreferrer">&quot;3A - Arreglar, Actuar, Afirmar&quot;</a>.</p><p>Cuando se trata de pruebas de componentes, el montaje de su componente es donde <strong>Arreglamos</strong> nuestro componente bajo prueba. Es similar a visitar una página en una prueba de extremo a extremo (<em>end-to-end</em>).</p><h2 id="¿que-es-la-funcion-mount" tabindex="-1">¿Qué es la función Mount? <a class="header-anchor" href="#¿que-es-la-funcion-mount" aria-label="Permalink to &quot;¿Qué es la función Mount?&quot;">​</a></h2><p>Enviamos una función <code>mount</code> para cada <em>framework</em> de <em>frontend</em> compatible con Cypress, que se importa del paquete cypress. Es responsable de renderizar los componentes dentro del <em>iframe</em> de espacio aislado (<em>sandboxed</em>) de Cypress y del manejo y la limpieza específica del <em>framework</em>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { mount } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cypress/vue&#39;</span></span></code></pre></div><h2 id="usando-cy-mount-en-cualquier-lugar" tabindex="-1">Usando <code>cy.mount()</code> En Cualquier Lugar <a class="header-anchor" href="#usando-cy-mount-en-cualquier-lugar" aria-label="Permalink to &quot;Usando \`cy.mount()\` En Cualquier Lugar&quot;">​</a></h2><p>Si bien puede usar la función <code>mount</code> en sus pruebas, recomendamos usar <a href="https://docs.cypress.io/api/commands/mount" target="_blank" rel="noreferrer"><code>cy.mount()</code></a>, que se agrega como un <a href="https://docs.cypress.io/api/cypress-api/custom-commands" target="_blank" rel="noreferrer">comando personalizado</a> en el archivo <code>cypress/support/component.js</code>:</p><p>📃<code>cypress/support/component.js</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { mount } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cypress/vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Cypress.Commands.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mount&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, mount)</span></span></code></pre></div><p>Esto le permite usar <code>cy.mount()</code> en cualquier prueba de componente sin tener que importar el comando de montaje específico del framework.</p><p>Puede personalizar <code>cy.mount</code> para que se ajuste a sus necesidades. Por ejemplo, si está utilizando complementos u otras configuraciones globales a nivel de aplicación en su aplicación Vue, puede configurarlas aquí. Para obtener más información, consulte la <a href="https://docs.cypress.io/guides/component-testing/custom-mount-vue" target="_blank" rel="noreferrer">Guía de Personalización de cy.mount() para Vue</a>.</p><h2 id="su-primera-prueba-de-componentes" tabindex="-1">Su Primera Prueba de Componentes <a class="header-anchor" href="#su-primera-prueba-de-componentes" aria-label="Permalink to &quot;Su Primera Prueba de Componentes&quot;">​</a></h2><p>Ahora que tiene un componente, escribamos una especificación que monte el componente.</p><p>Para comenzar, cree un archivo de especificaciones en el mismo directorio que el componente <code>Stepper.vue</code> y asígnele el nombre <strong>Stepper.cy.js</strong>. Luego pega lo siguiente en él:</p><p>📃<code>Stepper.cy.js</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Stepper </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./Stepper.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">describe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;Stepper&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  it</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mounts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cy.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Stepper)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>Aquí, tenemos una sola prueba que asegura que nuestro componente se monta.</p><p>Si ya tiene un componente para el que desea crear una especificación, podemos crear la especificación por usted a través de la aplicación Cypress.</p><p>Haga clic en <strong>&quot;+ New Spec&quot;</strong>, seleccione <strong>&quot;Create from component&quot;</strong> y elija su componente de la lista.</p><p><img src="`+i+'" alt="mouting-components"></p><p><strong>Crear a partir de la tarjeta de componentes</strong></p><p><img src="'+o+'" alt="mouting-components"></p><p><strong>Crear a partir de la lista de componentes</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Si viene de <em>Vue Test Utils</em>, tenga en cuenta que no se usa el valor de retorno de <code>mount</code>. Las pruebas de <em>Cypress Component</em> pueden y deben ser independientes de los componentes internos del <em>framework</em> y rara vez es necesario acceder al <a href="https://test-utils.vuejs.org/api/#wrapper-methods" target="_blank" rel="noreferrer">wrapper</a> en el que se basan <em>Vue Test Utils</em>.</p></div><h2 id="ejecucion-de-la-prueba" tabindex="-1">Ejecución de la Prueba <a class="header-anchor" href="#ejecucion-de-la-prueba" aria-label="Permalink to &quot;Ejecución de la Prueba&quot;">​</a></h2><p>Ahora es el momento de ver la prueba en acción. Abra Cypress si aún no se está ejecutando:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cypress open --component</span></span></code></pre></div><p>::: La bandera <code>--component</code> nos llevará directamente a la prueba de componentes :::</p><p>Y abre el navegador de tu elección. En la lista de especificaciones, haga clic en <strong>Stepper.cy.js</strong> y verá el componente paso a paso montado en el área de prueba.</p><p><img src="'+t+`" alt="mouting-components"></p><p><strong>Prueba de Montaje Stepper</strong></p><p>Una prueba básica que monta un componente en su estado predeterminado es una excelente manera de comenzar a probar. Dado que Cypress representa su componente en un navegador real, tiene muchas ventajas, como ver que el componente se representa como debería, interactuar con el componente en el ejecutor de pruebas y usar las herramientas de desarrollo del navegador para inspeccionar y depurar ambas pruebas y el código del componente.</p><p>Siéntase libre de jugar con el componente <code>Stepper</code> interactuando con los botones de incremento y decremento.</p><h2 id="soporte-jsx-opcional" tabindex="-1">Soporte JSX opcional <a class="header-anchor" href="#soporte-jsx-opcional" aria-label="Permalink to &quot;Soporte JSX opcional&quot;">​</a></h2><p>El comando <code>mount</code> es compatible con la sintaxis de objetos de Vue Test Utils, pero también se puede usar con la sintaxis JSX de Vue (siempre que haya configurado su paquete para admitir la transpilación de archivos JSX o TSX).</p><p>La sintaxis del objeto para la función <code>mount</code> es idéntica a la versión de Vue Test Utils que usaría con la versión de Vue de su aplicación.</p><p>El resto de esta guía mostrará pruebas en la sintaxis de Vue Test Utils. Para JSX consulte la documentación oficial de Cypress.</p><h2 id="cypress-y-testing-library" tabindex="-1">Cypress y Testing Library <a class="header-anchor" href="#cypress-y-testing-library" aria-label="Permalink to &quot;Cypress y Testing Library&quot;">​</a></h2><p>Si bien Cypress no usa <a href="https://testing-library.com/" target="_blank" rel="noreferrer">Testing Library</a> en su guía, muchas personas podrían preguntarse si es posible hacerlo con Cypress y la respuesta es ¡sí!</p><p>Cypress ama el proyecto <em>Testing Library</em>. Utiliza <em>Testing Library</em> internamente, y su filosofía se alinea estrechamente con el espíritu y el enfoque de <em>Testing Library</em> para escribir pruebas. Apoyamos firmemente sus mejores prácticas.</p><p>En particular, si está buscando más recursos para comprender cómo le recomendamos que enfoque las pruebas de sus componentes, consulte:</p><ul><li><a href="https://testing-library.com/docs/guiding-principles/" target="_blank" rel="noreferrer">Guiding Principles - Testing Library</a></li><li><a href="https://testing-library.com/docs/queries/about/#priority" target="_blank" rel="noreferrer">Priority of Queries - Testing Library</a></li></ul><p>Para los fanáticos de <a href="https://testing-library.com/docs/cypress-testing-library/intro/" target="_blank" rel="noreferrer">Testing Library</a>, querrá instalar <code>@testing-library/cypress</code> en lugar del paquete <code>@testing-library/vue</code>.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i -D @testing-library/cypress</span></span></code></pre></div><p>Las instrucciones de configuración son las mismas para E2E y Pruebas de Componentes. Dentro de su archivo de soporte de componentes, importe los comandos personalizados.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// cypress/support/component.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// cy.findBy* commands will now be available.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This calls Cypress.Commands.add under the hood</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@testing-library/cypress/add-commands&#39;</span></span></code></pre></div><p>Para los usuarios de TypeScript, los tipos se empaquetan junto con el paquete <em>Testing Library</em>. Consulte las instrucciones de configuración más recientes en los documentos de <em>Testing Library</em>.</p><h2 id="proximos-pasos" tabindex="-1">Próximos Pasos <a class="header-anchor" href="#proximos-pasos" aria-label="Permalink to &quot;Próximos Pasos&quot;">​</a></h2><p>Ahora que tenemos nuestro componente montado, a continuación aprenderemos cómo escribir pruebas contra él.</p>`,50),l=[p];function c(d,u,m,h,g,k){return a(),s("div",null,l)}const E=e(r,[["render",c]]);export{b as __pageData,E as default};
