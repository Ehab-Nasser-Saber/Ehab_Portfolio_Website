'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "82779b202808ea816d9bbba249e3d71a",
".git/config": "279f91f0175a37c3603e9f80bebcd8ef",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4aa4c838206717e8f87db2d3911d7412",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d0ad81ef9f443c73b37719034f607c91",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9585f99d91a31866d3b227b9c40971e6",
".git/logs/refs/heads/main": "d49a1c9ae0e996ce2d0e21a4835e5637",
".git/logs/refs/remotes/origin/main": "5bfac178bbaf991ef1fe7049b69558a3",
".git/objects/02/8b0708fae9d1ee6cf17918c935158bdcf2a3e8": "eae5ec8908371fb2f91904d3dddcab5f",
".git/objects/07/ac563bd167a269f666663f48e394dc97d14560": "31800a4f744b437eb4c044eba6a91851",
".git/objects/09/90e84b3e57c8f47fecbe59defef14fd2af0c78": "156c60ff0746e57d2ab8f938f979e8d6",
".git/objects/0f/f4dbb69bf73183e99a9c7116b86719a0696392": "2ebf7e1e29c3aff7cc4ff6926a2fe3f0",
".git/objects/13/6caabe6c2f20ee81a8c820dc617a04c20f4142": "3c1cca4f7c8ca3be4a2fcd9d82710ff2",
".git/objects/15/b2a6b6f99137e5779e7d61adb810f9e07dcde6": "f9f3d9abdc03626df0254a0881ba717b",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/31fe90e8da8f42982b83412ed7aec3ae669052": "351961f8fb59f82a12002cbd2110b221",
".git/objects/1d/e5f9a51bbd92c18677294713560d80cf4d90be": "8d2646cd3fb4f4862f2db2224066b2dc",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/3f28b30d3d5ea5b541200650c32a45917c236a": "1adec39d1d29eb6d90bcb70fd51b56ea",
".git/objects/27/2554fab082bc12b1aa8c1e068884bbda6eb3da": "dd5cd1ac551d89fa10dea1aec1ddb0a3",
".git/objects/2a/d082a557fa2e1a1719e238e49eeba9b5f8bcf0": "0f374374865df01f0e1a06dd4a62128e",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2c/58c7591994631eeeebbacc0c493d72e01e744e": "4741310f91176cbcbd943060a97614ea",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/34/e91035bfeb179e0c1300b3cb80c84ab6e6b56f": "1cc3bbfa29e3e84ae9963d54929a07c6",
".git/objects/3c/1613ec7d4d6a9d4e77049e0dc4ecd232fc923f": "6ce6ac0efd8e2d6e2c76ffffa95a0cdb",
".git/objects/3c/575af354c76a5f4f96103e897dd4d105ee4410": "b7fd31f822f2d52b347aecbcbcef52a9",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/243b5a48193c0c4212ca0f604a037be60838e2": "c7403d8d8efb194405b38bf1b97780ab",
".git/objects/42/f77a4011bd9315448dab717a049c0a12604a01": "83b6f838a25e4cf168a08095a7fc7f68",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/5f/a2fad2052c3a539d1f15f0b051d16e2e75696f": "28faabf0f71577ef7b5db0cfdbedd88e",
".git/objects/66/773b973dff1fb5836c867f30edf7860a276c74": "2bd4fee546e2f1d4d492648ab3e46868",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/70/db46b30e24a531e4d8c5d9c54c32491cc17694": "5d108d2fe80666e2ae5f5785a70169b2",
".git/objects/73/2bcbbf1f6fe1584f4fb7e095ab0d89dd98c347": "ca9aa923d4d5b269376c199e062ddc14",
".git/objects/74/dac8e70dcb9050f9215962378cdc26a65cb331": "d2598d3ae6f633202bde9c1129e13302",
".git/objects/77/01137ddc96ee787470d725847af3d617efdfc7": "6566b488c407f9b755e69fae42a3e3ab",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7f/ec4c215c8ae83fee85de4e244807db6ae9c8b5": "0042b50f4790b6cb305164fb0777f847",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/85/539270218e0aba9916e12024b8c51c2490a096": "1cde615ce6534ad48e272175a64addf0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/d6d43cba42e2065fabd55b822244987f49e4b9": "5a8aeb9c8e7e55535437bda40b856247",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/95/2752774360efad8fadb3a86c564fabb60c68ff": "72c52ce8ed97e971b1bbe49c87738dec",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/fd401598db8a0752ba9398fc7754df7d4a2282": "b700bf8c365952b8fbb1d78c1ee851da",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/3ce1fb2e74dc9b047fbe50dc5aa332d72ef7b0": "78f452767c50b8aaba23397c3c7c1db3",
".git/objects/af/d48cf0dc3f531be5c43acac715ca872c267d8b": "6886e3eb8d124ff75702abcd642eb513",
".git/objects/b0/800345ba9410149a2b816c662e51e361acac13": "429305f7a9765e2dd2348f77e328be8d",
".git/objects/b3/4046c13e18d9b552c43689c2199f6f807809e5": "0dadacbf643c266bbf851d34cd012497",
".git/objects/b5/5570b771b4e45f850244eae225a8589aa27866": "1539a207f58419fdef0fe55a6508044f",
".git/objects/b6/f0ce49ce72085831eb673a94d60b6bb1c0eeb2": "4dfbe4f2665896415f91789e3d9fecd3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/c16e5e00d35c4bbb96dc1e9677eb1d9f66a835": "5d11ae05de0553b3d294dacd0386f1b8",
".git/objects/c2/ba5d101201c6266e33fda27373bda2dec3627f": "9baa5c689b7028defcd25f30e7815b57",
".git/objects/c4/a6118df6408fb3b565c1a6ef5a1a311a03f1b4": "db96ca9dc65e7e71bb8276c495b4f122",
".git/objects/c6/df6e103b8b484c44db9cf549943c7456804b7e": "94fa80e5ef145ffce4e392f1f2784ee9",
".git/objects/c6/eefa62d8799545e6a5475633e75fe9efd8340e": "06b0d15acfd17d830bdf01d70ed9ddee",
".git/objects/c7/9958516f6db58df5916d3e09a324b3d7e739fb": "a8aaf16af65e48cd60d6a27d9bda7196",
".git/objects/ca/7764ea0b44623447929fdee89ecea2be7aba7f": "e1eabdec4d3e6bce71a1c052609995e5",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/e9fd3bcc8f3330f017d6e878c21caec28c9872": "5ff1141ae0ab89e9bd1a783c8e6ab97f",
".git/objects/d0/0546dc31eed1da500148686b4fdaaf6896dec7": "40404dfdb63523734faaaaba29ac2e32",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b987be480c519f0eb2325f7695e15f16c52857": "56904095062295de7b1c064a218fa593",
".git/objects/d7/2ff164d2f6331447041dbcdd4b8c0573a33457": "4dca3adc4c5a4c829cef3a5f52e83271",
".git/objects/d7/800f201cd14fc579d5eee0b4de7c85aa9a7768": "21f8c55ef7e33eb57aa58771c840c9e3",
".git/objects/db/e9d8ea3b9ba460cdb7d8ffbbe1986b93a273b6": "47fcc99d8512fadcc2f17ae3a58be0c8",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/767bde0ddc2c1dc5f5645276102686e1b6fdd3": "9c53b11453ecd55beacbde6fe411d077",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/0ec239cd3f3662483853cafe2d308357eb38f2": "717cb72d3f70f53a3f41eec3af4329ad",
".git/objects/f0/253718b490d6bad9d02181839e404ba9ca6ab4": "04a5047e5198c7e73814d03e1a3bbc7e",
".git/objects/f3/d62675534556ecdb733af044bdb73ace0a66f1": "8dddde2b671f9404bd5aa95c6617de6a",
".git/objects/f8/8094924ce441b3d88d308ba587a1eda80a6840": "7cc2398b0c39b7c1a26d359b07cc4cc7",
".git/objects/fd/adfc1a5ec62168868bb3add29cbe803d41798b": "9ee4979300a8cd95dacee2da1499ca7f",
".git/ORIG_HEAD": "4e687aa289ce58bb996a2f0ffcae8145",
".git/refs/heads/main": "4e687aa289ce58bb996a2f0ffcae8145",
".git/refs/remotes/origin/main": "4e687aa289ce58bb996a2f0ffcae8145",
"assets/AssetManifest.json": "ca93de3b82667266711e4a35b974c151",
"assets/assets/images/anime1.PNG": "dafd5818269b363cb4be770e0d8c4ec6",
"assets/assets/images/anime2.PNG": "9aa59343f86013eddcd92e2540af0f69",
"assets/assets/images/anime3.PNG": "ea50b2a4702b609e0fc08abfd1bde176",
"assets/assets/images/Capture1.PNG": "cfbb1d24b61c1eb71adeb5ecf3d95dd1",
"assets/assets/images/Capture2.PNG": "7251f1c90efbc3775f923536a802d121",
"assets/assets/images/Capture3.PNG": "941b2d409c5fc48cfa7734d7461361ff",
"assets/assets/images/dark.png": "18312f496dfccd337f06c903f08e2379",
"assets/assets/images/Home.png": "48a3b3e39507a29bd8d6bd015059c75d",
"assets/assets/images/light.png": "c5e777c2e0b0ec9079fdddb5ec879dcb",
"assets/assets/images/Login%252001.png": "67968d2b4416b21a5aa89cbde52fdd6a",
"assets/assets/images/profile.jpg": "bbae5aad17377bf111fb7d06eb0d4694",
"assets/assets/images/screen1.png": "c6296706c26a52a45adea5e09ddea5f3",
"assets/assets/images/screen2.png": "f258d47f484bacf98807aa31472cbe0e",
"assets/assets/images/screen3.png": "c7b0ac7758bc193eca984ef07baf48cd",
"assets/assets/images/Spash%2520Screen.png": "23b7e69f5d2b595cffbafd379c6d0822",
"assets/assets/images/vlens1.png": "ec881ec13615908364f8030969978e50",
"assets/assets/images/vlens2.png": "55826c06a63a47b3cc6a1a90c23c777b",
"assets/assets/images/vlens3.png": "a4ef2a861f76109333f9a7ac1d245d96",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ede9cd4c2cee638c79d0ce6880547627",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "8ae00b472ec3937a5bee52055d6bc8b4",
"icons/android-chrome-192x192.png": "f67be3463e66deb3225c018f346615ad",
"icons/android-chrome-512x512.png": "7e7ccb3470b6665af201c4add7d4bb3b",
"icons/apple-touch-icon.png": "610b3da3d5a9e4fa21746dbb07d67b49",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9a2dbe66ee55d0abe7e5edcd3811c016",
"/": "9a2dbe66ee55d0abe7e5edcd3811c016",
"logo.png": "f67be3463e66deb3225c018f346615ad",
"main.dart.js": "6a1e1711ee6cfa9bd3dc8c91aafe4fee",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
