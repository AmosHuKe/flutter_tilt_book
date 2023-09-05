import 'dart:js_interop';
import 'package:flutter/material.dart';

import 'package:flutter_animate/flutter_animate.dart';

import 'package:flutter_tilt_book/router.dart';
import 'package:flutter_tilt_book/config/config.dart';

@JS("requestDeviceMotionEventPermission")
external void requestDeviceMotionEventPermission();

class Application extends StatefulWidget {
  const Application({super.key});

  @override
  State<Application> createState() => _ApplicationState();
}

class _ApplicationState extends State<Application> {
  @override
  void initState() {
    super.initState();
    requestDeviceMotionEventPermission();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: Config.appTitle,
      debugShowCheckedModeBanner: false,
      color: const Color(0xFF171819),
      theme: ThemeData(
        useMaterial3: true,
        fontFamilyFallback: const ['Roboto', 'Noto Emoji'],
      ),
      routerConfig: R.config,
    ).animate().fadeIn(duration: 400.ms, curve: Curves.easeIn);
  }
}
