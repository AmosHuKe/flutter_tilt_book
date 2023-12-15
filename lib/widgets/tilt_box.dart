import 'package:flutter/material.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

class TiltBox extends StatelessWidget {
  const TiltBox({
    super.key,
    required this.width,
    required this.height,
    required this.maxAngle,
    required this.tiltData,
  });

  final double width;
  final double height;
  final double maxAngle;
  final TiltDataModel? tiltData;

  @override
  Widget build(BuildContext context) {
    final Offset angle = tiltData?.angle ?? Offset.zero;
    final Offset areaProgress = tiltData?.areaProgress ?? Offset.zero;
    final Offset? position = tiltData?.position;

    return Transform(
      alignment: Alignment.center,
      transform: tiltData?.transform ?? Matrix4.identity(),
      child: Stack(
        alignment: AlignmentDirectional.center,
        children: [
          Container(
            color: Colors.black,
            width: width,
            height: height,
          ),
          Positioned(
            left: 0,
            right: 0,
            child: Container(color: Colors.white, height: 1),
          ),
          Positioned(
            top: 0,
            bottom: 0,
            child: Container(color: Colors.white, width: 1),
          ),
          Positioned(
            left: 10,
            child: Padding(
              padding: const EdgeInsets.only(bottom: 60),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'x: ${angle.dx.toStringAsFixed(2)}°',
                    style: const TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 12,
                    ),
                  ),
                  Text(
                    'x areaProgress: ${areaProgress.dx.toStringAsFixed(2)}',
                    style: const TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 12,
                    ),
                  ),
                ],
              ),
            ),
          ),
          Positioned(
            top: 10,
            child: Padding(
              padding: const EdgeInsets.only(left: 150),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'y: ${angle.dy.toStringAsFixed(2)}°',
                    style: const TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 12,
                    ),
                  ),
                  Text(
                    'y areaProgress: ${areaProgress.dy.toStringAsFixed(2)}',
                    style: const TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 12,
                    ),
                  ),
                ],
              ),
            ),
          ),
          Positioned(
            left: position != null ? position.dx - 2.0 : null,
            top: position != null ? position.dy - 2.0 : null,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  decoration: const BoxDecoration(
                    color: Colors.red,
                    shape: BoxShape.circle,
                  ),
                  width: 4,
                  height: 4,
                ),
                if (position != null)
                  Text(
                    '(${position.dx.toStringAsFixed(1)}, ${position.dy.toStringAsFixed(1)})',
                    style: const TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 10,
                    ),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
