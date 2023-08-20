import 'package:flutter/material.dart';

import 'package:flutter_tilt_book/widgets/book_markdown.dart';
import 'package:remixicon_updated/remixicon_updated.dart';

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
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: const BoxDecoration(
        color: Color(0xFFF6F7FA),
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(36),
          bottomLeft: Radius.circular(36),
        ),
      ),
      child: Row(
        children: [
          Expanded(
            child: Padding(
              padding: const EdgeInsets.only(right: 24),
              child: Column(
                children: [
                  /// Body
                  Expanded(
                    child: BodyContainer(
                      title: title,
                      body: body,
                      dartCode: dartCode,
                    ),
                  ),
                ],
              ),
            ),
          ),

          /// Tools
          SizedBox(width: 420, child: ToolsContainer(tools: tools)),
        ],
      ),
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
                      avatar: const Padding(
                        padding: EdgeInsets.only(bottom: 2),
                        child: Icon(
                          Remix.eye_line,
                          size: 14,
                        ),
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
                      avatar: const Padding(
                        padding: EdgeInsets.only(bottom: 2),
                        child: Icon(
                          Remix.code_s_slash_line,
                          size: 14,
                        ),
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
            child: ClipRRect(
              borderRadius: BorderRadius.circular(24),
              child: ListView(
                physics: const AlwaysScrollableScrollPhysics(
                  parent: BouncingScrollPhysics(),
                ),
                children: [
                  /// Preview
                  if (currentIndex == 0)
                    Padding(
                      padding: const EdgeInsets.only(top: 40, bottom: 100),
                      child: Center(child: widget.body),
                    ),

                  /// Code
                  if (currentIndex == 1)
                    BookMarkdown(dartCode: widget.dartCode),
                ],
              ),
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
            'Tools',
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 24),
          if (tools != null)
            Expanded(
              child: ListView(
                physics: const AlwaysScrollableScrollPhysics(
                  parent: BouncingScrollPhysics(),
                ),
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
