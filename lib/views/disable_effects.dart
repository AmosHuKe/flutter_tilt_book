import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/base_layout.dart';

class DisableEffects extends StatefulWidget {
  const DisableEffects({super.key});

  @override
  State<DisableEffects> createState() => _DisableEffectsState();
}

class _DisableEffectsState extends State<DisableEffects> {
  bool disableTilt = false;
  bool disableLight = true;
  bool disableShadow = true;

  @override
  Widget build(BuildContext context) {
    return BaseLayout(
      title: 'Disable effects',

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(30),
        tiltConfig: TiltConfig(disable: disableTilt),
        lightConfig: LightConfig(disable: disableLight),
        shadowConfig: ShadowConfig(disable: disableShadow),
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
      ],
    );
  }
}
