import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

class ShadowDirectionDemo extends StatelessWidget {
  const ShadowDirectionDemo({super.key});

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
  ShadowDirection shadowDirection = ShadowDirection.around;

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
              lightConfig: const LightConfig(disable: true),
              shadowConfig: ShadowConfig(direction: shadowDirection),
              child: const Box(),
            ),
            const SizedBox(height: 64),
            SizedBox(
              width: 300,
              child: Column(
                children: [
                  RadioListTile<ShadowDirection>(
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
                  RadioListTile<ShadowDirection>(
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
                  RadioListTile<ShadowDirection>(
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
                  RadioListTile<ShadowDirection>(
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
                  RadioListTile<ShadowDirection>(
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
                  RadioListTile<ShadowDirection>(
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
                  RadioListTile<ShadowDirection>(
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
                  RadioListTile<ShadowDirection>(
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
                  RadioListTile<ShadowDirection>(
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
                  RadioListTile<ShadowDirection>(
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
                  RadioListTile<ShadowDirection>(
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
                  RadioListTile<ShadowDirection>(
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
                  RadioListTile<ShadowDirection>(
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
                  RadioListTile<ShadowDirection>(
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
