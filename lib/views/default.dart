import 'dart:js_interop';
import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/page_layout.dart';

@JS("requestDeviceMotionEventPermission")
external void requestDeviceMotionEventPermission();

class Default extends StatelessWidget {
  const Default({super.key});

  @override
  Widget build(BuildContext context) {
    requestDeviceMotionEventPermission();
    return PageLayout(
      title: 'Default',
      dartCode: code(),
      minHeight: 440,

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(30),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.bottomLeft,
              end: Alignment.topRight,
              colors: [Color(0xFFff9a9e), Color(0xFFfad0c4)],
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
    );
  }
}

String code() => '''
import 'package:flutter_tilt/flutter_tilt.dart';

······

Tilt(
  borderRadius: BorderRadius.circular(30),
  child: Container(
    width: 350,
    height: 200,
    alignment: Alignment.center,
    decoration: const BoxDecoration(
      gradient: LinearGradient(
        begin: Alignment.bottomLeft,
        end: Alignment.topRight,
        colors: [Color(0xFFff9a9e), Color(0xFFfad0c4)],
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

······
''';
