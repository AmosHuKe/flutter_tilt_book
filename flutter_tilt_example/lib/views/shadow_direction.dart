import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../layouts/page_layout.dart';

@RoutePage()
class ShadowDirectionDemo extends StatefulWidget {
  const ShadowDirectionDemo({super.key});

  @override
  State<ShadowDirectionDemo> createState() => _ShadowDirectionDemoState();
}

class _ShadowDirectionDemoState extends State<ShadowDirectionDemo> {
  ShadowDirection shadowDirection = ShadowDirection.around;

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Shadow Direction',
      dartCode: code(shadowDirection: shadowDirection),
      sourceCodeLink:
          'https://github.com/amoshuke/flutter_tilt_book/blob/main/flutter_tilt_example/lib/views/shadow_direction.dart',
      minHeight: 500,
      body: TiltExample(shadowDirection: shadowDirection),
      tools: [
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: ShadowDirection.values.map((ShadowDirection value) {
            return ChoiceChip(
              label: Text(value.name),
              selected: shadowDirection == value,
              onSelected: (bool selected) {
                setState(() {
                  selected ? shadowDirection = value : null;
                });
              },
            );
          }).toList(),
        ),
      ],
    );
  }
}

class TiltExample extends StatelessWidget {
  const TiltExample({super.key, required this.shadowDirection});

  final ShadowDirection shadowDirection;

  @override
  Widget build(BuildContext context) {
    return Tilt(
      child: TiltBaseContainer(
        lightConfig: const LightConfig(disable: true),
        shadowConfig: ShadowBaseConfig(direction: shadowDirection),
        borderRadius: BorderRadius.circular(30),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Color(0xFF8989ba), Color(0xFFa7a6cb)],
            ),
          ),
          child: const Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    );
  }
}

String code({required ShadowDirection shadowDirection}) =>
    '''
class TiltExample extends StatelessWidget {
  const TiltExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Tilt(
      child: TiltBaseContainer(
        lightConfig: const LightConfig(disable: true),
        shadowConfig: ShadowBaseConfig(direction: $shadowDirection),
        borderRadius: BorderRadius.circular(30),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Color(0xFF8989ba), Color(0xFFa7a6cb)],
            ),
          ),
          child: const Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    );
  }
}
''';
