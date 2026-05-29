import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../config/config.dart';
import '../layouts/page_layout.dart';

@RoutePage()
class AnimationCurveDemo extends StatelessWidget {
  const AnimationCurveDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Animation Curve',
      dartCode: code(),
      sourceCodeLink: '${Config.repoUri}/lib/views/animation_curve.dart',
      minHeight: 500,
      body: const TiltExample(),
    );
  }
}

class TiltExample extends StatelessWidget {
  const TiltExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Tilt(
      tiltConfig: const TiltConfig(
        angle: 30,
        leaveDuration: Duration(seconds: 1),
        leaveCurve: Curves.bounceOut,
      ),
      child: TiltBaseContainer(
        borderRadius: BorderRadius.circular(30),
        childLayout: const ChildLayout(
          outer: [
            Positioned(
              child: TiltParallax(
                offset: Offset(40, 40),
                child: Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
              ),
            ),
          ],
        ),
        child: const DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topRight,
              end: Alignment.bottomLeft,
              colors: [Color(0xFF80d0c7), Color(0xFF13547a)],
            ),
          ),
          child: SizedBox(width: 350, height: 200),
        ),
      ),
    );
  }
}

String code() => '''
class TiltExample extends StatelessWidget {
  const TiltExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Tilt(
      tiltConfig: const TiltConfig(
        angle: 30,
        leaveDuration: Duration(seconds: 1),
        leaveCurve: Curves.bounceOut,
      ),
      child: TiltBaseContainer(
        borderRadius: BorderRadius.circular(30),
        childLayout: const ChildLayout(
          outer: [
            Positioned(
              child: TiltParallax(
                offset: Offset(40, 40),
                child: Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
              ),
            ),
          ],
        ),
        child: const DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topRight,
              end: Alignment.bottomLeft,
              colors: [Color(0xFF80d0c7), Color(0xFF13547a)],
            ),
          ),
          child: SizedBox(width: 350, height: 200),
        ),
      ),
    );
  }
}
''';
