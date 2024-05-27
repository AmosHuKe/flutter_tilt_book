'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_48.part.js": "c96ff0b25e85d68be31e6003a085dfdf",
"main.dart.js_44.part.js": "88e26864d72e553246aeab96ee199214",
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
"main.dart.js_20.part.js": "1d84ac8af824e555d6f8862592e1d39d",
"main.dart.js_14.part.js": "2fce3b9b6aa12f74a003d4585a0a833d",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_49.part.js": "04c75dc11f5450562964b9656f1a0241",
"main.dart.js_29.part.js": "ff678d55aaece26b94ddeaa124e8cb9c",
"manifest.json": "a18b7e0aa2c53cc9f83f5fb323bb8f8a",
"main.dart.js_26.part.js": "4575425b0c52e40417def48b06810210",
"main.dart.js_2.part.js": "0ff648a9142f9a54ec256b26bdcdc1d9",
"main.dart.js_16.part.js": "fc28e198ad5eb4ad10a9dee6a3303193",
"css/loading/loading.css": "13e1eef8ceb74521632bc8f17fc56d45",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_28.part.js": "1cc21480b77d46a8872d8f2b12c35698",
"main.dart.js_41.part.js": "d5529990ef33ad616009395000e8bc7a",
"main.dart.js_1.part.js": "efcaacf408064fe4a504d16b19a74e63",
"main.dart.js_18.part.js": "0bb54e6f98a7d2a422d2eafb03af96c6",
"main.dart.js_13.part.js": "5844a4480d631a4f1d9e0d66f8e0497f",
"main.dart.js_42.part.js": "dd54590bf9df03df1b5f5fe3cce2eb08",
"main.dart.js_8.part.js": "bd664da6c1a9a6ae4a57c5a1e832931c",
"flutter_bootstrap.js": "e69d228aa7c12e51797ea5e02d340e58",
"main.dart.js_33.part.js": "cd4a8ea3fd02689ef21bc5b63d74815b",
"main.dart.js_34.part.js": "78a2246a517ad078b79b14f5e6f4f2f5",
"main.dart.js_7.part.js": "f7e0bf5c069d94c356eeb0ebb9623302",
"version.json": "4c7e1de69d5266bfe6c888796e4c4521",
"main.dart.js_25.part.js": "2c5004178bb543913a85101760c3dceb",
"main.dart.js_19.part.js": "d1633f88a04b777282454bc018eec37b",
"main.dart.js_38.part.js": "e5d67eae85c7d55a8a2f4464955caf52",
"main.dart.js_4.part.js": "de529bef1db1111fe7ed59776e629f8e",
"main.dart.js_51.part.js": "ae8ce7387cf3271e69679aab2d29f15b",
"main.dart.js_15.part.js": "97ef585ff9f318d5cb35992e31e75400",
"main.dart.js_37.part.js": "8a53ff788d8e025947bebea87e6499cd",
"main.dart.js_11.part.js": "4b7d3b6bb4cee4ca19690276f57258e1",
"main.dart.js_35.part.js": "fc24394980b62c87a2d84494a8be7b7d",
"main.dart.js_22.part.js": "f6e096d755dc756ba8c70ebbd60b16e4",
"main.dart.js_39.part.js": "cea085d88d7360a6382ba5a4fbe0e0f4",
"index.html": "04711352e08f4f9e7a2a1a94f2bc0372",
"/": "04711352e08f4f9e7a2a1a94f2bc0372",
"main.dart.js_21.part.js": "6004973b928519ab38ffeb8c04bdb369",
"main.dart.js_43.part.js": "6a27cec95442ccdd00462c96e1dd659b",
"main.dart.js_30.part.js": "32ca8be496e959b6aba4f07eaf13631a",
"main.dart.js_10.part.js": "2af874c1887e506c72345fa0c712619f",
"main.dart.js": "df286c832af0e7655b27e3310a07aefa",
"main.dart.js_27.part.js": "df549f4697cb59042aae92bf4e34eb9d",
"main.dart.js_31.part.js": "8d3f5e39aaa2c06a2be9384163f291bc",
"main.dart.js_3.part.js": "3122328aa5e4af975eacc139901174e4",
"main.dart.js_17.part.js": "d06c0ca23ab2886982e79acb307f0931",
"main.dart.js_46.part.js": "6d382c84f08cf8d519f771616b4fcef3",
"main.dart.js_36.part.js": "43a92bd062797a63e82ca13040e4b16a",
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
"assets/NOTICES": "2ff1cbb02dbba5002cc66e13f336083d",
"assets/AssetManifest.bin": "1c0565baf57d6083a0edf293b04fc3ce",
"assets/FontManifest.json": "89aaafdbc321fbedae9c5858acbc3f64",
"main.dart.js_50.part.js": "85300e02ed3b8c3ed170ec0ddfff7b07",
"main.dart.js_6.part.js": "150fa36bb17704349e929204f3707c0d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"main.dart.js_45.part.js": "c77db539bcf4e815e84eedd181e04af4",
"main.dart.js_23.part.js": "a5a82c78b6d6be86f7c6172145520101",
"main.dart.js_9.part.js": "3aa153e0294c98a0a5f8436d6a034df6",
"main.dart.js_47.part.js": "ed810bb867facb262ebfd75d8769b801",
"main.dart.js_40.part.js": "426c41f0f682abaad2e93bc292b45f43",
"main.dart.js_24.part.js": "cab91c6060f34c25e6ee690d73315913",
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
