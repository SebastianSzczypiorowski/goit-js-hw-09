const t=document.querySelector("body"),e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");e.addEventListener("click",(function(){setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),o.addEventListener("click",(function(){clearInterval(randomHex)}));
//# sourceMappingURL=01-color-switcher.5d05cada.js.map
