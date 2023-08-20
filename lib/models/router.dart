import 'package:flutter/widgets.dart';

class RouterData {
  RouterData({
    required this.title,
    required this.name,
    required this.widget,
  });

  final String title;
  final String name;
  final Widget widget;
}
