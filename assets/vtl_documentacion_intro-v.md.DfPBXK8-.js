import{_ as e,c as a,o as t,a3 as s}from"./chunks/framework.D2SfkUqD.js";const h=JSON.parse('{"title":"¿Qué es Vue Test Library?","description":"","frontmatter":{},"headers":[],"relativePath":"vtl/documentacion/intro-v.md","filePath":"vtl/documentacion/intro-v.md"}'),o={name:"vtl/documentacion/intro-v.md"},r=s('<h1 id="¿que-es-vue-test-library" tabindex="-1">¿Qué es Vue Test Library? <a class="header-anchor" href="#¿que-es-vue-test-library" aria-label="Permalink to &quot;¿Qué es Vue Test Library?&quot;">​</a></h1><h2 id="introduccion" tabindex="-1">Introducción <a class="header-anchor" href="#introduccion" aria-label="Permalink to &quot;Introducción&quot;">​</a></h2><p>Vue Testing Library se basa en DOM Testing Library al agregar API para trabajar con componentes de Vue. Está construido sobre <a href="https://github.com/vuejs/vue-test-utils" target="_blank" rel="noreferrer"><code>@vue/test-utils</code></a>, la biblioteca de prueba oficial para Vue.</p><ul><li><a href="https://github.com/testing-library/vue-testing-library" target="_blank" rel="noreferrer">Vue Testing Library en GitHub</a></li></ul><p>En resumen, Vue Testing Library hace tres cosas:</p><ol><li>Re-exportar las utilidades de consulta y los ayudantes desde DOM Testing Library.</li><li>Oculta los métodos de <code>@vue/test-utils</code> que están en conflicto con la <a href="./guias-de-principios.html">Guías de Principios</a> de Testing Library.</li><li>Ajusta algunos métodos de ambas fuentes.</li></ol><h2 id="el-problema" tabindex="-1">El problema <a class="header-anchor" href="#el-problema" aria-label="Permalink to &quot;El problema&quot;">​</a></h2><p>Desea escribir pruebas mantenibles para sus componentes Vue. Como parte de este objetivo, <strong>desea que sus pruebas eviten incluir detalles de implementación de sus componentes</strong>. Prefiere concentrarse en hacer que sus pruebas le brinden la confianza para la que fueron diseñadas.</p><h2 id="esta-solucion" tabindex="-1">Esta solución <a class="header-anchor" href="#esta-solucion" aria-label="Permalink to &quot;Esta solución&quot;">​</a></h2><p>Vue Testing Library es una solución muy liviana para probar componentes de Vue. Proporciona funciones de utilidad livianas además de <code>@vue/test-utils</code>, de una manera que fomenta mejores prácticas de prueba.</p><p>Su guías de principios son:</p><blockquote><p><a href="./guias-de-principios.html">Cuanto más se parezcan sus pruebas a la forma en que se usa su software, más confianza le pueden brindar.</a></p></blockquote><p>Entonces, en lugar de tratar con instancias de componentes Vue renderizados, <strong>sus pruebas funcionarán con nodos DOM reales</strong>.</p><p>Las utilidades que proporciona esta biblioteca facilitan la consulta del DOM de la misma manera que lo haría el usuario. Le permiten encontrar elementos por el texto de su etiqueta, encontrar enlaces y botones a partir de su texto y afirmar que su aplicación es <strong>accesible</strong>.</p><p>También expone una forma recomendada de encontrar elementos por un <code>data-testid</code> como una &quot;escotilla de escape&quot; para elementos donde el contenido del texto y la etiqueta no tienen sentido o no son prácticos.</p><h2 id="inicio-rapido" tabindex="-1">Inicio Rápido <a class="header-anchor" href="#inicio-rapido" aria-label="Permalink to &quot;Inicio Rápido&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i -D @testing-library/vue@next</span></span></code></pre></div><p>Ahora puede usar todos los comandos <code>getBy</code>, <code>getAllBy</code>, <code>queryBy</code> y <code>queryAllBy</code> de DOM Testing Library. Vea aquí <strong><a href="https://testing-library.com/docs/queries/about/#types-of-queries" target="_blank" rel="noreferrer">la lista completa de consultas</a></strong>.</p><p>También puede estar interesado en instalar <code>@testing-library/jest-dom</code> para que pueda usar <a href="https://github.com/testing-library/jest-dom#readme" target="_blank" rel="noreferrer">los comparadores Jest personalizados</a> para el DOM.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i -D @testing-library/jest-dom</span></span></code></pre></div>',20),n=[r];function i(l,c,u,d,p,b){return t(),a("div",null,n)}const g=e(o,[["render",i]]);export{h as __pageData,g as default};
