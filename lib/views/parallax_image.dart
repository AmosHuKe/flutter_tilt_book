import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

class ParallaxImage extends StatelessWidget {
  const ParallaxImage({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        backgroundColor: Color(0xFFFFFFFF),
        body: Center(child: TiltDemo()),
      ),
    );
  }
}

class TiltDemo extends StatelessWidget {
  const TiltDemo({super.key});

  @override
  Widget build(BuildContext context) {
    /// Tilt here
    return Tilt(
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
      child: const Box(),
    );
  }
}

class Box extends StatelessWidget {
  const Box({super.key});

  @override
  Widget build(BuildContext context) {
    return Image.asset(
      'assets/parallax_image/1.png',
      width: 742,
      height: 337,
    );
  }
}
