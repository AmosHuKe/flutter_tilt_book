import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../layouts/page_layout.dart';

@RoutePage()
class Layout2Demo extends StatelessWidget {
  const Layout2Demo({super.key});

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Layout',
      dartCode: code(),
      sourceCodeLink:
          'https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/layout2.dart',
      minHeight: 1200,

      /// Tilt here
      body: Wrap(
        spacing: 64,
        runSpacing: 64,
        alignment: WrapAlignment.center,
        runAlignment: WrapAlignment.center,
        children: [
          /// Example 1
          Tilt(
            borderRadius: BorderRadius.circular(20),
            border: Border.all(width: 4),
            tiltConfig: const TiltConfig(leaveCurve: Curves.easeInOutCubicEmphasized),
            lightConfig: const LightConfig(disable: true),
            shadowConfig: const ShadowConfig(disable: true),
            childLayout: ChildLayout(
              inner: const [
                TiltParallax(
                  size: Offset(-30, -30),
                  child: Text(
                    'Flutter Tilt',
                    style: TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                ),
              ],
              behind: [
                TiltParallax(
                  size: const Offset(-30, -30),
                  child: Container(
                    width: 300 * 0.7,
                    height: 300 * 0.7,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20 * 0.7),
                      border: Border.all(width: 4 * 0.7),
                    ),
                  ),
                ),
                TiltParallax(
                  size: const Offset(-20, -20),
                  child: Container(
                    width: 300 * 0.8,
                    height: 300 * 0.8,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20 * 0.8),
                      border: Border.all(width: 4 * 0.8),
                    ),
                  ),
                ),
                TiltParallax(
                  size: const Offset(-10, -10),
                  child: Container(
                    width: 300 * 0.9,
                    height: 300 * 0.9,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20 * 0.9),
                      border: Border.all(width: 4 * 0.9),
                    ),
                  ),
                ),
              ],
            ),
            child: const SizedBox(width: 300, height: 300),
          ),

          /// Example 2
          Tilt(
            borderRadius: BorderRadius.circular(48),
            border: Border.all(width: 4),
            tiltConfig: const TiltConfig(
              initial: Offset(-0.4, -0.4),
              enableReverse: true,
              leaveCurve: Curves.easeInOutCubicEmphasized,
              leaveDuration: Duration(milliseconds: 600),
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
              ],
            ),
            child: const SizedBox(width: 300, height: 300),
          ),
        ],
      ),
    );
  }
}

String code() => '''
import 'package:flutter_tilt/flutter_tilt.dart';

······

Wrap(
  spacing: 64,
  runSpacing: 64,
  alignment: WrapAlignment.center,
  runAlignment: WrapAlignment.center,
  children: [
    /// Example 1
    Tilt(
      borderRadius: BorderRadius.circular(20),
      border: Border.all(width: 4),
      tiltConfig: const TiltConfig(leaveCurve: Curves.easeInOutCubicEmphasized),
      lightConfig: const LightConfig(disable: true),
      shadowConfig: const ShadowConfig(disable: true),
      childLayout: ChildLayout(
        inner: const [
          TiltParallax(
            size: Offset(-30, -30),
            child: Text(
              'Flutter Tilt',
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
            ),
          ),
        ],
        behind: [
          TiltParallax(
            size: const Offset(-30, -30),
            child: Container(
              width: 300 * 0.7,
              height: 300 * 0.7,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20 * 0.7),
                border: Border.all(width: 4 * 0.7),
              ),
            ),
          ),
          TiltParallax(
            size: const Offset(-20, -20),
            child: Container(
              width: 300 * 0.8,
              height: 300 * 0.8,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20 * 0.8),
                border: Border.all(width: 4 * 0.8),
              ),
            ),
          ),
          TiltParallax(
            size: const Offset(-10, -10),
            child: Container(
              width: 300 * 0.9,
              height: 300 * 0.9,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20 * 0.9),
                border: Border.all(width: 4 * 0.9),
              ),
            ),
          ),
        ],
      ),
      child: const SizedBox(width: 300, height: 300),
    ),

    /// Example 2
    Tilt(
      borderRadius: BorderRadius.circular(48),
      border: Border.all(width: 4),
      tiltConfig: const TiltConfig(
        initial: Offset(-0.4, -0.4),
        enableReverse: true,
        leaveCurve: Curves.easeInOutCubicEmphasized,
        leaveDuration: Duration(milliseconds: 600),
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
        ],
      ),
      child: const SizedBox(width: 300, height: 300),
    ),
  ],
),

······
''';
