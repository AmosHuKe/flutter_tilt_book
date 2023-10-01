import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/page_layout.dart';

class TiltDirectionDemo extends StatefulWidget {
  const TiltDirectionDemo({super.key});

  @override
  State<TiltDirectionDemo> createState() => _TiltDirectionDemoState();
}

class _TiltDirectionDemoState extends State<TiltDirectionDemo> {
  Set<TiltDirection> tiltDirection = <TiltDirection>{
    TiltDirection.top,
    TiltDirection.bottom,
  };

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Tilt Direction',
      dartCode: code(tiltDirection: tiltDirection),
      minHeight: 440,

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(30),
        tiltConfig: TiltConfig(direction: tiltDirection.toList()),
        child: Container(
          width: 350,
          height: 200,
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [Color(0xFF667eea), Color(0xFF764ba2)],
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
          spacing: 12,
          runSpacing: 12,
          children: [
            FilterChip(
              label: const Text('none'),
              selected: tiltDirection.contains(TiltDirection.none),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.none)
                      : tiltDirection.remove(TiltDirection.none);
                });
              },
            ),
            FilterChip(
              label: const Text('top'),
              selected: tiltDirection.contains(TiltDirection.top),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.top)
                      : tiltDirection.remove(TiltDirection.top);
                });
              },
            ),
            FilterChip(
              label: const Text('bottom'),
              selected: tiltDirection.contains(TiltDirection.bottom),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.bottom)
                      : tiltDirection.remove(TiltDirection.bottom);
                });
              },
            ),
            FilterChip(
              label: const Text('left'),
              selected: tiltDirection.contains(TiltDirection.left),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.left)
                      : tiltDirection.remove(TiltDirection.left);
                });
              },
            ),
            FilterChip(
              label: const Text('right'),
              selected: tiltDirection.contains(TiltDirection.right),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.right)
                      : tiltDirection.remove(TiltDirection.right);
                });
              },
            ),
            FilterChip(
              label: const Text('topLeft'),
              selected: tiltDirection.contains(TiltDirection.topLeft),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.topLeft)
                      : tiltDirection.remove(TiltDirection.topLeft);
                });
              },
            ),
            FilterChip(
              label: const Text('topRight'),
              selected: tiltDirection.contains(TiltDirection.topRight),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.topRight)
                      : tiltDirection.remove(TiltDirection.topRight);
                });
              },
            ),
            FilterChip(
              label: const Text('bottomLeft'),
              selected: tiltDirection.contains(TiltDirection.bottomLeft),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.bottomLeft)
                      : tiltDirection.remove(TiltDirection.bottomLeft);
                });
              },
            ),
            FilterChip(
              label: const Text('bottomRight'),
              selected: tiltDirection.contains(TiltDirection.bottomRight),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(TiltDirection.bottomRight)
                      : tiltDirection.remove(TiltDirection.bottomRight);
                });
              },
            ),
            FilterChip(
              label: const Text('TiltDirection(0.8, 0.4)'),
              selected: tiltDirection.contains(const TiltDirection(0.8, 0.4)),
              onSelected: (bool value) {
                setState(() {
                  value
                      ? tiltDirection.add(const TiltDirection(0.8, 0.4))
                      : tiltDirection.remove(const TiltDirection(0.8, 0.4));
                });
              },
            ),
          ],
        ),
      ],
    );
  }
}

String code({required Set<TiltDirection> tiltDirection}) => '''
import 'package:flutter_tilt/flutter_tilt.dart';

······

Tilt(
  borderRadius: BorderRadius.circular(30),
  tiltConfig: TiltConfig(direction: ${tiltDirection.toList()}),
  child: Container(
    width: 350,
    height: 200,
    alignment: Alignment.center,
    decoration: const BoxDecoration(
      gradient: LinearGradient(
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
        colors: [Color(0xFF667eea), Color(0xFF764ba2)],
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
