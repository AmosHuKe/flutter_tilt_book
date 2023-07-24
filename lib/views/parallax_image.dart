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
          top: 90,
          left: 110,
          child: TiltParallax(
            size: Offset(10, 10),
            child: Text(
              'Flutter Tilt',
              style: TextStyle(
                color: Colors.black87,
                fontSize: 40,
              ),
            ),
          ),
        ),
        TiltParallax(
          size: const Offset(20, 20),
          child: Image.asset(
            'parallax_image/1.png',
            alignment: Alignment.bottomCenter,
            width: 400,
            height: 300,
          ),
        ),
        TiltParallax(
          size: const Offset(30, 30),
          child: Image.asset(
            'parallax_image/2.png',
            alignment: Alignment.bottomCenter,
            width: 400,
            height: 300,
          ),
        ),
        TiltParallax(
          size: const Offset(40, 40),
          child: Image.asset(
            'parallax_image/y1.png',
            alignment: Alignment.bottomLeft,
            width: 400,
            height: 300,
          ),
        ),
        TiltParallax(
          size: const Offset(40, 40),
          child: Image.asset(
            'parallax_image/y3.png',
            alignment: Alignment.bottomRight,
            width: 400,
            height: 300,
          ),
        ),
        TiltParallax(
          size: const Offset(50, 50),
          child: Image.asset(
            'parallax_image/y2.png',
            alignment: Alignment.bottomCenter,
            width: 400,
            height: 300,
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
      'parallax_image/bg.png',
      width: 400,
      height: 300,
    );
  }
}
