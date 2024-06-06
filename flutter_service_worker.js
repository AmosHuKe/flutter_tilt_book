'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_48.part.js": "f8c1e5243b23692c7145f26966aaf284",
"main.dart.js_44.part.js": "30c26fc70d29afc58fe80d0f8d73ccb3",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"main.dart.js_20.part.js": "31306cc177d72d62d4aa40a9455c4c44",
"main.dart.js_14.part.js": "b3c503640769b26cbbd9a1c22a768a4a",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_49.part.js": "edc3e3279f219c405b7e6b972c565e61",
"main.dart.js_29.part.js": "494d06ff1e7c4b7f6d9a3cfacd4459a9",
"manifest.json": "a18b7e0aa2c53cc9f83f5fb323bb8f8a",
"main.dart.js_26.part.js": "e3ac4abb11b74bbf28054b07c5a9bcd1",
"main.dart.js_2.part.js": "fd9b42d52e1dbe9a897f6de8f27e6fae",
"main.dart.js_16.part.js": "ee93e80793513ef81839f604d3580bd0",
"css/loading/loading.css": "13e1eef8ceb74521632bc8f17fc56d45",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_28.part.js": "61f4be947d9d821b1396361da81dd0ea",
"main.dart.js_41.part.js": "3dda3e7cc5e7f36f367516e60f3b99a9",
"main.dart.js_1.part.js": "5281722a8af5e9c4b314c4a1937822b5",
"main.dart.js_18.part.js": "22a58be2fb9e7a1c708b16441d5ab39e",
"main.dart.js_13.part.js": "742fb120446db972a62e5a755511fc86",
"main.dart.js_42.part.js": "8aa5ed74b3a7c0dffc77296f692a99be",
"main.dart.js_8.part.js": "e4aa446054b7cddef74bd8c6468b7e8a",
"flutter_bootstrap.js": "4c3e1015e10f58039d964422a52ba38e",
"main.dart.js_33.part.js": "e09381310c1d5827fffca1d082c1957a",
"main.dart.js_34.part.js": "3f40c25aa3aea42a4673002077614382",
"main.dart.js_7.part.js": "ddf9860f81dbd970a41de0a890840730",
"version.json": "b39f60991c189b38d14b507297767684",
"main.dart.js_25.part.js": "6d30964a0621cd6768f8ae2ffd752ad9",
"main.dart.js_19.part.js": "62755c9ab1fe5fa95c1f0fe5e95299a4",
"main.dart.js_38.part.js": "1c74ac12eb76d9190f9aad582995545a",
"main.dart.js_4.part.js": "3dba1069785bc21a84bd517ab243a312",
"main.dart.js_51.part.js": "b240ddf3aab1e707f98dc071d8683927",
"main.dart.js_15.part.js": "14c1e5144dd647cba17ac402804ada9e",
"main.dart.js_37.part.js": "a0dd0989d4a3234665d9df341de0777c",
"main.dart.js_11.part.js": "efb3c7f4c573366446d1607eecabe1bb",
"main.dart.js_35.part.js": "9d35f237789547daba7bd3555422815e",
"main.dart.js_22.part.js": "85955425d670177383ae3166ad695a9e",
"main.dart.js_39.part.js": "fb2333537a40d72428ad2e0419822a04",
"index.html": "04711352e08f4f9e7a2a1a94f2bc0372",
"/": "04711352e08f4f9e7a2a1a94f2bc0372",
"main.dart.js_21.part.js": "6004973b928519ab38ffeb8c04bdb369",
"main.dart.js_43.part.js": "2efb988ae018b130728f105d21e393f1",
"main.dart.js_30.part.js": "32ca8be496e959b6aba4f07eaf13631a",
"main.dart.js_10.part.js": "6843eae20f4f2682b93e7dc4c817e91b",
"main.dart.js": "0e8de8b45f95b947ad7bf564a0d03a26",
"main.dart.js_27.part.js": "deba49fa094e70ce53c9bd2f10c2cf68",
"main.dart.js_31.part.js": "9905f8a1ded54f730b55adc37cd67f81",
"main.dart.js_3.part.js": "8f29fcb289584c6e8c868aed814c9fa4",
"main.dart.js_17.part.js": "d06c0ca23ab2886982e79acb307f0931",
"main.dart.js_46.part.js": "11b6e9eb792fbd7c4ee67cf39a82b5ee",
"main.dart.js_36.part.js": "6d3cce200951494ff6838eb1716867d8",
"assets/AssetManifest.json": "29f354755b016588755d704e970ee693",
"assets/packages/remixicon_updated/fonts/Remix.ttf": "c1f9443f4d49d2ed763a67eea90212d0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "58854fed9c060789f2df26c91219188f",
"assets/fonts/MaterialIcons-Regular.otf": "68dd1b22402b44515b572c10cec167d5",
"assets/assets/parallax_card/Artwork-MichaHuigen.jpg": "7ecf64a6950fbba093029c9bb53b4807",
"assets/assets/parallax_image/2.png": "850bd000ae8987b888cf24103bb5233b",
"assets/assets/parallax_image/3.png": "f3552185508b52222be6b645d848f742",
"assets/assets/parallax_image/1.png": "7a563a182c7628946d911319e8723ac9",
"assets/assets/multiple_tilt_image/moon.png": "66ca64cf2aebb8747a871d1a283bc299",
"assets/assets/multiple_tilt_image/star.png": "88fdd01d0af3685d071841ceaa1d4eff",
"assets/assets/multiple_tilt_image/sun.png": "13407c64d1e500fef85e61da13c36f8c",
"assets/assets/fonts/Noto_Emoji/NotoEmoji-VariableFont_wght.ttf": "c845179fa1d62f94ae65e3f385547867",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/Roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/bento_grids/2.png": "da6ca7e21dbf20b44c2b6d060aae7bea",
"assets/assets/bento_grids/3.png": "2552c4d7c71452d2eebd5f448d9f9b8e",
"assets/assets/bento_grids/1.png": "d87305e0f14219540b23bbf8db6dc072",
"assets/NOTICES": "85582e11d48b045162d403e1681d8d26",
"assets/AssetManifest.bin": "1c0565baf57d6083a0edf293b04fc3ce",
"assets/FontManifest.json": "89aaafdbc321fbedae9c5858acbc3f64",
"main.dart.js_50.part.js": "d07e37f2b1b17668b83bf038c4a2b6c5",
"main.dart.js_6.part.js": "bf61e72846f4446f5bf05300d5acfcfc",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"main.dart.js_45.part.js": "5af8b835e7971eaf9fe31cf54327bfe2",
"main.dart.js_23.part.js": "a8f2ef76b7664f94cd56baf550b4bf8c",
"main.dart.js_9.part.js": "7cd98273eb9c8d16dc822af85e302a56",
"main.dart.js_47.part.js": "f07346c1ba68f6f3b1be550773dde677",
"main.dart.js_40.part.js": "426c41f0f682abaad2e93bc292b45f43",
"main.dart.js_24.part.js": "3f322c04716b343ce58b056bd26fcc7c",
"main.dart.js_5.part.js": "63e560cbca88d36f05230b1bf01b1640"};
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
