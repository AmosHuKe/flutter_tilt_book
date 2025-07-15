import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../layouts/page_layout.dart';

@RoutePage()
class ParallaxCard extends StatelessWidget {
  const ParallaxCard({super.key});

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Parallax Card',
      dartCode: code(),
      sourceCodeLink:
          'https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/parallax_card.dart',
      minHeight: 1314,
      body: const AnimationCard(),
    );
  }
}

class AnimationCard extends StatefulWidget {
  const AnimationCard({super.key});

  @override
  State<AnimationCard> createState() => _AnimationCardState();
}

class _AnimationCardState extends State<AnimationCard> with SingleTickerProviderStateMixin {
  late AnimationController scaleAnimationController;
  late Animation<double> scaleAnimation;
  double opacity = 0;
  bool isHover = false;

  @override
  void initState() {
    super.initState();
    scaleAnimationController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 2400),
      reverseDuration: const Duration(milliseconds: 1000),
    );
    scaleAnimation = Tween(begin: 1.2, end: 1.26).animate(
      CurvedAnimation(
        parent: scaleAnimationController,
        curve: const Cubic(0.16, 1, 0.3, 1),
        reverseCurve: Curves.easeInCirc,
      ),
    );
    scaleAnimationController.addListener(() {
      switch (scaleAnimationController.status) {
        case AnimationStatus.forward:
          if (opacity == 1) return;
          setState(() => opacity = 1);
        case AnimationStatus.reverse:
          if (opacity == 0) return;
          setState(() => opacity = 0);
        case AnimationStatus.dismissed:
        case AnimationStatus.completed:
      }
    });
  }

  @override
  void dispose() {
    scaleAnimationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Listener(
      onPointerDown: (_) {
        if (isHover) return;
        scaleAnimationController.forward();
      },
      onPointerUp: (_) {
        if (isHover) return;
        scaleAnimationController.reverse();
      },
      onPointerCancel: (_) {
        if (isHover) return;
        scaleAnimationController.reverse();
      },
      child: MouseRegion(
        cursor: SystemMouseCursors.click,
        onEnter: (_) {
          isHover = true;
          scaleAnimationController.forward();
        },
        onExit: (_) {
          isHover = true;
          scaleAnimationController.reverse();
        },
        // Tilt here
        child: Tilt(
          borderRadius: BorderRadius.circular(24),
          tiltConfig: const TiltConfig(
            angle: 6.0,
            enableReverse: true,
            enableOutsideAreaMove: false,
            leaveDuration: Duration(milliseconds: 600),
            filterQuality: FilterQuality.high,
          ),
          lightConfig: const LightConfig(disable: true),
          shadowConfig: const ShadowConfig(enableReverse: true),
          childLayout: ChildLayout(
            inner: [
              ScaleTransition(
                scale: scaleAnimation,
                alignment: Alignment.center,
                filterQuality: FilterQuality.high,
                child: TiltParallax(
                  child: Image.asset(
                    'assets/parallax_card/Artwork-MichaHuigen.jpg',
                    filterQuality: FilterQuality.high,
                    width: 360.0,
                  ),
                ),
              ),
              Positioned.fill(
                child: AnimatedOpacity(
                  opacity: opacity,
                  duration: const Duration(milliseconds: 600),
                  child: Container(
                    decoration: const BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [Colors.black12, Colors.black87],
                      ),
                    ),
                    child: const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 28, vertical: 20),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: [
                          Text('Artwork', style: TextStyle(color: Colors.white, fontSize: 20.0)),
                          Text(
                            'Micha Huigen',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 40.0,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(height: 12),
                          Align(
                            alignment: Alignment.centerRight,
                            child: Text(
                              'Flutter Tilt',
                              style: TextStyle(
                                color: Colors.white60,
                                fontSize: 14.0,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
          child: const SizedBox(),
        ),
      ),
    );
  }
}

String code() => '''
import 'package:flutter_tilt/flutter_tilt.dart';

······

AnimationCard(),

...

class AnimationCard extends StatefulWidget {
  const AnimationCard({super.key});

  @override
  State<AnimationCard> createState() => _AnimationCardState();
}

class _AnimationCardState extends State<AnimationCard> with SingleTickerProviderStateMixin {
  late AnimationController scaleAnimationController;
  late Animation<double> scaleAnimation;
  double opacity = 0;
  bool isHover = false;

  @override
  void initState() {
    super.initState();
    scaleAnimationController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 2400),
      reverseDuration: const Duration(milliseconds: 1000),
    );
    scaleAnimation = Tween(begin: 1.2, end: 1.26).animate(
      CurvedAnimation(
        parent: scaleAnimationController,
        curve: const Cubic(0.16, 1, 0.3, 1),
        reverseCurve: Curves.easeInCirc,
      ),
    );
    scaleAnimationController.addListener(() {
      switch (scaleAnimationController.status) {
        case AnimationStatus.forward:
          if (opacity == 1) return;
          setState(() => opacity = 1);
        case AnimationStatus.reverse:
          if (opacity == 0) return;
          setState(() => opacity = 0);
        case AnimationStatus.dismissed:
        case AnimationStatus.completed:
      }
    });
  }

  @override
  void dispose() {
    scaleAnimationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Listener(
      onPointerDown: (_) {
        if (isHover) return;
        scaleAnimationController.forward();
      },
      onPointerUp: (_) {
        if (isHover) return;
        scaleAnimationController.reverse();
      },
      onPointerCancel: (_) {
        if (isHover) return;
        scaleAnimationController.reverse();
      },
      child: MouseRegion(
        cursor: SystemMouseCursors.click,
        onEnter: (_) {
          isHover = true;
          scaleAnimationController.forward();
        },
        onExit: (_) {
          isHover = true;
          scaleAnimationController.reverse();
        },
        // Tilt here
        child: Tilt(
          borderRadius: BorderRadius.circular(24),
          tiltConfig: const TiltConfig(
            angle: 6.0,
            enableReverse: true,
            enableOutsideAreaMove: false,
            leaveDuration: Duration(milliseconds: 600),
            filterQuality: FilterQuality.high,
          ),
          lightConfig: const LightConfig(disable: true),
          shadowConfig: const ShadowConfig(enableReverse: true),
          childLayout: ChildLayout(
            inner: [
              ScaleTransition(
                scale: scaleAnimation,
                alignment: Alignment.center,
                filterQuality: FilterQuality.high,
                child: TiltParallax(
                  child: Image.asset(
                    'assets/parallax_card/Artwork-MichaHuigen.jpg',
                    filterQuality: FilterQuality.high,
                    width: 360.0,
                  ),
                ),
              ),
              Positioned.fill(
                child: AnimatedOpacity(
                  opacity: opacity,
                  duration: const Duration(milliseconds: 600),
                  child: Container(
                    decoration: const BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [Colors.black12, Colors.black87],
                      ),
                    ),
                    child: const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 28, vertical: 20),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: [
                          Text('Artwork', style: TextStyle(color: Colors.white, fontSize: 20.0)),
                          Text(
                            'Micha Huigen',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 40.0,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(height: 12),
                          Align(
                            alignment: Alignment.centerRight,
                            child: Text(
                              'Flutter Tilt',
                              style: TextStyle(
                                color: Colors.white60,
                                fontSize: 14.0,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
          child: const SizedBox(),
        ),
      ),
    );
  }
}

······
''';
