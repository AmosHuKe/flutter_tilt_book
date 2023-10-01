import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/page_layout.dart';

class ParallaxImage extends StatelessWidget {
  const ParallaxImage({super.key});

  @override
  Widget build(BuildContext context) {
    /// 适应不同屏幕
    double scaleFactor = 1;
    final screenWidth = MediaQuery.of(context).size.width;
    if (screenWidth < 1500) scaleFactor = 0.8;
    if (screenWidth < 1360) scaleFactor = 0.6;
    if (screenWidth < 1280) scaleFactor = 1;
    if (screenWidth < 1076) scaleFactor = 0.8;
    if (screenWidth < 940) scaleFactor = 0.6;
    if (screenWidth < 768) scaleFactor = 0.4;

    return PageLayout(
      title: 'Parallax Image',
      dartCode: code(),
      minHeight: 580,

      /// Tilt here
      body: Tilt(
        lightConfig: const LightConfig(disable: true),
        shadowConfig: const ShadowConfig(disable: true),
        childLayout: ChildLayout(
          outer: [
            Positioned(
              top: 80 * scaleFactor,
              left: 140 * scaleFactor,
              child: TiltParallax(
                size: Offset(10 * scaleFactor, 10 * scaleFactor),
                child: Text(
                  'Flutter Tilt',
                  style: TextStyle(
                    color: Colors.black54,
                    fontSize: 40 * scaleFactor,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
            TiltParallax(
              size: Offset(20 * scaleFactor, 20 * scaleFactor),
              child: Image.asset(
                'assets/parallax_image/2.png',
                width: 742 * scaleFactor,
                height: 337 * scaleFactor,
              ),
            ),
            TiltParallax(
              size: Offset(30 * scaleFactor, 30 * scaleFactor),
              child: Image.asset(
                'assets/parallax_image/3.png',
                width: 742 * scaleFactor,
                height: 337 * scaleFactor,
              ),
            ),
          ],
        ),
        child: Image.asset(
          'assets/parallax_image/1.png',
          width: 742 * scaleFactor,
          height: 337 * scaleFactor,
        ),
      ),
    );
  }
}

String code() => '''
import 'package:flutter_tilt/flutter_tilt.dart';

······

Tilt(
  lightConfig: const LightConfig(disable: true),
  shadowConfig: const ShadowConfig(disable: true),
  childLayout: ChildLayout(
    outer: [
      const Positioned.fill(
        top: 80,
        left: 140,
        child: TiltParallax(
          size: Offset(10, 10),
          child: Text(
            'Flutter Tilt',
            style: TextStyle(
              color: Colors.black54,
              fontSize: 40,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ),
      TiltParallax(
        size: const Offset(20, 20),
        child: Image.asset(
          'assets/parallax_image/2.png',
          width: 742,
          height: 337,
        ),
      ),
      TiltParallax(
        size: const Offset(30, 30),
        child: Image.asset(
          'assets/parallax_image/3.png',
          width: 742,
          height: 337,
        ),
      ),
    ],
  ),
  child: Image.asset(
    'assets/parallax_image/1.png',
    width: 742,
    height: 337,
  ),
),

······
''';
