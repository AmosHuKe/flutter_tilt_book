import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../layouts/page_layout.dart';
import '../widgets/tilt_box.dart';

@RoutePage()
class Events extends StatefulWidget {
  const Events({super.key});

  @override
  State<Events> createState() => _EventsState();
}

class _EventsState extends State<Events> {
  TiltDataModel? tiltData;
  String gestureMove = '';
  String gestureLeave = '';
  final double width = 350;
  final double height = 200;
  final double angle = const TiltConfig().angle;

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Events',
      dartCode: code(width: width, height: height),
      sourceCodeLink:
          'https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/events.dart',
      minHeight: 500,

      /// Tilt here
      body: Tilt(
        borderRadius: BorderRadius.circular(30),
        onGestureMove: (TiltDataModel tiltDataModel, GesturesType gesturesType) {
          setState(() {
            tiltData = tiltDataModel;
            gestureMove = gesturesType.name;
          });
        },
        onGestureLeave: (TiltDataModel tiltDataModel, GesturesType gesturesType) {
          setState(() {
            tiltData = tiltDataModel;
            gestureLeave = gesturesType.name;
          });
        },
        child: Container(
          width: width,
          height: height,
          alignment: Alignment.center,
          color: Colors.blueAccent,
          child: const Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
        ),
      ),

      /// tools
      tools: [
        Wrap(
          spacing: 64,
          runSpacing: 24,
          children: [
            TiltBox(width: width, height: height, maxAngle: angle, tiltData: tiltData),
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
                  Text('x: 100% * ${tiltData?.areaProgress.dx ?? 0}'),
                  Text('y: 100% * ${tiltData?.areaProgress.dy ?? 0}'),
                  const SizedBox(height: 8),
                  const Text('angle:', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
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

String code({required double width, required double height}) =>
    '''
import 'package:flutter_tilt/flutter_tilt.dart';

······

TiltDataModel? tiltData;
String gestureMove = '';
String gestureLeave = '';

Tilt(
  borderRadius: BorderRadius.circular(30),
  onGestureMove: (TiltDataModel tiltDataModel, GesturesType gesturesType) {
    setState(() {
      tiltData = tiltDataModel;
      gestureMove = gesturesType.name;
    });
  },
  onGestureLeave: (TiltDataModel tiltDataModel, GesturesType gesturesType) {
    setState(() {
      tiltData = tiltDataModel;
      gestureLeave = gesturesType.name;
    });
  },
  child: Container(
    width: $width,
    height: $height,
    alignment: Alignment.center,
    color: Colors.blueAccent,
    child: const Text('Flutter Tilt ✨', style: TextStyle(fontSize: 20, color: Colors.white)),
  ),
),

······
''';
