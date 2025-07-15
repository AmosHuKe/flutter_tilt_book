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
          'https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/reverse_tilt.dart',
      minHeight: 500,

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(30),
        tiltConfig: const TiltConfig(enableReverse: true),
        shadowConfig: const ShadowConfig(enableReverse: true),
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
import 'package:flutter_tilt/flutter_tilt.dart';

······

Tilt(
  borderRadius: BorderRadius.circular(30),
  tiltConfig: const TiltConfig(enableReverse: true),
  shadowConfig: const ShadowConfig(enableReverse: true),
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

······
''';
