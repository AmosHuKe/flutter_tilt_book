import 'package:flutter/material.dart';

import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/base.dart';

class Events extends StatefulWidget {
  const Events({super.key});

  @override
  State<Events> createState() => _EventsState();
}

class _EventsState extends State<Events> {
  TiltDataModel? tiltData;
  String gestureMove = '';
  String gestureLeave = '';

  @override
  Widget build(BuildContext context) {
    return BaseLayout(
      title: 'Events',

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(30),
        onGestureMove:
            (TiltDataModel tiltDataModel, GesturesType gesturesType) {
          setState(() {
            tiltData = tiltDataModel;
            gestureMove = gesturesType.name;
          });
        },
        onGestureLeave:
            (TiltDataModel tiltDataModel, GesturesType gesturesType) {
          setState(() {
            tiltData = tiltDataModel;
            gestureLeave = gesturesType.name;
          });
        },
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
        Wrap(
          spacing: 64,
          runSpacing: 24,
          children: [
            Transform(
              alignment: Alignment.center,
              transform: tiltData?.transform ?? Matrix4.identity(),
              child: Stack(
                alignment: AlignmentDirectional.center,
                children: [
                  Container(
                    color: Colors.black,
                    width: 350,
                    height: 200,
                  ),
                  Positioned(
                    left: tiltData?.position.dx,
                    top: tiltData?.position.dy,
                    child: Container(
                      decoration: const BoxDecoration(
                        color: Colors.red,
                        shape: BoxShape.circle,
                      ),
                      width: 4,
                      height: 4,
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(
              width: 200,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'gestures:',
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                  Text('move: $gestureMove'),
                  Text('leave: $gestureLeave'),
                  const SizedBox(height: 8),
                  const Text(
                    'position:',
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                  Text('x: ${tiltData?.position.dx}'),
                  Text('y: ${tiltData?.position.dy}'),
                  const SizedBox(height: 8),
                  const Text(
                    'areaProgress:',
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                  Text('x: 100% * ${(tiltData?.areaProgress.dx ?? 0)}'),
                  Text('y: 100% * ${(tiltData?.areaProgress.dy ?? 0)}'),
                  const SizedBox(height: 8),
                  const Text(
                    'angle:',
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                  Text('x: ${tiltData?.angle.dx ?? 0}°'),
                  Text('y: ${tiltData?.angle.dy ?? 0}°'),
                  const SizedBox(height: 8),
                  const Text(
                    'transform:',
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                  Text('${tiltData?.transform}'),
                ],
              ),
            ),
          ],
        ),
      ],
    );
  }
}
