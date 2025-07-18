import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../layouts/page_layout.dart';

@RoutePage()
class AnimationDemo extends StatelessWidget {
  const AnimationDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Animation',
      dartCode: code(),
      sourceCodeLink:
          'https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/animation.dart',
      minHeight: 500,

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(30),
        tiltConfig: const TiltConfig(
          angle: 30,
          leaveDuration: Duration(seconds: 1),
          leaveCurve: Curves.bounceOut,
        ),
        childLayout: const ChildLayout(
          outer: [
            Positioned(
              child: TiltParallax(
                size: Offset(40, 40),
                child: Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
              ),
            ),
          ],
        ),
        child: Container(
          width: 350,
          height: 200,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topRight,
              end: Alignment.bottomLeft,
              colors: [Color(0xFF80d0c7), Color(0xFF13547a)],
            ),
          ),
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
    angle: 30,
    leaveDuration: Duration(seconds: 1),
    leaveCurve: Curves.bounceOut,
  ),
  childLayout: const ChildLayout(
    outer: [
      Positioned(
        child: TiltParallax(
          size: Offset(40, 40),
          child: Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    ],
  ),
  child: Container(
    width: 350,
    height: 200,
    decoration: const BoxDecoration(
      gradient: LinearGradient(
        begin: Alignment.topRight,
        end: Alignment.bottomLeft,
        colors: [Color(0xFF80d0c7), Color(0xFF13547a)],
      ),
    ),
  ),
),

······
''';
