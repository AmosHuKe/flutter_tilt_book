import 'package:material_ui/material_ui.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../config/config.dart';
import '../layouts/page_layout.dart';

@RoutePage()
class PerspectiveDemo extends StatefulWidget {
  const PerspectiveDemo({super.key});

  @override
  State<PerspectiveDemo> createState() => _PerspectiveDemoState();
}

class _PerspectiveDemoState extends State<PerspectiveDemo> {
  static const perspectiveIntensityConfigs = <double>[0.003, 0.004];
  static const zOffsetConfigs = <double>[-200, -300, 200, 300];
  static const defaultTiltConfig = TiltConfig();

  late double? perspectiveIntensity = perspectiveIntensityConfigs[0];
  late double zOffset = zOffsetConfigs[0];

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Perspective',
      dartCode: code(perspectiveIntensity: perspectiveIntensity, zOffset: zOffset),
      sourceCodeLink: '${Config.repoUri}/lib/views/smooth_gesture_enter.dart',
      minHeight: 800,
      body: TiltExample(perspectiveIntensity: perspectiveIntensity, zOffset: zOffset),
      tools: [
        /// TiltConfig.perspectiveIntensity
        const Text(
          'TiltConfig.perspectiveIntensity',
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: 12),
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: [
            FilterChip(
              label: Text('default (${defaultTiltConfig.perspectiveIntensity})'),
              selected: perspectiveIntensity == defaultTiltConfig.perspectiveIntensity,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    perspectiveIntensity = defaultTiltConfig.perspectiveIntensity;
                  }
                });
              },
            ),

            ...List.generate(perspectiveIntensityConfigs.length, (index) {
              final perspectiveIntensityConfig = perspectiveIntensityConfigs[index];
              return FilterChip(
                label: Text(perspectiveIntensityConfig.toString()),
                selected: perspectiveIntensity == perspectiveIntensityConfig,
                onSelected: (bool value) {
                  setState(() {
                    if (value) {
                      perspectiveIntensity = perspectiveIntensityConfig;
                    }
                  });
                },
              );
            }),
          ],
        ),
        const SizedBox(height: 24),

        /// TiltConfig.zOffset
        const Text(
          'TiltConfig.zOffset',
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
        ),
        const SizedBox(height: 12),
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: [
            FilterChip(
              label: Text('default (${defaultTiltConfig.zOffset})'),
              selected: zOffset == defaultTiltConfig.zOffset,
              onSelected: (bool value) {
                setState(() {
                  if (value) {
                    zOffset = defaultTiltConfig.zOffset;
                  }
                });
              },
            ),
            ...List.generate(zOffsetConfigs.length, (index) {
              final zOffsetConfig = zOffsetConfigs[index];
              return FilterChip(
                label: Text(zOffsetConfig.toString()),
                selected: zOffset == zOffsetConfig,
                onSelected: (bool value) {
                  setState(() {
                    if (value) {
                      zOffset = zOffsetConfig;
                    }
                  });
                },
              );
            }),
          ],
        ),
        const SizedBox(height: 24),
      ],
    );
  }
}

class TiltExample extends StatelessWidget {
  const TiltExample({super.key, required this.perspectiveIntensity, required this.zOffset});

  final double? perspectiveIntensity;
  final double zOffset;

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
        perspectiveIntensity: perspectiveIntensity,
        zOffset: zOffset,
        leaveCurve: Curves.easeInOutCubicEmphasized,
        leaveDuration: const Duration(milliseconds: 1200),
      ),
      child: TiltBaseContainer(
        filterQuality: FilterQuality.low,
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

String code({required double? perspectiveIntensity, required double zOffset}) =>
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
        perspectiveIntensity: $perspectiveIntensity,
        zOffset: $zOffset,
        leaveCurve: Curves.easeInOutCubicEmphasized,
        leaveDuration: const Duration(milliseconds: 1200),
      ),
      child: TiltBaseContainer(
        filterQuality: FilterQuality.low,
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
