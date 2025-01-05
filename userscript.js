// ==UserScript==
// @name         TBJB Tampermonkey Port
// @namespace    http://windows93.net/
// @version      v1
// @description  Fix for TBJB's vulnerability being fixed
// @author       BenSav
// @match        *://www.windows93.net/trollbox*
// @grant        none
// ==/UserScript==


fetch('https://dell-optiplex-790.github.io/tbjb/tb.js')
	.then((response) => response.text())
	.then((tbjb) => {
    document.querySelector("#trollbox_nick_btn").innerText=localStorage.getItem(".config/trollbox/_nick");socket.disconnect(),document.body.querySelectorAll(".trollbox_line").forEach(e=>e.parentElement.removeChild(e));eval(localStorage.getItem(".config/trollbox/tbjb"))
	});
