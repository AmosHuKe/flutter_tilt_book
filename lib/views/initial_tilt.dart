import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/page_layout.dart';

class InitialTilt extends StatelessWidget {
  const InitialTilt({super.key});

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Initial tilt',
      dartCode: code(),

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(30),
        tiltConfig: const TiltConfig(initial: Offset(-1.0, -1.0)),
        childLayout: ChildLayout(
          outer: [
            Positioned(
              child: TiltParallax(
                size: const Offset(20, 20),
                child: Container(
                  width: 200,
                  height: 60,
                  alignment: Alignment.center,
                  color: Colors.black,
                  child: const Text(
                    'Flutter Tilt ✨',
                    style: TextStyle(
                      fontSize: 20,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topRight,
              end: Alignment.bottomLeft,
              colors: [Color(0xFF80d0c7), Color(0xFF13547a)],
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
  tiltConfig: const TiltConfig(initial: Offset(-1.0, -1.0)),
  childLayout: ChildLayout(
    outer: [
      Positioned(
        child: TiltParallax(
          size: const Offset(20, 20),
          child: Container(
            width: 200,
            height: 60,
            alignment: Alignment.center,
            color: Colors.black,
            child: const Text(
              'Flutter Tilt ✨',
              style: TextStyle(
                fontSize: 20,
                color: Colors.white,
              ),
            ),
          ),
        ),
      ),
    ],
  ),
  child: Container(
    width: 350,
    height: 200,
    alignment: Alignment.center,
    decoration: const BoxDecoration(
      gradient: LinearGradient(
        begin: Alignment.topRight,
        end: Alignment.bottomLeft,
        colors: [Color(0xFF80d0c7), Color(0xFF13547a)],
      ),
    ),
  ),
),

······
''';
