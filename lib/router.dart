import 'package:flutter/widgets.dart';

import 'package:go_router/go_router.dart';

import 'package:flutter_tilt_book/layouts/home_layout.dart';
import 'config/config.dart';

class R {
  static final routerData = Config.routerData;

  static final config = GoRouter(
    initialLocation: '/${routerData[0].name}',
    routes: [
      GoRoute(
        path: '/',
        redirect: (_, state) => '/${routerData[0].name}',
      ),
      ShellRoute(
        builder: (_, state, child) => HomeLayout(child: child),
        routes: List.generate(
          routerData.length,
          (index) => GoRoute(
            name: routerData[index].name,
            path: '/${routerData[index].name}',
            pageBuilder: (_, state) => CustomTransitionPage(
              key: state.pageKey,
              child: routerData[index].widget,
              transitionsBuilder: (_, animation, secondaryAnimation, child) {
                return FadeTransition(
                  opacity: CurveTween(curve: Curves.easeInOutCirc)
                      .animate(animation),
                  child: child,
                );
              },
            ),
          ),
        ),
      ),
    ],
  );
}
