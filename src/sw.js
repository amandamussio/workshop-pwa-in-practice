const urls = [
	'/',
	'/index.html'
];

//responsável por avisar olha o service worker esta registrado
self.addEventListener('activate', (event) => {
	console.log('SW activated');
});

self.addEventListener('install', (event) => {
	console.log('SW installed');

	event.waitUntil(
		//tanto abre como cria um cache novo, recebe uma props
		caches.open('todo-list-v1').then((cache) => {
			console.dir(cache);
			//recebe o que eu quero cachear
			//return cache.put('/index.html');
			return cache.addAll(urls).catch((error) => {
				console.log('Prefetch fail', error)
			});
		}).then(() => {
			return self.skipWaiting();
		});
	);
});

