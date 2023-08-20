import 'package:flutter/widgets.dart';

class BookLinkData {
  BookLinkData({
    required this.title,
    required this.icon,
    required this.url,
  });

  final String title;
  final IconData icon;
  final String url;
}
