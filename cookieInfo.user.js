// ==UserScript==
// @name        Cookie disclaimer remover
// @description God how we in Europe hate the idiotic law that enforces every site to display a huge disclaimer about cookies being used!
// @include     http*://*
// @version     0.4
// @updateURL   https://raw.github.com/ikari-pl/cookie-disclaimer-remover/master/cookieInfo.user.js
// @downloadURL https://raw.github.com/ikari-pl/cookie-disclaimer-remover/master/cookieInfo.user.js
// @copyright   2013+, Cezar "ikari" Pokorski
// ==/UserScript==

function cookieDisclaimerRemove() {    
    var i, e, target = document.querySelectorAll(
        '*[id*="cookie"], *[class^="cookie"]'
        );
    log("doing a DOM checkup");
    if (target.length > 0) {
        for (i = 0; i < target.length; i++) {
            if (!(target[i])) return; // just in case something vanished
            e = target[i];
            e.parentNode.removeChild(e);
            log("found and removed:");
            console.debug(e);
        }
    } else {
        log("nothing to remove")
    }
}

function log(message) { console.log("[cookie-disclaimer-remover] "+message); }
console.log("Cookie disclaimer remover started! :D");
if (document.readyState === "complete" || document.readyState === "interactive") {
    cookieDisclaimerRemove();
    setTimeout(cookieDisclaimerRemove, 600); // because onet.pl
} else {
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", cookieDisclaimerRemove, false);

    } else {
        console.log("If you can see this, I don't like your browser. "+
            "I am a lazy developer that wanted the first version to support "+
            "his own needs first. So I remove the annoying stuff in the browsers "+
            "I use, not in the browsers you use. BUT! :) Each and every "+
            "improvement and pull request is very welcome!");
    }
}