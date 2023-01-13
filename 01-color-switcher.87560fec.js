const e=document.querySelector("body"),t=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");t.addEventListener("click",(()=>{let t=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3);r.addEventListener("click",(()=>{clearInterval(t)}))}));
//# sourceMappingURL=01-color-switcher.87560fec.js.map
