import 'package:flutter/material.dart';

import 'package:go_router/go_router.dart';
import 'package:remixicon_updated/remixicon_updated.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:seo/seo.dart';
import 'package:url_launcher/url_launcher.dart';

import 'package:flutter_tilt_book/router.dart';
import 'package:flutter_tilt_book/config/config.dart';
import 'package:flutter_tilt_book/widgets/book_divider.dart';
import 'package:flutter_tilt_book/widgets/layout.dart';

class HomeLayout extends StatelessWidget {
  const HomeLayout({super.key, required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) {
    final GlobalKey<ScaffoldState> scaffoldGlobalKey =
        GlobalKey<ScaffoldState>();

    return Scaffold(
      key: scaffoldGlobalKey,
      backgroundColor: const Color(0xFF171819),
      drawer: Container(
        width: 200,
        padding: const EdgeInsets.only(top: 24, bottom: 24, right: 24),
        color: const Color(0xFF171819),
        child: const NavigatorContainer(),
      ),
      body: LayoutAdaptive(
        smChild: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            /// 导航
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Padding(
                  padding: const EdgeInsets.all(12),
                  child: IconButton(
                    onPressed: () =>
                        scaffoldGlobalKey.currentState!.openDrawer(),
                    icon: const Icon(Remix.menu_2_line, color: Colors.white),
                  ),
                ),
                const LogoTitle(),
                const SizedBox(width: 64),
              ],
            ),

            /// 主内容
            Expanded(child: child),
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
            Expanded(child: child),
          ],
        ),
      ),
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
        const Padding(
          padding: EdgeInsets.only(top: 12, left: 24),
          child: LogoTitle(),
        ),
        const BookDivider(
          padding: EdgeInsets.only(left: 24, top: 24, bottom: 12),
        ),

        /// Banner
        const BannerContainer(),
        const BookDivider(
          padding: EdgeInsets.only(left: 24, top: 12, bottom: 24),
        ),

        /// Menu
        const Padding(
          padding: EdgeInsets.only(left: 24, bottom: 12),
          child: Text(
            'MENU',
            style: TextStyle(
              color: Color(0xFF616163),
              fontSize: 12,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
        Expanded(
          child: Stack(
            children: [
              ListView(
                physics: const AlwaysScrollableScrollPhysics(
                  parent: BouncingScrollPhysics(),
                ),
                children: List.generate(
                  R.routerData.length + 1,
                  (index) {
                    if (index == R.routerData.length) {
                      return const SizedBox(height: 100);
                    }
                    return NavigatorItem(
                      title: R.routerData[index].title,
                      icon: R.routerData[index].icon,
                      routerName: R.routerData[index].name,
                    );
                  },
                ),
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
                          const Color(0xFF171819).withOpacity(0.0),
                          const Color(0xFF171819).withOpacity(0.6),
                          const Color(0xFF171819)
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
                          const Color(0xFF171819).withOpacity(0.0),
                          const Color(0xFF171819).withOpacity(0.6),
                          const Color(0xFF171819)
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
class NavigatorItem extends StatelessWidget {
  const NavigatorItem({
    super.key,
    required this.title,
    required this.icon,
    required this.routerName,
  });

  final String title;
  final IconData icon;
  final String routerName;

  @override
  Widget build(BuildContext context) {
    final bool selected =
        GoRouterState.of(context).matchedLocation == '/$routerName';

    return GestureDetector(
      onTap: () => context.goNamed(routerName),
      child: MouseRegion(
        cursor: SystemMouseCursors.click,
        child: Container(
          margin: const EdgeInsets.symmetric(vertical: 6),
          padding: const EdgeInsets.symmetric(vertical: 4),
          child: AnimatedCrossFade(
            crossFadeState:
                selected ? CrossFadeState.showSecond : CrossFadeState.showFirst,
            duration: const Duration(milliseconds: 400),
            firstChild: Stack(
              alignment: AlignmentDirectional.centerStart,
              children: [
                Padding(
                  padding: const EdgeInsets.only(left: 24),
                  child: Row(
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(bottom: 2),
                        child: Icon(
                          icon,
                          size: 14,
                          color: const Color(0xFF848486),
                        ),
                      ),
                      const SizedBox(width: 6),
                      Seo.text(
                        text: title,
                        style: TextTagStyle.h1,
                        child: Text(
                          title,
                          style: const TextStyle(
                            color: Color(0xFF848486),
                            fontSize: 14,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            secondChild: Stack(
              alignment: AlignmentDirectional.centerStart,
              children: [
                Padding(
                  padding: const EdgeInsets.only(left: 24),
                  child: Row(
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(bottom: 2),
                        child: Icon(
                          icon,
                          size: 14,
                          color: const Color(0xFFE7E7E8),
                        ),
                      ),
                      const SizedBox(width: 6),
                      Text(
                        title,
                        style: const TextStyle(
                          color: Color(0xFFE7E7E8),
                          fontSize: 14,
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  width: 2,
                  height: 16,
                  margin: const EdgeInsets.only(left: 2),
                  decoration: BoxDecoration(
                    color: const Color(0xFF186A75),
                    borderRadius: BorderRadius.circular(100),
                  ),
                ),
              ],
            ),
          ),
        ),
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
      padding: const EdgeInsets.only(left: 24),
      child: Wrap(
        spacing: 8,
        runSpacing: 8,
        children: List.generate(
          Config.bookLinkData.length,
          (index) => GestureDetector(
            onTap: () => launchUrl(Uri.parse(Config.bookLinkData[index].url)),
            child: MouseRegion(
              cursor: SystemMouseCursors.click,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(bottom: 4, right: 8),
                        child: Icon(
                          Config.bookLinkData[index].icon,
                          size: 20,
                          color: Colors.white,
                        ),
                      ),
                      Seo.link(
                        anchor: Config.bookLinkData[index].title,
                        href: Config.bookLinkData[index].title,
                        child: Text(
                          Config.bookLinkData[index].title,
                          style: const TextStyle(
                            color: Colors.white,
                            fontSize: 14,
                          ),
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
    Widget title = const Text(
      Config.appTitle,
      style: TextStyle(
        color: Colors.white,
        fontSize: 20,
      ),
    );

    title = title.animate(onPlay: (controller) => controller.repeat()).shimmer(
      duration: 3600.ms,
      colors: [
        Colors.white,
        const Color(0xFF16686D),
        const Color(0xFF16686D),
        const Color(0xFF2071A8),
        Colors.white,
      ],
    );
    return title;
  }
}
