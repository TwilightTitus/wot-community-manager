const VERSION = "1.1.0";


const CACHENAME = `wot-clan-manager:${VERSION}`;

const INITAL_CACHED_FILES = ["/index.html"];
const ALLOWED_URLS = [new RegExp(`${location.origin}/.*`, "i")];
const DENIED_URLS = [new RegExp(`${location.origin}/api/.*`, "i")];

const matchByFilter = (url, filters) => {
	for (let filter of filters)
		if ((typeof filter === "string" && filter == url) || (filter instanceof RegExp && filter.test(url)))
			return true;
	return false;
}

const isRequestCacheable = (request) => {
	const url = request.url;
	//console.log({ url });
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
				if (cacheName != CACHENAME) {
					console.log(`[Service Worker] Delete cache: ${cacheName}`)
					return caches.delete(cacheName);
				}
			}));
		})()
	);
};

self.addEventListener("fetch", (event) => {
	const request = event.request;
	event.respondWith(
		(async () => {
			//console.log(`[Service Worker] Fetching resource: ${request.url}`);
			let response = await caches.match(request);
			if (response) {
				//console.log(`[Service Worker] Cached resource: ${request.url}`);
				return response;
			}
			response = await fetch(request);
			if (response.ok && response.status < 300 && isRequestCacheable(request)) {
				//console.log(`[Service Worker] Caching new resource: ${request.url}`);
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
	if(event.data == "validate-cache"){
		(async () => {
			await self.clients.claim();

			const cachenames = await caches.keys();
			cachenames.map((cacheName) => {
				return caches.delete(cacheName);
			});
		})() 
	}
});
