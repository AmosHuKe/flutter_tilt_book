'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b6a7aee238500f16aa133a01233e802c",
"main.dart.js_55.part.js": "01209258b3f100b0b4e9ef5987654068",
"assets/assets/multiple_tilt_image/star.png": "88fdd01d0af3685d071841ceaa1d4eff",
"assets/assets/multiple_tilt_image/moon.png": "66ca64cf2aebb8747a871d1a283bc299",
"assets/assets/multiple_tilt_image/sun.png": "13407c64d1e500fef85e61da13c36f8c",
"assets/assets/bento_grids/2.png": "da6ca7e21dbf20b44c2b6d060aae7bea",
"assets/assets/bento_grids/3.png": "2552c4d7c71452d2eebd5f448d9f9b8e",
"assets/assets/bento_grids/1.png": "d87305e0f14219540b23bbf8db6dc072",
"assets/assets/parallax_card/Artwork-MichaHuigen.jpg": "7ecf64a6950fbba093029c9bb53b4807",
"assets/assets/parallax_image/2.png": "850bd000ae8987b888cf24103bb5233b",
"assets/assets/parallax_image/3.png": "f3552185508b52222be6b645d848f742",
"assets/assets/parallax_image/1.png": "7a563a182c7628946d911319e8723ac9",
"assets/assets/fonts/Noto_Emoji/NotoEmoji-VariableFont_wght.ttf": "c845179fa1d62f94ae65e3f385547867",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/Roboto/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/fonts/Roboto/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/FontManifest.json": "89aaafdbc321fbedae9c5858acbc3f64",
"assets/AssetManifest.bin.json": "58854fed9c060789f2df26c91219188f",
"assets/NOTICES": "910eed29af3411ddff29cacf0cfb9ef2",
"assets/AssetManifest.bin": "1c0565baf57d6083a0edf293b04fc3ce",
"assets/AssetManifest.json": "29f354755b016588755d704e970ee693",
"assets/fonts/MaterialIcons-Regular.otf": "68dd1b22402b44515b572c10cec167d5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/remixicon_updated/fonts/Remix.ttf": "c1f9443f4d49d2ed763a67eea90212d0",
"main.dart.js_22.part.js": "ffcdb9c79c3e586bab94842384c1d689",
"main.dart.js_47.part.js": "d788af13dc85ca0ca80bb8af9d186da7",
"main.dart.js_52.part.js": "6b05cfbf341fe89828a79d2c3bb6e17d",
"main.dart.js_42.part.js": "183cb828fe67951afa101f1146e7854d",
"main.dart.js_27.part.js": "09340254b6a4fd68f5127586cd425b30",
"main.dart.js_2.part.js": "67180582cc1cc8e08d7a76418a0c43c0",
"main.dart.js_10.part.js": "7de4e9853c0b443aa0b128562666a563",
"main.dart.js_54.part.js": "283dbe3ae5e314fe8c0acf115be85322",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"index.html": "8b439c84cc297e7184138ddad57aedd9",
"/": "8b439c84cc297e7184138ddad57aedd9",
"main.dart.js_45.part.js": "ef78c2364906c83c7c14b36e08b172b7",
"main.dart.js_39.part.js": "2f78ea256bef3766791fcb6c80bb55da",
"main.dart.js_16.part.js": "299eb881d76e8f415508d7276ec26019",
"main.dart.js_29.part.js": "6b58a5e24642145069b5b1c91114212b",
"main.dart.js_25.part.js": "94c530ada2ec44ca0ac7144473d62ccc",
"main.dart.js_20.part.js": "a133c853a1668141b846b5936cd9ddd7",
"main.dart.js_17.part.js": "eb36a9b79426ba7dd6977f6261c53e58",
"main.dart.js_53.part.js": "74354ed9e1127b03f0cdca7cac8988ad",
"main.dart.js_6.part.js": "844552655671bfe5c743f6db95ddf282",
"css/loading/loading.css": "13e1eef8ceb74521632bc8f17fc56d45",
"main.dart.js_14.part.js": "201315c425ff2356393c7f401650c9e1",
"main.dart.js_35.part.js": "bd44e727c6b3e2f4c232399a10e6791e",
"main.dart.js_12.part.js": "660c1fce61bf7cf24d0acb773b8a6999",
"main.dart.js_1.part.js": "d5727aa343c330fbb67a96f9e803f9ff",
"main.dart.js_8.part.js": "7c07c04f57ef610b685a62200f936c6f",
"main.dart.js_33.part.js": "ba3cb59e46a78c707284504ab792193b",
"main.dart.js_41.part.js": "af655ac2e4cbc5481e71dde411303e48",
"main.dart.js_38.part.js": "e2503695a4bbe2a542d7ae742758cbbd",
"main.dart.js_46.part.js": "5ed1e9d26f52a7964e88d6a8a21c33ab",
"main.dart.js_30.part.js": "2a6c81284b417fe1fcb0fb895a2f4afe",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"main.dart.js_15.part.js": "4b13904f1e0acefabc610163705a64cc",
"main.dart.js_4.part.js": "b3cb9282e1c03f9700a7878de111a437",
"main.dart.js_9.part.js": "83d7a386eacf468bd9b10bbf18a8e171",
"main.dart.js_19.part.js": "8dcd9ba8e60d77e603dc9535c712ec93",
"main.dart.js_43.part.js": "06400c05a82502516ab20c2b5a49e29a",
"main.dart.js_5.part.js": "a40eced80f11903941be1a4d70c748f0",
"main.dart.js_21.part.js": "323076200d5ff3b4fe41be5ab5791fd0",
"main.dart.js_7.part.js": "ac068716fc935bfa84232f8b7dcede89",
"main.dart.js_32.part.js": "8c17a9b246190bda833b253404a2488d",
"main.dart.js_40.part.js": "83c3dc65ff343e39d091be2dc2d5bb94",
"main.dart.js_23.part.js": "1d85099b95ccf1a2b9917f6498a103f0",
"main.dart.js_51.part.js": "2218fccf7b9975a94da4ac269bddc390",
"main.dart.js_18.part.js": "a31e2ed90b71d5e55e67f640058db185",
"main.dart.js_3.part.js": "d7781633aafcd92dc188caaa1f602410",
"main.dart.js_44.part.js": "6712f1e7e5ad1582d55465fd342c24ea",
"main.dart.js_24.part.js": "52ee0a37963ac01dbd4b1e3c470c909f",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_48.part.js": "e75f6457b5cbe9b3264f71421cc8f5ba",
"main.dart.js_28.part.js": "dcbc426fb9464a23d39d3912d291bd92",
"main.dart.js_11.part.js": "43f7ed285da1a8f608868f66b45b2dcc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "a18b7e0aa2c53cc9f83f5fb323bb8f8a",
"main.dart.js_37.part.js": "80322690d1712d31ca7c47bc849b7d29",
"main.dart.js_50.part.js": "883e26b4a24b62858ffe943f5358302c",
"main.dart.js_49.part.js": "eac64ff4a0d114ae089de8051d79fcec",
"main.dart.js": "11263ac668b26192f8eae5a681e9e4a2",
"version.json": "321ed7f408923609d2ecb83bc2aa41ac",
"main.dart.js_26.part.js": "53066e269a7b33cf3063a991db1a35d3"};
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
