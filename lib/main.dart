import 'package:flutter/widgets.dart';

import 'package:syntax_highlight/syntax_highlight.dart';

import 'application.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Highlighter.initialize(['dart', 'yaml']);
  runApp(const Application());
}
