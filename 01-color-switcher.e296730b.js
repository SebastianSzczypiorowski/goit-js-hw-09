!function(){var e,t=document.querySelector("body"),n=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");n.addEventListener("click",(function(o){o.preventDefault(),n.disabled=!0,a.disabled=!1,e||(e=setInterval((function(){t.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3))})),a.addEventListener("click",(function(){a.disabled=!0,n.disabled=!1,e&&clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.e296730b.js.map
