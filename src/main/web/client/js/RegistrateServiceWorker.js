if ('serviceWorker' in navigator) {
	navigator
		.serviceWorker
		.register('./serviceworker.js', { scope: './' })
		.then((reg) => {
			console.log(reg)
			if (reg.installing) {
				console.log('Service worker installing');
			} else if (reg.waiting) {
				console.log('Service worker installed');
			} else if (reg.active) {
				console.log('Service worker active');
				reg.active.postMessage("validate-cache");
			}
		})
		.catch((error) => {
			// Registration failed
			console.log('Registration failed with ' + error);
		});
}