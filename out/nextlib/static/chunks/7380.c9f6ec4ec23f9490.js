"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7380],{7380:function(n,e,o){o.r(e),o.d(e,{register:function(){return i},unregister:function(){return a}});var r=o(3454),t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(n){if("serviceWorker"in navigator){if(new URL(r.env.PUBLIC_URL,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(r.env.PUBLIC_URL,"/service-worker.js");t?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(o){var r=o.headers.get("content-type");404===o.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):c(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):c(e,n)}))}}function c(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var o=n.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}function a(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}}}]);