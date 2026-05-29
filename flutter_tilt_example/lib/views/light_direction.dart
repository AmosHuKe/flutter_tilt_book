import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../config/config.dart';
import '../layouts/page_layout.dart';

@RoutePage()
class LightDirectionDemo extends StatefulWidget {
  const LightDirectionDemo({super.key});

  @override
  State<LightDirectionDemo> createState() => _LightDirectionDemoState();
}

class _LightDirectionDemoState extends State<LightDirectionDemo> {
  LightDirection lightDirection = LightDirection.around;

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Light Direction',
      dartCode: code(lightDirection: lightDirection),
      sourceCodeLink: '${Config.repoUri}/lib/views/light_direction.dart',
      minHeight: 500,
      body: TiltExample(lightDirection: lightDirection),
      tools: [
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: LightDirection.values.map((LightDirection value) {
            return ChoiceChip(
              label: Text(value.name),
              selected: lightDirection == value,
              onSelected: (bool selected) {
                setState(() {
                  selected ? lightDirection = value : null;
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
  const TiltExample({super.key, required this.lightDirection});

  final LightDirection lightDirection;

  @override
  Widget build(BuildContext context) {
    return Tilt(
      child: TiltBaseContainer(
        borderRadius: BorderRadius.circular(30),
        lightConfig: LightConfig(direction: lightDirection),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Color(0xFF537895), Color(0xFF09203f)],
            ),
          ),
          child: const Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    );
  }
}

String code({required LightDirection lightDirection}) =>
    '''
class TiltExample extends StatelessWidget {
  const TiltExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Tilt(
      child: TiltBaseContainer(
        borderRadius: BorderRadius.circular(30),
        lightConfig: LightConfig(direction: $lightDirection),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Color(0xFF537895), Color(0xFF09203f)],
            ),
          ),
          child: const Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),
    );
  }
}
''';
