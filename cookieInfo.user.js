// ==UserScript==
// @name        Cookie disclaimer remover
// @description God how we in Europe hate the idiotic law that enforces every site to display a huge disclaimer about cookies being used!
// @include     http*://*
// @version     0.2
// @updateURL   https://raw.github.com/ikari-pl/cookie-disclaimer-remover/master/cookieInfo.user.js
// @downloadURL https://raw.github.com/ikari-pl/cookie-disclaimer-remover/master/cookieInfo.user.js
// @copyright   2013+, Cezar "ikari" Pokorski
// ==/UserScript==

function cookieDisclaimerRemove() {    
    var i, e, target = document.querySelectorAll('*[id^="cookie"], *[class^="cookie"]');
    console.log("Cookie disclaimer remover started! :D");
    if (target.length > 0) {
	for (i = 0; i < target.length; i++) {
	    if (!(target[i])) return;
	    e = target[i];
	    e.parentNode.removeChild(e);
	    console.log("Cookie disclaimer found and removed:");
	    console.debug(e);
	}
    }
}

if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", cookieDisclaimerRemove, false);
} else {
    console.log("If you can see this, I don't like your browser. "+
    	"I am a lazy developer that wanted the first version to support "+
    	"his own needs first. So I remove the annoying stuff in the browsers "+
    	"I use, not in the browsers you use. BUT! :) Each and every "+
    	"improvement and pull request is very welcome!");
}
