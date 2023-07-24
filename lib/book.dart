import 'package:flutter/material.dart';
import 'package:widgetbook_annotation/widgetbook_annotation.dart' as widgetbook;

import 'package:flutter_tilt_book/views/example.dart';
import 'package:flutter_tilt_book/views/default.dart';
import 'package:flutter_tilt_book/views/reverse_tilt.dart';
import 'package:flutter_tilt_book/views/keep_tilt.dart';
import 'package:flutter_tilt_book/views/tilt_direction.dart';
import 'package:flutter_tilt_book/views/light_direction.dart';
import 'package:flutter_tilt_book/views/shadow_direction.dart';
import 'package:flutter_tilt_book/views/initial_tilt.dart';
import 'package:flutter_tilt_book/views/disable_effects.dart';
import 'package:flutter_tilt_book/views/events.dart';

// ignore: camel_case_types
class Flutter_Tilt {}

@widgetbook.UseCase(name: 'Example', type: Flutter_Tilt)
Widget exampleUseCase(BuildContext context) => const Example();

@widgetbook.UseCase(name: 'Default', type: Flutter_Tilt)
Widget defaultUseCase(BuildContext context) => const Default();

@widgetbook.UseCase(name: 'Reverse tilt', type: Flutter_Tilt)
Widget reverseTiltUseCase(BuildContext context) => const ReverseTilt();

@widgetbook.UseCase(name: 'Keep tilt', type: Flutter_Tilt)
Widget keepTiltUseCase(BuildContext context) => const KeepTilt();

@widgetbook.UseCase(name: 'Tilt direction', type: Flutter_Tilt)
Widget tiltDirectionUseCase(BuildContext context) => const TiltDirectionDemo();

@widgetbook.UseCase(name: 'Light direction', type: Flutter_Tilt)
Widget lightDirectionUseCase(BuildContext context) =>
    const LightDirectionDemo();

@widgetbook.UseCase(name: 'Shadow direction', type: Flutter_Tilt)
Widget shadowDirectionUseCase(BuildContext context) =>
    const ShadowDirectionDemo();

@widgetbook.UseCase(name: 'Initial tilt', type: Flutter_Tilt)
Widget initialTiltUseCase(BuildContext context) => const InitialTilt();

@widgetbook.UseCase(name: 'Disable effects', type: Flutter_Tilt)
Widget disableEffectsUseCase(BuildContext context) => const DisableEffects();

@widgetbook.UseCase(name: 'Events', type: Flutter_Tilt)
Widget eventsUseCase(BuildContext context) => const Events();
