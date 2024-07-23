'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_14.part.js": "141a6420639fe3da425e8b5060b3c9b1",
"main.dart.js_25.part.js": "3eca5ccaec5504651b2846b78e126177",
"main.dart.js_30.part.js": "b59c54041efce5deab58cfa2cb624ebf",
"main.dart.js_9.part.js": "2e5eeafc67b2c2f65fb10b3786c15403",
"main.dart.js_42.part.js": "9eca7e12aebc5cc6e927f1b10c4831d5",
"main.dart.js_35.part.js": "b156bc89025f164be9cd149858764ace",
"main.dart.js_37.part.js": "5d5c42430063733b51eaee9fef382089",
"main.dart.js_40.part.js": "07a5996620d873ba4f70710d986691b5",
"main.dart.js_28.part.js": "61f4be947d9d821b1396361da81dd0ea",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_18.part.js": "2801267a2ecdc49766c4dc28154ab48e",
"main.dart.js_5.part.js": "7dc29d3b95e33b629cf9c36037b8a0ef",
"main.dart.js_31.part.js": "620a514396ec93a57eafc7c8ee843fab",
"main.dart.js_46.part.js": "e93ed596b603b672ea0e8ed50f954f6f",
"main.dart.js_29.part.js": "0d348b77a883987e09b8d9382561cd40",
"main.dart.js_41.part.js": "af47b8a78de79bd1b3415618493e9813",
"manifest.json": "a18b7e0aa2c53cc9f83f5fb323bb8f8a",
"main.dart.js_23.part.js": "b3cd47d67fb442b15a5bbd7f4983c682",
"main.dart.js_36.part.js": "d885f9a4e959280e43b6fc12368cc4b0",
"main.dart.js_20.part.js": "197e8ed4f71b04456d1a86f82e2f4d81",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"main.dart.js_52.part.js": "bf19f26c9ad832393d8570ae0dd247b9",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"main.dart.js_3.part.js": "f8920738668483b6c3d3e442040401aa",
"main.dart.js_39.part.js": "33c8ec800492d556f8b6c50f8122fd40",
"flutter_bootstrap.js": "9dd2a9c394e610e46f1edcff00d10bae",
"version.json": "8b3c27c4cee31eed72287bf3bd500a8c",
"main.dart.js_17.part.js": "d282ecf7c3640288fd1531b2172af188",
"main.dart.js_15.part.js": "ad1c97ed3ea0e6b22d304fc7f7180aa2",
"main.dart.js_16.part.js": "738a529e1a2d3d7e547c3afa5876c6dc",
"main.dart.js_13.part.js": "8d06d15a99f8795c98a1332ce3b312bd",
"main.dart.js_21.part.js": "6004973b928519ab38ffeb8c04bdb369",
"main.dart.js_51.part.js": "6a861d6351c489786de9d2b8bf01fcf6",
"main.dart.js_7.part.js": "6a47a13fc45fcbbf67a2e7dce5e8782c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_6.part.js": "461da018fc398e1df7188437fcd07ca8",
"main.dart.js_49.part.js": "8c514ccf110bdcf80cfbb3241a8e4d38",
"assets/packages/remixicon_updated/fonts/Remix.ttf": "c1f9443f4d49d2ed763a67eea90212d0",
"assets/NOTICES": "85582e11d48b045162d403e1681d8d26",
"assets/AssetManifest.bin": "1c0565baf57d6083a0edf293b04fc3ce",
"assets/FontManifest.json": "89aaafdbc321fbedae9c5858acbc3f64",
"assets/AssetManifest.bin.json": "58854fed9c060789f2df26c91219188f",
"assets/assets/parallax_image/2.png": "850bd000ae8987b888cf24103bb5233b",
"assets/assets/parallax_image/3.png": "f3552185508b52222be6b645d848f742",
"assets/assets/parallax_image/1.png": "7a563a182c7628946d911319e8723ac9",
"assets/assets/parallax_card/Artwork-MichaHuigen.jpg": "7ecf64a6950fbba093029c9bb53b4807",
"assets/assets/multiple_tilt_image/moon.png": "66ca64cf2aebb8747a871d1a283bc299",
"assets/assets/multiple_tilt_image/star.png": "88fdd01d0af3685d071841ceaa1d4eff",
"assets/assets/multiple_tilt_image/sun.png": "13407c64d1e500fef85e61da13c36f8c",
"assets/assets/fonts/Noto_Emoji/NotoEmoji-VariableFont_wght.ttf": "c845179fa1d62f94ae65e3f385547867",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/Roboto/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Roboto/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/bento_grids/2.png": "da6ca7e21dbf20b44c2b6d060aae7bea",
"assets/assets/bento_grids/3.png": "2552c4d7c71452d2eebd5f448d9f9b8e",
"assets/assets/bento_grids/1.png": "d87305e0f14219540b23bbf8db6dc072",
"assets/fonts/MaterialIcons-Regular.otf": "68dd1b22402b44515b572c10cec167d5",
"assets/AssetManifest.json": "29f354755b016588755d704e970ee693",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js_26.part.js": "5ac3007eb412cb04cf54dee605055d58",
"main.dart.js_43.part.js": "fa5941c33427d174c681ddefe5499d75",
"index.html": "04711352e08f4f9e7a2a1a94f2bc0372",
"/": "04711352e08f4f9e7a2a1a94f2bc0372",
"main.dart.js_8.part.js": "bc26def581e2f29eee05d9c5ad50f45a",
"main.dart.js_48.part.js": "74aae1f254ff023bbcea4e296cb98779",
"main.dart.js_50.part.js": "a94d831b50d383f178c3c2b2d0e72d4c",
"main.dart.js_38.part.js": "d121d54febdc7cd4179508be5efff6e9",
"css/loading/loading.css": "13e1eef8ceb74521632bc8f17fc56d45",
"main.dart.js_22.part.js": "6d38ac5af34b17dc50b78101b917926a",
"main.dart.js_2.part.js": "1394719d6d382ca5aa997f5928e91579",
"main.dart.js_24.part.js": "4bd957a3f8c3b252f2de776b6bcd1fc3",
"main.dart.js_27.part.js": "affa39f9ce3a406f459bbd3d95a762fc",
"main.dart.js_53.part.js": "926f3ecaf35f5660aae0a2b6f8deb252",
"main.dart.js_47.part.js": "b65f425cefd47bf02ebbd399e8e3431c",
"main.dart.js_33.part.js": "8e7c96d1134959aa4207919f7f50b302",
"main.dart.js_45.part.js": "03bbbe4bb26c9077a5e867095edf651a",
"main.dart.js_1.part.js": "e75366de425ccea859c389ecc3b33a17",
"main.dart.js_19.part.js": "cb6b9ad0fd4d36d093cce2ad4c0640c4",
"main.dart.js_4.part.js": "46ecf8daa86bf87644751f2c91d06716",
"main.dart.js_44.part.js": "d22999a32b01515f1ba4863a175953e5",
"main.dart.js_11.part.js": "34353bb254432b5d117a351d272bc65a",
"main.dart.js_10.part.js": "0dbf527fe1ec348b91d11d9f3c708cb6",
"main.dart.js": "401437b51031fec63c4e55bd9aae5c4a"};
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
