(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();document.addEventListener("DOMContentLoaded",function(){var o=document.getElementById("backdrop"),t=document.getElementById("toggleButton");t.addEventListener("click",function(){o.classList.toggle("is-open")})});document.addEventListener("DOMContentLoaded",function(){var o=document.getElementById("backdrop"),t=document.getElementById("close-btn");t.addEventListener("click",function(){o.classList.remove("is-open")})});document.addEventListener("DOMContentLoaded",function(){var o=document.getElementById("backdrop"),t=document.getElementById("about");t.addEventListener("click",function(){o.classList.remove("is-open")})});document.addEventListener("DOMContentLoaded",function(){var o=document.getElementById("backdrop"),t=document.getElementById("yachts");t.addEventListener("click",function(){o.classList.remove("is-open")})});document.addEventListener("DOMContentLoaded",function(){var o=document.getElementById("backdrop"),t=document.getElementById("review");t.addEventListener("click",function(){o.classList.remove("is-open")})});
//# sourceMappingURL=commonHelpers.js.map
