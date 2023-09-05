import 'package:flutter/widgets.dart';

import 'package:js/js.dart';
import 'package:syntax_highlight/syntax_highlight.dart';

import 'application.dart';

@JS("requestDeviceMotionEventPermission")
external void requestDeviceMotionEventPermission();

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Highlighter.initialize(['dart', 'yaml']);
  requestDeviceMotionEventPermission();
  runApp(const Application());
}
