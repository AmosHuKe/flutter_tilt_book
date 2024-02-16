import 'package:flutter/widgets.dart';

// import 'package:js/js.dart';

import 'application.dart';

// @JS("requestDeviceMotionEventPermission")
// external void requestDeviceMotionEventPermission();

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  // requestDeviceMotionEventPermission();
  runApp(const Application());
}
