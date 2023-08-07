import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/base_layout.dart';

class Layout2Demo extends StatelessWidget {
  const Layout2Demo({super.key});

  @override
  Widget build(BuildContext context) {
    return BaseLayout(
      title: 'Layout',
      dartCode: code(),

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(20),
        border: Border.all(width: 4),
        lightConfig: const LightConfig(disable: true),
        shadowConfig: const ShadowConfig(disable: true),
        childLayout: ChildLayout(
          inner: const [
            TiltParallax(
              size: Offset(-30, -30),
              child: Text(
                'Flutter Tilt',
                style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
              ),
            )
          ],
          behind: [
            TiltParallax(
              size: const Offset(-30, -30),
              child: Container(
                width: 300 * 0.7,
                height: 300 * 0.7,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(20 * 0.7),
                  border: Border.all(width: 4 * 0.7),
                ),
              ),
            ),
            TiltParallax(
              size: const Offset(-20, -20),
              child: Container(
                width: 300 * 0.8,
                height: 300 * 0.8,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(20 * 0.8),
                  border: Border.all(width: 4 * 0.8),
                ),
              ),
            ),
            TiltParallax(
              size: const Offset(-10, -10),
              child: Container(
                width: 300 * 0.9,
                height: 300 * 0.9,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(20 * 0.9),
                  border: Border.all(width: 4 * 0.9),
                ),
              ),
            ),
          ],
        ),
        child: const SizedBox(width: 300, height: 300),
      ),
    );
  }
}

String code() =>
    '''
import 'package:flutter_tilt/flutter_tilt.dart';

······

Tilt(
  borderRadius: BorderRadius.circular(20),
  border: Border.all(width: 4),
  lightConfig: const LightConfig(disable: true),
  shadowConfig: const ShadowConfig(disable: true),
  childLayout: ChildLayout(
    inner: const [
      TiltParallax(
        size: Offset(-30, -30),
        child: Text(
          'Flutter Tilt',
          style: TextStyle(
            fontSize: 14,
            fontWeight: FontWeight.bold,
            color: Colors.black,
          ),
        ),
      )
    ],
    behind: [
      TiltParallax(
        size: const Offset(-30, -30),
        child: Container(
          width: 300 * 0.7,
          height: 300 * 0.7,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20 * 0.7),
            border: Border.all(width: 4 * 0.7),
          ),
        ),
      ),
      TiltParallax(
        size: const Offset(-20, -20),
        child: Container(
          width: 300 * 0.8,
          height: 300 * 0.8,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20 * 0.8),
            border: Border.all(width: 4 * 0.8),
          ),
        ),
      ),
      TiltParallax(
        size: const Offset(-10, -10),
        child: Container(
          width: 300 * 0.9,
          height: 300 * 0.9,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20 * 0.9),
            border: Border.all(width: 4 * 0.9),
          ),
        ),
      ),
    ],
  ),
  child: const SizedBox(width: 300, height: 300),
),

······
''';
