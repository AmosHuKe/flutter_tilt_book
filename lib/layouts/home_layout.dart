import 'package:flutter/material.dart';

import 'package:go_router/go_router.dart';

import 'package:flutter_tilt_book/router.dart';

class HomeLayout extends StatelessWidget {
  const HomeLayout({super.key, required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF6F7FA),
      body: Container(
        margin: const EdgeInsets.all(24),
        child: Flex(
          direction: Axis.horizontal,
          children: [
            /// 导航
            const SizedBox(width: 240, child: NavigatorContainer()),

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
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(24),
      ),
      child: ListView(
        physics: const AlwaysScrollableScrollPhysics(
          parent: BouncingScrollPhysics(),
        ),
        children: List.generate(
          R.routerData.length,
          (index) => NavigatorItem(
            title: R.routerData[index].title,
            routerName: R.routerData[index].name,
          ),
        ),
      ),
    );
  }
}

/// 导航按钮
class NavigatorItem extends StatelessWidget {
  const NavigatorItem({
    super.key,
    required this.title,
    required this.routerName,
  });

  final String title;
  final String routerName;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 8),
      padding: const EdgeInsets.symmetric(vertical: 4, horizontal: 8),
      child: MouseRegion(
        cursor: SystemMouseCursors.click,
        child: GestureDetector(
          onTap: () => context.goNamed(routerName),
          child: Text(title),
        ),
      ),
    );
  }
}
