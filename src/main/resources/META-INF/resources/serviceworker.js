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
const ALLOWED_URLS = ["https?::/localhost/.*"];
const DENIED_URLS = [/[^\/]*\/api\.*/ig];

const matchByFilter = (url, filters) => {
    for(let filter of filters)
        if( (typeof filter ==="string" && filter == url ) || (filter instanceof RegExp && filter.test(url)))
            return true; 
    return false;
}

const isRequestCacheable = (request) => {
    const url = request.url;
    if(matchByFilter(url, DENIED_URLS))
        return false;
    else if(matchByFilter(url, ALLOWED_URLS))
        return true;
    else
        return false;
};

self.oninstall = function (event) {
	event.waitUntil(
		(async () => {
			await self.skipWaiting();
			const cache = await caches.open(CACHENAME);
			cache.addAll(INITAL_CACHED_FILES);
		})(),
	);
};

self.onactivate = function (event) {
	event.waitUntil(
		(async () => {
			await self.clients.claim();

			const cachenames = await caches.keys();
			await Promise.all( cachenames.map((cacheName) => {
					if (cacheName != CACHENAME)
						return caches.delete(cacheName);
				})
			);
		})()
	);
};

self.onfetch = function (event) {
	const request = event.request;
	event.respondWith((async () => {
       let response = await caches.match(request);
       if(response)
        return response;

        response = await fetch(request);
        if(response.ok && response.status < 300 && isRequestCacheable(request)){
            const cache = await caches.open(CACHENAME);
            try{
                cache.put(request, response.clone());
            } catch(e){
                console.warn(e)
            }
        }

        return response;
    
    })());
};

// Communicate via MessageChannel.
self.addEventListener("message", function (event) {
	console.log(`Received message from main thread: ${event.data}`);
	event.ports[0].postMessage(`Got message! Sending direct message back - "${event.data}"`);
});

// Broadcast via postMessage.
function sendMessage(message) {
	self.clients.matchAll().then(function (clients) {
		clients.map(function (client) {
			return client.postMessage(message);
		});
	});
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXdvcmtlci5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFdBQVc7QUFDOUQsMkVBQTJFLFdBQVc7QUFDdEYsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvdC1jYW1wYS1tYW5hZ2VyLWJhY2tlbmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3QtY2FtcGEtbWFuYWdlci1iYWNrZW5kLy4vY2xpZW50L21vZHVsZXMvc2VydmljZXdvcmtlci9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgVkVSU0lPTiA9IDE7XHJcbmNvbnN0IENBQ0hFTkFNRSA9IGB3b3QtY2xhbi1tYW5hZ2VyOiR7VkVSU0lPTn1gO1xyXG5cclxuY29uc3QgSU5JVEFMX0NBQ0hFRF9GSUxFUyA9IFtcIi9pbmRleC5odG1sXCJdO1xyXG5jb25zdCBBTExPV0VEX1VSTFMgPSBbXCJodHRwcz86Oi9sb2NhbGhvc3QvLipcIl07XHJcbmNvbnN0IERFTklFRF9VUkxTID0gWy9bXlxcL10qXFwvYXBpXFwuKi9pZ107XHJcblxyXG5jb25zdCBtYXRjaEJ5RmlsdGVyID0gKHVybCwgZmlsdGVycykgPT4ge1xyXG4gICAgZm9yKGxldCBmaWx0ZXIgb2YgZmlsdGVycylcclxuICAgICAgICBpZiggKHR5cGVvZiBmaWx0ZXIgPT09XCJzdHJpbmdcIiAmJiBmaWx0ZXIgPT0gdXJsICkgfHwgKGZpbHRlciBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBmaWx0ZXIudGVzdCh1cmwpKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7IFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5jb25zdCBpc1JlcXVlc3RDYWNoZWFibGUgPSAocmVxdWVzdCkgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gcmVxdWVzdC51cmw7XHJcbiAgICBpZihtYXRjaEJ5RmlsdGVyKHVybCwgREVOSUVEX1VSTFMpKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGVsc2UgaWYobWF0Y2hCeUZpbHRlcih1cmwsIEFMTE9XRURfVVJMUykpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuc2VsZi5vbmluc3RhbGwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRldmVudC53YWl0VW50aWwoXHJcblx0XHQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRhd2FpdCBzZWxmLnNraXBXYWl0aW5nKCk7XHJcblx0XHRcdGNvbnN0IGNhY2hlID0gYXdhaXQgY2FjaGVzLm9wZW4oQ0FDSEVOQU1FKTtcclxuXHRcdFx0Y2FjaGUuYWRkQWxsKElOSVRBTF9DQUNIRURfRklMRVMpO1xyXG5cdFx0fSkoKSxcclxuXHQpO1xyXG59O1xyXG5cclxuc2VsZi5vbmFjdGl2YXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0ZXZlbnQud2FpdFVudGlsKFxyXG5cdFx0KGFzeW5jICgpID0+IHtcclxuXHRcdFx0YXdhaXQgc2VsZi5jbGllbnRzLmNsYWltKCk7XHJcblxyXG5cdFx0XHRjb25zdCBjYWNoZW5hbWVzID0gYXdhaXQgY2FjaGVzLmtleXMoKTtcclxuXHRcdFx0YXdhaXQgUHJvbWlzZS5hbGwoIGNhY2hlbmFtZXMubWFwKChjYWNoZU5hbWUpID0+IHtcclxuXHRcdFx0XHRcdGlmIChjYWNoZU5hbWUgIT0gQ0FDSEVOQU1FKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gY2FjaGVzLmRlbGV0ZShjYWNoZU5hbWUpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCk7XHJcblx0XHR9KSgpXHJcblx0KTtcclxufTtcclxuXHJcbnNlbGYub25mZXRjaCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdGNvbnN0IHJlcXVlc3QgPSBldmVudC5yZXF1ZXN0O1xyXG5cdGV2ZW50LnJlc3BvbmRXaXRoKChhc3luYyAoKSA9PiB7XHJcbiAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBjYWNoZXMubWF0Y2gocmVxdWVzdCk7XHJcbiAgICAgICBpZihyZXNwb25zZSlcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcblxyXG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XHJcbiAgICAgICAgaWYocmVzcG9uc2Uub2sgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwICYmIGlzUmVxdWVzdENhY2hlYWJsZShyZXF1ZXN0KSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgY2FjaGVzLm9wZW4oQ0FDSEVOQU1FKTtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgY2FjaGUucHV0KHJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIFxyXG4gICAgfSkoKSk7XHJcbn07XHJcblxyXG4vLyBDb21tdW5pY2F0ZSB2aWEgTWVzc2FnZUNoYW5uZWwuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0Y29uc29sZS5sb2coYFJlY2VpdmVkIG1lc3NhZ2UgZnJvbSBtYWluIHRocmVhZDogJHtldmVudC5kYXRhfWApO1xyXG5cdGV2ZW50LnBvcnRzWzBdLnBvc3RNZXNzYWdlKGBHb3QgbWVzc2FnZSEgU2VuZGluZyBkaXJlY3QgbWVzc2FnZSBiYWNrIC0gXCIke2V2ZW50LmRhdGF9XCJgKTtcclxufSk7XHJcblxyXG4vLyBCcm9hZGNhc3QgdmlhIHBvc3RNZXNzYWdlLlxyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XHJcblx0c2VsZi5jbGllbnRzLm1hdGNoQWxsKCkudGhlbihmdW5jdGlvbiAoY2xpZW50cykge1xyXG5cdFx0Y2xpZW50cy5tYXAoZnVuY3Rpb24gKGNsaWVudCkge1xyXG5cdFx0XHRyZXR1cm4gY2xpZW50LnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9