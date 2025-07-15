import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import '../layouts/page_layout.dart';

@RoutePage()
class MultipleTilt extends StatelessWidget {
  const MultipleTilt({super.key});

  @override
  Widget build(BuildContext context) {
    return PageLayout(
      title: 'Multiple Tilt',
      dartCode: code(),
      sourceCodeLink:
          'https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/multiple_tilt.dart',
      minHeight: 1314,
      body: Padding(
        padding: const EdgeInsets.all(8),
        child: Wrap(
          spacing: 24,
          runSpacing: 24,
          alignment: WrapAlignment.center,
          runAlignment: WrapAlignment.center,
          children: [
            AnimationCard(
              child: Image.asset(
                'assets/multiple_tilt_image/sun.png',
                filterQuality: FilterQuality.high,
                width: 159.5,
              ),
            ),
            AnimationCard(
              child: Image.asset(
                'assets/multiple_tilt_image/moon.png',
                filterQuality: FilterQuality.high,
                height: 275,
              ),
            ),
            AnimationCard(
              child: Image.asset(
                'assets/multiple_tilt_image/star.png',
                filterQuality: FilterQuality.high,
                width: 159.5,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class AnimationCard extends StatefulWidget {
  const AnimationCard({super.key, required this.child});

  final Widget child;

  @override
  State<AnimationCard> createState() => _AnimationCardState();
}

class _AnimationCardState extends State<AnimationCard> with SingleTickerProviderStateMixin {
  late AnimationController scaleAnimationController;
  late Animation<double> scaleAnimation;

  @override
  void initState() {
    super.initState();
    scaleAnimationController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 350),
    );
    scaleAnimation = Tween(
      begin: 1.0,
      end: 1.05,
    ).animate(CurvedAnimation(parent: scaleAnimationController, curve: Curves.easeOut));
  }

  @override
  void dispose() {
    scaleAnimationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Listener(
      onPointerDown: (_) => scaleAnimationController.forward(),
      onPointerUp: (_) => scaleAnimationController.reverse(),
      onPointerCancel: (_) => scaleAnimationController.reverse(),
      child: MouseRegion(
        cursor: SystemMouseCursors.click,
        onEnter: (_) => scaleAnimationController.forward(),
        onExit: (_) => scaleAnimationController.reverse(),
        child: ScaleTransition(
          scale: scaleAnimation,
          alignment: Alignment.center,
          filterQuality: FilterQuality.high,
          child: GestureDetector(
            onTap: () => _showDialog(context),
            // Tilt here
            child: Tilt(
              borderRadius: BorderRadius.circular(20),
              tiltConfig: const TiltConfig(filterQuality: FilterQuality.high),
              lightConfig: const LightConfig(minIntensity: 0.1, maxIntensity: 0.4),
              child: widget.child,
            ),
          ),
        ),
      ),
    );
  }

  Future<void> _showDialog(BuildContext context) async {
    return showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
          child: Align(
            child: Transform.scale(
              scale: 1.2,
              filterQuality: FilterQuality.high,
              // Tilt here
              child: Tilt(
                borderRadius: BorderRadius.circular(20),
                tiltConfig: const TiltConfig(
                  enableRevert: false,
                  enableSensorRevert: false,
                  filterQuality: FilterQuality.high,
                ),
                lightConfig: const LightConfig(minIntensity: 0.1, maxIntensity: 0.4),
                shadowConfig: const ShadowConfig(disable: true),
                child: widget.child,
              ),
            ),
          ),
        );
      },
    );
  }
}

String code() => '''
import 'package:flutter_tilt/flutter_tilt.dart';

······

Padding(
  padding: const EdgeInsets.all(8),
  child: Wrap(
    spacing: 24,
    runSpacing: 24,
    alignment: WrapAlignment.center,
    runAlignment: WrapAlignment.center,
    children: [
      AnimationCard(
        child: Image.asset(
          'assets/multiple_tilt_image/sun.png',
          filterQuality: FilterQuality.high,
          width: 159.5,
        ),
      ),
      AnimationCard(
        child: Image.asset(
          'assets/multiple_tilt_image/moon.png',
          filterQuality: FilterQuality.high,
          height: 275,
        ),
      ),
      AnimationCard(
        child: Image.asset(
          'assets/multiple_tilt_image/star.png',
          filterQuality: FilterQuality.high,
          width: 159.5,
        ),
      ),
    ],
  ),
),

...

class AnimationCard extends StatefulWidget {
  const AnimationCard({super.key, required this.child});

  final Widget child;

  @override
  State<AnimationCard> createState() => _AnimationCardState();
}

class _AnimationCardState extends State<AnimationCard> with SingleTickerProviderStateMixin {
  late AnimationController scaleAnimationController;
  late Animation<double> scaleAnimation;

  @override
  void initState() {
    super.initState();
    scaleAnimationController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 350),
    );
    scaleAnimation = Tween(
      begin: 1.0,
      end: 1.05,
    ).animate(CurvedAnimation(parent: scaleAnimationController, curve: Curves.easeOut));
  }

  @override
  void dispose() {
    scaleAnimationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Listener(
      onPointerDown: (_) => scaleAnimationController.forward(),
      onPointerUp: (_) => scaleAnimationController.reverse(),
      onPointerCancel: (_) => scaleAnimationController.reverse(),
      child: MouseRegion(
        cursor: SystemMouseCursors.click,
        onEnter: (_) => scaleAnimationController.forward(),
        onExit: (_) => scaleAnimationController.reverse(),
        child: ScaleTransition(
          scale: scaleAnimation,
          alignment: Alignment.center,
          filterQuality: FilterQuality.high,
          child: GestureDetector(
            onTap: () => _showDialog(context),
            // Tilt here
            child: Tilt(
              borderRadius: BorderRadius.circular(20),
              tiltConfig: const TiltConfig(filterQuality: FilterQuality.high),
              lightConfig: const LightConfig(minIntensity: 0.1, maxIntensity: 0.4),
              child: widget.child,
            ),
          ),
        ),
      ),
    );
  }

  Future<void> _showDialog(BuildContext context) async {
    return showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
          child: Align(
            child: Transform.scale(
              scale: 1.2,
              filterQuality: FilterQuality.high,
              // Tilt here
              child: Tilt(
                borderRadius: BorderRadius.circular(20),
                tiltConfig: const TiltConfig(
                  enableRevert: false,
                  enableSensorRevert: false,
                  filterQuality: FilterQuality.high,
                ),
                lightConfig: const LightConfig(minIntensity: 0.1, maxIntensity: 0.4),
                shadowConfig: const ShadowConfig(disable: true),
                child: widget.child,
              ),
            ),
          ),
        );
      },
    );
  }
}

······
''';
