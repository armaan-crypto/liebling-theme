(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1:function(n,e,t){"use strict";t.r(e),t.d(e,"isRTL",(function(){return o})),t.d(e,"isMobile",(function(){return a})),t.d(e,"isDarkMode",(function(){return i})),t.d(e,"formatDate",(function(){return r})),t.d(e,"getParameterByName",(function(){return c})),t.d(e,"adjustImageGallery",(function(){return u})),t.d(e,"managePostImages",(function(){return s})),t.d(e,"makeImagesZoomable",(function(){return d}));var o=function(){var n=document.querySelector("html");return["ar","he","fa"].includes(n.getAttribute("lang"))},a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(n,")")).matches},i=function(){var n=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return n&&n.matches},r=function(n){return n?new Date(n).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},c=function(n,e){e||(e=window.location.href),n=n.replace(/[\[\]]/g,"\\$&");var t=new RegExp("[?&]".concat(n,"(=([^&#]*)|&|#|$)")).exec(e);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null},u=function(){for(var n=document.querySelectorAll(".kg-gallery-image img"),e=0,t=n.length;e<t;e++){var o=n[e].closest(".kg-gallery-image"),a=n[e].attributes.width.value/n[e].attributes.height.value;o.style.flex="".concat(a," 1 0%")}},s=function(n){n(".js-post-content").find("img").each((function(){n(this).closest("figure").hasClass("kg-bookmark-card")||n(this).parent().is("a")||n(this).addClass("js-zoomable")}))},d=function(n,e){e(".js-zoomable").on("opened",(function(){setTimeout((function(){var e=n(".medium-zoom-image--opened");e.length>1&&e.last().hide()}),10)}))}},12:function(n,e,t){t(1),t(28),t(30),t(32),t(34),t(36),t(38),n.exports=t(40)},28:function(n,e){},30:function(n,e){},32:function(n,e){},34:function(n,e){},36:function(n,e){},38:function(n,e){},40:function(n,e){}},[[12,0,1]]]);