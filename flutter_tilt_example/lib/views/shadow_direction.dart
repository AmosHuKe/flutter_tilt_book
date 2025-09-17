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
          'https://github.com/amoshuke/flutter_tilt_book/flutter_tilt_example/blob/main/lib/views/shadow_direction.dart',
      minHeight: 500,

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(30),
        lightConfig: const LightConfig(disable: true),
        shadowConfig: ShadowConfig(direction: shadowDirection),
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

      /// tools
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

String code({required ShadowDirection shadowDirection}) =>
    '''
import 'package:flutter_tilt/flutter_tilt.dart';

······

Tilt(
  borderRadius: BorderRadius.circular(30),
  lightConfig: const LightConfig(disable: true),
  shadowConfig: ShadowConfig(direction: $shadowDirection),
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

······
''';
