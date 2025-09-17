{{flutter_js}}
{{flutter_build_config}}

_flutter.loader.load({
  config: {
    assetBase: '/flutter_tilt_book/flutter_tilt_example/',
    canvasKitVariant: 'full',
    canvasKitBaseUrl: '/flutter_tilt_book/flutter_tilt_example/canvaskit/'
  },
  serviceWorkerSettings: {
    serviceWorkerVersion: {{flutter_service_worker_version}},
  },
  onEntrypointLoaded: async function (engineInitializer) {
    const appRunner = await engineInitializer.initializeEngine();
    await appRunner.runApp();

    // 清除加载
    const amosLoader = document.getElementById('amos-loader-wrapper');
    amosLoader?.remove();
  },
});