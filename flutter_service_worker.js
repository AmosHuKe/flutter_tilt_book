'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_15.part.js": "bd00cbd32efe0e0f76e1c995295cedc8",
"main.dart.js_17.part.js": "30dd617e062e6f2289a2008191a5e94a",
"main.dart.js_22.part.js": "cee7aa46770a430c56ba75620f72af96",
"main.dart.js_16.part.js": "8e6d662f97752740036581510afd83e5",
"main.dart.js_39.part.js": "6302129453e854d4f42378d5e409c9f0",
"main.dart.js_45.part.js": "651293bf1859ff62f6839889e285aad9",
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
"assets/NOTICES": "55feb0cc8644c537b910bf1f571e37ff",
"assets/AssetManifest.json": "29f354755b016588755d704e970ee693",
"assets/fonts/MaterialIcons-Regular.otf": "68dd1b22402b44515b572c10cec167d5",
"assets/packages/remixicon_updated/fonts/Remix.ttf": "c1f9443f4d49d2ed763a67eea90212d0",
"assets/FontManifest.json": "89aaafdbc321fbedae9c5858acbc3f64",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "58854fed9c060789f2df26c91219188f",
"main.dart.js_32.part.js": "de413f66b29d86b3fb2f74c269444408",
"version.json": "b6298466aa51b028f4db68ecfbc98af5",
"manifest.json": "a18b7e0aa2c53cc9f83f5fb323bb8f8a",
"main.dart.js_29.part.js": "6a43d9ed902aab41435718e0815add10",
"main.dart.js_52.part.js": "bc9862f0d1fa1362c8c7276ef24fa4fb",
"main.dart.js_12.part.js": "11a9e9ea9ee95f432ccc793c5db25ce4",
"main.dart.js_25.part.js": "9278726d6c335a2832f039f2165deec2",
"main.dart.js_41.part.js": "d456a3c7026f9bc6cbaeb15464b7c9f5",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"main.dart.js_26.part.js": "f34124830c83f5041238b13d0b05b99e",
"main.dart.js_38.part.js": "8da2c22bc5f3ec635166eeae2d6111f1",
"main.dart.js_10.part.js": "b922473f1fe877721a483f27c76ffa6b",
"main.dart.js_57.part.js": "bc0b9ea5b2fdd50e3ec58c117633a1f6",
"main.dart.js_8.part.js": "49fdf5779e55db50f33c46b471ad61b0",
"css/loading/loading.css": "13e1eef8ceb74521632bc8f17fc56d45",
"main.dart.js_54.part.js": "f8b338389a7ba257360e10215f2f887e",
"main.dart.js_56.part.js": "2cc4d54ca0118c5d0a30ddccf822525c",
"main.dart.js_60.part.js": "214338595e50527f985e44e0000f2fcd",
"main.dart.js_2.part.js": "ae093f5b7f7033f86fb482153441d436",
"main.dart.js_36.part.js": "553635a9ac76679de6d391299fee7f6f",
"main.dart.js_49.part.js": "068e9ffc72997f0576ec256bc3744433",
"main.dart.js_53.part.js": "4acf166159bfa3c34164b6cf06d72f04",
"main.dart.js_23.part.js": "0dd74eb3cffa6b02814be0b3e11b12f9",
"main.dart.js_21.part.js": "b30e07f0effab61007fbb9ffca82ba86",
"main.dart.js_58.part.js": "19f9293a31fdeab7d722b15bdf0424e6",
"index.html": "8b439c84cc297e7184138ddad57aedd9",
"/": "8b439c84cc297e7184138ddad57aedd9",
"main.dart.js_51.part.js": "3781078cda9316c90d211d6394214d11",
"main.dart.js_1.part.js": "9cf55ab10fe13ef4fc6ae3b68fca9f75",
"main.dart.js_14.part.js": "10ee4db42b5533cc77d9fb650109d61b",
"main.dart.js_6.part.js": "9560b53afe095327ae43ced91e82233c",
"main.dart.wasm": "4b03c623c0ee5346b91bde958dacfd70",
"main.dart.js_11.part.js": "b6c0b375ff179288061cbd3810b9fa3d",
"main.dart.js_35.part.js": "7d120ec1dc6faa2e0496532c719ec70c",
"main.dart.js_55.part.js": "a1c13a215117192ebc06f862bc4bd358",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"main.dart.js_34.part.js": "f48dbcd796c4021750b60c5c81aae678",
"main.dart.js_9.part.js": "f378bb206ba2a7652ee4f1b658d1fbbf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_20.part.js": "8cd0f3a6476ba7b546f1060bed27f5b9",
"main.dart.mjs": "ac1ee1f3ba9462fa121fe1bbc3bc9a28",
"main.dart.js_48.part.js": "550ddc7f866a94d3b1a8488b41e81a21",
"main.dart.js_13.part.js": "503d544d922db7819ab64e3d06d8cbb8",
"main.dart.js_7.part.js": "3996976b9f5d02d8ceb9d2218a980cfd",
"flutter_bootstrap.js": "8a09be1295db5fe7cc835ce8d69ded8c",
"main.dart.js_28.part.js": "9f6ff03b1e331206f3860d47b20a1be3",
"main.dart.js_44.part.js": "2660c3ad6af7f1b96214f130ac56a09a",
"main.dart.js_59.part.js": "e0182427f9cf7902cbb443d853c2b1c6",
"main.dart.js_4.part.js": "c0f94738a65a9a5fcd3193eed0b866eb",
"main.dart.js_30.part.js": "40b21053e0c2033b521734ca0b9be21d",
"main.dart.js_5.part.js": "be6aa4c25b63a5544ce4934aa019e706",
"main.dart.js": "e681483e52297ac718d34073a1f5784a",
"main.dart.js_61.part.js": "e4b8e7bfa3426c4575fef3b4d30d653a",
"main.dart.js_46.part.js": "380ed817c11df6c86c15a17ee87d85c3",
"main.dart.js_43.part.js": "5e516844e862bad4e047512d784f150d",
"main.dart.js_19.part.js": "39775bd43c6a09182160d906eb56117a",
"main.dart.js_24.part.js": "182aacdd850e70e7fd1e99edc0b1ff68",
"main.dart.js_33.part.js": "3a2cc7b745742e0aba7a90111e70a49d",
"main.dart.js_3.part.js": "6127d0756e283726e9c615b55c51f80b"};
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
