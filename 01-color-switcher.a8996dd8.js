!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")},o=null;t.startBtn.addEventListener("click",(function(){t.startBtn.setAttribute("disabled",""),t.stopBtn.removeAttribute("disabled",""),clearInterval(o),o=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),console.log("yehooo!")})),t.stopBtn.addEventListener("click",(function(){t.stopBtn.setAttribute("disabled",""),t.startBtn.removeAttribute("disabled",""),clearInterval(o),console.log("yehoooooooooo!")})),console.log(t.startBtn)}();
//# sourceMappingURL=01-color-switcher.a8996dd8.js.map