'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_15.part.js": "a5f6356ad8a713d13789a22d4c7015d0",
"main.dart.js_17.part.js": "29352c0ab2e3f40df2d82bccbf3028b5",
"main.dart.js_22.part.js": "81214d6e5e2333e305408287380a4d65",
"main.dart.js_16.part.js": "58e4cad7c43e4d90104833b7f81523bd",
"main.dart.js_39.part.js": "cab367a4b8baae69d64cd4ca8937d577",
"main.dart.js_45.part.js": "b1c439c09d6bec297a9f67adf775cfc3",
"assets/assets/bento_grids/2.png": "da6ca7e21dbf20b44c2b6d060aae7bea",
"assets/assets/bento_grids/3.png": "2552c4d7c71452d2eebd5f448d9f9b8e",
"assets/assets/bento_grids/1.png": "d87305e0f14219540b23bbf8db6dc072",
"assets/assets/fonts/Roboto/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/fonts/Noto_Emoji/NotoEmoji-VariableFont_wght.ttf": "c845179fa1d62f94ae65e3f385547867",
"assets/assets/parallax_image/2.png": "850bd000ae8987b888cf24103bb5233b",
"assets/assets/parallax_image/3.png": "f3552185508b52222be6b645d848f742",
"assets/assets/parallax_image/1.png": "7a563a182c7628946d911319e8723ac9",
"assets/assets/multiple_tilt_image/sun.png": "13407c64d1e500fef85e61da13c36f8c",
"assets/assets/multiple_tilt_image/star.png": "88fdd01d0af3685d071841ceaa1d4eff",
"assets/assets/multiple_tilt_image/moon.png": "66ca64cf2aebb8747a871d1a283bc299",
"assets/assets/parallax_card/Artwork-MichaHuigen.jpg": "7ecf64a6950fbba093029c9bb53b4807",
"assets/AssetManifest.bin": "1c0565baf57d6083a0edf293b04fc3ce",
"assets/NOTICES": "910eed29af3411ddff29cacf0cfb9ef2",
"assets/AssetManifest.json": "29f354755b016588755d704e970ee693",
"assets/fonts/MaterialIcons-Regular.otf": "68dd1b22402b44515b572c10cec167d5",
"assets/packages/remixicon_updated/fonts/Remix.ttf": "c1f9443f4d49d2ed763a67eea90212d0",
"assets/FontManifest.json": "89aaafdbc321fbedae9c5858acbc3f64",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "58854fed9c060789f2df26c91219188f",
"main.dart.js_32.part.js": "80b73efb206e92de22179149d0c634f7",
"version.json": "b115df24e6275bac181f045fb030ae6e",
"manifest.json": "a18b7e0aa2c53cc9f83f5fb323bb8f8a",
"main.dart.js_29.part.js": "2469603234a1618d61bc837833bc856f",
"main.dart.js_52.part.js": "7268eedb238ac01ff22fd3e764b38be3",
"main.dart.js_12.part.js": "d7450b7e6f859cf7c94b64adeb91d125",
"main.dart.js_25.part.js": "782a33eed08b579c93209184fa85caf5",
"main.dart.js_41.part.js": "eaf9f8ece4b9839c368d5961ba712041",
"main.dart.js_37.part.js": "f0e555716398665c9b30c429dd532b93",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"main.dart.js_31.part.js": "efd1d5278fa3aa93a6b72b5a644291ae",
"main.dart.js_47.part.js": "b15a70665b5b6d4a438ac6f5cfef1f15",
"main.dart.js_26.part.js": "487dc0b2dd818bb788f71d703bb1bc89",
"main.dart.js_10.part.js": "7c9a9a32ae5d2367caa9986f19b37075",
"main.dart.js_57.part.js": "4c6c7561de4c5d127336b71e309aff91",
"main.dart.js_8.part.js": "99bb2a670b73d546a92c76d0b85c80f9",
"main.dart.js_42.part.js": "a441da51668633a93e830f0cfea404e5",
"css/loading/loading.css": "13e1eef8ceb74521632bc8f17fc56d45",
"main.dart.js_54.part.js": "8169e27e4303368f4c2b1603478ffbce",
"main.dart.js_56.part.js": "3b18904842463c0b1358fcd7f7825ebe",
"main.dart.js_2.part.js": "f13a059ea9964cc98f2464a8fdc0575a",
"main.dart.js_36.part.js": "79cdf3813e9759acd73727252e618bf3",
"main.dart.js_49.part.js": "07849150b7516b5aa21946f595220571",
"main.dart.js_53.part.js": "2e7432100fbcf536a33bc4b3ab1bd94e",
"main.dart.js_23.part.js": "4ff312316445ec119734a0ccb313e39f",
"main.dart.js_21.part.js": "15ddef27761c446067f1ad9d11c7fc9d",
"index.html": "8b439c84cc297e7184138ddad57aedd9",
"/": "8b439c84cc297e7184138ddad57aedd9",
"main.dart.js_51.part.js": "d6c202420bb043d7408083becff9fb5f",
"main.dart.js_1.part.js": "6c165bb79eee91629693c3ed78a94875",
"main.dart.js_14.part.js": "ae42bd1766d44aee71ec4193d75843b4",
"main.dart.js_6.part.js": "c48d3829150688c18e88d50137f30cc4",
"main.dart.wasm": "13b2ef10e21012a80dad843e83db24ff",
"main.dart.js_50.part.js": "acb163d3870b65927ccd5b06286497b6",
"main.dart.js_11.part.js": "a9caeb74418fa2672c746daba92dabb0",
"main.dart.js_55.part.js": "3d157feb6880e0df69130ca3656fa81b",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_34.part.js": "8633d95756214b80b29f63f1b13396eb",
"main.dart.js_9.part.js": "9d3c703c50b120e98afeb538b13eadf7",
"main.dart.js_27.part.js": "1cc72003634ae95435b11314bc6a2c9b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_20.part.js": "1eb8223cb3712ac56d0caeeea4262ad8",
"main.dart.mjs": "91861312d7b68e52a816b017220beb72",
"main.dart.js_48.part.js": "756595f7ed5b50e3a10ceb7633e09b0f",
"main.dart.js_13.part.js": "6195e49109e3684f72cc7662de378d91",
"main.dart.js_7.part.js": "5310f59b8c9e8915fe3a68ad0e9ce69d",
"flutter_bootstrap.js": "b2b0264378ceef0b24d17414fbc11368",
"main.dart.js_28.part.js": "fc5789fd2a2d6563271bb591fc97627a",
"main.dart.js_44.part.js": "27f962044bd4fa2c7e76add1eec767dc",
"main.dart.js_4.part.js": "f1a741923a486658e0af0b617f73687e",
"main.dart.js_30.part.js": "87e9992ec6a6dda1a46c948e10981438",
"main.dart.js_5.part.js": "ab7a373e211620c170756062fba6cb23",
"main.dart.js": "e9dd3ca3ced94d7ea0bacb189b2de92d",
"main.dart.js_46.part.js": "a611b8337145e55da109acd6aaeaac5b",
"main.dart.js_43.part.js": "873069fa81d9819992bda2540fd9bec4",
"main.dart.js_19.part.js": "39a6f9544a382af82b460713b7bda627",
"main.dart.js_24.part.js": "74858a58dfebb521c61bdbc3f41eb233",
"main.dart.js_33.part.js": "0ac1097e457c8b514ebb9e531fda8280",
"main.dart.js_3.part.js": "ba038bb402e454cb8e4edbe3c1375932"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
