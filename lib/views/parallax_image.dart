import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/base_layout.dart';

class ParallaxImage extends StatelessWidget {
  const ParallaxImage({super.key});

  @override
  Widget build(BuildContext context) {
    return BaseLayout(
      title: 'Parallax image',

      /// Tilt here
      body: Tilt(
        lightConfig: const LightConfig(disable: true),
        shadowConfig: const ShadowConfig(disable: true),
        childInner: [
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
        child: Image.asset(
          'assets/parallax_image/1.png',
          width: 742,
          height: 337,
        ),
      ),
    );
  }
}
