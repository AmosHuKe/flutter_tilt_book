import 'package:flutter/material.dart';

class BaseLayout extends StatelessWidget {
  const BaseLayout({
    super.key,
    required this.title,
    this.theme,
    required this.body,
    this.tools,
  });

  final String title;
  final ThemeData? theme;
  final Widget body;
  final List<Widget>? tools;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: theme,
      home: Scaffold(
        backgroundColor: const Color(0xFFF6F7FA),
        body: ListView(
          children: [
            /// body
            Container(
              margin: const EdgeInsets.only(
                top: 24,
                bottom: 12,
                left: 24,
                right: 24,
              ),
              padding: const EdgeInsets.only(
                top: 24,
                bottom: 128,
                left: 24,
                right: 24,
              ),
              decoration: BoxDecoration(
                color: const Color(0xFFFFFFFF),
                borderRadius: BorderRadius.circular(20),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: const TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 64),
                  Center(child: body),
                ],
              ),
            ),

            /// tools
            if (tools != null)
              Container(
                margin: const EdgeInsets.only(
                  top: 12,
                  bottom: 24,
                  left: 24,
                  right: 24,
                ),
                padding: const EdgeInsets.only(
                  top: 64,
                  bottom: 64,
                  left: 64,
                  right: 64,
                ),
                decoration: BoxDecoration(
                  color: const Color(0xFFFFFFFF),
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    ...?tools,
                  ],
                ),
              ),
          ],
        ),
      ),
    );
  }
}
