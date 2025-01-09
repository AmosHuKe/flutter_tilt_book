import 'package:flutter/widgets.dart';

import 'package:auto_route/auto_route.dart';

class RouteData {
  RouteData({
    required this.title,
    required this.icon,
    required this.pathName,
    required this.pageInfo,
  });

  final String title;
  final IconData icon;
  final String pathName;
  final PageInfo pageInfo;
}
