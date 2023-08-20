// ignore: avoid_web_libraries_in_flutter
import 'dart:js' as js;

import 'package:flutter/material.dart';

import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter_tilt_book/widget/book_markdown.dart';
import 'package:remixicon/remixicon.dart';

class PageLayout extends StatelessWidget {
  const PageLayout({
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
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 24),
            child: Column(
              children: [
                /// Banner
                const BannerContainer(),

                /// Body
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.only(top: 24),
                    child: BodyContainer(
                      title: title,
                      body: body,
                      dartCode: dartCode,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),

        /// Tools
        SizedBox(width: 420, child: ToolsContainer(tools: tools)),
      ],
    );
  }
}

/// Body
class BodyContainer extends StatefulWidget {
  const BodyContainer({
    super.key,
    required this.title,
    required this.body,
    required this.dartCode,
  });

  final String title;
  final Widget body;
  final String dartCode;

  @override
  State<BodyContainer> createState() => _BodyContainerState();
}

class _BodyContainerState extends State<BodyContainer> {
  int currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF),
        borderRadius: BorderRadius.circular(24),
      ),
      child: Column(
        children: [
          /// Title
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              /// Title
              Text(
                widget.title,
                style: const TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),

              /// Action
              Row(
                children: [
                  if (currentIndex == 1)
                    ActionChip(
                      avatar: const Icon(
                        Remix.eye_line,
                        size: 14,
                      ),
                      label: const Text('Preview'),
                      onPressed: () {
                        setState(() {
                          currentIndex = 0;
                        });
                      },
                    ),
                  if (currentIndex == 0)
                    ActionChip(
                      avatar: const Icon(
                        Remix.code_s_slash_line,
                        size: 14,
                      ),
                      label: const Text('Code'),
                      onPressed: () {
                        setState(() {
                          currentIndex = 1;
                        });
                      },
                    ),
                ],
              ),
            ],
          ),

          const SizedBox(height: 24),

          /// Body
          Expanded(
            child: ListView(
              children: [
                /// Preview
                if (currentIndex == 0)
                  Padding(
                    padding: const EdgeInsets.only(top: 40, bottom: 100),
                    child: Center(child: widget.body),
                  ),

                /// Code
                if (currentIndex == 1) BookMarkdown(dartCode: widget.dartCode),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

/// Tools
class ToolsContainer extends StatelessWidget {
  const ToolsContainer({super.key, this.tools});

  final List<Widget>? tools;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF),
        borderRadius: BorderRadius.circular(24),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'Action',
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 24),
          if (tools != null)
            Expanded(
              child: ListView(
                children: [
                  ...?tools,
                ],
              ),
            ),
          if (tools == null)
            const Center(
              heightFactor: 6,
              child: Icon(
                Remix.emotion_line,
                size: 36,
                color: Colors.grey,
              ),
            ),
        ],
      ),
    );
  }
}

/// Banner
class BannerContainer extends StatelessWidget {
  const BannerContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF),
        borderRadius: BorderRadius.circular(24),
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
            onTap: () => js.context
                .callMethod('open', ['https://pub.dev/packages/flutter_tilt']),
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
    );
  }
}
