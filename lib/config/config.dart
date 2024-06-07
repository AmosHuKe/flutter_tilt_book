import 'package:remixicon_updated/remixicon_updated.dart';

import '../models/book_link.dart';
import '../models/router.dart';

import '../views/animation.dart' deferred as animation_widget;
import '../views/bento_grids.dart' deferred as bento_grids_widget;
import '../views/default.dart' deferred as default_widget;
import '../views/dialog.dart' deferred as dialog_widget;
import '../views/disable_effects.dart' deferred as disable_effects_widget;
import '../views/events.dart' deferred as events_widget;
import '../views/example.dart' deferred as example_widget;
import '../views/initial_tilt.dart' deferred as initial_tilt_widget;
import '../views/keep_tilt.dart' deferred as keep_tilt_widget;
import '../views/layout.dart' deferred as layout_widget;
import '../views/layout2.dart' deferred as layout2_widget;
import '../views/light_direction.dart' deferred as light_direction_widget;
import '../views/multiple_tilt.dart' deferred as multiple_tilt_widget;
import '../views/parallax_card.dart' deferred as parallax_card_widget;
import '../views/parallax_image.dart' deferred as parallax_image_widget;
import '../views/reverse_tilt.dart' deferred as reverse_tilt_widget;
import '../views/shadow_direction.dart' deferred as shadow_direction_widget;
import '../views/tilt_direction.dart' deferred as tilt_direction_widget;
import '../views/tilt_stream_controller.dart'
    deferred as tilt_stream_controller_widget;

import '../widgets/deferred_widget.dart';

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
      widget: DeferredWidget(
        example_widget.loadLibrary,
        () => example_widget.Example(),
      ),
    ),
    RouterData(
      title: 'Parallax Image',
      icon: Remix.landscape_line,
      name: 'ParallaxImage',
      widget: DeferredWidget(
        parallax_image_widget.loadLibrary,
        () => parallax_image_widget.ParallaxImage(),
      ),
    ),
    RouterData(
      title: 'Parallax Card',
      icon: Remix.image_2_line,
      name: 'ParallaxCard',
      widget: DeferredWidget(
        parallax_card_widget.loadLibrary,
        () => parallax_card_widget.ParallaxCard(),
      ),
    ),
    RouterData(
      title: 'Multiple Tilt',
      icon: Remix.checkbox_multiple_blank_line,
      name: 'MultipleTilt',
      widget: DeferredWidget(
        multiple_tilt_widget.loadLibrary,
        () => multiple_tilt_widget.MultipleTilt(),
      ),
    ),
    RouterData(
      title: 'Bento Grids',
      icon: Remix.layout_masonry_line,
      name: 'BentoGrids',
      widget: DeferredWidget(
        bento_grids_widget.loadLibrary,
        () => bento_grids_widget.BentoGrids(),
      ),
    ),
    RouterData(
      title: 'Events',
      icon: Remix.drag_drop_line,
      name: 'Events',
      widget: DeferredWidget(
        events_widget.loadLibrary,
        () => events_widget.Events(),
      ),
    ),
    RouterData(
      title: 'Dialog',
      icon: Remix.discuss_line,
      name: 'Dialog',
      widget: DeferredWidget(
        dialog_widget.loadLibrary,
        () => dialog_widget.DialogDemo(),
      ),
    ),
    RouterData(
      title: 'Default',
      icon: Remix.stack_line,
      name: 'Default',
      widget: DeferredWidget(
        default_widget.loadLibrary,
        () => default_widget.Default(),
      ),
    ),
    RouterData(
      title: 'Layout',
      icon: Remix.layout_2_line,
      name: 'LayoutDemo',
      widget: DeferredWidget(
        layout_widget.loadLibrary,
        () => layout_widget.LayoutDemo(),
      ),
    ),
    RouterData(
      title: 'Layout2',
      icon: Remix.layout_4_line,
      name: 'Layout2Demo',
      widget: DeferredWidget(
        layout2_widget.loadLibrary,
        () => layout2_widget.Layout2Demo(),
      ),
    ),
    RouterData(
      title: 'Animation',
      icon: Remix.sketching,
      name: 'AnimationDemo',
      widget: DeferredWidget(
        animation_widget.loadLibrary,
        () => animation_widget.AnimationDemo(),
      ),
    ),
    RouterData(
      title: 'TiltStreamController',
      icon: Remix.remote_control_line,
      name: 'TiltStreamControllerDemo',
      widget: DeferredWidget(
        tilt_stream_controller_widget.loadLibrary,
        () => tilt_stream_controller_widget.TiltStreamControllerDemo(),
      ),
    ),
    RouterData(
      title: 'Reverse Tilt',
      icon: Remix.anticlockwise_2_line,
      name: 'ReverseTilt',
      widget: DeferredWidget(
        reverse_tilt_widget.loadLibrary,
        () => reverse_tilt_widget.ReverseTilt(),
      ),
    ),
    RouterData(
      title: 'Keep Tilt',
      icon: Remix.collage_line,
      name: 'KeepTilt',
      widget: DeferredWidget(
        keep_tilt_widget.loadLibrary,
        () => keep_tilt_widget.KeepTilt(),
      ),
    ),
    RouterData(
      title: 'Tilt Direction',
      icon: Remix.split_cells_horizontal,
      name: 'TiltDirectionDemo',
      widget: DeferredWidget(
        tilt_direction_widget.loadLibrary,
        () => tilt_direction_widget.TiltDirectionDemo(),
      ),
    ),
    RouterData(
      title: 'Light Direction',
      icon: Remix.lightbulb_line,
      name: 'LightDirectionDemo',
      widget: DeferredWidget(
        light_direction_widget.loadLibrary,
        () => light_direction_widget.LightDirectionDemo(),
      ),
    ),
    RouterData(
      title: 'Shadow Direction',
      icon: Remix.bring_forward,
      name: 'ShadowDirectionDemo',
      widget: DeferredWidget(
        shadow_direction_widget.loadLibrary,
        () => shadow_direction_widget.ShadowDirectionDemo(),
      ),
    ),
    RouterData(
      title: 'Initial Tilt',
      icon: Remix.focus_line,
      name: 'InitialTilt',
      widget: DeferredWidget(
        initial_tilt_widget.loadLibrary,
        () => initial_tilt_widget.InitialTilt(),
      ),
    ),
    RouterData(
      title: 'Disable Effects',
      icon: Remix.shape_line,
      name: 'DisableEffects',
      widget: DeferredWidget(
        disable_effects_widget.loadLibrary,
        () => disable_effects_widget.DisableEffects(),
      ),
    ),
  ];
}
