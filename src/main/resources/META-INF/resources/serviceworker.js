/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./client/modules/serviceworker/index.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
const VERSION = 1;
const CACHENAME = `wot-clan-manager:${VERSION}`;

const INITAL_CACHED_FILES = ["/index.html"];
const ALLOWED_URLS = [new RegExp(`${location.origin}/.*`, "i")];
const DENIED_URLS = [new RegExp(`http://localhost:8080/api/(?!(system/access)).*`, "i")];

const matchByFilter = (url, filters) => {
	for (let filter of filters)
		if ((typeof filter === "string" && filter == url) || (filter instanceof RegExp && filter.test(url)))
			return true;
	return false;
}

const isRequestCacheable = (request) => {
	const url = request.url;
	console.log({url});
	if (matchByFilter(url, DENIED_URLS))
		return false;
	else if (matchByFilter(url, ALLOWED_URLS))
		return true;
	else
		return false;
};

self.oninstall = function(event) {
	event.waitUntil(
		(async () => {
			await self.skipWaiting();
			const cache = await caches.open(CACHENAME);
			cache.addAll(INITAL_CACHED_FILES);
		})(),
	);
};

self.onactivate = function(event) {
	event.waitUntil(
		(async () => {
			await self.clients.claim();

			const cachenames = await caches.keys();
			await Promise.all(cachenames.map((cacheName) => {
				if (cacheName != CACHENAME)
					return caches.delete(cacheName);
			})
			);
		})()
	);
};

self.addEventListener("fetch", (event) => {
	const request = event.request;
	event.respondWith(
		(async () => {			
			console.log(`[Service Worker] Fetching resource: ${request.url}`);
			let response = await caches.match(request);
			if (response) {
				console.log(`[Service Worker] Cached resource: ${request.url}`);
				return response;
			}
			response = await fetch(request);
			if (response.ok && response.status < 300 && isRequestCacheable(request)) {
				console.log(`[Service Worker] Caching new resource: ${request.url}`);
				const cache = await caches.open(CACHENAME);
				try {
					cache.put(request, response.clone());
				} catch (e) {
					console.warn(e)
				}
			}

			return response;
		})()
	);
});

// Communicate via MessageChannel.
self.addEventListener("message", function(event) {
	console.log(`Received message from main thread: ${event.data}`);
	event.ports[0].postMessage(`Got message! Sending direct message back - "${event.data}"`);
});

// Broadcast via postMessage.
function sendMessage(message) {
	self.clients.matchAll().then(function(clients) {
		clients.map(function(client) {
			return client.postMessage(message);
		});
	});
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXdvcmtlci5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQSxvQ0FBb0MsZ0JBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsWUFBWTtBQUNsRTtBQUNBO0FBQ0EscURBQXFELFlBQVk7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsWUFBWTtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsV0FBVztBQUM5RCwyRUFBMkUsV0FBVztBQUN0RixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd290LWNhbXBhLW1hbmFnZXItYmFja2VuZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvLi9jbGllbnQvbW9kdWxlcy9zZXJ2aWNld29ya2VyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBWRVJTSU9OID0gMTtcclxuY29uc3QgQ0FDSEVOQU1FID0gYHdvdC1jbGFuLW1hbmFnZXI6JHtWRVJTSU9OfWA7XHJcblxyXG5jb25zdCBJTklUQUxfQ0FDSEVEX0ZJTEVTID0gW1wiL2luZGV4Lmh0bWxcIl07XHJcbmNvbnN0IEFMTE9XRURfVVJMUyA9IFtuZXcgUmVnRXhwKGAke2xvY2F0aW9uLm9yaWdpbn0vLipgLCBcImlcIildO1xyXG5jb25zdCBERU5JRURfVVJMUyA9IFtuZXcgUmVnRXhwKGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpLyg/IShzeXN0ZW0vYWNjZXNzKSkuKmAsIFwiaVwiKV07XHJcblxyXG5jb25zdCBtYXRjaEJ5RmlsdGVyID0gKHVybCwgZmlsdGVycykgPT4ge1xyXG5cdGZvciAobGV0IGZpbHRlciBvZiBmaWx0ZXJzKVxyXG5cdFx0aWYgKCh0eXBlb2YgZmlsdGVyID09PSBcInN0cmluZ1wiICYmIGZpbHRlciA9PSB1cmwpIHx8IChmaWx0ZXIgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZmlsdGVyLnRlc3QodXJsKSkpXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuY29uc3QgaXNSZXF1ZXN0Q2FjaGVhYmxlID0gKHJlcXVlc3QpID0+IHtcclxuXHRjb25zdCB1cmwgPSByZXF1ZXN0LnVybDtcclxuXHRjb25zb2xlLmxvZyh7dXJsfSk7XHJcblx0aWYgKG1hdGNoQnlGaWx0ZXIodXJsLCBERU5JRURfVVJMUykpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAobWF0Y2hCeUZpbHRlcih1cmwsIEFMTE9XRURfVVJMUykpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5zZWxmLm9uaW5zdGFsbCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0ZXZlbnQud2FpdFVudGlsKFxyXG5cdFx0KGFzeW5jICgpID0+IHtcclxuXHRcdFx0YXdhaXQgc2VsZi5za2lwV2FpdGluZygpO1xyXG5cdFx0XHRjb25zdCBjYWNoZSA9IGF3YWl0IGNhY2hlcy5vcGVuKENBQ0hFTkFNRSk7XHJcblx0XHRcdGNhY2hlLmFkZEFsbChJTklUQUxfQ0FDSEVEX0ZJTEVTKTtcclxuXHRcdH0pKCksXHJcblx0KTtcclxufTtcclxuXHJcbnNlbGYub25hY3RpdmF0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0ZXZlbnQud2FpdFVudGlsKFxyXG5cdFx0KGFzeW5jICgpID0+IHtcclxuXHRcdFx0YXdhaXQgc2VsZi5jbGllbnRzLmNsYWltKCk7XHJcblxyXG5cdFx0XHRjb25zdCBjYWNoZW5hbWVzID0gYXdhaXQgY2FjaGVzLmtleXMoKTtcclxuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoY2FjaGVuYW1lcy5tYXAoKGNhY2hlTmFtZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChjYWNoZU5hbWUgIT0gQ0FDSEVOQU1FKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGNhY2hlcy5kZWxldGUoY2FjaGVOYW1lKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdH0pKClcclxuXHQpO1xyXG59O1xyXG5cclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIiwgKGV2ZW50KSA9PiB7XHJcblx0Y29uc3QgcmVxdWVzdCA9IGV2ZW50LnJlcXVlc3Q7XHJcblx0ZXZlbnQucmVzcG9uZFdpdGgoXHJcblx0XHQoYXN5bmMgKCkgPT4ge1x0XHRcdFxyXG5cdFx0XHRjb25zb2xlLmxvZyhgW1NlcnZpY2UgV29ya2VyXSBGZXRjaGluZyByZXNvdXJjZTogJHtyZXF1ZXN0LnVybH1gKTtcclxuXHRcdFx0bGV0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGVzLm1hdGNoKHJlcXVlc3QpO1xyXG5cdFx0XHRpZiAocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhgW1NlcnZpY2UgV29ya2VyXSBDYWNoZWQgcmVzb3VyY2U6ICR7cmVxdWVzdC51cmx9YCk7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XHJcblx0XHRcdGlmIChyZXNwb25zZS5vayAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDAgJiYgaXNSZXF1ZXN0Q2FjaGVhYmxlKHJlcXVlc3QpKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coYFtTZXJ2aWNlIFdvcmtlcl0gQ2FjaGluZyBuZXcgcmVzb3VyY2U6ICR7cmVxdWVzdC51cmx9YCk7XHJcblx0XHRcdFx0Y29uc3QgY2FjaGUgPSBhd2FpdCBjYWNoZXMub3BlbihDQUNIRU5BTUUpO1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRjYWNoZS5wdXQocmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKGUpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHR9KSgpXHJcblx0KTtcclxufSk7XHJcblxyXG4vLyBDb21tdW5pY2F0ZSB2aWEgTWVzc2FnZUNoYW5uZWwuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRjb25zb2xlLmxvZyhgUmVjZWl2ZWQgbWVzc2FnZSBmcm9tIG1haW4gdGhyZWFkOiAke2V2ZW50LmRhdGF9YCk7XHJcblx0ZXZlbnQucG9ydHNbMF0ucG9zdE1lc3NhZ2UoYEdvdCBtZXNzYWdlISBTZW5kaW5nIGRpcmVjdCBtZXNzYWdlIGJhY2sgLSBcIiR7ZXZlbnQuZGF0YX1cImApO1xyXG59KTtcclxuXHJcbi8vIEJyb2FkY2FzdCB2aWEgcG9zdE1lc3NhZ2UuXHJcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuXHRzZWxmLmNsaWVudHMubWF0Y2hBbGwoKS50aGVuKGZ1bmN0aW9uKGNsaWVudHMpIHtcclxuXHRcdGNsaWVudHMubWFwKGZ1bmN0aW9uKGNsaWVudCkge1xyXG5cdFx0XHRyZXR1cm4gY2xpZW50LnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9