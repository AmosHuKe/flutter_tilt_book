import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../config/config.dart';
import '../layouts/page_layout.dart';

@RoutePage()
class InitialTilt extends StatelessWidget {
  const InitialTilt({super.key});

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Initial Tilt',
      dartCode: code(),
      sourceCodeLink: '${Config.repoUri}/lib/views/initial_tilt.dart',
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
      tiltConfig: const TiltConfig(initial: Offset(-1.0, -1.0)),
      child: TiltBaseContainer(
        borderRadius: BorderRadius.circular(30),
        childLayout: ChildLayout(
          outer: [
            Positioned(
              child: TiltParallax(
                offset: const Offset(20, 20),
                child: Container(
                  width: 200,
                  height: 60,
                  alignment: Alignment.center,
                  color: Colors.black,
                  child: const Text(
                    'Flutter Tilt ✨',
                    style: TextStyle(fontSize: 20, color: Colors.white),
                  ),
                ),
              ),
            ),
          ],
        ),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
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
class TiltExample extends StatelessWidget {
  const TiltExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Tilt(
      tiltConfig: const TiltConfig(initial: Offset(-1.0, -1.0)),
      child: TiltBaseContainer(
        borderRadius: BorderRadius.circular(30),
        childLayout: ChildLayout(
          outer: [
            Positioned(
              child: TiltParallax(
                offset: const Offset(20, 20),
                child: Container(
                  width: 200,
                  height: 60,
                  alignment: Alignment.center,
                  color: Colors.black,
                  child: const Text(
                    'Flutter Tilt ✨',
                    style: TextStyle(fontSize: 20, color: Colors.white),
                  ),
                ),
              ),
            ),
          ],
        ),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
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
''';
