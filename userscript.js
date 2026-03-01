// ==UserScript==
// @name         TBJB Tampermonkey Port
// @namespace    http://windows93.net/
// @version      v1
// @description  Port of TBJB to Tampermonkey
// @author       BenSav, dell-optiplex-790
// @match        *://v2.windows93.net/trollbox*
// @grant        none
// ==/UserScript==

socket.disconnect()
$store.set('.config/trollbox/_nick', $store.get('.config/trollbox/_nick') || $store.get('.config/trollbox/nick'))
fetch('https://bensav8.github.io/tbjb/tb.js')
	.then((response) => response.text())
	.then((tbjb) => {
		localStorage.setItem('.config/trollbox/tbjb', tbjb)
    setTimeout(function() {
    document.querySelector("#trollbox_nick_btn").innerText=localStorage.getItem(".config/trollbox/_nick");socket.disconnect(),document.body.querySelectorAll(".trollbox_line").forEach(e=>e.parentElement.removeChild(e));eval(localStorage.getItem(".config/trollbox/tbjb"))
    }, 1100)
    });
