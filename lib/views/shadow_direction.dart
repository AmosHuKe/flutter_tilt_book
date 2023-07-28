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
          children: [
            SizedBox(
              width: 300,
              child: RadioListTile<ShadowDirection>(
                title: const Text('none'),
                secondary: const Icon(Icons.settings),
                groupValue: shadowDirection,
                value: ShadowDirection.none,
                onChanged: (ShadowDirection? value) {
                  setState(() {
                    shadowDirection = value!;
                  });
                },
              ),
            ),
            SizedBox(
              width: 300,
              child: RadioListTile<ShadowDirection>(
                title: const Text('around'),
                secondary: const Icon(Icons.settings),
                groupValue: shadowDirection,
                value: ShadowDirection.around,
                onChanged: (ShadowDirection? value) {
                  setState(() {
                    shadowDirection = value!;
                  });
                },
              ),
            ),
            SizedBox(
              width: 300,
              child: RadioListTile<ShadowDirection>(
                title: const Text('all'),
                secondary: const Icon(Icons.settings),
                groupValue: shadowDirection,
                value: ShadowDirection.all,
                onChanged: (ShadowDirection? value) {
                  setState(() {
                    shadowDirection = value!;
                  });
                },
              ),
            ),
            SizedBox(
              width: 300,
              child: RadioListTile<ShadowDirection>(
                title: const Text('top'),
                secondary: const Icon(Icons.settings),
                groupValue: shadowDirection,
                value: ShadowDirection.top,
                onChanged: (ShadowDirection? value) {
                  setState(() {
                    shadowDirection = value!;
                  });
                },
              ),
            ),
            SizedBox(
              width: 300,
              child: RadioListTile<ShadowDirection>(
                title: const Text('bottom'),
                secondary: const Icon(Icons.settings),
                groupValue: shadowDirection,
                value: ShadowDirection.bottom,
                onChanged: (ShadowDirection? value) {
                  setState(() {
                    shadowDirection = value!;
                  });
                },
              ),
            ),
            SizedBox(
              width: 300,
              child: RadioListTile<ShadowDirection>(
                title: const Text('left'),
                secondary: const Icon(Icons.settings),
                groupValue: shadowDirection,
                value: ShadowDirection.left,
                onChanged: (ShadowDirection? value) {
                  setState(() {
                    shadowDirection = value!;
                  });
                },
              ),
            ),
            SizedBox(
              width: 300,
              child: RadioListTile<ShadowDirection>(
                title: const Text('right'),
                secondary: const Icon(Icons.settings),
                groupValue: shadowDirection,
                value: ShadowDirection.right,
                onChanged: (ShadowDirection? value) {
                  setState(() {
                    shadowDirection = value!;
                  });
                },
              ),
            ),
            SizedBox(
              width: 300,
              child: RadioListTile<ShadowDirection>(
                title: const Text('center'),
                secondary: const Icon(Icons.settings),
                groupValue: shadowDirection,
                value: ShadowDirection.center,
                onChanged: (ShadowDirection? value) {
                  setState(() {
                    shadowDirection = value!;
                  });
                },
              ),
            ),
            SizedBox(
              width: 300,
              child: RadioListTile<ShadowDirection>(
                title: const Text('topLeft'),
                secondary: const Icon(Icons.settings),
                groupValue: shadowDirection,
                value: ShadowDirection.topLeft,
                onChanged: (ShadowDirection? value) {
                  setState(() {
                    shadowDirection = value!;
                  });
                },
              ),
            ),
            SizedBox(
              width: 300,
              child: RadioListTile<ShadowDirection>(
                title: const Text('topRight'),
                secondary: const Icon(Icons.settings),
                groupValue: shadowDirection,
                value: ShadowDirection.topRight,
                onChanged: (ShadowDirection? value) {
                  setState(() {
                    shadowDirection = value!;
                  });
                },
              ),
            ),
            SizedBox(
              width: 300,
              child: RadioListTile<ShadowDirection>(
                title: const Text('bottomLeft'),
                secondary: const Icon(Icons.settings),
                groupValue: shadowDirection,
                value: ShadowDirection.bottomLeft,
                onChanged: (ShadowDirection? value) {
                  setState(() {
                    shadowDirection = value!;
                  });
                },
              ),
            ),
            SizedBox(
              width: 300,
              child: RadioListTile<ShadowDirection>(
                title: const Text('bottomRight'),
                secondary: const Icon(Icons.settings),
                groupValue: shadowDirection,
                value: ShadowDirection.bottomRight,
                onChanged: (ShadowDirection? value) {
                  setState(() {
                    shadowDirection = value!;
                  });
                },
              ),
            ),
            SizedBox(
              width: 300,
              child: RadioListTile<ShadowDirection>(
                title: const Text('xCenter'),
                secondary: const Icon(Icons.settings),
                groupValue: shadowDirection,
                value: ShadowDirection.xCenter,
                onChanged: (ShadowDirection? value) {
                  setState(() {
                    shadowDirection = value!;
                  });
                },
              ),
            ),
            SizedBox(
              width: 300,
              child: RadioListTile<ShadowDirection>(
                title: const Text('yCenter'),
                secondary: const Icon(Icons.settings),
                groupValue: shadowDirection,
                value: ShadowDirection.yCenter,
                onChanged: (ShadowDirection? value) {
                  setState(() {
                    shadowDirection = value!;
                  });
                },
              ),
            ),
          ],
        ),
      ],
    );
  }
}
