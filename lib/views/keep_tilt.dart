import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/base.dart';

class KeepTilt extends StatelessWidget {
  const KeepTilt({super.key});

  @override
  Widget build(BuildContext context) {
    return BaseLayout(
      title: 'Keep tilt',

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(30),
        tiltConfig: const TiltConfig(enableRevert: false),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
          color: Colors.amber,
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
