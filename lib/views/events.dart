import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

class Events extends StatelessWidget {
  const Events({super.key});

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
  TiltDataModel? tiltData;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SizedBox(height: 128),
        Center(
          /// Tilt here
          child: Tilt(
            borderRadius: BorderRadius.circular(30),
            onGestureMove: (TiltDataModel tiltDataModel) {
              setState(() {
                tiltData = tiltDataModel;
              });
            },
            onGestureLeave: (TiltDataModel tiltDataModel) {
              setState(() {
                tiltData = tiltDataModel;
              });
            },
            child: const Box(),
          ),
        ),
        const SizedBox(height: 64),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 64),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                'position:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Text('x: ${tiltData?.position.dx}'),
              Text('y: ${tiltData?.position.dy}'),
              const SizedBox(height: 8),
              const Text(
                'areaProgress:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Text('x: 100% * ${(tiltData?.areaProgress.dx ?? 0)}'),
              Text('y: 100% * ${(tiltData?.areaProgress.dy ?? 0)}'),
              const SizedBox(height: 8),
              const Text(
                'angle:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Text('x: ${tiltData?.angle.dx ?? 0}°'),
              Text('y: ${tiltData?.angle.dy ?? 0}°'),
              const SizedBox(height: 8),
              const Text(
                'transform:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Text('${tiltData?.transform}'),
            ],
          ),
        ),
        const SizedBox(height: 64),
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
