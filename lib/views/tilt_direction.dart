import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

class TiltDirectionDemo extends StatelessWidget {
  const TiltDirectionDemo({super.key});

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
  Set<TiltDirection> tiltDirection = <TiltDirection>{
    TiltDirection.top,
    TiltDirection.bottom,
  };

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
              tiltConfig: TiltConfig(direction: tiltDirection.toList()),
              child: const Box(),
            ),
            const SizedBox(height: 64),
            SizedBox(
              width: 300,
              child: Column(
                children: [
                  CheckboxListTile(
                    title: const Text('none'),
                    value: tiltDirection.contains(TiltDirection.none),
                    onChanged: (bool? value) {
                      setState(() {
                        value!
                            ? tiltDirection.add(TiltDirection.none)
                            : tiltDirection.remove(TiltDirection.none);
                      });
                    },
                    secondary: const Icon(Icons.settings),
                  ),
                  CheckboxListTile(
                    title: const Text('top'),
                    value: tiltDirection.contains(TiltDirection.top),
                    onChanged: (bool? value) {
                      setState(() {
                        value!
                            ? tiltDirection.add(TiltDirection.top)
                            : tiltDirection.remove(TiltDirection.top);
                      });
                    },
                    secondary: const Icon(Icons.settings),
                  ),
                  CheckboxListTile(
                    title: const Text('bottom'),
                    value: tiltDirection.contains(TiltDirection.bottom),
                    onChanged: (bool? value) {
                      setState(() {
                        value!
                            ? tiltDirection.add(TiltDirection.bottom)
                            : tiltDirection.remove(TiltDirection.bottom);
                      });
                    },
                    secondary: const Icon(Icons.settings),
                  ),
                  CheckboxListTile(
                    title: const Text('left'),
                    value: tiltDirection.contains(TiltDirection.left),
                    onChanged: (bool? value) {
                      setState(() {
                        value!
                            ? tiltDirection.add(TiltDirection.left)
                            : tiltDirection.remove(TiltDirection.left);
                      });
                    },
                    secondary: const Icon(Icons.settings),
                  ),
                  CheckboxListTile(
                    title: const Text('right'),
                    value: tiltDirection.contains(TiltDirection.right),
                    onChanged: (bool? value) {
                      setState(() {
                        value!
                            ? tiltDirection.add(TiltDirection.right)
                            : tiltDirection.remove(TiltDirection.right);
                      });
                    },
                    secondary: const Icon(Icons.settings),
                  ),
                  CheckboxListTile(
                    title: const Text('topLeft'),
                    value: tiltDirection.contains(TiltDirection.topLeft),
                    onChanged: (bool? value) {
                      setState(() {
                        value!
                            ? tiltDirection.add(TiltDirection.topLeft)
                            : tiltDirection.remove(TiltDirection.topLeft);
                      });
                    },
                    secondary: const Icon(Icons.settings),
                  ),
                  CheckboxListTile(
                    title: const Text('topRight'),
                    value: tiltDirection.contains(TiltDirection.topRight),
                    onChanged: (bool? value) {
                      setState(() {
                        value!
                            ? tiltDirection.add(TiltDirection.topRight)
                            : tiltDirection.remove(TiltDirection.topRight);
                      });
                    },
                    secondary: const Icon(Icons.settings),
                  ),
                  CheckboxListTile(
                    title: const Text('bottomLeft'),
                    value: tiltDirection.contains(TiltDirection.bottomLeft),
                    onChanged: (bool? value) {
                      setState(() {
                        value!
                            ? tiltDirection.add(TiltDirection.bottomLeft)
                            : tiltDirection.remove(TiltDirection.bottomLeft);
                      });
                    },
                    secondary: const Icon(Icons.settings),
                  ),
                  CheckboxListTile(
                    title: const Text('bottomRight'),
                    value: tiltDirection.contains(TiltDirection.bottomRight),
                    onChanged: (bool? value) {
                      setState(() {
                        value!
                            ? tiltDirection.add(TiltDirection.bottomRight)
                            : tiltDirection.remove(TiltDirection.bottomRight);
                      });
                    },
                    secondary: const Icon(Icons.settings),
                  ),
                  CheckboxListTile(
                    title: const Text('(0.8, 0.4)'),
                    value:
                        tiltDirection.contains(const TiltDirection(0.8, 0.4)),
                    onChanged: (bool? value) {
                      setState(() {
                        value!
                            ? tiltDirection.add(const TiltDirection(0.8, 0.4))
                            : tiltDirection
                                .remove(const TiltDirection(0.8, 0.4));
                      });
                    },
                    secondary: const Icon(Icons.settings),
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
