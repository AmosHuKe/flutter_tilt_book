import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

class DisableEffects extends StatelessWidget {
  const DisableEffects({super.key});

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
  bool disableTilt = false;
  bool disableLight = true;
  bool disableShadow = true;

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        const SizedBox(height: 128),
        Column(
          children: [
            /// Tilt here
            Tilt(
              borderRadius: BorderRadius.circular(30),
              tiltConfig: TiltConfig(disable: disableTilt),
              lightConfig: LightConfig(disable: disableLight),
              shadowConfig: ShadowConfig(disable: disableShadow),
              child: const Box(),
            ),
            const SizedBox(height: 64),
            SizedBox(
              width: 300,
              child: Column(
                children: [
                  CheckboxListTile(
                    title: const Text('Disable tilt'),
                    value: disableTilt,
                    onChanged: (bool? value) {
                      setState(() {
                        disableTilt = value!;
                      });
                    },
                    secondary: const Icon(Icons.settings),
                  ),
                  CheckboxListTile(
                    title: const Text('Disable light'),
                    value: disableLight,
                    onChanged: (bool? value) {
                      setState(() {
                        disableLight = value!;
                      });
                    },
                    secondary: const Icon(Icons.settings),
                  ),
                  CheckboxListTile(
                    title: const Text('Disable shadow'),
                    value: disableShadow,
                    onChanged: (bool? value) {
                      setState(() {
                        disableShadow = value!;
                      });
                    },
                    secondary: const Icon(Icons.settings),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 64),
          ],
        )
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
