import 'package:flutter/material.dart';

import 'package:flutter_animate/flutter_animate.dart';

import '../config/config.dart';
import '../router.dart';

class Application extends StatelessWidget {
  const Application({super.key});

  @override
  Widget build(BuildContext context) {
    final appRouter = AppRouter();

    return MaterialApp.router(
      title: Config.appTitle,
      debugShowCheckedModeBanner: false,
      color: const Color(0xFF171819),
      theme: ThemeData(useMaterial3: true, fontFamilyFallback: const ['Roboto', 'Noto Emoji']),
      routerConfig: appRouter.config(),
    ).animate().fadeIn(duration: 400.ms, curve: Curves.easeIn);
  }
}
