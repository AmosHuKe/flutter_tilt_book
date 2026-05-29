import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';
import 'package:remixicon_updated/remixicon_updated.dart';

import '../config/config.dart';
import '../layouts/page_layout.dart';

@RoutePage()
class TiltControllerDemo extends StatefulWidget {
  const TiltControllerDemo({super.key});

  @override
  State<TiltControllerDemo> createState() => _TiltControllerDemoState();
}

class _TiltControllerDemoState extends State<TiltControllerDemo> with TickerProviderStateMixin {
  final WidgetStateProperty<Icon?> thumbIcon = WidgetStateProperty.resolveWith<Icon?>((
    Set<WidgetState> states,
  ) {
    return states.contains(WidgetState.selected)
        ? const Icon(Remix.link_m)
        : const Icon(Remix.link_unlink_m);
  });
  late final TiltController tiltController;
  bool controllerBind = true;
  AnimationController? animationSelected;

  /// AnimationController around
  late final AnimationController aroundAnimationController;

  /// AnimationController leftTop -> rightBottom
  late final AnimationController ltrbAnimationController;

  /// AnimationController rightTop -> leftBottom
  late final AnimationController rtlbAnimationController;

  @override
  void initState() {
    super.initState();
    tiltController = TiltController();

    aroundAnimation();
    ltrbAnimation();
    rtlbAnimation();
    animationSelected = aroundAnimationController;
    animationSelected?.repeat(reverse: false);
  }

  @override
  void dispose() {
    tiltController.dispose();
    aroundAnimationController.dispose();
    ltrbAnimationController.dispose();
    rtlbAnimationController.dispose();
    super.dispose();
  }

  void stopAllAnimation() {
    aroundAnimationController.stop();
    ltrbAnimationController.stop();
    rtlbAnimationController.stop();
    tiltController.leave(position: Offset.zero);
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
      final radian = aroundAnimationController.value * 360.0 * math.pi / 180.0;
      const r = 75.0;
      // P = (cosθ, sinθ)
      final x = math.cos(radian) * r + 150.0;
      final y = math.sin(radian) * r + 75.0;
      tiltController.move(position: Offset(x, y));
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
      final x = ltrbAnimationController.value * 300.0;
      final y = ltrbAnimationController.value * 150.0;
      tiltController.move(position: Offset(x, y));
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
      final x = (1 - rtlbAnimationController.value) * 300.0;
      final y = (rtlbAnimationController.value) * 150.0;
      tiltController.move(position: Offset(x, y));
    });
  }

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'TiltStreamController',
      dartCode: code(),
      sourceCodeLink: '${Config.repoUri}/lib/views/tilt_stream_controller.dart',
      minHeight: 640,
      body: Column(
        children: [
          /// Tilt here
          Tilt(
            tiltController: controllerBind ? tiltController : null,
            tiltConfig: const TiltConfig(enableGestureSensors: false),
            child: TiltBaseContainer(
              borderRadius: BorderRadius.circular(30),
              childLayout: const ChildLayout(
                outer: [
                  Positioned(
                    child: TiltParallax(
                      offset: Offset(10, 10),
                      child: Text(
                        'Flutter Tilt 1 ✨',
                        style: TextStyle(fontSize: 14, color: Colors.white),
                      ),
                    ),
                  ),
                ],
              ),
              child: const DecoratedBox(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topRight,
                    end: Alignment.bottomLeft,
                    colors: [Color(0xFF80d0c7), Color(0xFF13547a)],
                  ),
                ),
                child: SizedBox(width: 300, height: 150),
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
            tiltController: controllerBind ? tiltController : null,
            tiltConfig: const TiltConfig(enableGestureSensors: true),
            child: TiltBaseContainer(
              borderRadius: BorderRadius.circular(30),
              childLayout: const ChildLayout(
                outer: [
                  Positioned(
                    child: TiltParallax(
                      offset: Offset(10, 10),
                      child: Text(
                        'Flutter Tilt 2 ✨',
                        style: TextStyle(fontSize: 14, color: Colors.white),
                      ),
                    ),
                  ),
                ],
              ),
              child: const DecoratedBox(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                    colors: [Color(0xFF8989ba), Color(0xFFa7a6cb)],
                  ),
                ),
                child: SizedBox(width: 300, height: 150),
              ),
            ),
          ),
        ],
      ),

      /// tools
      tools: [
        /// Animation
        const Text('Animation', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
        const SizedBox(height: 12),
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: [
            FilterChip(
              label: const Text('none'),
              selected: animationSelected == null,
              onSelected: (bool value) {
                if (value) {
                  setState(() {
                    stopAllAnimation();
                    animationSelected = null;
                  });
                }
              },
            ),
            FilterChip(
              label: const Text('around'),
              selected: animationSelected == aroundAnimationController,
              onSelected: (bool value) {
                if (value) {
                  setState(() {
                    stopAllAnimation();
                    animationSelected = aroundAnimationController..repeat(reverse: false);
                  });
                }
              },
            ),
            FilterChip(
              label: const Text('leftTop -> rightBottom'),
              selected: animationSelected == ltrbAnimationController,
              onSelected: (bool value) {
                if (value) {
                  setState(() {
                    stopAllAnimation();
                    animationSelected = ltrbAnimationController..repeat(reverse: true);
                  });
                }
              },
            ),
            FilterChip(
              label: const Text('rightTop -> leftBottom'),
              selected: animationSelected == rtlbAnimationController,
              onSelected: (bool value) {
                if (value) {
                  setState(() {
                    stopAllAnimation();
                    animationSelected = rtlbAnimationController..repeat(reverse: true);
                  });
                }
              },
            ),
          ],
        ),
      ],
    );
  }
}

String code() => '''
class TiltExample extends StatefulWidget {
  const TiltExample({super.key});

  @override
  State<TiltExample> createState() => _TiltExampleState();
}

class _TiltExampleState extends State<TiltExample> with TickerProviderStateMixin {
  final WidgetStateProperty<Icon?> thumbIcon = WidgetStateProperty.resolveWith<Icon?>((
    Set<WidgetState> states,
  ) {
    return states.contains(WidgetState.selected)
        ? const Icon(Remix.link_m)
        : const Icon(Remix.link_unlink_m);
  });
  late final TiltController tiltController;
  bool controllerBind = true;
  AnimationController? animationSelected;

  /// AnimationController around
  late final AnimationController aroundAnimationController;

  /// AnimationController leftTop -> rightBottom
  late final AnimationController ltrbAnimationController;

  /// AnimationController rightTop -> leftBottom
  late final AnimationController rtlbAnimationController;

  @override
  void initState() {
    super.initState();
    tiltController = TiltController();

    aroundAnimation();
    ltrbAnimation();
    rtlbAnimation();
    animationSelected = aroundAnimationController;
    animationSelected?.repeat(reverse: false);
  }

  @override
  void dispose() {
    tiltController.dispose();
    aroundAnimationController.dispose();
    ltrbAnimationController.dispose();
    rtlbAnimationController.dispose();
    super.dispose();
  }

  void stopAllAnimation() {
    aroundAnimationController.stop();
    ltrbAnimationController.stop();
    rtlbAnimationController.stop();
    tiltController.leave(position: Offset.zero);
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
      final radian = aroundAnimationController.value * 360.0 * math.pi / 180.0;
      const r = 75.0;
      // P = (cosθ, sinθ)
      final x = math.cos(radian) * r + 150.0;
      final y = math.sin(radian) * r + 75.0;
      tiltController.move(position: Offset(x, y));
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
      final x = ltrbAnimationController.value * 300.0;
      final y = ltrbAnimationController.value * 150.0;
      tiltController.move(position: Offset(x, y));
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
      final x = (1 - rtlbAnimationController.value) * 300.0;
      final y = (rtlbAnimationController.value) * 150.0;
      tiltController.move(position: Offset(x, y));
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        /// Tilt here
        Tilt(
          tiltController: controllerBind ? tiltController : null,
          tiltConfig: const TiltConfig(enableGestureSensors: false),
          child: TiltBaseContainer(
            borderRadius: BorderRadius.circular(30),
            childLayout: const ChildLayout(
              outer: [
                Positioned(
                  child: TiltParallax(
                    offset: Offset(10, 10),
                    child: Text(
                      'Flutter Tilt 1 ✨',
                      style: TextStyle(fontSize: 14, color: Colors.white),
                    ),
                  ),
                ),
              ],
            ),
            child: const DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topRight,
                  end: Alignment.bottomLeft,
                  colors: [Color(0xFF80d0c7), Color(0xFF13547a)],
                ),
              ),
              child: SizedBox(width: 300, height: 150),
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
          tiltController: controllerBind ? tiltController : null,
          tiltConfig: const TiltConfig(enableGestureSensors: true),
          child: TiltBaseContainer(
            borderRadius: BorderRadius.circular(30),
            childLayout: const ChildLayout(
              outer: [
                Positioned(
                  child: TiltParallax(
                    offset: Offset(10, 10),
                    child: Text(
                      'Flutter Tilt 2 ✨',
                      style: TextStyle(fontSize: 14, color: Colors.white),
                    ),
                  ),
                ),
              ],
            ),
            child: const DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [Color(0xFF8989ba), Color(0xFFa7a6cb)],
                ),
              ),
              child: SizedBox(width: 300, height: 150),
            ),
          ),
        ),
      ],
    );
  }
}
''';
