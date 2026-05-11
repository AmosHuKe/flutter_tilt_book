import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../layouts/page_layout.dart';

@RoutePage()
class ParallaxImage extends StatelessWidget {
  const ParallaxImage({super.key});

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Parallax Image',
      dartCode: code(),
      sourceCodeLink:
          'https://github.com/amoshuke/flutter_tilt_book/blob/main/flutter_tilt_example/lib/views/parallax_image.dart',
      minHeight: 580,
      body: const TiltExample(),
    );
  }
}

class TiltExample extends StatelessWidget {
  const TiltExample({super.key});

  @override
  Widget build(BuildContext context) {
    /// 适应屏幕
    double scaleFactor = 1;
    final screenWidth = MediaQuery.of(context).size.width;
    if (screenWidth < 1500) scaleFactor = 0.8;
    if (screenWidth < 1360) scaleFactor = 0.6;
    if (screenWidth < 1280) scaleFactor = 1;
    if (screenWidth < 1076) scaleFactor = 0.8;
    if (screenWidth < 940) scaleFactor = 0.6;
    if (screenWidth < 768) scaleFactor = 0.4;

    return Tilt(
      tiltConfig: const TiltConfig(
        leaveCurve: Curves.easeInOutCubicEmphasized,
        leaveDuration: Duration(milliseconds: 600),
      ),
      child: TiltBaseContainer(
        lightConfig: const LightConfig(disable: true),
        shadowConfig: const ShadowBaseConfig(disable: true),
        childLayout: ChildLayout(
          outer: [
            Positioned(
              top: 80 * scaleFactor,
              left: 140 * scaleFactor,
              child: TiltParallax(
                offset: Offset(10 * scaleFactor, 10 * scaleFactor),
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
              offset: Offset(20 * scaleFactor, 20 * scaleFactor),
              child: Image.asset(
                'assets/parallax_image/2.png',
                width: 742 * scaleFactor,
                height: 337 * scaleFactor,
              ),
            ),
            TiltParallax(
              offset: Offset(30 * scaleFactor, 30 * scaleFactor),
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
class TiltExample1 extends StatelessWidget {
  const TiltExample1({super.key});

  @override
  Widget build(BuildContext context) {
    return Tilt(
      tiltConfig: const TiltConfig(
        leaveCurve: Curves.easeInOutCubicEmphasized,
        leaveDuration: Duration(milliseconds: 600),
      ),
      child: TiltBaseContainer(
        lightConfig: const LightConfig(disable: true),
        shadowConfig: const ShadowBaseConfig(disable: true),
        childLayout: ChildLayout(
          outer: [
            const Positioned(
              top: 80,
              left: 140,
              child: TiltParallax(
                offset: Offset(10, 10),
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
              offset: const Offset(20, 20),
              child: Image.asset('assets/parallax_image/2.png', width: 742, height: 337),
            ),
            TiltParallax(
              offset: const Offset(30, 30),
              child: Image.asset('assets/parallax_image/3.png', width: 742, height: 337),
            ),
          ],
        ),
        child: Image.asset('assets/parallax_image/1.png', width: 742, height: 337),
      ),
    );
  }
}
''';
