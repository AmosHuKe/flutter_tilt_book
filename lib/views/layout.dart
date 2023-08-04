import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/base_layout.dart';

class LayoutDemo extends StatelessWidget {
  const LayoutDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return BaseLayout(
      title: 'Layout',
      body: Column(
        children: [
          /// Tilt here
          Tilt(
            borderRadius: BorderRadius.circular(30),
            tiltConfig: const TiltConfig(
              angle: 20,
              leaveDuration: Duration(seconds: 1),
              leaveCurve: Curves.elasticOut,
            ),
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
                  bottom: -10,
                  child: TiltParallax(
                    size: const Offset(-50, -50),
                    child: Container(
                      width: 350 * 0.8,
                      height: 200 * 0.8,
                      alignment: Alignment.bottomCenter,
                      padding: const EdgeInsets.only(bottom: 4),
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          begin: Alignment.topRight,
                          end: Alignment.bottomLeft,
                          colors: [
                            const Color(0xFF80d0c7).withOpacity(0.6),
                            const Color(0xFF13547a).withOpacity(0.6),
                          ],
                        ),
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: const Text(
                        'behind',
                        style: TextStyle(
                          fontSize: 18,
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ),
                ),
                Positioned(
                  bottom: -5,
                  child: TiltParallax(
                    size: const Offset(-25, -25),
                    child: Container(
                      width: 350 * 0.9,
                      height: 200 * 0.9,
                      alignment: Alignment.bottomCenter,
                      padding: const EdgeInsets.only(bottom: 4),
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          begin: Alignment.topRight,
                          end: Alignment.bottomLeft,
                          colors: [
                            const Color(0xFF80d0c7).withOpacity(0.8),
                            const Color(0xFF13547a).withOpacity(0.8),
                          ],
                        ),
                        borderRadius: BorderRadius.circular(25),
                      ),
                      child: const Text(
                        'behind',
                        style: TextStyle(
                          fontSize: 18,
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
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topRight,
                  end: Alignment.bottomLeft,
                  colors: [
                    const Color(0xFF80d0c7).withOpacity(0.9),
                    const Color(0xFF13547a).withOpacity(0.9),
                  ],
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

          const SizedBox(height: 128),

          /// Tilt here
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
        ],
      ),
    );
  }
}
