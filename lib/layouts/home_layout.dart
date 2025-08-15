import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:remixicon_updated/remixicon_updated.dart';
import 'package:url_launcher/url_launcher.dart';

import '../config/config.dart';
import '../widgets/book_divider.dart';
import '../widgets/layout.dart';

@RoutePage()
class HomeLayout extends StatelessWidget {
  const HomeLayout({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF171819),
      drawer: Container(
        width: 200,
        padding: const EdgeInsets.only(top: 24, bottom: 24, right: 24),
        color: const Color(0xFF171819),
        child: const SafeArea(child: NavigatorContainer()),
      ),
      body: SafeArea(
        child: LayoutAdaptive(
          smChild: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              /// 导航
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Padding(
                    padding: const EdgeInsets.all(12),
                    child: Builder(
                      builder: (context) => IconButton(
                        onPressed: () => Scaffold.of(context).openDrawer(),
                        icon: const Icon(Remix.menu_2_line, color: Colors.white),
                      ),
                    ),
                  ),
                  const LogoTitle(),
                  const SizedBox(width: 64),
                ],
              ),

              /// 主内容
              const Expanded(child: BodyContainer()),
            ],
          ),
          child: Row(
            children: [
              /// 导航
              Container(
                width: 200,
                padding: const EdgeInsets.only(top: 24, bottom: 24, right: 24),
                color: const Color(0xFF171819),
                child: const NavigatorContainer(),
              ),

              /// 主内容
              const Expanded(child: BodyContainer()),
            ],
          ),
        ),
      ),
    );
  }
}

/// 主内容
class BodyContainer extends StatelessWidget {
  const BodyContainer({super.key});

  @override
  Widget build(BuildContext context) {
    final layout = Layout(context);

    return Container(
      margin: layout.sm ? null : const EdgeInsets.all(12),
      padding: layout.sm ? null : const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: const Color(0xFFF6F7FA),
        borderRadius: layout.sm
            ? const BorderRadius.vertical(top: Radius.circular(24))
            : BorderRadius.circular(36),
      ),
      child: const AutoRouter(),
    );
  }
}

/// 导航栏
class NavigatorContainer extends StatelessWidget {
  const NavigatorContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        /// Title
        const Padding(padding: EdgeInsets.only(top: 12, left: 24), child: LogoTitle()),
        const BookDivider(padding: EdgeInsets.only(left: 24, top: 24, bottom: 12)),

        /// Banner
        const BannerContainer(),
        const BookDivider(padding: EdgeInsets.only(left: 24, top: 12, bottom: 24)),

        /// Menu
        const Padding(
          padding: EdgeInsets.only(left: 24, bottom: 12),
          child: Text(
            'MENU',
            style: TextStyle(color: Color(0xFF616163), fontSize: 12, fontWeight: FontWeight.bold),
          ),
        ),
        Expanded(
          child: Stack(
            children: [
              ListView(
                physics: const AlwaysScrollableScrollPhysics(parent: BouncingScrollPhysics()),
                children: List.generate(Config.routeData.length + 1, (index) {
                  if (index == Config.routeData.length) {
                    return const SizedBox(height: 100);
                  }
                  final routeData = Config.routeData[index];
                  return NavigatorItem(
                    title: routeData.title,
                    icon: routeData.icon,
                    pathName: routeData.pathName,
                  );
                }),
              ),

              /// 模拟内阴影，视觉提醒用户上方还有更多菜单
              Positioned(
                left: 0,
                right: 0,
                top: 0,
                child: IgnorePointer(
                  child: Container(
                    height: 14,
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.bottomCenter,
                        end: Alignment.topCenter,
                        colors: [
                          const Color(0xFF171819).withValues(alpha: 0.0),
                          const Color(0xFF171819).withValues(alpha: 0.6),
                          const Color(0xFF171819),
                        ],
                      ),
                    ),
                  ),
                ),
              ),

              /// 模拟内阴影，视觉提醒用户下方还有更多菜单
              Positioned(
                left: 0,
                right: 0,
                bottom: 0,
                child: IgnorePointer(
                  child: Container(
                    height: 100,
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [
                          const Color(0xFF171819).withValues(alpha: 0.0),
                          const Color(0xFF171819).withValues(alpha: 0.6),
                          const Color(0xFF171819),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}

/// 导航按钮
class NavigatorItem extends StatefulWidget {
  const NavigatorItem({super.key, required this.title, required this.icon, required this.pathName});

  final String title;
  final IconData icon;
  final String pathName;

  @override
  State<NavigatorItem> createState() => _NavigatorItemState();
}

class _NavigatorItemState extends State<NavigatorItem> {
  bool selected = false;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    RouterScope.of(context, watch: true);
    selected = AutoRouter.of(context).isPathActive(widget.pathName);
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => AutoRouter.of(context).replacePath(widget.pathName),
      child: MouseRegion(
        cursor: SystemMouseCursors.click,
        child: Container(
          margin: const EdgeInsets.symmetric(vertical: 6),
          padding: const EdgeInsets.symmetric(vertical: 4),
          child: AnimatedCrossFade(
            crossFadeState: selected ? CrossFadeState.showSecond : CrossFadeState.showFirst,
            duration: const Duration(milliseconds: 400),
            firstChild: _buildMenuItem(
              title: widget.title,
              icon: widget.icon,
              textColor: const Color(0xFF848486),
              indicatorColor: Colors.transparent,
            ),
            secondChild: _buildMenuItem(
              title: widget.title,
              icon: widget.icon,
              textColor: const Color(0xFFE7E7E8),
              indicatorColor: const Color(0xFF186A75),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildMenuItem({
    required String title,
    required IconData icon,
    required Color textColor,
    required Color indicatorColor,
  }) {
    return Stack(
      alignment: AlignmentDirectional.centerStart,
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 24),
          child: SizedBox(
            height: 18,
            child: Row(
              children: [
                Padding(
                  padding: const EdgeInsets.only(right: 6),
                  child: Icon(icon, size: 14, color: textColor),
                ),
                Text(
                  title,
                  style: TextStyle(color: textColor, fontSize: 14, height: 1),
                  strutStyle: const StrutStyle(fontSize: 14, height: 1, forceStrutHeight: true),
                ),
              ],
            ),
          ),
        ),
        Container(
          width: 2,
          height: 16,
          margin: const EdgeInsets.only(left: 6),
          decoration: BoxDecoration(
            color: indicatorColor,
            borderRadius: BorderRadius.circular(100),
          ),
        ),
      ],
    );
  }
}

/// Banner
class BannerContainer extends StatelessWidget {
  const BannerContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(left: 24),
      child: Wrap(
        spacing: 8,
        runSpacing: 8,
        children: List.generate(
          Config.bookLinkData.length,
          (index) => GestureDetector(
            onTap: () => launchUrl(Config.bookLinkData[index].uri),
            child: MouseRegion(
              cursor: SystemMouseCursors.click,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(right: 8),
                        child: Icon(Config.bookLinkData[index].icon, size: 20, color: Colors.white),
                      ),
                      Text(
                        Config.bookLinkData[index].title,
                        style: const TextStyle(color: Colors.white, fontSize: 14, height: 1),
                        strutStyle: const StrutStyle(
                          fontSize: 14,
                          height: 1,
                          forceStrutHeight: true,
                        ),
                      ),
                    ],
                  ),
                  const Icon(Remix.link, size: 12, color: Colors.white),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class LogoTitle extends StatelessWidget {
  const LogoTitle({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text(Config.appTitle, style: TextStyle(color: Colors.white, fontSize: 20));
  }
}
