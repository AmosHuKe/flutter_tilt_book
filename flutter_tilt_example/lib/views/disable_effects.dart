import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../layouts/page_layout.dart';

@RoutePage()
class DisableEffects extends StatefulWidget {
  const DisableEffects({super.key});

  @override
  State<DisableEffects> createState() => _DisableEffectsState();
}

class _DisableEffectsState extends State<DisableEffects> {
  bool disableTilt = false;
  bool disableLight = true;
  bool disableShadow = true;

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Disable Effects',
      dartCode: code(
        disableTilt: disableTilt,
        disableLight: disableLight,
        disableShadow: disableShadow,
      ),
      sourceCodeLink:
          'https://github.com/amoshuke/flutter_tilt_book/blob/main/flutter_tilt_example/lib/views/disable_effects.dart',
      minHeight: 500,
      body: TiltExample(
        disableTilt: disableTilt,
        disableLight: disableLight,
        disableShadow: disableShadow,
      ),
      tools: [
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: [
            FilterChip(
              label: const Text('Disable tilt'),
              selected: disableTilt,
              onSelected: (bool value) {
                setState(() {
                  disableTilt = value;
                });
              },
            ),
            FilterChip(
              label: const Text('Disable light'),
              selected: disableLight,
              onSelected: (bool value) {
                setState(() {
                  disableLight = value;
                });
              },
            ),
            FilterChip(
              label: const Text('Disable shadow'),
              selected: disableShadow,
              onSelected: (bool value) {
                setState(() {
                  disableShadow = value;
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
    required this.disableTilt,
    required this.disableLight,
    required this.disableShadow,
  });

  final bool disableTilt;
  final bool disableLight;
  final bool disableShadow;

  @override
  Widget build(BuildContext context) {
    return Tilt(
      tiltConfig: TiltConfig(disable: disableTilt),
      child: TiltBaseContainer(
        lightConfig: LightConfig(disable: disableLight),
        shadowConfig: ShadowBaseConfig(disable: disableShadow),
        borderRadius: BorderRadius.circular(30),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
          color: Colors.blueAccent,
          child: const Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    );
  }
}

String code({required bool disableTilt, required bool disableLight, required bool disableShadow}) =>
    '''
class TiltExample extends StatelessWidget {
  const TiltExample({
    super.key,
    required this.disableTilt,
    required this.disableLight,
    required this.disableShadow,
  });

  final bool disableTilt;
  final bool disableLight;
  final bool disableShadow;

  @override
  Widget build(BuildContext context) {
    return Tilt(
      tiltConfig: TiltConfig(disable: $disableTilt),
      child: TiltBaseContainer(
        lightConfig: LightConfig(disable: $disableLight),
        shadowConfig: ShadowBaseConfig(disable: $disableShadow),
        borderRadius: BorderRadius.circular(30),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
          color: Colors.blueAccent,
          child: const Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    );
  }
}
''';
