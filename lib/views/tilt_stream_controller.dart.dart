import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';
import 'package:remixicon_updated/remixicon_updated.dart';

import 'package:flutter_tilt_book/layouts/page_layout.dart';

class TiltStreamControllerDemo extends StatefulWidget {
  const TiltStreamControllerDemo({super.key});

  @override
  State<TiltStreamControllerDemo> createState() =>
      _TiltStreamControllerDemoState();
}

class _TiltStreamControllerDemoState extends State<TiltStreamControllerDemo>
    with TickerProviderStateMixin {
  final MaterialStateProperty<Icon?> thumbIcon =
      MaterialStateProperty.resolveWith<Icon?>(
    (Set<MaterialState> states) {
      return states.contains(MaterialState.selected)
          ? const Icon(Remix.link_m)
          : const Icon(Remix.link_unlink_m);
    },
  );
  late StreamController<TiltStreamModel> tiltStreamController;
  bool controllerBind = true;
  AnimationController? animationSelected;

  /// AnimationController around
  late AnimationController aroundAnimationController;

  /// AnimationController leftTop -> rightBottom
  late AnimationController ltrbAnimationController;

  /// AnimationController rightTop -> leftBottom
  late AnimationController rtlbAnimationController;

  @override
  void initState() {
    super.initState();
    tiltStreamController = StreamController.broadcast();

    aroundAnimation();
    ltrbAnimation();
    rtlbAnimation();
    animationSelected = aroundAnimationController;
    animationSelected?.repeat(reverse: false);
  }

  @override
  void dispose() {
    tiltStreamController.close();
    aroundAnimationController.dispose();
    ltrbAnimationController.dispose();
    rtlbAnimationController.dispose();
    super.dispose();
  }

  void stopAllAnimation() {
    aroundAnimationController.stop();
    ltrbAnimationController.stop();
    rtlbAnimationController.stop();
  }

  /// Animation around
  void aroundAnimation() {
    aroundAnimationController = AnimationController(
      lowerBound: 0.0,
      upperBound: 1.0,
      duration: const Duration(milliseconds: 3000),
      vsync: this,
    );
    aroundAnimationController.addListener(() {
      final double radian =
          aroundAnimationController.value * 360 * math.pi / 180;
      const double r = 75;
      // P = (cosθ, sinθ)
      final double x = math.cos(radian) * r + 150;
      final double y = math.sin(radian) * r + 75;
      tiltStreamController.add(TiltStreamModel(position: Offset(x, y)));
    });
  }

  /// Animation leftTop -> rightBottom
  void ltrbAnimation() {
    ltrbAnimationController = AnimationController(
      lowerBound: 0.0,
      upperBound: 1.0,
      duration: const Duration(milliseconds: 3000),
      vsync: this,
    );
    ltrbAnimationController.addListener(() {
      final double x = ltrbAnimationController.value * 300;
      final double y = ltrbAnimationController.value * 150;
      tiltStreamController.add(TiltStreamModel(position: Offset(x, y)));
    });
  }

  /// Animation rightTop -> leftBottom
  void rtlbAnimation() {
    rtlbAnimationController = AnimationController(
      lowerBound: 0.0,
      upperBound: 1.0,
      duration: const Duration(milliseconds: 3000),
      vsync: this,
    );
    rtlbAnimationController.addListener(() {
      final double x = (1 - rtlbAnimationController.value) * 300;
      final double y = (rtlbAnimationController.value) * 150;
      tiltStreamController.add(TiltStreamModel(position: Offset(x, y)));
    });
  }

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'TiltStreamController',
      dartCode: code(),
      minHeight: 800,
      body: Column(
        children: [
          /// Tilt here
          Tilt(
            tiltStreamController: controllerBind ? tiltStreamController : null,
            borderRadius: BorderRadius.circular(30),
            tiltConfig: const TiltConfig(enableGestureSensors: false),
            childLayout: const ChildLayout(
              outer: [
                Positioned(
                  child: TiltParallax(
                    size: Offset(10, 10),
                    child: Text(
                      'Flutter Tilt 1 ✨',
                      style: TextStyle(
                        fontSize: 14,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
              ],
            ),
            child: Container(
              width: 300,
              height: 150,
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topRight,
                  end: Alignment.bottomLeft,
                  colors: [Color(0xFF80d0c7), Color(0xFF13547a)],
                ),
              ),
            ),
          ),

          /// bind
          Padding(
            padding: const EdgeInsets.all(20),
            child: Switch(
              thumbIcon: thumbIcon,
              value: controllerBind,
              onChanged: (value) {
                setState(() {
                  controllerBind = value;
                });
              },
            ),
          ),

          /// Tilt here
          Tilt(
            tiltStreamController: controllerBind ? tiltStreamController : null,
            borderRadius: BorderRadius.circular(30),
            tiltConfig: const TiltConfig(enableGestureSensors: false),
            childLayout: const ChildLayout(
              outer: [
                Positioned(
                  child: TiltParallax(
                    size: Offset(10, 10),
                    child: Text(
                      'Flutter Tilt 2 ✨',
                      style: TextStyle(
                        fontSize: 14,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
              ],
            ),
            child: Container(
              width: 300,
              height: 150,
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [Color(0xFF8989ba), Color(0xFFa7a6cb)],
                ),
              ),
            ),
          ),
        ],
      ),

      /// tools
      tools: [
        /// Animation
        const Text(
          "Animation",
          style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 12),
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: [
            FilterChip(
              label: const Text('none'),
              selected: animationSelected == null,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    stopAllAnimation();
                    animationSelected = null;
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('around'),
              selected: animationSelected == aroundAnimationController,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    animationSelected = aroundAnimationController
                      ..repeat(reverse: false);
                  } else {
                    stopAllAnimation();
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('leftTop -> rightBottom'),
              selected: animationSelected == ltrbAnimationController,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    animationSelected = ltrbAnimationController
                      ..repeat(reverse: true);
                  } else {
                    stopAllAnimation();
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('rightTop -> leftBottom'),
              selected: animationSelected == rtlbAnimationController,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    animationSelected = rtlbAnimationController
                      ..repeat(reverse: true);
                  } else {
                    stopAllAnimation();
                  }
                });
              },
            ),
          ],
        ),
      ],
    );
  }
}

String code() => '''
import 'dart:async';
import 'dart:math' as math;

import 'package:flutter_tilt/flutter_tilt.dart';

······

class TiltStreamControllerDemo extends StatefulWidget {
  const TiltStreamControllerDemo({super.key});

  @override
  State<TiltStreamControllerDemo> createState() =>
      _TiltStreamControllerDemoState();
}

class _TiltStreamControllerDemoState extends State<TiltStreamControllerDemo>
    with TickerProviderStateMixin {
  final MaterialStateProperty<Icon?> thumbIcon =
      MaterialStateProperty.resolveWith<Icon?>(
    (Set<MaterialState> states) {
      return states.contains(MaterialState.selected)
          ? const Icon(Remix.link_m)
          : const Icon(Remix.link_unlink_m);
    },
  );
  late StreamController<TiltStreamModel> tiltStreamController;
  bool controllerBind = true;
  AnimationController? animationSelected;

  /// AnimationController around
  late AnimationController aroundAnimationController;

  /// AnimationController leftTop -> rightBottom
  late AnimationController ltrbAnimationController;

  /// AnimationController rightTop -> leftBottom
  late AnimationController rtlbAnimationController;

  @override
  void initState() {
    super.initState();
    tiltStreamController = StreamController.broadcast();

    aroundAnimation();
    ltrbAnimation();
    rtlbAnimation();
    animationSelected = aroundAnimationController;
    animationSelected?.repeat(reverse: false);
  }

  @override
  void dispose() {
    tiltStreamController.close();
    aroundAnimationController.dispose();
    ltrbAnimationController.dispose();
    rtlbAnimationController.dispose();
    super.dispose();
  }

  void stopAllAnimation() {
    aroundAnimationController.stop();
    ltrbAnimationController.stop();
    rtlbAnimationController.stop();
  }

  /// Animation around
  void aroundAnimation() {
    aroundAnimationController = AnimationController(
      lowerBound: 0.0,
      upperBound: 1.0,
      duration: const Duration(milliseconds: 3000),
      vsync: this,
    );
    aroundAnimationController.addListener(() {
      final double radian =
          aroundAnimationController.value * 360 * math.pi / 180;
      const double r = 75;
      // P = (cosθ, sinθ)
      final double x = math.cos(radian) * r + 150;
      final double y = math.sin(radian) * r + 75;
      tiltStreamController.add(TiltStreamModel(position: Offset(x, y)));
    });
  }

  /// Animation leftTop -> rightBottom
  void ltrbAnimation() {
    ltrbAnimationController = AnimationController(
      lowerBound: 0.0,
      upperBound: 1.0,
      duration: const Duration(milliseconds: 3000),
      vsync: this,
    );
    ltrbAnimationController.addListener(() {
      final double x = ltrbAnimationController.value * 300;
      final double y = ltrbAnimationController.value * 150;
      tiltStreamController.add(TiltStreamModel(position: Offset(x, y)));
    });
  }

  /// Animation rightTop -> leftBottom
  void rtlbAnimation() {
    rtlbAnimationController = AnimationController(
      lowerBound: 0.0,
      upperBound: 1.0,
      duration: const Duration(milliseconds: 3000),
      vsync: this,
    );
    rtlbAnimationController.addListener(() {
      final double x = (1 - rtlbAnimationController.value) * 300;
      final double y = (rtlbAnimationController.value) * 150;
      tiltStreamController.add(TiltStreamModel(position: Offset(x, y)));
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        /// Tilt here
        Tilt(
          tiltStreamController: controllerBind ? tiltStreamController : null,
          borderRadius: BorderRadius.circular(30),
          tiltConfig: const TiltConfig(enableGestureSensors: false),
          childLayout: const ChildLayout(
            outer: [
              Positioned(
                child: TiltParallax(
                  size: Offset(10, 10),
                  child: Text(
                    'Flutter Tilt 1 ✨',
                    style: TextStyle(
                      fontSize: 14,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
            ],
          ),
          child: Container(
            width: 300,
            height: 150,
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topRight,
                end: Alignment.bottomLeft,
                colors: [Color(0xFF80d0c7), Color(0xFF13547a)],
              ),
            ),
          ),
        ),

        /// bind
        Padding(
          padding: const EdgeInsets.all(20),
          child: Switch(
            thumbIcon: thumbIcon,
            value: controllerBind,
            onChanged: (value) {
              setState(() {
                controllerBind = value;
              });
            },
          ),
        ),

        /// Tilt here
        Tilt(
          tiltStreamController: controllerBind ? tiltStreamController : null,
          borderRadius: BorderRadius.circular(30),
          tiltConfig: const TiltConfig(enableGestureSensors: false),
          childLayout: const ChildLayout(
            outer: [
              Positioned(
                child: TiltParallax(
                  size: Offset(10, 10),
                  child: Text(
                    'Flutter Tilt 2 ✨',
                    style: TextStyle(
                      fontSize: 14,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
            ],
          ),
          child: Container(
            width: 300,
            height: 150,
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [Color(0xFF8989ba), Color(0xFFa7a6cb)],
              ),
            ),
          ),
        ),

        /// Tools
        /// Animation
        const Text(
          "Animation",
          style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 12),
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: [
            FilterChip(
              label: const Text('none'),
              selected: animationSelected == null,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    stopAllAnimation();
                    animationSelected = null;
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('around'),
              selected: animationSelected == aroundAnimationController,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    animationSelected = aroundAnimationController
                      ..repeat(reverse: false);
                  } else {
                    stopAllAnimation();
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('leftTop -> rightBottom'),
              selected: animationSelected == ltrbAnimationController,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    animationSelected = ltrbAnimationController
                      ..repeat(reverse: true);
                  } else {
                    stopAllAnimation();
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('rightTop -> leftBottom'),
              selected: animationSelected == rtlbAnimationController,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    animationSelected = rtlbAnimationController
                      ..repeat(reverse: true);
                  } else {
                    stopAllAnimation();
                  }
                });
              },
            ),
          ],
        ),
      ],
    );
  }
}

······
''';
