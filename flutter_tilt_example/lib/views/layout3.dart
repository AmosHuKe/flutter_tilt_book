import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../layouts/page_layout.dart';

@RoutePage()
class Layout3Demo extends StatelessWidget {
  const Layout3Demo({super.key});

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Layout',
      dartCode: code(),
      sourceCodeLink:
          'https://github.com/amoshuke/flutter_tilt_book/blob/main/flutter_tilt_example/lib/views/layout3.dart',
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
            border: Border.all(width: 3),
            tiltConfig: const TiltConfig(
              angle: 20,
              initial: Offset(-0.4, -0.4),
              enableReverse: true,
              leaveCurve: Curves.easeInOutCubicEmphasized,
              leaveDuration: Duration(milliseconds: 1200),
            ),
            lightConfig: const LightConfig(disable: true),
            shadowConfig: const ShadowConfig(disable: true),
            childLayout: ChildLayout(
              inner: [
                TiltParallax(
                  size: const Offset(10, 10),
                  child: Container(
                    width: 64,
                    height: 64,
                    decoration: const BoxDecoration(color: Colors.black, shape: BoxShape.circle),
                  ),
                ),
                TiltParallax(
                  size: const Offset(20, 20),
                  child: Container(
                    width: 64,
                    height: 64,
                    decoration: BoxDecoration(
                      color: Colors.white,
                      border: Border.all(width: 4),
                      shape: BoxShape.circle,
                    ),
                    clipBehavior: Clip.hardEdge,
                    child: Center(
                      child: TiltParallax(
                        size: const Offset(15, 15),
                        child: Container(
                          width: 32,
                          height: 32,
                          decoration: const BoxDecoration(
                            color: Colors.black,
                            shape: BoxShape.circle,
                          ),
                        ),
                      ),
                    ),
                  ),
                ),

                const Positioned(
                  left: 30.0,
                  top: 30.0,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Flutter Tilt', style: TextStyle(fontSize: 12, color: Colors.black87)),
                      Text('Layout', style: TextStyle(fontSize: 24, color: Colors.black)),
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
                        style: TextStyle(fontSize: 14, color: Colors.black87),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            child: Container(
              width: 300,
              height: 500,
              decoration: const BoxDecoration(color: Colors.white),
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

Tilt(
  borderRadius: BorderRadius.circular(24.0),
  border: Border.all(width: 3),
  tiltConfig: const TiltConfig(
    angle: 20,
    initial: Offset(-0.4, -0.4),
    enableReverse: true,
    leaveCurve: Curves.easeInOutCubicEmphasized,
    leaveDuration: Duration(milliseconds: 1200),
  ),
  lightConfig: const LightConfig(disable: true),
  shadowConfig: const ShadowConfig(disable: true),
  childLayout: ChildLayout(
    inner: [
      TiltParallax(
        size: const Offset(10, 10),
        child: Container(
          width: 64,
          height: 64,
          decoration: const BoxDecoration(color: Colors.black, shape: BoxShape.circle),
        ),
      ),
      TiltParallax(
        size: const Offset(20, 20),
        child: Container(
          width: 64,
          height: 64,
          decoration: BoxDecoration(
            color: Colors.white,
            border: Border.all(width: 4),
            shape: BoxShape.circle,
          ),
          clipBehavior: Clip.hardEdge,
          child: Center(
            child: TiltParallax(
              size: const Offset(15, 15),
              child: Container(
                width: 32,
                height: 32,
                decoration: const BoxDecoration(
                  color: Colors.black,
                  shape: BoxShape.circle,
                ),
              ),
            ),
          ),
        ),
      ),

      const Positioned(
        left: 30.0,
        top: 30.0,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Flutter Tilt', style: TextStyle(fontSize: 12, color: Colors.black87)),
            Text('Layout', style: TextStyle(fontSize: 24, color: Colors.black)),
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
              style: TextStyle(fontSize: 14, color: Colors.black87),
            ),
          ],
        ),
      ),
    ],
  ),
  child: Container(
    width: 300,
    height: 500,
    decoration: const BoxDecoration(color: Colors.white),
  ),
),

······
''';
