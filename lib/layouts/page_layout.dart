import 'package:flutter/material.dart';
import 'package:remixicon_updated/remixicon_updated.dart';
import 'package:url_launcher/url_launcher.dart';

import '../widgets/book_syntax_highlight.dart';
import '../widgets/layout.dart';

class PageLayout extends StatelessWidget {
  const PageLayout({
    super.key,
    required this.minHeight,
    required this.title,
    required this.body,
    this.dartCode = '...',
    this.sourceCodeLink,
    this.tools,
  });

  /// 最小高度
  final double minHeight;

  /// 标题
  final String title;

  /// 主内容
  final Widget body;

  /// dart 代码
  final String dartCode;

  /// 源代码链接
  final String? sourceCodeLink;

  /// 工具
  final List<Widget>? tools;

  @override
  Widget build(BuildContext context) {
    final layout = Layout(context);

    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFF6F7FA),
        borderRadius: layout.sm
            ? const BorderRadius.vertical(top: Radius.circular(24))
            : BorderRadius.circular(24),
      ),
      child: LayoutAdaptive(
        mdChild: ListView(
          children: [
            /// Body
            Container(
              height: minHeight,
              padding: const EdgeInsets.only(bottom: 12),
              child: BodyContainer(
                title: title,
                body: body,
                dartCode: dartCode,
                sourceCodeLink: sourceCodeLink,
              ),
            ),

            /// Tools
            ToolsContainer(tools: tools),
          ],
        ),
        child: Row(
          children: [
            /// Body
            Expanded(
              child: Padding(
                padding: const EdgeInsets.only(right: 12),
                child: BodyContainer(
                  title: title,
                  body: body,
                  dartCode: dartCode,
                  sourceCodeLink: sourceCodeLink,
                ),
              ),
            ),

            /// Tools
            SizedBox(width: 420, child: ToolsContainer(tools: tools)),
          ],
        ),
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
    this.sourceCodeLink,
  });

  final String title;
  final Widget body;
  final String dartCode;
  final String? sourceCodeLink;

  @override
  State<BodyContainer> createState() => _BodyContainerState();
}

class _BodyContainerState extends State<BodyContainer> with SingleTickerProviderStateMixin {
  int initialIndex = 0;

  late TabController tabController = TabController(
    initialIndex: initialIndex,
    length: 2,
    vsync: this,
  )..addListener(() => pageController.jumpToPage(tabController.index));

  late PageController pageController = PageController(initialPage: initialIndex);

  @override
  void dispose() {
    super.dispose();
    tabController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final layout = Layout(context);

    return Container(
      padding: EdgeInsets.all(layout.sm ? 12 : 24),
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF),
        borderRadius: BorderRadius.circular(24),
      ),
      child: Column(
        children: [
          /// Title
          Flex(
            direction: layout.sm ? Axis.vertical : Axis.horizontal,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: layout.sm
                    ? CrossAxisAlignment.center
                    : CrossAxisAlignment.start,
                children: [
                  /// Title
                  Text(
                    widget.title,
                    style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),

                  /// Source Code
                  if (widget.sourceCodeLink != null)
                    GestureDetector(
                      onTap: () => launchUrl(Uri.parse(widget.sourceCodeLink ?? '')),
                      child: const MouseRegion(
                        cursor: SystemMouseCursors.click,
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Padding(
                              padding: EdgeInsets.only(bottom: 2, right: 4),
                              child: Icon(Remix.external_link_line, size: 12),
                            ),
                            Text('Source Code', style: TextStyle(fontSize: 12)),
                          ],
                        ),
                      ),
                    ),
                ],
              ),

              if (layout.sm) const SizedBox(height: 12),

              /// Action
              Container(
                width: 94,
                padding: const EdgeInsets.symmetric(vertical: 4),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: const BorderRadius.all(Radius.circular(100)),
                  border: Border.all(color: const Color(0xFFE9EAED)),
                ),
                child: TabBar(
                  controller: tabController,
                  isScrollable: true,
                  tabAlignment: TabAlignment.center,
                  dividerHeight: 0,
                  indicatorWeight: 0,
                  indicatorSize: TabBarIndicatorSize.label,
                  indicatorPadding: const EdgeInsets.symmetric(horizontal: -12),
                  indicator: const BoxDecoration(color: Color(0xFF171819), shape: BoxShape.circle),
                  labelColor: Colors.white,
                  unselectedLabelColor: Colors.black,
                  overlayColor: const WidgetStatePropertyAll(Colors.transparent),
                  tabs: const [
                    /// Preview
                    Tab(height: 36, icon: Icon(Remix.eye_line, size: 14)),

                    /// Code
                    Tab(height: 36, icon: Icon(Remix.code_s_slash_line, size: 14)),
                  ],
                ),
              ),
            ],
          ),

          const SizedBox(height: 24),

          /// Body
          Expanded(
            child: PageView(
              controller: pageController,
              physics: const NeverScrollableScrollPhysics(),
              children: [
                /// Preview
                LayoutAdaptive(
                  mdChild: Padding(
                    padding: const EdgeInsets.only(top: 40, bottom: 40),
                    child: Column(children: [widget.body]),
                  ),
                  child: ListView(
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(top: 50, bottom: 100),
                        child: Center(child: widget.body),
                      ),
                    ],
                  ),
                ),

                /// Code
                ClipRRect(
                  borderRadius: BorderRadius.circular(24),
                  child: SelectionArea(
                    child: ListView(children: [BookSyntaxHighlight(dartCode: widget.dartCode)]),
                  ),
                ),
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
    final layout = Layout(context);

    return Container(
      padding: EdgeInsets.all(layout.sm ? 12 : 24),
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF),
        borderRadius: BorderRadius.circular(24),
      ),
      child: Column(
        children: [
          Flex(
            direction: layout.sm ? Axis.vertical : Axis.horizontal,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: const [
              Text('Tools', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            ],
          ),
          const SizedBox(height: 24),
          if (tools != null)
            LayoutAdaptive(
              mdChild: Column(children: [...?tools]),
              child: Expanded(child: ListView(children: [...?tools])),
            ),
          if (tools == null)
            const Center(
              heightFactor: 6,
              child: Icon(Remix.emotion_line, size: 36, color: Colors.grey),
            ),
        ],
      ),
    );
  }
}
