'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "5dabc6181eeb8d85b6574eccb947b598",
"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "42d68c84d661935fc843c6dc0ffb38ff",
"/": "42d68c84d661935fc843c6dc0ffb38ff",
"icons/android-chrome-192x192.png": "f67be3463e66deb3225c018f346615ad",
"icons/android-chrome-512x512.png": "7e7ccb3470b6665af201c4add7d4bb3b",
"icons/apple-touch-icon.png": "610b3da3d5a9e4fa21746dbb07d67b49",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"logo.png": "f67be3463e66deb3225c018f346615ad",
"assets/AssetManifest.smcbin": "a64001c5d5f956eb3926cdc4fb1b46cd",
"assets/AssetManifest.json": "9dddc4e2c760dfddca71817fe6e11817",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/assets/lottie/loading_lottie.json": "9cb4ac4e123ccd1325e82229a4661f5d",
"assets/assets/images/view1.png": "5873c6e443f00692e56f460df83d76d5",
"assets/assets/images/screen1.png": "c6296706c26a52a45adea5e09ddea5f3",
"assets/assets/images/Login%252001.png": "67968d2b4416b21a5aa89cbde52fdd6a",
"assets/assets/images/Capture3_website.PNG": "941b2d409c5fc48cfa7734d7461361ff",
"assets/assets/images/flutter2.jpg": "d7e789c3b8bcb2b7880dd3b4b1d3edd6",
"assets/assets/images/view3.png": "3a13cfd0ef6a6f21d58d1768c3f6018c",
"assets/assets/images/blnk1.png": "985ec0010d935cdbe927ead4e33fe9e6",
"assets/assets/images/Splash%2520Screen.png": "23b7e69f5d2b595cffbafd379c6d0822",
"assets/assets/images/Capture2_website.PNG": "7251f1c90efbc3775f923536a802d121",
"assets/assets/images/flutter.jpg": "fa6ae4fe7d688ae7b088b4ee4ddc3bb7",
"assets/assets/images/screen3.png": "c7b0ac7758bc193eca984ef07baf48cd",
"assets/assets/images/blnk2.png": "557bad3bd56cc9e74b2f3d28b0db55ef",
"assets/assets/images/flutter3.png": "c1895037c0e52d4d937095263d050623",
"assets/assets/images/view2.png": "69da428e464beb1d13cf3e47aa5a17fe",
"assets/assets/images/blnk3.png": "e9d4ec3815ac7b08f855e68b00a2a653",
"assets/assets/images/light.png": "c5e777c2e0b0ec9079fdddb5ec879dcb",
"assets/assets/images/vlens2.png": "55826c06a63a47b3cc6a1a90c23c777b",
"assets/assets/images/dark.png": "18312f496dfccd337f06c903f08e2379",
"assets/assets/images/Home.png": "48a3b3e39507a29bd8d6bd015059c75d",
"assets/assets/images/vlens1.png": "ec881ec13615908364f8030969978e50",
"assets/assets/images/vlens3.png": "a4ef2a861f76109333f9a7ac1d245d96",
"assets/assets/images/screen2.png": "f258d47f484bacf98807aa31472cbe0e",
"assets/assets/images/Capture1_website.PNG": "cfbb1d24b61c1eb71adeb5ecf3d95dd1",
"assets/FontManifest.json": "6a84e6c28a318c1ef29352d8cf66d39c",
"assets/NOTICES": "5d11594ed822efba69a6f1df6fb4c64d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "26a6d3d002f4154120950f6e36cb9862"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
