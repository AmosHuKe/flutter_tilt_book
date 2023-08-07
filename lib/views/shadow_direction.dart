import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/base_layout.dart';

class ShadowDirectionDemo extends StatefulWidget {
  const ShadowDirectionDemo({super.key});

  @override
  State<ShadowDirectionDemo> createState() => _ShadowDirectionDemoState();
}

class _ShadowDirectionDemoState extends State<ShadowDirectionDemo> {
  ShadowDirection shadowDirection = ShadowDirection.around;

  @override
  Widget build(BuildContext context) {
    return BaseLayout(
      title: 'Shadow direction',
      dartCode: code(shadowDirection: shadowDirection),

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
          child: const Text(
            'Flutter Tilt ✨',
            style: TextStyle(
              fontSize: 20,
              color: Colors.white,
            ),
          ),
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

String code({required ShadowDirection shadowDirection}) => '''
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
    child: const Text(
      'Flutter Tilt ✨',
      style: TextStyle(
        fontSize: 20,
        color: Colors.white,
      ),
    ),
  ),
),

······
''';
