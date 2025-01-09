import 'package:remixicon_updated/remixicon_updated.dart';

import 'package:flutter_tilt_book/router.gr.dart';

import '../models/book_link.dart';
import '../models/route.dart';

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

  static final List<RouteData> routeData = [
    RouteData(
      title: 'Example',
      icon: Remix.magic_line,
      pathName: 'Example',
      pageInfo: Example.page,
    ),
    RouteData(
      title: 'Parallax Image',
      icon: Remix.landscape_line,
      pathName: 'ParallaxImage',
      pageInfo: ParallaxImage.page,
    ),
    RouteData(
      title: 'LightShadowMode',
      icon: Remix.landscape_line,
      pathName: 'Tilt-LightShadowMode',
      pageInfo: LightShadowModeDemo.page,
    ),
    RouteData(
      title: 'Parallax Card',
      icon: Remix.image_2_line,
      pathName: 'ParallaxCard',
      pageInfo: ParallaxCard.page,
    ),
    RouteData(
      title: 'Multiple Tilt',
      icon: Remix.checkbox_multiple_blank_line,
      pathName: 'MultipleTilt',
      pageInfo: MultipleTilt.page,
    ),
    RouteData(
      title: 'Bento Grids',
      icon: Remix.layout_masonry_line,
      pathName: 'BentoGrids',
      pageInfo: BentoGrids.page,
    ),
    RouteData(
      title: 'Events',
      icon: Remix.drag_drop_line,
      pathName: 'Events',
      pageInfo: Events.page,
    ),
    RouteData(
      title: 'Dialog',
      icon: Remix.discuss_line,
      pathName: 'Dialog',
      pageInfo: DialogDemo.page,
    ),
    RouteData(
      title: 'Default',
      icon: Remix.stack_line,
      pathName: 'Default',
      pageInfo: Default.page,
    ),
    RouteData(
      title: 'Layout',
      icon: Remix.layout_2_line,
      pathName: 'LayoutDemo',
      pageInfo: LayoutDemo.page,
    ),
    RouteData(
      title: 'Layout2',
      icon: Remix.layout_4_line,
      pathName: 'Layout2Demo',
      pageInfo: Layout2Demo.page,
    ),
    RouteData(
      title: 'Animation',
      icon: Remix.sketching,
      pathName: 'AnimationDemo',
      pageInfo: AnimationDemo.page,
    ),
    RouteData(
      title: 'TiltStreamController',
      icon: Remix.remote_control_line,
      pathName: 'TiltStreamControllerDemo',
      pageInfo: TiltStreamControllerDemo.page,
    ),
    RouteData(
      title: 'Reverse Tilt',
      icon: Remix.anticlockwise_2_line,
      pathName: 'ReverseTilt',
      pageInfo: ReverseTilt.page,
    ),
    RouteData(
      title: 'Keep Tilt',
      icon: Remix.collage_line,
      pathName: 'KeepTilt',
      pageInfo: KeepTilt.page,
    ),
    RouteData(
      title: 'Tilt Direction',
      icon: Remix.split_cells_horizontal,
      pathName: 'TiltDirectionDemo',
      pageInfo: TiltDirectionDemo.page,
    ),
    RouteData(
      title: 'Light Direction',
      icon: Remix.lightbulb_line,
      pathName: 'LightDirectionDemo',
      pageInfo: LightDirectionDemo.page,
    ),
    RouteData(
      title: 'Shadow Direction',
      icon: Remix.bring_forward,
      pathName: 'ShadowDirectionDemo',
      pageInfo: ShadowDirectionDemo.page,
    ),
    RouteData(
      title: 'Initial Tilt',
      icon: Remix.focus_line,
      pathName: 'InitialTilt',
      pageInfo: InitialTilt.page,
    ),
    RouteData(
      title: 'Disable Effects',
      icon: Remix.shape_line,
      pathName: 'DisableEffects',
      pageInfo: DisableEffects.page,
    ),
  ];
}
