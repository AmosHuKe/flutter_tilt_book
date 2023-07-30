import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/base_layout.dart';

class LayoutDemo extends StatelessWidget {
  const LayoutDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return BaseLayout(
      title: 'Layout',

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(30),
        tiltConfig: const TiltConfig(angle: 20),
        shadowConfig: const ShadowConfig(disable: true),
        childLayout: ChildLayout(
          outer: [
            Positioned(
              left: 0,
              child: TiltParallax(
                size: const Offset(40, 40),
                child: Container(
                  width: 60,
                  height: 60,
                  alignment: Alignment.center,
                  color: Colors.black,
                  child: const Text(
                    'outer',
                    style: TextStyle(
                      fontSize: 20,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
            ),
          ],
          inner: [
            Positioned(
              right: 0,
              child: TiltParallax(
                size: const Offset(-40, -40),
                child: Container(
                  width: 60,
                  height: 60,
                  alignment: Alignment.center,
                  color: Colors.black,
                  child: const Text(
                    'inner',
                    style: TextStyle(
                      fontSize: 20,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
            ),
          ],
          behind: [
            Positioned(
              bottom: -20,
              child: TiltParallax(
                size: const Offset(-30, -30),
                child: Container(
                  width: 315,
                  height: 180,
                  alignment: Alignment.bottomCenter,
                  padding: const EdgeInsets.only(bottom: 12),
                  decoration: BoxDecoration(
                    color: Colors.black,
                    borderRadius: BorderRadius.circular(30),
                  ),
                  child: const Text(
                    'behind',
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
          child: const Text(
            'child',
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
