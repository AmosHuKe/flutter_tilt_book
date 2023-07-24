import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

class Default extends StatelessWidget {
  const Default({super.key});

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

class TiltDemo extends StatelessWidget {
  const TiltDemo({super.key});

  @override
  Widget build(BuildContext context) {
    /// Tilt here
    return Tilt(
      borderRadius: BorderRadius.circular(30),
      child: const Box(),
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
      color: Colors.pink,
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
