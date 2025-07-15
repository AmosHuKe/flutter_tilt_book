import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../layouts/page_layout.dart';

@RoutePage()
class DialogDemo extends StatelessWidget {
  const DialogDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Dialog',
      dartCode: code(),
      sourceCodeLink:
          'https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/dialog.dart',
      minHeight: 300,
      body: ElevatedButton(onPressed: () => _showDialog(context), child: const Text('Show Dialog')),
    );
  }

  Future<void> _showDialog(BuildContext context) async {
    return showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),
          child: Align(
            /// Tilt here
            child: Tilt(
              borderRadius: BorderRadius.circular(30),
              tiltConfig: const TiltConfig(enableRevert: false, enableSensorRevert: false),
              lightConfig: const LightConfig(disable: false, direction: LightDirection.all),
              shadowConfig: const ShadowConfig(disable: true),
              child: BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
                child: Container(
                  width: 350,
                  height: 200,
                  padding: const EdgeInsets.all(32),
                  color: Colors.white24,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        'Flutter Tilt',
                        style: TextStyle(fontSize: 18, color: Colors.white),
                      ),
                      Expanded(
                        child: Align(
                          alignment: Alignment.bottomRight,
                          child: ElevatedButton(
                            child: const Text('Close'),
                            onPressed: () => Navigator.of(context).pop(),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}

String code() => '''
import 'package:flutter_tilt/flutter_tilt.dart';

······

ElevatedButton(onPressed: () => _showDialog(context), child: const Text('Show Dialog')),

...

Future<void> _showDialog(BuildContext context) async {
  return showDialog<void>(
    context: context,
    builder: (BuildContext context) {
      return BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),
        child: Align(
          /// Tilt here
          child: Tilt(
            borderRadius: BorderRadius.circular(30),
            tiltConfig: const TiltConfig(enableRevert: false, enableSensorRevert: false),
            lightConfig: const LightConfig(disable: false, direction: LightDirection.all),
            shadowConfig: const ShadowConfig(disable: true),
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
              child: Container(
                width: 350,
                height: 200,
                padding: const EdgeInsets.all(32),
                color: Colors.white24,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'Flutter Tilt',
                      style: TextStyle(fontSize: 18, color: Colors.white),
                    ),
                    Expanded(
                      child: Align(
                        alignment: Alignment.bottomRight,
                        child: ElevatedButton(
                          child: const Text('Close'),
                          onPressed: () => Navigator.of(context).pop(),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      );
    },
  );
}

······
''';
