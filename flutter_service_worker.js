'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a2179a9b7b70a234e52cd028bc219278",
"assets/AssetManifest.bin.json": "846935bdae5f8069ed20ccd032c280f2",
"assets/AssetManifest.json": "c360cedc0cc46191e24138f3323860a0",
"assets/assets/appbar.png": "342bf937ae96ad98f6ad01894572aac4",
"assets/assets/bangkit.png": "6c576d2f6678605a56aee23ed46d22e2",
"assets/assets/buzzwise.png": "7c146fd60b633926779dad593ebbba02",
"assets/assets/dicoding_logo.png": "89c076dc587a09a2b7358af49c7a1a99",
"assets/assets/diskominfo.png": "2069eab45e1897bef76da0f3bd96251a",
"assets/assets/dot_grid.png": "04ccf6ab7483fb6a0ea99e4e64c7316d",
"assets/assets/dot_grid_web.png": "604df3320fc4247143a1c682cabec1bb",
"assets/assets/flutter_logo.png": "12558eb410bbb2dfb58f39386d179963",
"assets/assets/github_logo.png": "dfd9c0e6544f69eced03a3e64b49e933",
"assets/assets/home_phone.png": "5e687c871cf3220bba4df9845f17fabf",
"assets/assets/idcamp.png": "dbbf3d74f2976c859da121af0bb657b7",
"assets/assets/images/appbar.png": "342bf937ae96ad98f6ad01894572aac4",
"assets/assets/images/bangkit.png": "6c576d2f6678605a56aee23ed46d22e2",
"assets/assets/images/buzzwise.png": "7c146fd60b633926779dad593ebbba02",
"assets/assets/images/dicoding_logo.png": "89c076dc587a09a2b7358af49c7a1a99",
"assets/assets/images/diskominfo.png": "2069eab45e1897bef76da0f3bd96251a",
"assets/assets/images/dot_grid.png": "04ccf6ab7483fb6a0ea99e4e64c7316d",
"assets/assets/images/dot_grid_web.png": "604df3320fc4247143a1c682cabec1bb",
"assets/assets/images/flutter_logo.png": "12558eb410bbb2dfb58f39386d179963",
"assets/assets/images/github_logo.png": "dfd9c0e6544f69eced03a3e64b49e933",
"assets/assets/images/home_phone.png": "5e687c871cf3220bba4df9845f17fabf",
"assets/assets/images/idcamp.png": "dbbf3d74f2976c859da121af0bb657b7",
"assets/assets/images/instagram_logo.png": "4b0c8dd47638cad35c1bb0e8e74f0cc3",
"assets/assets/images/kiosapp.png": "982c4146c6ad2148fb51dc0e60e8c150",
"assets/assets/images/kotlin_logo.png": "cc7a950cc772514f1b2ce242bf16d3d9",
"assets/assets/images/linkedin_logo.png": "1da29612131a87a39b26ead3dd47e8e7",
"assets/assets/images/photo.jpg": "51c3b9a31123eba76aa983efaa9f64f3",
"assets/assets/images/python_logo.png": "15ee60f982a6ab5e78f7b12fa7d2a968",
"assets/assets/images/twitter_logo.png": "1175c8d689f2418081773a15677e2848",
"assets/assets/instagram_logo.png": "4b0c8dd47638cad35c1bb0e8e74f0cc3",
"assets/assets/kiosapp.png": "982c4146c6ad2148fb51dc0e60e8c150",
"assets/assets/kotlin_logo.png": "cc7a950cc772514f1b2ce242bf16d3d9",
"assets/assets/linkedin_logo.png": "1da29612131a87a39b26ead3dd47e8e7",
"assets/assets/photo.jpg": "51c3b9a31123eba76aa983efaa9f64f3",
"assets/assets/python_logo.png": "15ee60f982a6ab5e78f7b12fa7d2a968",
"assets/assets/twitter_logo.png": "1175c8d689f2418081773a15677e2848",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "6caef7790aa5d2c16a3ea938068a9fbd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e13d6e8c7853d858c69e944ed3c0e49e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0de84054d402f57bcb95e63532f0d83c",
"/": "0de84054d402f57bcb95e63532f0d83c",
"main.dart.js": "f59bfd579399d89d7edb4d1444541f58",
"manifest.json": "8cdde40dfcbfdef7c26350e68bcedc7f",
"version.json": "ed4196a263a7919322bbf877a1c4ca63"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
