const e=document.querySelector("body"),t=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");t.addEventListener("click",(()=>{setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),r.addEventListener("click",(()=>{clearInterval(randomHex)}));
//# sourceMappingURL=01-color-switcher.0d82b0a2.js.map
