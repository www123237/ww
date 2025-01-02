!function(e,t){var r=t.documentElement,i="Fluid_Color_Scheme",a="data-user-color-scheme",o="#color-toggle-icon";function n(e){try{return localStorage.getItem(e)}catch(e){return null}}function c(){var e=getComputedStyle(r).getPropertyValue("--color-mode");return"string"==typeof e?e.replace(/["'\s]/g,""):null}function u(){r.setAttribute(a,s()),function(e){try{localStorage.removeItem(e)}catch(e){}}(i)}var l={dark:!0,light:!0};function s(){var e,t="string"==typeof(e=r.getAttribute("data-default-color-scheme"))?e.replace(/["'\s]/g,""):null;if(l[t])return t;if(t=c(),l[t])return t;var i=(new Date).getHours();return i>=18||i>=0&&i<=6?"dark":"light"}function d(c){var d=c||n(i)||s();if(d===s())u();else{if(!l[d])return void u();r.setAttribute(a,d)}!function(e){if(l[e]){var r=m("dark");e&&(r=m(e));var i=t.querySelector(o);if(i?(i.setAttribute("class","iconfont "+r),i.setAttribute("data",g[e])):Fluid.utils.waitElementLoaded(o,(function(){var i=t.querySelector(o);i&&(i.setAttribute("class","iconfont "+r),i.setAttribute("data",g[e]))})),t.documentElement.getAttribute("data-user-color-scheme")){var a=getComputedStyle(t.documentElement).getPropertyValue("--navbar-bg-color").trim();t.querySelector('meta[name="theme-color"]').setAttribute("content",a)}}}(d),function(e){var r=t.getElementById("highlight-css"),i=t.getElementById("highlight-css-dark");"dark"===e?(i&&i.removeAttribute("disabled"),r&&r.setAttribute("disabled","")):(r&&r.removeAttribute("disabled"),i&&i.setAttribute("disabled",""));setTimeout((function(){t.querySelectorAll(".markdown-body pre").forEach((e=>{var t=Fluid.utils.getBackgroundLightness(e)>=0?"code-widget-light":"code-widget-dark",r=e.querySelector(".code-widget-light, .code-widget-dark");r&&(r.classList.remove("code-widget-light","code-widget-dark"),r.classList.add(t))}))}),200)}(d),function(r){e.REMARK42&&e.REMARK42.changeTheme(r);e.CUSDIS&&e.CUSDIS.setTheme(r);var i=t.querySelector(".utterances-frame");if(i){const t={type:"set-theme",theme:"dark"===r?e.UtterancesThemeDark:e.UtterancesThemeLight};i.contentWindow.postMessage(t,"https://utteranc.es")}var a=t.querySelector("iframe.giscus-frame");if(a){const t={setConfig:{theme:"dark"===r?e.GiscusThemeDark:e.GiscusThemeLight}};a.contentWindow.postMessage({giscus:t},"https://giscus.app")}}(d)}var g={dark:"light",light:"dark"};function m(e){return"icon-"+e}function f(){var e=n(i);if(l[e])e=g[e];else{if(null!==e)return;var r=t.querySelector(o);r&&(e=r.getAttribute("data")),r&&l[e]||(e=g[c()])}return function(e,t){try{localStorage.setItem(e,t)}catch(e){}}(i,e),e}d(),Fluid.utils.waitElementLoaded(o,(function(){d();var e=t.querySelector("#color-toggle-btn");if(e){e.addEventListener("click",(function(){d(f())}));var r=t.querySelector(o);r&&(e.addEventListener("mouseenter",(function(){var e=r.getAttribute("data");r.classList.replace(m(g[e]),m(e))})),e.addEventListener("mouseleave",(function(){var e=r.getAttribute("data");r.classList.replace(m(e),m(g[e]))})))}})),Fluid.utils.waitElementLoaded("iframe",(function(){d()}))}(window,document);