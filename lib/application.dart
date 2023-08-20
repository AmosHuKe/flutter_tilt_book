import 'package:flutter/material.dart';

import 'package:flutter_tilt_book/router.dart';

class Application extends StatelessWidget {
  const Application({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Flutter Tilt',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(useMaterial3: true),
      routerConfig: R.config,
    );
  }
}
