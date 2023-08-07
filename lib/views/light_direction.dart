import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/base_layout.dart';

class LightDirectionDemo extends StatefulWidget {
  const LightDirectionDemo({super.key});

  @override
  State<LightDirectionDemo> createState() => _LightDirectionDemoState();
}

class _LightDirectionDemoState extends State<LightDirectionDemo> {
  LightDirection lightDirection = LightDirection.around;

  @override
  Widget build(BuildContext context) {
    return BaseLayout(
      title: 'Light direction',
      dartCode: code(lightDirection: lightDirection),

      /// Tilt here
      body: Tilt(
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

String code({required LightDirection lightDirection}) => '''
import 'package:flutter_tilt/flutter_tilt.dart';

······

Tilt(
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
