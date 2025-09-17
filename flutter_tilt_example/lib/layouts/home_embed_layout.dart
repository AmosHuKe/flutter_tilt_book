import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';

@RoutePage()
class HomeEmbedLayout extends StatelessWidget {
  const HomeEmbedLayout({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(backgroundColor: Color(0xFF171819), body: AutoRouter());
  }
}
