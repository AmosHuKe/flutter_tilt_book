import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../config/config.dart';
import '../layouts/page_layout.dart';
import '../widgets/tilt_box.dart';

@RoutePage()
class TiltDirectionDemo extends StatefulWidget {
  const TiltDirectionDemo({super.key});

  @override
  State<TiltDirectionDemo> createState() => _TiltDirectionDemoState();
}

class _TiltDirectionDemoState extends State<TiltDirectionDemo> {
  Set<TiltDirection> tiltDirection = <TiltDirection>{TiltDirection.top, TiltDirection.bottom};
  TiltDataModel? tiltData;
  static const double width = 350;
  static const double height = 200;
  static const double angle = 20.0;

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Tilt Direction',
      dartCode: code(width: width, height: height, tiltDirection: tiltDirection),
      sourceCodeLink: '${Config.repoUri}/lib/views/tilt_direction.dart',
      minHeight: 500,
      body: TiltExample(
        width: width,
        height: height,
        angle: angle,
        tiltDirection: tiltDirection,
        onGestureMove: (TiltDataModel tiltDataModel, GesturesType gesturesType) {
          setState(() {
            tiltData = tiltDataModel;
          });
        },
        onGestureLeave: (TiltDataModel tiltDataModel, GesturesType gesturesType) {
          setState(() {
            tiltData = tiltDataModel;
          });
        },
      ),
      tools: [
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: [
            FilterChip(
              label: const Text('none'),
              selected: tiltDirection.contains(TiltDirection.none),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.none)
                      : tiltDirection.remove(TiltDirection.none);
                });
              },
            ),
            FilterChip(
              label: const Text('top'),
              selected: tiltDirection.contains(TiltDirection.top),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.top)
                      : tiltDirection.remove(TiltDirection.top);
                });
              },
            ),
            FilterChip(
              label: const Text('bottom'),
              selected: tiltDirection.contains(TiltDirection.bottom),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.bottom)
                      : tiltDirection.remove(TiltDirection.bottom);
                });
              },
            ),
            FilterChip(
              label: const Text('left'),
              selected: tiltDirection.contains(TiltDirection.left),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.left)
                      : tiltDirection.remove(TiltDirection.left);
                });
              },
            ),
            FilterChip(
              label: const Text('right'),
              selected: tiltDirection.contains(TiltDirection.right),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.right)
                      : tiltDirection.remove(TiltDirection.right);
                });
              },
            ),
            FilterChip(
              label: const Text('topLeft'),
              selected: tiltDirection.contains(TiltDirection.topLeft),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.topLeft)
                      : tiltDirection.remove(TiltDirection.topLeft);
                });
              },
            ),
            FilterChip(
              label: const Text('topRight'),
              selected: tiltDirection.contains(TiltDirection.topRight),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.topRight)
                      : tiltDirection.remove(TiltDirection.topRight);
                });
              },
            ),
            FilterChip(
              label: const Text('bottomLeft'),
              selected: tiltDirection.contains(TiltDirection.bottomLeft),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.bottomLeft)
                      : tiltDirection.remove(TiltDirection.bottomLeft);
                });
              },
            ),
            FilterChip(
              label: const Text('bottomRight'),
              selected: tiltDirection.contains(TiltDirection.bottomRight),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.bottomRight)
                      : tiltDirection.remove(TiltDirection.bottomRight);
                });
              },
            ),
            FilterChip(
              label: const Text('TiltDirection(0.8, 0.4)'),
              selected: tiltDirection.contains(const TiltDirection(0.8, 0.4)),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(const TiltDirection(0.8, 0.4))
                      : tiltDirection.remove(const TiltDirection(0.8, 0.4));
                });
              },
            ),
            FilterChip(
              label: const Text('Left: 0.8, Right: 0.3, Top: 0.7, Bottom: 0.4'),
              selected:
                  tiltDirection.contains(const TiltDirection(0.8, 0.7)) &&
                  tiltDirection.contains(const TiltDirection(-0.3, -0.4)),
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    tiltDirection.add(const TiltDirection(0.8, 0.7));
                    tiltDirection.add(const TiltDirection(-0.3, -0.4));
                  } else {
                    tiltDirection.remove(const TiltDirection(0.8, 0.7));
                    tiltDirection.remove(const TiltDirection(-0.3, -0.4));
                  }
                });
              },
            ),
          ],
        ),
        const SizedBox(height: 24),
        Wrap(
          spacing: 64,
          runSpacing: 24,
          children: [
            TiltBox(width: width, height: height, maxAngle: angle, tiltData: tiltData),
            SizedBox(
              width: 200,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'areaProgress:',
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                  Text('x: 100% * ${tiltData?.areaProgress.dx ?? 0}'),
                  Text('y: 100% * ${tiltData?.areaProgress.dy ?? 0}'),
                  const SizedBox(height: 8),
                  const Text(
                    'angle (max: $angle):',
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                  Text('x: ${tiltData?.angle.dx ?? 0}°'),
                  Text('y: ${tiltData?.angle.dy ?? 0}°'),
                  const SizedBox(height: 8),
                  const Text(
                    'transform:',
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                  Text('${tiltData?.transform}'),
                ],
              ),
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
    required this.width,
    required this.height,
    required this.angle,
    required this.tiltDirection,
    required this.onGestureMove,
    required this.onGestureLeave,
  });

  final double width;
  final double height;
  final double angle;
  final Set<TiltDirection> tiltDirection;
  final TiltCallback onGestureMove;
  final TiltCallback onGestureLeave;

  @override
  Widget build(BuildContext context) {
    return Tilt(
      tiltConfig: TiltConfig(angle: angle, direction: tiltDirection.toList()),
      onGestureMove: onGestureMove,
      onGestureLeave: onGestureLeave,
      child: TiltBaseContainer(
        borderRadius: BorderRadius.circular(30),
        child: Container(
          width: width,
          height: height,
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [Color(0xFF667eea), Color(0xFF764ba2)],
            ),
          ),
          child: const Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    );
  }
}

String code({
  required double width,
  required double height,
  required Set<TiltDirection> tiltDirection,
}) =>
    '''
class TiltExample extends StatelessWidget {
  const TiltExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Tilt(
      tiltConfig: TiltConfig(angle: angle, direction: ${tiltDirection.toList()}),
      child: TiltBaseContainer(
        borderRadius: BorderRadius.circular(30),
        child: Container(
          width: $width,
          height: $height,
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [Color(0xFF667eea), Color(0xFF764ba2)],
            ),
          ),
          child: const Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    );
  }
}
''';
