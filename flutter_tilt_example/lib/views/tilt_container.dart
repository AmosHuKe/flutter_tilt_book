import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../config/config.dart';
import '../layouts/page_layout.dart';

enum TiltContainer {
  base('TiltBaseContainer'),
  projector('TiltProjectorContainer');

  const TiltContainer(this.name);
  final String name;
}

@RoutePage()
class TiltContainerDemo extends StatefulWidget {
  const TiltContainerDemo({super.key});

  @override
  State<TiltContainerDemo> createState() => _TiltContainerDemoState();
}

class _TiltContainerDemoState extends State<TiltContainerDemo> {
  /// 适应屏幕
  double scaleFactor = 1;
  TiltContainer tiltContainer = TiltContainer.projector;

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    if (screenWidth < 1500) scaleFactor = 0.8;
    if (screenWidth < 1360) scaleFactor = 0.6;
    if (screenWidth < 1280) scaleFactor = 1;
    if (screenWidth < 1076) scaleFactor = 0.8;
    if (screenWidth < 940) scaleFactor = 0.6;
    if (screenWidth < 768) scaleFactor = 0.4;

    return PageLayout(
      title: 'Tilt container',
      dartCode: code(),
      sourceCodeLink: '${Config.repoUri}/lib/views/light_shadow_mode.dart',
      minHeight: 580,
      body: switch (tiltContainer) {
        TiltContainer.base => TiltBaseExample(scaleFactor: scaleFactor),
        TiltContainer.projector => TiltProjectorExample(scaleFactor: scaleFactor),
      },
      tools: [
        const Text('Tilt container', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
        const SizedBox(height: 12),
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: TiltContainer.values.map((TiltContainer value) {
            return ChoiceChip(
              label: Text(value.name),
              selected: tiltContainer == value,
              onSelected: (bool selected) {
                setState(() {
                  selected ? tiltContainer = value : null;
                });
              },
            );
          }).toList(),
        ),
      ],
    );
  }
}

class TiltWidget extends StatelessWidget {
  const TiltWidget({super.key, required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Tilt(
      tiltConfig: const TiltConfig(
        leaveCurve: Curves.easeInOutCubicEmphasized,
        leaveDuration: Duration(milliseconds: 600),
      ),
      child: child,
    );
  }
}

class TiltBody extends StatelessWidget {
  const TiltBody({super.key, required this.scaleFactor});

  final double scaleFactor;

  @override
  Widget build(BuildContext context) {
    return SizedBox(width: 742 * scaleFactor, height: 337 * scaleFactor);
  }

  static ChildLayout childLayout(double scaleFactor) {
    return ChildLayout(
      outer: [
        Positioned(
          top: 80 * scaleFactor,
          left: 140 * scaleFactor,
          child: TiltParallax(
            offset: Offset(10 * scaleFactor, 10 * scaleFactor),
            child: Text(
              'Flutter Tilt',
              style: TextStyle(
                color: Colors.black54,
                fontSize: 40 * scaleFactor,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
        TiltParallax(
          offset: Offset(20 * scaleFactor, 20 * scaleFactor),
          child: Image.asset(
            'assets/parallax_image/2.png',
            width: 742 * scaleFactor,
            height: 337 * scaleFactor,
          ),
        ),
        TiltParallax(
          offset: Offset(30 * scaleFactor, 30 * scaleFactor),
          child: Image.asset(
            'assets/parallax_image/3.png',
            width: 742 * scaleFactor,
            height: 337 * scaleFactor,
          ),
        ),
      ],
    );
  }
}

class TiltProjectorExample extends StatelessWidget {
  const TiltProjectorExample({super.key, required this.scaleFactor});

  final double scaleFactor;

  @override
  Widget build(BuildContext context) {
    return TiltWidget(
      child: TiltProjectorContainer(
        shadowConfig: const ShadowProjectorConfig(
          maxIntensity: 0.36,
          projectorScaleFrom: 1.0,
          projectorScaleTo: 1.0,
          projectorBlurSigmaFrom: 2.0,
          projectorBlurSigmaTo: 10.0,
        ),
        childLayout: TiltBody.childLayout(scaleFactor),
        child: TiltBody(scaleFactor: scaleFactor),
      ),
    );
  }
}

class TiltBaseExample extends StatelessWidget {
  const TiltBaseExample({super.key, required this.scaleFactor});

  final double scaleFactor;

  @override
  Widget build(BuildContext context) {
    return TiltWidget(
      child: TiltBaseContainer(
        lightConfig: const LightConfig(disable: true),
        shadowConfig: const ShadowBaseConfig(maxIntensity: 0.6),
        childLayout: TiltBody.childLayout(scaleFactor),
        child: TiltBody(scaleFactor: scaleFactor),
      ),
    );
  }
}

String code() => '''
class TiltExample extends StatelessWidget {
  const TiltExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Tilt(
      tiltConfig: const TiltConfig(
        leaveCurve: Curves.easeInOutCubicEmphasized,
        leaveDuration: Duration(milliseconds: 600),
      ),
      child: TiltProjectorContainer(
        shadowConfig: const ShadowProjectorConfig(
          maxIntensity: 0.36,
          projectorScaleFrom: 1.0,
          projectorScaleTo: 1.0,
          projectorBlurSigmaFrom: 2.0,
          projectorBlurSigmaTo: 10.0,
        ),
        childLayout: ChildLayout(
          outer: [
            const Positioned(
              top: 80,
              left: 140,
              child: TiltParallax(
                offset: Offset(10, 10),
                child: Text(
                  'Flutter Tilt',
                  style: TextStyle(
                    color: Colors.black54,
                    fontSize: 40,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
            TiltParallax(
              offset: const Offset(20, 20),
              child: Image.asset('assets/parallax_image/2.png', width: 742, height: 337),
            ),
            TiltParallax(
              offset: const Offset(30, 30),
              child: Image.asset('assets/parallax_image/3.png', width: 742, height: 337),
            ),
          ],
        ),
        child: const SizedBox(width: 742, height: 337),
      ),
    );
  }
}
''';
