import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../layouts/page_layout.dart';

@RoutePage()
class LayoutDemo extends StatelessWidget {
  const LayoutDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Layout',
      dartCode: code(),
      sourceCodeLink:
          'https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/layout.dart',
      minHeight: 500,

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(30),
        tiltConfig: const TiltConfig(
          angle: 20,
          leaveDuration: Duration(seconds: 1),
          leaveCurve: Curves.elasticOut,
        ),
        shadowConfig: const ShadowConfig(disable: true),
        childLayout: ChildLayout(
          outer: [
            Positioned(
              left: 0,
              child: TiltParallax(
                size: const Offset(40, 40),
                child: Container(
                  width: 60,
                  height: 60,
                  alignment: Alignment.center,
                  color: Colors.black,
                  child: const Text('outer', style: TextStyle(fontSize: 20, color: Colors.white)),
                ),
              ),
            ),
          ],
          inner: [
            Positioned(
              right: 0,
              child: TiltParallax(
                size: const Offset(-40, -40),
                child: Container(
                  width: 60,
                  height: 60,
                  alignment: Alignment.center,
                  color: Colors.black,
                  child: const Text('inner', style: TextStyle(fontSize: 20, color: Colors.white)),
                ),
              ),
            ),
          ],
          behind: [
            Positioned(
              bottom: -10,
              child: TiltParallax(
                size: const Offset(-50, -50),
                child: Container(
                  width: 350 * 0.8,
                  height: 200 * 0.8,
                  alignment: Alignment.bottomCenter,
                  padding: const EdgeInsets.only(bottom: 4),
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      begin: Alignment.topRight,
                      end: Alignment.bottomLeft,
                      colors: [
                        const Color(0xFF80d0c7).withValues(alpha: 0.6),
                        const Color(0xFF13547a).withValues(alpha: 0.6),
                      ],
                    ),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: const Text('behind', style: TextStyle(fontSize: 18, color: Colors.white)),
                ),
              ),
            ),
            Positioned(
              bottom: -5,
              child: TiltParallax(
                size: const Offset(-25, -25),
                child: Container(
                  width: 350 * 0.9,
                  height: 200 * 0.9,
                  alignment: Alignment.bottomCenter,
                  padding: const EdgeInsets.only(bottom: 4),
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      begin: Alignment.topRight,
                      end: Alignment.bottomLeft,
                      colors: [
                        const Color(0xFF80d0c7).withValues(alpha: 0.8),
                        const Color(0xFF13547a).withValues(alpha: 0.8),
                      ],
                    ),
                    borderRadius: BorderRadius.circular(25),
                  ),
                  child: const Text('behind', style: TextStyle(fontSize: 18, color: Colors.white)),
                ),
              ),
            ),
          ],
        ),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topRight,
              end: Alignment.bottomLeft,
              colors: [
                const Color(0xFF80d0c7).withValues(alpha: 0.9),
                const Color(0xFF13547a).withValues(alpha: 0.9),
              ],
            ),
          ),
          child: const Text('child', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    );
  }
}

String code() => '''
import 'package:flutter_tilt/flutter_tilt.dart';

······

Tilt(
  borderRadius: BorderRadius.circular(30),
  tiltConfig: const TiltConfig(
    angle: 20,
    leaveDuration: Duration(seconds: 1),
    leaveCurve: Curves.elasticOut,
  ),
  shadowConfig: const ShadowConfig(disable: true),
  childLayout: ChildLayout(
    outer: [
      Positioned(
        left: 0,
        child: TiltParallax(
          size: const Offset(40, 40),
          child: Container(
            width: 60,
            height: 60,
            alignment: Alignment.center,
            color: Colors.black,
            child: const Text('outer', style: TextStyle(fontSize: 20, color: Colors.white)),
          ),
        ),
      ),
    ],
    inner: [
      Positioned(
        right: 0,
        child: TiltParallax(
          size: const Offset(-40, -40),
          child: Container(
            width: 60,
            height: 60,
            alignment: Alignment.center,
            color: Colors.black,
            child: const Text('inner', style: TextStyle(fontSize: 20, color: Colors.white)),
          ),
        ),
      ),
    ],
    behind: [
      Positioned(
        bottom: -10,
        child: TiltParallax(
          size: const Offset(-50, -50),
          child: Container(
            width: 350 * 0.8,
            height: 200 * 0.8,
            alignment: Alignment.bottomCenter,
            padding: const EdgeInsets.only(bottom: 4),
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topRight,
                end: Alignment.bottomLeft,
                colors: [
                  const Color(0xFF80d0c7).withValues(alpha: 0.6),
                  const Color(0xFF13547a).withValues(alpha: 0.6),
                ],
              ),
              borderRadius: BorderRadius.circular(20),
            ),
            child: const Text('behind', style: TextStyle(fontSize: 18, color: Colors.white)),
          ),
        ),
      ),
      Positioned(
        bottom: -5,
        child: TiltParallax(
          size: const Offset(-25, -25),
          child: Container(
            width: 350 * 0.9,
            height: 200 * 0.9,
            alignment: Alignment.bottomCenter,
            padding: const EdgeInsets.only(bottom: 4),
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topRight,
                end: Alignment.bottomLeft,
                colors: [
                  const Color(0xFF80d0c7).withValues(alpha: 0.8),
                  const Color(0xFF13547a).withValues(alpha: 0.8),
                ],
              ),
              borderRadius: BorderRadius.circular(25),
            ),
            child: const Text('behind', style: TextStyle(fontSize: 18, color: Colors.white)),
          ),
        ),
      ),
    ],
  ),
  child: Container(
    width: 350,
    height: 200,
    alignment: Alignment.center,
    decoration: BoxDecoration(
      gradient: LinearGradient(
        begin: Alignment.topRight,
        end: Alignment.bottomLeft,
        colors: [
          const Color(0xFF80d0c7).withValues(alpha: 0.9),
          const Color(0xFF13547a).withValues(alpha: 0.9),
        ],
      ),
    ),
    child: const Text('child', style: TextStyle(fontSize: 20, color: Colors.white)),
  ),
),

······
''';
