// ignore: avoid_web_libraries_in_flutter
import 'dart:js' as js;

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter_tilt_book/widget/book_markdown.dart';

class BaseLayout extends StatefulWidget {
  const BaseLayout({
    super.key,
    required this.title,
    required this.body,
    this.dartCode = '...',
    this.tools,
  });

  final String title;
  final Widget body;
  final String dartCode;
  final List<Widget>? tools;

  @override
  State<BaseLayout> createState() => _BaseLayoutState();
}

class _BaseLayoutState extends State<BaseLayout> {
  int currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(useMaterial3: true),
      home: Scaffold(
        backgroundColor: const Color(0xFFF6F7FA),
        body: ListView(
          children: [
            /// header
            Container(
              margin: const EdgeInsets.only(
                top: 24,
                bottom: 12,
                left: 24,
                right: 24,
              ),
              padding: const EdgeInsets.all(24),
              decoration: BoxDecoration(
                color: const Color(0xFFFFFFFF),
                borderRadius: BorderRadius.circular(20),
              ),
              child: Row(
                children: [
                  GestureDetector(
                    onTap: () => js.context.callMethod(
                        'open', ['https://github.com/AmosHuKe/flutter_tilt']),
                    child: MouseRegion(
                      cursor: SystemMouseCursors.click,
                      child: Row(
                        children: [
                          SvgPicture.asset(
                            'assets/github-logo.svg',
                            width: 24,
                            height: 24,
                          ),
                          const SizedBox(width: 6),
                          const Text(
                            'Github: flutter_tilt',
                            style: TextStyle(fontSize: 14),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Container(
                    margin: const EdgeInsets.symmetric(horizontal: 12),
                    child: const Text(
                      '|',
                      style: TextStyle(color: Colors.grey),
                    ),
                  ),
                  GestureDetector(
                    onTap: () => js.context.callMethod(
                        'open', ['https://pub.dev/packages/flutter_tilt']),
                    child: MouseRegion(
                      cursor: SystemMouseCursors.click,
                      child: Row(
                        children: [
                          Image.asset(
                            'assets/flutter-logo.png',
                            width: 20,
                            height: 20,
                          ),
                          const SizedBox(width: 6),
                          const Text(
                            'Package: flutter_tilt',
                            style: TextStyle(fontSize: 14),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),

            /// body
            Container(
              margin: const EdgeInsets.only(
                top: 12,
                bottom: 24,
                left: 24,
                right: 24,
              ),
              padding: const EdgeInsets.only(
                top: 24,
                bottom: 24,
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
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      /// title
                      Text(
                        widget.title,
                        style: const TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                        ),
                      ),

                      /// switch
                      Row(
                        children: [
                          if (currentIndex == 0)
                            ActionChip(
                              avatar: const Icon(
                                CupertinoIcons.chevron_left_slash_chevron_right,
                                size: 14,
                              ),
                              label: const Text('Code'),
                              onPressed: () {
                                setState(() {
                                  currentIndex = 1;
                                });
                              },
                            ),
                          if (currentIndex == 1)
                            ActionChip(
                              avatar: const Icon(
                                CupertinoIcons.eye,
                                size: 14,
                              ),
                              label: const Text('Preview'),
                              onPressed: () {
                                setState(() {
                                  currentIndex = 0;
                                });
                              },
                            ),
                        ],
                      ),
                    ],
                  ),
                  const SizedBox(height: 24),

                  /// view
                  if (currentIndex == 0)
                    Padding(
                      padding: const EdgeInsets.only(top: 40, bottom: 100),
                      child: Center(child: widget.body),
                    ),
                  if (currentIndex == 1)
                    BookMarkdown(dartCode: widget.dartCode),
                ],
              ),
            ),

            /// tools
            if (widget.tools != null)
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
                    ...?widget.tools,
                  ],
                ),
              ),
          ],
        ),
      ),
    );
  }
}
