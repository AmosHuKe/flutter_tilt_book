import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../layouts/page_layout.dart';

@RoutePage()
class ReverseTilt extends StatelessWidget {
  const ReverseTilt({super.key});

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Reverse Tilt',
      dartCode: code(),
      sourceCodeLink:
          'https://github.com/amoshuke/flutter_tilt_book/blob/main/flutter_tilt_example/lib/views/reverse_tilt.dart',
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
      tiltConfig: const TiltConfig(enableReverse: true),
      child: TiltBaseContainer(
        shadowConfig: const ShadowBaseConfig(enableReverse: true),
        borderRadius: BorderRadius.circular(30),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Color(0xFFffb199), Color(0xFFff0844)],
            ),
          ),
          child: const Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
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
      tiltConfig: const TiltConfig(enableReverse: true),
      child: TiltBaseContainer(
        shadowConfig: const ShadowBaseConfig(enableReverse: true),
        borderRadius: BorderRadius.circular(30),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Color(0xFFffb199), Color(0xFFff0844)],
            ),
          ),
          child: const Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    );
  }
}
''';
