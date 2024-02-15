import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/page_layout.dart';

class KeepTilt extends StatelessWidget {
  const KeepTilt({super.key});

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Keep Tilt',
      dartCode: code(),
      sourceCodeLink:
          'https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/keep_tilt.dart',
      minHeight: 500,

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(30),
        tiltConfig: const TiltConfig(
          enableRevert: false,
          enableSensorRevert: false,
        ),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Color(0xFF3cba92), Color(0xFF0ba360)],
            ),
          ),
          child: const Text(
            'Flutter Tilt ✨',
            style: TextStyle(
              fontSize: 20,
              color: Colors.white,
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
    enableRevert: false,
    enableSensorRevert: false,
  ),
  child: Container(
    width: 350,
    height: 200,
    alignment: Alignment.center,
    decoration: const BoxDecoration(
      gradient: LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [Color(0xFF3cba92), Color(0xFF0ba360)],
      ),
    ),
    child: const Text(
      'Flutter Tilt ✨',
      style: TextStyle(
        fontSize: 20,
        color: Colors.white,
      ),
    ),
  ),
),

······
''';
