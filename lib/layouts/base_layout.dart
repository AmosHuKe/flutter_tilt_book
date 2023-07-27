// ignore: avoid_web_libraries_in_flutter
import 'dart:js' as js;

import 'package:flutter/material.dart';

import 'package:flutter_svg/flutter_svg.dart';

class BaseLayout extends StatelessWidget {
  const BaseLayout({
    super.key,
    required this.title,
    required this.body,
    this.tools,
  });

  final String title;
  final Widget body;
  final List<Widget>? tools;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(useMaterial3: true),
      home: Scaffold(
        backgroundColor: const Color(0xFFF6F7FA),
        body: ViewBody(title: title, body: body, tools: tools),
      ),
    );
  }
}

class ViewBody extends StatelessWidget {
  const ViewBody({
    super.key,
    required this.title,
    required this.body,
    this.tools,
  });

  final String title;
  final Widget body;
  final List<Widget>? tools;

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        /// header
        Container(
          margin: const EdgeInsets.only(
            top: 24,
            bottom: 12,
            left: 24,
            right: 24,
          ),
          padding: const EdgeInsets.all(24),
          decoration: BoxDecoration(
            color: const Color(0xFFFFFFFF),
            borderRadius: BorderRadius.circular(20),
          ),
          child: Row(
            children: [
              GestureDetector(
                onTap: () => js.context.callMethod(
                    'open', ['https://github.com/AmosHuKe/flutter_tilt']),
                child: MouseRegion(
                  cursor: SystemMouseCursors.click,
                  child: Row(
                    children: [
                      SvgPicture.asset(
                        'assets/github-logo.svg',
                        width: 24,
                        height: 24,
                      ),
                      const SizedBox(width: 6),
                      const Text(
                        'Github: flutter_tilt',
                        style: TextStyle(fontSize: 14),
                      ),
                    ],
                  ),
                ),
              ),
              Container(
                margin: const EdgeInsets.symmetric(horizontal: 12),
                child: const Text(
                  '|',
                  style: TextStyle(color: Colors.grey),
                ),
              ),
              GestureDetector(
                onTap: () => js.context.callMethod(
                    'open', ['https://pub.dev/packages/flutter_tilt']),
                child: MouseRegion(
                  cursor: SystemMouseCursors.click,
                  child: Row(
                    children: [
                      Image.asset(
                        'assets/flutter-logo.png',
                        width: 20,
                        height: 20,
                      ),
                      const SizedBox(width: 6),
                      const Text(
                        'Package: flutter_tilt',
                        style: TextStyle(fontSize: 14),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),

        /// body
        Container(
          margin: const EdgeInsets.only(
            top: 12,
            bottom: 12,
            left: 24,
            right: 24,
          ),
          padding: const EdgeInsets.only(
            top: 24,
            bottom: 100,
            left: 24,
            right: 24,
          ),
          decoration: BoxDecoration(
            color: const Color(0xFFFFFFFF),
            borderRadius: BorderRadius.circular(20),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: const TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 64),
              Center(child: body),
            ],
          ),
        ),

        /// tools
        if (tools != null)
          Container(
            margin: const EdgeInsets.only(
              top: 12,
              bottom: 24,
              left: 24,
              right: 24,
            ),
            padding: const EdgeInsets.only(
              top: 64,
              bottom: 64,
              left: 64,
              right: 64,
            ),
            decoration: BoxDecoration(
              color: const Color(0xFFFFFFFF),
              borderRadius: BorderRadius.circular(20),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                ...?tools,
              ],
            ),
          ),
      ],
    );
  }
}
