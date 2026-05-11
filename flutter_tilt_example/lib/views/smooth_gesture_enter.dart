import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../layouts/page_layout.dart';

@RoutePage()
class SmoothGestureEnterDemo extends StatefulWidget {
  const SmoothGestureEnterDemo({super.key});

  @override
  State<SmoothGestureEnterDemo> createState() => _SmoothGestureEnterDemoState();
}

class _SmoothGestureEnterDemoState extends State<SmoothGestureEnterDemo> {
  final defaultTiltConfig = const TiltConfig();
  late Duration enterDuration = defaultTiltConfig.enterDuration;
  late Duration moveDuration = defaultTiltConfig.moveDuration;
  late Duration enterToMoveDuration = defaultTiltConfig.enterToMoveDuration;
  late Curve enterToMoveCurve = defaultTiltConfig.enterToMoveCurve;

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Smooth Gesture Enter',
      dartCode: code(
        enterDuration: enterDuration,
        moveDuration: moveDuration,
        enterToMoveDuration: enterToMoveDuration,
        enterToMoveCurve: enterToMoveCurve,
      ),
      sourceCodeLink:
          'https://github.com/amoshuke/flutter_tilt_book/blob/main/flutter_tilt_example/lib/views/smooth_gesture_enter.dart',
      minHeight: 800,
      body: TiltExample(
        enterDuration: enterDuration,
        moveDuration: moveDuration,
        enterToMoveDuration: enterToMoveDuration,
        enterToMoveCurve: enterToMoveCurve,
      ),
      tools: [
        /// TiltConfig.enterDuration
        const Text(
          'TiltConfig.enterDuration',
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: 12),
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: [
            FilterChip(
              label: Text('default (${defaultTiltConfig.enterDuration.inMilliseconds}ms)'),
              selected: enterDuration == defaultTiltConfig.enterDuration,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    enterDuration = defaultTiltConfig.enterDuration;
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('0ms'),
              selected: enterDuration == Duration.zero,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    enterDuration = Duration.zero;
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('100ms'),
              selected: enterDuration == const Duration(milliseconds: 100),
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    enterDuration = const Duration(milliseconds: 100);
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('5000ms'),
              selected: enterDuration == const Duration(milliseconds: 5000),
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    enterDuration = const Duration(milliseconds: 5000);
                  }
                });
              },
            ),
          ],
        ),
        const SizedBox(height: 24),

        /// TiltConfig.moveDuration
        const Text(
          'TiltConfig.moveDuration',
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: 12),
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: [
            FilterChip(
              label: Text('default (${defaultTiltConfig.moveDuration.inMilliseconds}ms)'),
              selected: moveDuration == defaultTiltConfig.moveDuration,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    moveDuration = defaultTiltConfig.moveDuration;
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('0ms'),
              selected: moveDuration == Duration.zero,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    moveDuration = Duration.zero;
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('1000ms'),
              selected: moveDuration == const Duration(milliseconds: 1000),
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    moveDuration = const Duration(milliseconds: 1000);
                  }
                });
              },
            ),
          ],
        ),
        const SizedBox(height: 24),

        /// TiltConfig.enterToMoveDuration
        const Text(
          'TiltConfig.enterToMoveDuration',
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: 12),
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: [
            FilterChip(
              label: Text('default (${defaultTiltConfig.enterToMoveDuration.inMilliseconds}ms)'),
              selected: enterToMoveDuration == defaultTiltConfig.enterToMoveDuration,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    enterToMoveDuration = defaultTiltConfig.enterToMoveDuration;
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('0ms'),
              selected: enterToMoveDuration == Duration.zero,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    enterToMoveDuration = Duration.zero;
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('2000ms'),
              selected: enterToMoveDuration == const Duration(milliseconds: 2000),
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    enterToMoveDuration = const Duration(milliseconds: 2000);
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('5000ms'),
              selected: enterToMoveDuration == const Duration(milliseconds: 5000),
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    enterToMoveDuration = const Duration(milliseconds: 5000);
                  }
                });
              },
            ),
          ],
        ),
        const SizedBox(height: 24),

        /// TiltConfig.enterToMoveCurve
        const Text(
          'TiltConfig.enterToMoveCurve',
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: 12),
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: [
            FilterChip(
              label: Text('default (${defaultTiltConfig.enterToMoveCurve})'),
              selected: enterToMoveCurve == defaultTiltConfig.enterToMoveCurve,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    enterToMoveCurve = defaultTiltConfig.enterToMoveCurve;
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('linear'),
              selected: enterToMoveCurve == Curves.linear,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    enterToMoveCurve = Curves.linear;
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('easeInExpo'),
              selected: enterToMoveCurve == Curves.easeInExpo,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    enterToMoveCurve = Curves.easeInExpo;
                  }
                });
              },
            ),
            FilterChip(
              label: const Text('easeOutExpo'),
              selected: enterToMoveCurve == Curves.easeOutExpo,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    enterToMoveCurve = Curves.easeOutExpo;
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

class TiltExample extends StatelessWidget {
  const TiltExample({
    super.key,
    required this.enterDuration,
    required this.moveDuration,
    required this.enterToMoveDuration,
    required this.enterToMoveCurve,
  });

  final Duration enterDuration;
  final Duration moveDuration;
  final Duration enterToMoveDuration;
  final Curve enterToMoveCurve;

  @override
  Widget build(BuildContext context) {
    final innerBox = <Widget>[];
    for (var i = 1; i <= 10; i++) {
      innerBox.add(
        TiltParallax(
          offset: Offset(-20.0 * i, -30.0 * i),
          child: DecoratedBox(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(
                width: 4 * (1 - i * 0.05),
                color: Colors.white.withValues(alpha: 1 - (i - 1) * 0.1),
              ),
            ),
            child: SizedBox(width: 200 * (1 - i * 0.05), height: 200 * (1 - i * 0.05)),
          ),
        ),
      );
    }

    return Tilt(
      tiltConfig: TiltConfig(
        angle: 20,
        enterDuration: enterDuration,
        moveDuration: moveDuration,
        enterToMoveDuration: enterToMoveDuration,
        enterToMoveCurve: enterToMoveCurve,
        leaveCurve: Curves.easeInOutCubicEmphasized,
        leaveDuration: const Duration(milliseconds: 1200),
      ),
      child: TiltBaseContainer(
        lightConfig: const LightConfig(disable: true),
        shadowConfig: const ShadowBaseConfig(disable: true),
        borderRadius: BorderRadius.circular(24.0),
        childLayout: ChildLayout(
          inner: [
            ...innerBox,
            const Positioned(
              left: 30.0,
              top: 30.0,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Flutter Tilt', style: TextStyle(fontSize: 14, color: Colors.white70)),
                  Text('Layout', style: TextStyle(fontSize: 32, color: Colors.white, height: 1)),
                ],
              ),
            ),
            const Positioned(
              left: 30.0,
              bottom: 30.0,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Touch and move around.',
                    style: TextStyle(fontSize: 14, color: Colors.white70),
                  ),
                ],
              ),
            ),
          ],
        ),
        child: const DecoratedBox(
          decoration: BoxDecoration(color: Colors.black),
          child: SizedBox(width: 300, height: 500),
        ),
      ),
    );
  }
}

String code({
  required Duration enterDuration,
  required Duration moveDuration,
  required Duration enterToMoveDuration,
  required Curve enterToMoveCurve,
}) =>
    '''
class TiltExample1 extends StatelessWidget {
  const TiltExample1({super.key});

  @override
  Widget build(BuildContext context) {
    final innerBox = <Widget>[];
    for (var i = 1; i <= 10; i++) {
      innerBox.add(
        TiltParallax(
          offset: Offset(-20.0 * i, -30.0 * i),
          child: DecoratedBox(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(
                width: 4 * (1 - i * 0.05),
                color: Colors.white.withValues(alpha: 1 - (i - 1) * 0.1),
              ),
            ),
            child: SizedBox(width: 200 * (1 - i * 0.05), height: 200 * (1 - i * 0.05)),
          ),
        ),
      );
    }

    return Tilt(
      tiltConfig: const TiltConfig(
        angle: 20,
        enterDuration: Duration(milliseconds: ${enterDuration.inMilliseconds}),
        moveDuration: Duration(milliseconds: ${moveDuration.inMilliseconds}),
        enterToMoveDuration: Duration(milliseconds: ${enterToMoveDuration.inMilliseconds}),
        enterToMoveCurve: $enterToMoveCurve,
        leaveCurve: Curves.easeInOutCubicEmphasized,
        leaveDuration: Duration(milliseconds: 1200),
      ),
      child: TiltBaseContainer(
        lightConfig: const LightConfig(disable: true),
        shadowConfig: const ShadowBaseConfig(disable: true),
        borderRadius: BorderRadius.circular(24.0),
        childLayout: ChildLayout(
          inner: [
            ...innerBox,
            const Positioned(
              left: 30.0,
              top: 30.0,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Flutter Tilt', style: TextStyle(fontSize: 14, color: Colors.white70)),
                  Text('Layout', style: TextStyle(fontSize: 32, color: Colors.white, height: 1)),
                ],
              ),
            ),
            const Positioned(
              left: 30.0,
              bottom: 30.0,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Touch and move around.',
                    style: TextStyle(fontSize: 14, color: Colors.white70),
                  ),
                ],
              ),
            ),
          ],
        ),
        child: const DecoratedBox(
          decoration: BoxDecoration(color: Colors.black),
          child: SizedBox(width: 300, height: 500),
        ),
      ),
    );
  }
}
''';
