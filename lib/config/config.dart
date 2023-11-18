import 'package:remixicon_updated/remixicon_updated.dart';

import 'package:flutter_tilt_book/models/router.dart';
import 'package:flutter_tilt_book/models/book_link.dart';

import 'package:flutter_tilt_book/views/animation.dart';
import 'package:flutter_tilt_book/views/default.dart';
import 'package:flutter_tilt_book/views/disable_effects.dart';
import 'package:flutter_tilt_book/views/events.dart';
import 'package:flutter_tilt_book/views/example.dart';
import 'package:flutter_tilt_book/views/initial_tilt.dart';
import 'package:flutter_tilt_book/views/keep_tilt.dart';
import 'package:flutter_tilt_book/views/layout.dart';
import 'package:flutter_tilt_book/views/layout2.dart';
import 'package:flutter_tilt_book/views/light_direction.dart';
import 'package:flutter_tilt_book/views/parallax_image.dart';
import 'package:flutter_tilt_book/views/reverse_tilt.dart';
import 'package:flutter_tilt_book/views/shadow_direction.dart';
import 'package:flutter_tilt_book/views/tilt_direction.dart';
import 'package:flutter_tilt_book/views/multiple_tilt.dart';
import 'package:flutter_tilt_book/views/dialog.dart';
import 'package:flutter_tilt_book/views/parallax_card.dart';

class Config {
  static const String appTitle = 'Flutter Tilt';

  static final List<BookLinkData> bookLinkData = [
    BookLinkData(
      title: 'Pub.dev',
      icon: Remix.flutter_fill,
      url: 'https://pub.dev/packages/flutter_tilt',
    ),
    BookLinkData(
      title: 'Github.com',
      icon: Remix.github_fill,
      url: 'https://github.com/fluttercandies/flutter_tilt',
    ),
  ];

  static final List<RouterData> routerData = [
    RouterData(
      title: 'Example',
      icon: Remix.magic_line,
      name: 'Example',
      widget: const Example(),
    ),
    RouterData(
      title: 'Parallax Image',
      icon: Remix.landscape_line,
      name: 'ParallaxImage',
      widget: const ParallaxImage(),
    ),
    RouterData(
      title: 'Parallax Card',
      icon: Remix.image_2_line,
      name: 'ParallaxCard',
      widget: const ParallaxCard(),
    ),
    RouterData(
      title: 'Multiple Tilt',
      icon: Remix.checkbox_multiple_blank_line,
      name: 'MultipleTilt',
      widget: const MultipleTilt(),
    ),
    RouterData(
      title: 'Events',
      icon: Remix.drag_drop_line,
      name: 'Events',
      widget: const Events(),
    ),
    RouterData(
      title: 'Dialog',
      icon: Remix.discuss_line,
      name: 'Dialog',
      widget: const DialogDemo(),
    ),
    RouterData(
      title: 'Default',
      icon: Remix.stack_line,
      name: 'Default',
      widget: const Default(),
    ),
    RouterData(
      title: 'Layout',
      icon: Remix.layout_2_line,
      name: 'LayoutDemo',
      widget: const LayoutDemo(),
    ),
    RouterData(
      title: 'Layout2',
      icon: Remix.layout_4_line,
      name: 'Layout2Demo',
      widget: const Layout2Demo(),
    ),
    RouterData(
      title: 'Animation',
      icon: Remix.sketching,
      name: 'AnimationDemo',
      widget: const AnimationDemo(),
    ),
    RouterData(
      title: 'Reverse Tilt',
      icon: Remix.anticlockwise_2_line,
      name: 'ReverseTilt',
      widget: const ReverseTilt(),
    ),
    RouterData(
      title: 'Keep Tilt',
      icon: Remix.collage_line,
      name: 'KeepTilt',
      widget: const KeepTilt(),
    ),
    RouterData(
      title: 'Tilt Direction',
      icon: Remix.split_cells_horizontal,
      name: 'TiltDirectionDemo',
      widget: const TiltDirectionDemo(),
    ),
    RouterData(
      title: 'Light Direction',
      icon: Remix.lightbulb_line,
      name: 'LightDirectionDemo',
      widget: const LightDirectionDemo(),
    ),
    RouterData(
      title: 'Shadow Direction',
      icon: Remix.bring_forward,
      name: 'ShadowDirectionDemo',
      widget: const ShadowDirectionDemo(),
    ),
    RouterData(
      title: 'Initial Tilt',
      icon: Remix.focus_line,
      name: 'InitialTilt',
      widget: const InitialTilt(),
    ),
    RouterData(
      title: 'Disable Effects',
      icon: Remix.shape_line,
      name: 'DisableEffects',
      widget: const DisableEffects(),
    ),
  ];
}
