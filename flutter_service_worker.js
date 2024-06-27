'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"main.dart.js_37.part.js": "f8e7e11b63da7c7d8aa3d6637c8dd517",
"main.dart.js_39.part.js": "fca2f15c0774bcb6c9cd85f13e193acf",
"main.dart.js_14.part.js": "f6010058ad4b97823102c2b62031def6",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"main.dart.js_36.part.js": "21a19ea6a419949ccb2ca97aba26417c",
"flutter_bootstrap.js": "26774e8009829b0a97941990f0de9c25",
"version.json": "46fb0106b567f32f13cecf72ccda2de6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_40.part.js": "2cfb1bf93d84cf35c94004aa8c44304c",
"main.dart.js_30.part.js": "921675fd295d27c22f6e8844192eb420",
"main.dart.js_15.part.js": "a42ad34dd096e1c8d49833d37f58f679",
"main.dart.js": "7a79af1b87d969e56319102321affbfe",
"main.dart.js_5.part.js": "17636e7263ebf5816f54bfd592216ce5",
"main.dart.js_19.part.js": "afec544c73fc8d0c0b4076dc7f5d20ae",
"main.dart.js_10.part.js": "12619547b833eb61bbf92ca53f21daf9",
"main.dart.js_38.part.js": "2473ced5f848301764fb9a93f6d56d58",
"main.dart.js_17.part.js": "b0c620d5f97cc30c95569225139e75e2",
"assets/NOTICES": "85582e11d48b045162d403e1681d8d26",
"assets/AssetManifest.bin": "1c0565baf57d6083a0edf293b04fc3ce",
"assets/assets/parallax_card/Artwork-MichaHuigen.jpg": "7ecf64a6950fbba093029c9bb53b4807",
"assets/assets/multiple_tilt_image/star.png": "88fdd01d0af3685d071841ceaa1d4eff",
"assets/assets/multiple_tilt_image/moon.png": "66ca64cf2aebb8747a871d1a283bc299",
"assets/assets/multiple_tilt_image/sun.png": "13407c64d1e500fef85e61da13c36f8c",
"assets/assets/parallax_image/1.png": "7a563a182c7628946d911319e8723ac9",
"assets/assets/parallax_image/3.png": "f3552185508b52222be6b645d848f742",
"assets/assets/parallax_image/2.png": "850bd000ae8987b888cf24103bb5233b",
"assets/assets/bento_grids/1.png": "d87305e0f14219540b23bbf8db6dc072",
"assets/assets/bento_grids/3.png": "2552c4d7c71452d2eebd5f448d9f9b8e",
"assets/assets/bento_grids/2.png": "da6ca7e21dbf20b44c2b6d060aae7bea",
"assets/assets/fonts/Noto_Emoji/NotoEmoji-VariableFont_wght.ttf": "c845179fa1d62f94ae65e3f385547867",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/fonts/Roboto/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/remixicon_updated/fonts/Remix.ttf": "c1f9443f4d49d2ed763a67eea90212d0",
"assets/AssetManifest.bin.json": "58854fed9c060789f2df26c91219188f",
"assets/FontManifest.json": "89aaafdbc321fbedae9c5858acbc3f64",
"assets/fonts/MaterialIcons-Regular.otf": "68dd1b22402b44515b572c10cec167d5",
"assets/AssetManifest.json": "29f354755b016588755d704e970ee693",
"main.dart.js_53.part.js": "6144d9afadaab173a9633c5ba3465cd2",
"main.dart.js_42.part.js": "24f0a3d08b5f37021d86a3b6a659d355",
"main.dart.js_47.part.js": "2e53725dd681e7d2644880796d5bbc6d",
"main.dart.js_50.part.js": "96af6d1e3b9e553522b3b6ce9b02a1af",
"main.dart.js_45.part.js": "e6166cde753b60d97c9c0b0968a0d374",
"main.dart.js_49.part.js": "db8ca1c41e01a78edb02ea4eee7971e7",
"main.dart.js_44.part.js": "8106b0e92fe82104a35ca19053e673bd",
"main.dart.js_20.part.js": "e4f4b3c2ee8ca505c65ceb3dbe909d9f",
"main.dart.js_27.part.js": "b6bb4d6a1473d8cc2f4ce0a2106b1b84",
"main.dart.js_7.part.js": "27185915ddb501a43cc284878865babe",
"main.dart.js_41.part.js": "2caa81c2e6aa10f6943d407e2818485a",
"main.dart.js_9.part.js": "8128fbbe08ec6af901d835e86499d122",
"main.dart.js_35.part.js": "5f9e4409a30b3ba165d735a5804ff187",
"css/loading/loading.css": "13e1eef8ceb74521632bc8f17fc56d45",
"index.html": "04711352e08f4f9e7a2a1a94f2bc0372",
"/": "04711352e08f4f9e7a2a1a94f2bc0372",
"main.dart.js_29.part.js": "7c42452d34d214277d0d4b2f05b83ea7",
"main.dart.js_26.part.js": "e2d23328ef1c5a92a9851ed2896e1969",
"main.dart.js_11.part.js": "476a0b134850cd3ba6098526824407a5",
"main.dart.js_4.part.js": "185bb68440bd96116fab11990ad9ad8d",
"main.dart.js_18.part.js": "af050d42597bf2d31a26e01883e7b93d",
"main.dart.js_31.part.js": "3bb8dc186b4eae466b3eed4a167193de",
"main.dart.js_3.part.js": "6f3060ffae4c98696554ad970bed9bd0",
"main.dart.js_46.part.js": "f6adb26bddf4ccb50891cf8d59fd7bf1",
"main.dart.js_43.part.js": "f65436a8eb7a2e88499ef35d30f1718f",
"main.dart.js_1.part.js": "25b77ec7fbf65c78f88a4a481b7454a5",
"main.dart.js_6.part.js": "b15c9e0f7d7d89c4e07fe739d0b22feb",
"main.dart.js_16.part.js": "aac6e6715e2a78bde3a83d2853e7716e",
"main.dart.js_48.part.js": "6d3596c669b9eacab883599633649c8f",
"main.dart.js_33.part.js": "0188f7e44796c4533a45c5404885a8b4",
"main.dart.js_13.part.js": "f7ec35fdd873957f668a81d27c65c8fe",
"main.dart.js_21.part.js": "6004973b928519ab38ffeb8c04bdb369",
"main.dart.js_24.part.js": "0ca2ac36cc8f29f49bb39b9c0a4a78c8",
"main.dart.js_25.part.js": "599fbd177ec4d7444ccc48263ae516fd",
"main.dart.js_51.part.js": "61d665e90a2b36266edd0986509740c3",
"main.dart.js_8.part.js": "734b919604bca61bc681a466bcde94ad",
"main.dart.js_52.part.js": "da87ab40dbaae51ec158a6e55eacb38a",
"main.dart.js_2.part.js": "2e47a4a46471071ba4d31a48353de676",
"main.dart.js_28.part.js": "61f4be947d9d821b1396361da81dd0ea",
"main.dart.js_22.part.js": "6d38ac5af34b17dc50b78101b917926a",
"main.dart.js_23.part.js": "6d06d5c1c0b8b2de3aca8b49bdd8d83e",
"manifest.json": "a18b7e0aa2c53cc9f83f5fb323bb8f8a"};
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
