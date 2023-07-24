import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

class LightDirectionDemo extends StatelessWidget {
  const LightDirectionDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        backgroundColor: Color(0xFFFFFFFF),
        body: Center(child: TiltDemo()),
      ),
    );
  }
}

class TiltDemo extends StatefulWidget {
  const TiltDemo({super.key});

  @override
  State<TiltDemo> createState() => _TiltDemoState();
}

class _TiltDemoState extends State<TiltDemo> {
  LightDirection lightDirection = LightDirection.around;

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        const SizedBox(height: 128),
        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            /// Tilt here
            Tilt(
              borderRadius: BorderRadius.circular(30),
              lightConfig: LightConfig(direction: lightDirection),
              child: const Box(),
            ),
            const SizedBox(height: 64),
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
            const SizedBox(height: 64),
          ],
        ),
      ],
    );
  }
}

class Box extends StatelessWidget {
  const Box({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
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
    );
  }
}
