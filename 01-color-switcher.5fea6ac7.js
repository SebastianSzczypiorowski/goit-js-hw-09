const t=document.querySelector("body"),e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");const r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),n=stopInterval(r);e.addEventListener("click",r),o.addEventListener("click",n);
//# sourceMappingURL=01-color-switcher.5fea6ac7.js.map
