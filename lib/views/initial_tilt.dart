import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/base_layout.dart';

class InitialTilt extends StatelessWidget {
  const InitialTilt({super.key});

  @override
  Widget build(BuildContext context) {
    return BaseLayout(
      title: 'Initial tilt',

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(30),
        tiltConfig: const TiltConfig(initial: Offset(-1.0, -1.0)),
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
    );
  }
}
