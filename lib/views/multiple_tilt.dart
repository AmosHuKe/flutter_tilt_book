import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/page_layout.dart';

class MultipleTilt extends StatelessWidget {
  const MultipleTilt({super.key});

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Multiple Tilt',
      dartCode: code(),
      minHeight: 1314,
      body: Wrap(
        spacing: 32,
        runSpacing: 32,
        alignment: WrapAlignment.center,
        runAlignment: WrapAlignment.center,
        children: [
          /// Tilt here
          Tilt(
            borderRadius: BorderRadius.circular(20),
            tiltConfig: const TiltConfig(filterQuality: FilterQuality.high),
            child: Image.asset(
              'assets/multiple_tilt_image/sun.png',
              width: 160,
            ),
          ),

          /// Tilt here
          Tilt(
            borderRadius: BorderRadius.circular(20),
            tiltConfig: const TiltConfig(filterQuality: FilterQuality.high),
            child: Image.asset(
              'assets/multiple_tilt_image/moon.png',
              width: 160,
            ),
          ),

          /// Tilt here
          Tilt(
            borderRadius: BorderRadius.circular(20),
            tiltConfig: const TiltConfig(filterQuality: FilterQuality.high),
            child: Image.asset(
              'assets/multiple_tilt_image/star.png',
              width: 160,
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

Wrap(
  spacing: 32,
  runSpacing: 32,
  alignment: WrapAlignment.center,
  runAlignment: WrapAlignment.center,
  children: [
    /// Tilt here
    Tilt(
      borderRadius: BorderRadius.circular(20),
      tiltConfig: const TiltConfig(filterQuality: FilterQuality.high),
      child: Image.asset(
        'assets/multiple_tilt_image/sun.png',
        width: 160,
      ),
    ),

    /// Tilt here
    Tilt(
      borderRadius: BorderRadius.circular(20),
      tiltConfig: const TiltConfig(filterQuality: FilterQuality.high),
      child: Image.asset(
        'assets/multiple_tilt_image/moon.png',
        width: 160,
      ),
    ),

    /// Tilt here
    Tilt(
      borderRadius: BorderRadius.circular(20),
      tiltConfig: const TiltConfig(filterQuality: FilterQuality.high),
      child: Image.asset(
        'assets/multiple_tilt_image/star.png',
        width: 160,
      ),
    ),
  ],
),

······
''';
