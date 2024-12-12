'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_15.part.js": "847a18983fd3928f5690b7b2a2af1cd8",
"main.dart.js_17.part.js": "2e60695dc793df86c83330f55bfabc46",
"main.dart.js_22.part.js": "338f79149022b21cc6167a0bb83b1323",
"main.dart.js_16.part.js": "9d21e0d300c8e68383b53174b71eda43",
"main.dart.js_39.part.js": "3264d76e86e2849803b72e53a5a33369",
"main.dart.js_45.part.js": "bd61ed1177c03d5555999caa39c640a2",
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
"assets/NOTICES": "737e3064f031a1264828e813b83c43ea",
"assets/AssetManifest.json": "29f354755b016588755d704e970ee693",
"assets/fonts/MaterialIcons-Regular.otf": "68dd1b22402b44515b572c10cec167d5",
"assets/packages/remixicon_updated/fonts/Remix.ttf": "c1f9443f4d49d2ed763a67eea90212d0",
"assets/FontManifest.json": "89aaafdbc321fbedae9c5858acbc3f64",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "58854fed9c060789f2df26c91219188f",
"main.dart.js_32.part.js": "2f08c14ca1f513c5081770d123c79e61",
"version.json": "a9367fb51a059579b46aa3549e64a745",
"manifest.json": "a18b7e0aa2c53cc9f83f5fb323bb8f8a",
"main.dart.js_29.part.js": "125491561ce337d244acddceb4ce90ea",
"main.dart.js_52.part.js": "499dae09f69ad54e843da21c907cfe5b",
"main.dart.js_12.part.js": "4aae3fea7e62caae8558432339f3ae63",
"main.dart.js_25.part.js": "06dc2b5b4cf36b91030779c04fe4cfbf",
"main.dart.js_41.part.js": "896615d8c717536143f071d598ef5bc5",
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
"main.dart.js_26.part.js": "815b4f8c0cdc44753befbcf5f89d3d82",
"main.dart.js_38.part.js": "fdd797c018bafb227c3b5e123e8745d8",
"main.dart.js_10.part.js": "9baa47c132435f7cd0ac2c657f727fee",
"main.dart.js_57.part.js": "d97fbc66e1f8ef0717ca04205613d0d3",
"main.dart.js_8.part.js": "d313a07a5a12e9caed11b82e6092b52e",
"css/loading/loading.css": "13e1eef8ceb74521632bc8f17fc56d45",
"main.dart.js_54.part.js": "557c6586068056dfff185e13a939020d",
"main.dart.js_56.part.js": "6fdc825ebf40f62a67f840923ac1dd3e",
"main.dart.js_60.part.js": "c31a7f552800ac577ceb43b6115874ff",
"main.dart.js_2.part.js": "faae32f45eb01ad1bcd456610dd9ed11",
"main.dart.js_36.part.js": "9916823893ff45aab44b2246743b5c33",
"main.dart.js_49.part.js": "2afe0b52b62ebabd1610b7ffdd15a992",
"main.dart.js_53.part.js": "bc14b6964f48c2bef1c8ea955efde80f",
"main.dart.js_23.part.js": "a984cb321ae4984deb99c1b4e8e4dfa9",
"main.dart.js_21.part.js": "51e36de21067968994ca5f7aec1384b2",
"main.dart.js_58.part.js": "29bb4b73663ad6eb9d8cf16ed693436e",
"index.html": "8b439c84cc297e7184138ddad57aedd9",
"/": "8b439c84cc297e7184138ddad57aedd9",
"main.dart.js_51.part.js": "9e11affc453c44f7f6d4b846ce7a823a",
"main.dart.js_1.part.js": "def658e352a735a91adcda186473915d",
"main.dart.js_14.part.js": "4788bba81648f23aab0f0260e67ea525",
"main.dart.js_6.part.js": "cdc1f1fa6f65833c1ee27d4d2a5c40cf",
"main.dart.wasm": "cb98f042aa79181c232cc6034b4e1a92",
"main.dart.js_11.part.js": "66f1b4e0ec582771f907b0748bdddd66",
"main.dart.js_35.part.js": "7b19ff9a7e1dea3a826192c9b99bd248",
"main.dart.js_55.part.js": "df7c8a9f8ce6e5e1a900bbc9a71ca6c6",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"main.dart.js_34.part.js": "ef6df446fbbfe67107b9bd2eded086e6",
"main.dart.js_9.part.js": "b4af0649a8bd5b1e045682945d04da34",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_20.part.js": "53a9f9220935b0af63c1eb239b3fcfb2",
"main.dart.mjs": "229bcd9f7612935c714471741c0dc0ff",
"main.dart.js_48.part.js": "1b65e2e25897dd4d140be106373c7617",
"main.dart.js_13.part.js": "e7a7de636aa9892a010836199c88af42",
"main.dart.js_7.part.js": "279b04faeabda17988b7f3fc557d3c73",
"flutter_bootstrap.js": "c6f5ec1782ac9c747e5222675b105e22",
"main.dart.js_28.part.js": "fe21d8586f781bf84a0861bf67c09f8c",
"main.dart.js_44.part.js": "5f19d2406dbb1c97a3ce6b89d11b933e",
"main.dart.js_59.part.js": "75fd11b3ac50a45ee975f89807b7d342",
"main.dart.js_4.part.js": "b26a53485f100003ab2dc4e701d7ff1f",
"main.dart.js_30.part.js": "f6eb857d2935647993b2aaca2394dba1",
"main.dart.js_5.part.js": "510b7bf4684d592860822f897da2dce7",
"main.dart.js": "89483d1d7a786f3394bc774998f7878c",
"main.dart.js_61.part.js": "466084dcff392b0ddc7a76550f2d6552",
"main.dart.js_46.part.js": "59cf77c74d0827c08c8a6d7eedb7c974",
"main.dart.js_43.part.js": "f038e6d8102651961bb0fd55c2c47146",
"main.dart.js_19.part.js": "3687c331caeb5a95bcf1ddc9dcdc127d",
"main.dart.js_24.part.js": "79fa08da672f7fca4b687aebe47324e8",
"main.dart.js_33.part.js": "8e93d117ed1b0343f43d4da5e5822a66",
"main.dart.js_3.part.js": "f5e3aae02e04800c1606b1041eca54d0"};
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
