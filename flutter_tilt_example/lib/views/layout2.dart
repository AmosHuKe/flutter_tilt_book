import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../layouts/page_layout.dart';

@RoutePage()
class Layout2Demo extends StatelessWidget {
  const Layout2Demo({super.key});

  @override
  Widget build(BuildContext context) {
    final innerBox = <Widget>[];
    for (var i = 1; i <= 10; i++) {
      innerBox.add(
        TiltParallax(
          size: Offset(-20.0 * i, -30.0 * i),
          child: Container(
            width: 200 * (1 - i * 0.05),
            height: 200 * (1 - i * 0.05),
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(
                width: 4 * (1 - i * 0.05),
                color: Colors.white.withValues(alpha: 1 - (i - 1) * 0.1),
              ),
            ),
          ),
        ),
      );
    }

    return PageLayout(
      title: 'Layout',
      dartCode: code(),
      sourceCodeLink:
          'https://github.com/amoshuke/flutter_tilt_book/flutter_tilt_example/blob/main/lib/views/layout2.dart',
      minHeight: 800,

      /// Tilt here
      body: Wrap(
        spacing: 64,
        runSpacing: 64,
        alignment: WrapAlignment.center,
        runAlignment: WrapAlignment.center,
        children: [
          Tilt(
            borderRadius: BorderRadius.circular(24.0),
            tiltConfig: const TiltConfig(
              angle: 20,
              leaveCurve: Curves.easeInOutCubicEmphasized,
              leaveDuration: Duration(milliseconds: 1200),
            ),
            lightConfig: const LightConfig(disable: true),
            shadowConfig: const ShadowConfig(disable: true),
            childLayout: ChildLayout(
              inner: [
                ...innerBox,
                const Positioned(
                  left: 30.0,
                  top: 30.0,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Flutter Tilt', style: TextStyle(fontSize: 14, color: Colors.white70)),
                      Text(
                        'Layout',
                        style: TextStyle(fontSize: 32, color: Colors.white, height: 1),
                      ),
                    ],
                  ),
                ),
                const Positioned(
                  left: 30.0,
                  bottom: 30.0,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Touch and move around.',
                        style: TextStyle(fontSize: 14, color: Colors.white70),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            child: Container(
              width: 300,
              height: 500,
              decoration: const BoxDecoration(color: Colors.black),
            ),
          ),
        ],
      ),
    );
  }
}

String code() => '''
import 'package:flutter_tilt/flutter_tilt.dart';

······

final innerBox = <Widget>[];
for (var i = 1; i <= 10; i++) {
  innerBox.add(
    TiltParallax(
      size: Offset(-20.0 * i, -30.0 * i),
      child: Container(
        width: 200 * (1 - i * 0.05),
        height: 200 * (1 - i * 0.05),
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(
            width: 4 * (1 - i * 0.05),
            color: Colors.white.withValues(alpha: 1 - (i - 1) * 0.1),
          ),
        ),
      ),
    ),
  );
}

Tilt(
  borderRadius: BorderRadius.circular(24.0),
  tiltConfig: const TiltConfig(
    angle: 20,
    leaveCurve: Curves.easeInOutCubicEmphasized,
    leaveDuration: Duration(milliseconds: 1200),
  ),
  lightConfig: const LightConfig(disable: true),
  shadowConfig: const ShadowConfig(disable: true),
  childLayout: ChildLayout(
    inner: [
      ...innerBox,
      const Positioned(
        left: 30.0,
        top: 30.0,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Flutter Tilt', style: TextStyle(fontSize: 14, color: Colors.white70)),
            Text(
              'Layout',
              style: TextStyle(fontSize: 32, color: Colors.white, height: 1),
            ),
          ],
        ),
      ),
      const Positioned(
        left: 30.0,
        bottom: 30.0,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Touch and move around.',
              style: TextStyle(fontSize: 14, color: Colors.white70),
            ),
          ],
        ),
      ),
    ],
  ),
  child: Container(
    width: 300,
    height: 500,
    decoration: const BoxDecoration(color: Colors.black),
  ),
),

······
''';
