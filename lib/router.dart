import 'package:flutter/widgets.dart';
import 'package:go_router/go_router.dart';

import 'package:flutter_tilt_book/layouts/home_layout.dart';

import 'models/router.dart';

import 'views/animation.dart';
import 'views/default.dart';
import 'views/disable_effects.dart';
import 'views/events.dart';
import 'views/example.dart';
import 'views/initial_tilt.dart';
import 'views/keep_tilt.dart';
import 'views/layout.dart';
import 'views/layout2.dart';
import 'views/light_direction.dart';
import 'views/parallax_image.dart';
import 'views/reverse_tilt.dart';
import 'views/shadow_direction.dart';
import 'views/tilt_direction.dart';

class R {
  static final List<RouterData> routerData = [
    RouterData(
      title: 'Example',
      name: 'Example',
      widget: const Example(),
    ),
    RouterData(
      title: 'Parallax Image',
      name: 'ParallaxImage',
      widget: const ParallaxImage(),
    ),
    RouterData(
      title: 'Events',
      name: 'Events',
      widget: const Events(),
    ),
    RouterData(
      title: 'Default',
      name: 'Default',
      widget: const Default(),
    ),
    RouterData(
      title: 'Layout',
      name: 'LayoutDemo',
      widget: const LayoutDemo(),
    ),
    RouterData(
      title: 'Layout2',
      name: 'Layout2Demo',
      widget: const Layout2Demo(),
    ),
    RouterData(
      title: 'Animation',
      name: 'AnimationDemo',
      widget: const AnimationDemo(),
    ),
    RouterData(
      title: 'Reverse Tilt',
      name: 'ReverseTilt',
      widget: const ReverseTilt(),
    ),
    RouterData(
      title: 'Keep Tilt',
      name: 'KeepTilt',
      widget: const KeepTilt(),
    ),
    RouterData(
      title: 'Tilt Direction',
      name: 'TiltDirectionDemo',
      widget: const TiltDirectionDemo(),
    ),
    RouterData(
      title: 'Light Direction',
      name: 'LightDirectionDemo',
      widget: const LightDirectionDemo(),
    ),
    RouterData(
      title: 'Shadow Direction',
      name: 'ShadowDirectionDemo',
      widget: const ShadowDirectionDemo(),
    ),
    RouterData(
      title: 'Initial Tilt',
      name: 'InitialTilt',
      widget: const InitialTilt(),
    ),
    RouterData(
      title: 'Disable Effects',
      name: 'DisableEffects',
      widget: const DisableEffects(),
    ),
  ];

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
