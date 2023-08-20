import 'package:flutter/material.dart';

import 'package:flutter_tilt_book/router.dart';
import 'package:flutter_tilt_book/config/config.dart';

class Application extends StatelessWidget {
  const Application({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: Config.appTitle,
      debugShowCheckedModeBanner: false,
      theme: ThemeData(useMaterial3: true),
      routerConfig: R.config,
    );
  }
}
