'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_4.part.js": "2b7279b726debcdda10c3e06424fbfb7",
"main.dart.js_17.part.js": "269e6d1e0d2e6a7bb9319db022349c12",
"main.dart.js_18.part.js": "184266aa22d20015a6bae49fa2e13d6f",
"main.dart.js_21.part.js": "202d8ee1d37417d978d47e4e68425bf6",
"main.dart.js_26.part.js": "b9a240f664d939d77e32673e39b01bee",
"index.html": "8b439c84cc297e7184138ddad57aedd9",
"/": "8b439c84cc297e7184138ddad57aedd9",
"main.dart.mjs": "91861312d7b68e52a816b017220beb72",
"main.dart.js_48.part.js": "5ca8c4041674e75147032bbabbffe6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_42.part.js": "a5671fb13b46069852babdb4e61f1234",
"main.dart.wasm": "3b3e104b4cac98ad327890877bc6e1b5",
"main.dart.js_51.part.js": "af66c62cdd72dde69ceb87f5d6779035",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"main.dart.js": "e0a9996bdde68dab5bf9e1a9ca3b9da8",
"main.dart.js_19.part.js": "54425d6e8155289cb09d9061f650f68c",
"flutter_bootstrap.js": "fbe549a5eca43b45c5e0f027df5daa74",
"main.dart.js_55.part.js": "1afbdf5ad47ef1f12799596bd42ed844",
"main.dart.js_6.part.js": "af5aa8ee3cd08010d5ca1d3bfe034bc4",
"main.dart.js_45.part.js": "8270284c6f3336c82130069b4384eae9",
"main.dart.js_10.part.js": "7de4e9853c0b443aa0b128562666a563",
"main.dart.js_23.part.js": "1d85099b95ccf1a2b9917f6498a103f0",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_53.part.js": "5cb55662fc83ffa82a14027276f44898",
"main.dart.js_11.part.js": "43f7ed285da1a8f608868f66b45b2dcc",
"main.dart.js_40.part.js": "2919aa410998f0543cddf2066de2ab7e",
"main.dart.js_35.part.js": "cfaabdd04e56f7add3a0446e2ffff586",
"main.dart.js_33.part.js": "5652bcf742d87fb1aab3bc467dfaeb94",
"main.dart.js_49.part.js": "1ebc46efc9754ecdc03af5d4e79af116",
"main.dart.js_15.part.js": "71b1a2c25af23e6e2a5e04eea95ca722",
"main.dart.js_46.part.js": "96e305eb3d95dae030e061cd3a619a1e",
"main.dart.js_27.part.js": "09340254b6a4fd68f5127586cd425b30",
"main.dart.js_1.part.js": "6cca24fbe0e1cefc4e6562affe8ec041",
"main.dart.js_20.part.js": "c4e029608f805044cff7d4c6f220dc5d",
"main.dart.js_29.part.js": "6b58a5e24642145069b5b1c91114212b",
"main.dart.js_14.part.js": "841559b9cdc77ce5837f2ff8f39b01d5",
"manifest.json": "a18b7e0aa2c53cc9f83f5fb323bb8f8a",
"main.dart.js_50.part.js": "692fe598a2148cc2991fdb75c2829c86",
"main.dart.js_24.part.js": "d6854c597c18278c7a62a50a54104af1",
"main.dart.js_9.part.js": "99d7402bee192d4e04f3d256b65bb416",
"main.dart.js_44.part.js": "48eb1f0379ab793a668acdd71f7f2990",
"assets/packages/remixicon_updated/fonts/Remix.ttf": "c1f9443f4d49d2ed763a67eea90212d0",
"assets/FontManifest.json": "89aaafdbc321fbedae9c5858acbc3f64",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "910eed29af3411ddff29cacf0cfb9ef2",
"assets/assets/parallax_image/3.png": "f3552185508b52222be6b645d848f742",
"assets/assets/parallax_image/2.png": "850bd000ae8987b888cf24103bb5233b",
"assets/assets/parallax_image/1.png": "7a563a182c7628946d911319e8723ac9",
"assets/assets/bento_grids/3.png": "2552c4d7c71452d2eebd5f448d9f9b8e",
"assets/assets/bento_grids/2.png": "da6ca7e21dbf20b44c2b6d060aae7bea",
"assets/assets/bento_grids/1.png": "d87305e0f14219540b23bbf8db6dc072",
"assets/assets/fonts/Roboto/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/fonts/Roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Noto_Emoji/NotoEmoji-VariableFont_wght.ttf": "c845179fa1d62f94ae65e3f385547867",
"assets/assets/parallax_card/Artwork-MichaHuigen.jpg": "7ecf64a6950fbba093029c9bb53b4807",
"assets/assets/multiple_tilt_image/star.png": "88fdd01d0af3685d071841ceaa1d4eff",
"assets/assets/multiple_tilt_image/sun.png": "13407c64d1e500fef85e61da13c36f8c",
"assets/assets/multiple_tilt_image/moon.png": "66ca64cf2aebb8747a871d1a283bc299",
"assets/fonts/MaterialIcons-Regular.otf": "68dd1b22402b44515b572c10cec167d5",
"assets/AssetManifest.bin": "1c0565baf57d6083a0edf293b04fc3ce",
"assets/AssetManifest.json": "29f354755b016588755d704e970ee693",
"assets/AssetManifest.bin.json": "58854fed9c060789f2df26c91219188f",
"main.dart.js_7.part.js": "5ef6af0a5198b745625f7f78141ec90f",
"main.dart.js_16.part.js": "990277ac73494fa089432f75cd6bf447",
"main.dart.js_39.part.js": "a5771a6766d0f8bc3f40ee62b58c95ed",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_30.part.js": "22894b20b9b7d83e7c66f492bfbe92dc",
"main.dart.js_3.part.js": "d7781633aafcd92dc188caaa1f602410",
"main.dart.js_43.part.js": "fe62d1304370244ce0670ecd0259d418",
"version.json": "914c13009f3c2828467e9ac5145d91ca",
"main.dart.js_37.part.js": "8cf088c091bc95a838e9b8a1ea3c770b",
"css/loading/loading.css": "13e1eef8ceb74521632bc8f17fc56d45",
"main.dart.js_28.part.js": "c3282ed75d0c7bf49fd48506d50275eb",
"main.dart.js_52.part.js": "32703aa123ec3fd318c76d032e9f094f",
"main.dart.js_54.part.js": "ca333b1416ccf41ca6145db129c6eb31",
"main.dart.js_12.part.js": "f219dfb135a9241b425f079169ca1176",
"main.dart.js_25.part.js": "c0599deb4b2b55352dd700312847fafc",
"main.dart.js_38.part.js": "717d43f7d2f0f86c1adea6427ae84649",
"main.dart.js_8.part.js": "909b9b9e9b6c44c2e9eddb89bbd7327e",
"main.dart.js_2.part.js": "37564f97bf52abf8b4558d61134d24d3",
"main.dart.js_41.part.js": "e087c4d28133adc066c4812b1751e2f9",
"main.dart.js_47.part.js": "1d0651c593264cd10f5e39968dab92dc",
"main.dart.js_5.part.js": "83d92948b188bbe6bc4b82d1612591a8",
"main.dart.js_22.part.js": "ffcdb9c79c3e586bab94842384c1d689",
"main.dart.js_32.part.js": "306ac98043735101095afab1c2e1597e"};
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
