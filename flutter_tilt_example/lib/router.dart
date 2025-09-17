import 'package:flutter/widgets.dart';
import 'package:auto_route/auto_route.dart';

import 'config/config.dart';
import './router.gr.dart';

@AutoRouterConfig(generateForDir: ['lib'])
class AppRouter extends RootStackRouter {
  static final configRouteData = Config.routeData;

  @override
  RouteType get defaultRouteType => const RouteType.cupertino();

  @override
  List<AutoRoute> get routes => [
    CustomRoute(
      initial: true,
      path: '/',
      page: HomeLayout.page,
      transitionsBuilder:
          (
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
            Widget child,
          ) {
            return FadeTransition(
              opacity: CurveTween(curve: Curves.easeInOutCirc).animate(animation),
              child: child,
            );
          },
      children: [
        RedirectRoute(path: '', redirectTo: configRouteData.first.pathName),
        ...List.generate(configRouteData.length, (int index) {
          final routeData = configRouteData[index];
          return CustomRoute(
            path: routeData.pathName,
            page: routeData.pageInfo,
            transitionsBuilder:
                (
                  BuildContext context,
                  Animation<double> animation,
                  Animation<double> secondaryAnimation,
                  Widget child,
                ) {
                  return FadeTransition(
                    opacity: CurveTween(curve: Curves.easeInOutCirc).animate(animation),
                    child: child,
                  );
                },
          );
        }),
        RedirectRoute(path: '*', redirectTo: configRouteData.first.pathName),
      ],
    ),

    /// 用于内嵌的页面
    ///
    /// 不显示侧边栏等页面元素
    CustomRoute(
      path: '/embed',
      page: HomeEmbedLayout.page,
      keepHistory: false,
      transitionsBuilder:
          (
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
            Widget child,
          ) {
            return FadeTransition(
              opacity: CurveTween(curve: Curves.easeInOutCirc).animate(animation),
              child: child,
            );
          },
      children: [
        RedirectRoute(path: '', redirectTo: configRouteData.first.pathName),
        ...List.generate(configRouteData.length, (int index) {
          final routeData = configRouteData[index];
          return CustomRoute(
            path: routeData.pathName,
            page: routeData.pageInfo,
            transitionsBuilder:
                (
                  BuildContext context,
                  Animation<double> animation,
                  Animation<double> secondaryAnimation,
                  Widget child,
                ) {
                  return FadeTransition(
                    opacity: CurveTween(curve: Curves.easeInOutCirc).animate(animation),
                    child: child,
                  );
                },
          );
        }),
        RedirectRoute(path: '*', redirectTo: configRouteData.first.pathName),
      ],
    ),
    RedirectRoute(path: '*', redirectTo: '/'),
  ];
}
