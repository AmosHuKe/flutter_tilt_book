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

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(30),
        lightConfig: LightConfig(direction: lightDirection),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
          color: Colors.blueAccent,
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
        SizedBox(
          width: 300,
          child: Column(
            children: [
              RadioListTile<LightDirection>(
                title: const Text('none'),
                secondary: const Icon(Icons.settings),
                groupValue: lightDirection,
                value: LightDirection.none,
                onChanged: (LightDirection? value) {
                  setState(() {
                    lightDirection = value!;
                  });
                },
              ),
              RadioListTile<LightDirection>(
                title: const Text('around'),
                secondary: const Icon(Icons.settings),
                groupValue: lightDirection,
                value: LightDirection.around,
                onChanged: (LightDirection? value) {
                  setState(() {
                    lightDirection = value!;
                  });
                },
              ),
              RadioListTile<LightDirection>(
                title: const Text('all'),
                secondary: const Icon(Icons.settings),
                groupValue: lightDirection,
                value: LightDirection.all,
                onChanged: (LightDirection? value) {
                  setState(() {
                    lightDirection = value!;
                  });
                },
              ),
              RadioListTile<LightDirection>(
                title: const Text('top'),
                secondary: const Icon(Icons.settings),
                groupValue: lightDirection,
                value: LightDirection.top,
                onChanged: (LightDirection? value) {
                  setState(() {
                    lightDirection = value!;
                  });
                },
              ),
              RadioListTile<LightDirection>(
                title: const Text('bottom'),
                secondary: const Icon(Icons.settings),
                groupValue: lightDirection,
                value: LightDirection.bottom,
                onChanged: (LightDirection? value) {
                  setState(() {
                    lightDirection = value!;
                  });
                },
              ),
              RadioListTile<LightDirection>(
                title: const Text('left'),
                secondary: const Icon(Icons.settings),
                groupValue: lightDirection,
                value: LightDirection.left,
                onChanged: (LightDirection? value) {
                  setState(() {
                    lightDirection = value!;
                  });
                },
              ),
              RadioListTile<LightDirection>(
                title: const Text('right'),
                secondary: const Icon(Icons.settings),
                groupValue: lightDirection,
                value: LightDirection.right,
                onChanged: (LightDirection? value) {
                  setState(() {
                    lightDirection = value!;
                  });
                },
              ),
              RadioListTile<LightDirection>(
                title: const Text('center'),
                secondary: const Icon(Icons.settings),
                groupValue: lightDirection,
                value: LightDirection.center,
                onChanged: (LightDirection? value) {
                  setState(() {
                    lightDirection = value!;
                  });
                },
              ),
              RadioListTile<LightDirection>(
                title: const Text('topLeft'),
                secondary: const Icon(Icons.settings),
                groupValue: lightDirection,
                value: LightDirection.topLeft,
                onChanged: (LightDirection? value) {
                  setState(() {
                    lightDirection = value!;
                  });
                },
              ),
              RadioListTile<LightDirection>(
                title: const Text('topRight'),
                secondary: const Icon(Icons.settings),
                groupValue: lightDirection,
                value: LightDirection.topRight,
                onChanged: (LightDirection? value) {
                  setState(() {
                    lightDirection = value!;
                  });
                },
              ),
              RadioListTile<LightDirection>(
                title: const Text('bottomLeft'),
                secondary: const Icon(Icons.settings),
                groupValue: lightDirection,
                value: LightDirection.bottomLeft,
                onChanged: (LightDirection? value) {
                  setState(() {
                    lightDirection = value!;
                  });
                },
              ),
              RadioListTile<LightDirection>(
                title: const Text('bottomRight'),
                secondary: const Icon(Icons.settings),
                groupValue: lightDirection,
                value: LightDirection.bottomRight,
                onChanged: (LightDirection? value) {
                  setState(() {
                    lightDirection = value!;
                  });
                },
              ),
              RadioListTile<LightDirection>(
                title: const Text('xCenter'),
                secondary: const Icon(Icons.settings),
                groupValue: lightDirection,
                value: LightDirection.xCenter,
                onChanged: (LightDirection? value) {
                  setState(() {
                    lightDirection = value!;
                  });
                },
              ),
              RadioListTile<LightDirection>(
                title: const Text('yCenter'),
                secondary: const Icon(Icons.settings),
                groupValue: lightDirection,
                value: LightDirection.yCenter,
                onChanged: (LightDirection? value) {
                  setState(() {
                    lightDirection = value!;
                  });
                },
              ),
            ],
          ),
        ),
      ],
    );
  }
}
