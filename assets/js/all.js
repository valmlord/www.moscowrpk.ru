"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){var n=document.querySelector(".menu"),r=document.querySelectorAll(".menu-list__link"),o=document.querySelector(".hamburger");o.addEventListener("click",function(){o.classList.toggle("hamburger--active"),n.classList.toggle("menu--active")}),r.forEach(function(e){e.addEventListener("click",function(){o.classList.toggle("hamburger--active"),n.classList.toggle("menu--active")})});var c={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return c.Android()||c.BlackBerry()||c.iOS()||c.Opera()||c.Windows()}},r=document.querySelector("body");if(c.any()){r.classList.add("touch");var u=document.querySelectorAll(".arrow");for(i=0;i<u.length;i++)!function(){var e=u[i].previousElementSibling,t=u[i].nextElementSibling,n=u[i];e.classList.add("parent"),u[i].addEventListener("click",function(){t.classList.toggle("open"),n.classList.toggle("active")})}()}else r.classList.add("mouse");var l=document.querySelectorAll(".includes-type"),a=document.querySelectorAll(".includes-type__services");l.addEventListener("click",function(){l.classList.toggle("includes-type--active"),a.classList.toggle("includes-type__services--active")})}]);
//# sourceMappingURL=all.js.map
