import 'package:flutter/material.dart';

import 'package:auto_route/auto_route.dart';
import 'package:flutter_tilt/flutter_tilt.dart';

import 'package:flutter_tilt_book/layouts/page_layout.dart';

@RoutePage()
class BentoGrids extends StatelessWidget {
  const BentoGrids({super.key});

  @override
  Widget build(BuildContext context) {
    /// 适应不同屏幕
    double scaleFactor = 1;
    final screenWidth = MediaQuery.of(context).size.width;
    if (screenWidth < 1580) scaleFactor = 0.8;
    if (screenWidth < 1420) scaleFactor = 0.7;
    if (screenWidth < 1340) scaleFactor = 0.6;
    if (screenWidth < 1280) scaleFactor = 1;
    if (screenWidth < 1150) scaleFactor = 0.8;
    if (screenWidth < 990) scaleFactor = 0.7;
    if (screenWidth < 910) scaleFactor = 0.6;
    if (screenWidth < 830) scaleFactor = 0.5;
    if (screenWidth < 768) scaleFactor = 0.8;
    if (screenWidth < 715) scaleFactor = 0.6;
    if (screenWidth < 560) scaleFactor = 0.4;
    if (screenWidth < 410) scaleFactor = 0.2;

    return PageLayout(
      title: 'Bento Grids',
      dartCode: code(),
      sourceCodeLink:
          'https://github.com/AmosHuKe/flutter_tilt_book/blob/main/lib/views/bento_grids.dart',
      minHeight: 1024,
      body: Column(
        children: [
          if (scaleFactor <= 0.6)
            const Padding(
              padding: EdgeInsets.all(24),
              child: Text('Please use wide screen or landscape phone.'),
            ),
          Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                padding: const EdgeInsets.all(32),
                decoration: BoxDecoration(
                  color: const Color(0xFF010101),
                  borderRadius: BorderRadius.circular(24),
                ),
                child: Row(
                  children: [
                    /// Tilt here
                    Tilt(
                      tiltConfig: const TiltConfig(
                        angle: 2,
                        enableGestureSensors: false,
                        filterQuality: FilterQuality.high,
                      ),
                      lightConfig: const LightConfig(
                        enableReverse: true,
                        color: Color(0xFF4A3186),
                        spreadFactor: 2,
                      ),
                      shadowConfig: const ShadowConfig(disable: true),
                      borderRadius: BorderRadius.circular(12 * scaleFactor),
                      border: Border.all(
                        color: const Color(0xFF181818),
                        width: 2 * scaleFactor,
                        strokeAlign: BorderSide.strokeAlignOutside,
                      ),
                      child: Container(
                        width: 250 * scaleFactor,
                        height: 500 * scaleFactor,
                        color: const Color(0xFF010101),
                        padding: EdgeInsets.all(20 * scaleFactor),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  children: [
                                    Text(
                                      'Flutter Tilt',
                                      style: TextStyle(
                                        fontSize: 16 * scaleFactor,
                                        color: Colors.grey,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                    SizedBox(width: 6 * scaleFactor),
                                    Icon(
                                      Icons.arrow_right_alt,
                                      size: 16 * scaleFactor,
                                      color: Colors.grey,
                                    ),
                                  ],
                                ),
                                Text(
                                  'Widget',
                                  style: TextStyle(
                                    fontSize: 24 * scaleFactor,
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ],
                            ),
                            Image.asset('assets/bento_grids/1.png'),
                          ],
                        ),
                      ),
                    ),
                    SizedBox(width: 24 * scaleFactor),
                    Column(
                      children: [
                        /// Tilt here
                        Tilt(
                          tiltConfig: const TiltConfig(
                            angle: 2,
                            enableGestureSensors: false,
                            filterQuality: FilterQuality.high,
                          ),
                          lightConfig: const LightConfig(
                            enableReverse: true,
                            color: Color(0xFF4A3186),
                            spreadFactor: 2,
                          ),
                          shadowConfig: const ShadowConfig(disable: true),
                          borderRadius: BorderRadius.circular(12 * scaleFactor),
                          border: Border.all(
                            color: const Color(0xFF181818),
                            width: 2 * scaleFactor,
                            strokeAlign: BorderSide.strokeAlignOutside,
                          ),
                          child: Container(
                            width: 500 * scaleFactor,
                            height: 237 * scaleFactor,
                            color: const Color(0xFF010101),
                            padding: EdgeInsets.all(20 * scaleFactor).copyWith(right: 0),
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Row(
                                      children: [
                                        Text(
                                          'Flutter Tilt',
                                          style: TextStyle(
                                            fontSize: 16 * scaleFactor,
                                            color: Colors.grey,
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                        SizedBox(width: 6 * scaleFactor),
                                        Icon(
                                          Icons.arrow_right_alt,
                                          size: 16 * scaleFactor,
                                          color: Colors.grey,
                                        ),
                                      ],
                                    ),
                                    Text(
                                      'Element',
                                      style: TextStyle(
                                        fontSize: 24 * scaleFactor,
                                        color: Colors.white,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                  ],
                                ),
                                Image.asset('assets/bento_grids/2.png'),
                              ],
                            ),
                          ),
                        ),
                        SizedBox(height: 24 * scaleFactor),

                        /// Tilt here
                        Tilt(
                          tiltConfig: const TiltConfig(
                            angle: 2,
                            enableGestureSensors: false,
                            filterQuality: FilterQuality.high,
                          ),
                          lightConfig: const LightConfig(
                            enableReverse: true,
                            color: Color(0xFF4A3186),
                            spreadFactor: 2,
                          ),
                          shadowConfig: const ShadowConfig(disable: true),
                          borderRadius: BorderRadius.circular(12 * scaleFactor),
                          border: Border.all(
                            color: const Color(0xFF181818),
                            width: 2 * scaleFactor,
                            strokeAlign: BorderSide.strokeAlignOutside,
                          ),
                          child: Container(
                            width: 500 * scaleFactor,
                            height: 237 * scaleFactor,
                            color: const Color(0xFF010101),
                            padding: EdgeInsets.all(20 * scaleFactor).copyWith(right: 0),
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Row(
                                      children: [
                                        Text(
                                          'Flutter Tilt',
                                          style: TextStyle(
                                            fontSize: 16 * scaleFactor,
                                            color: Colors.grey,
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                        SizedBox(width: 6 * scaleFactor),
                                        Icon(
                                          Icons.arrow_right_alt,
                                          size: 16 * scaleFactor,
                                          color: Colors.grey,
                                        ),
                                      ],
                                    ),
                                    Text(
                                      'RenderObject',
                                      style: TextStyle(
                                        fontSize: 24 * scaleFactor,
                                        color: Colors.white,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                  ],
                                ),
                                Image.asset('assets/bento_grids/3.png'),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

String code() => '''
import 'package:flutter_tilt/flutter_tilt.dart';

······

Container(
  padding: const EdgeInsets.all(32),
  decoration: BoxDecoration(
    color: const Color(0xFF010101),
    borderRadius: BorderRadius.circular(24),
  ),
  child: Row(
    children: [
      /// Tilt here
      Tilt(
        tiltConfig: const TiltConfig(
          angle: 2,
          enableGestureSensors: false,
          filterQuality: FilterQuality.high,
        ),
        lightConfig: const LightConfig(
          enableReverse: true,
          color: Color(0xFF4A3186),
          spreadFactor: 2,
        ),
        shadowConfig: const ShadowConfig(disable: true),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(
          color: const Color(0xFF181818),
          width: 2,
          strokeAlign: BorderSide.strokeAlignOutside,
        ),
        child: Container(
          width: 250,
          height: 500,
          color: const Color(0xFF010101),
          padding: const EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Text(
                        'Flutter Tilt',
                        style: TextStyle(
                          fontSize: 16,
                          color: Colors.grey,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      SizedBox(width: 6),
                      Icon(
                        Icons.arrow_right_alt,
                        size: 16,
                        color: Colors.grey,
                      ),
                    ],
                  ),
                  Text(
                    'Widget',
                    style: TextStyle(
                      fontSize: 24,
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
              Image.asset('assets/bento_grids/1.png'),
            ],
          ),
        ),
      ),
      const SizedBox(width: 24),
      Column(
        children: [
          /// Tilt here
          Tilt(
            tiltConfig: const TiltConfig(
              angle: 2,
              enableGestureSensors: false,
              filterQuality: FilterQuality.high,
            ),
            lightConfig: const LightConfig(
              enableReverse: true,
              color: Color(0xFF4A3186),
              spreadFactor: 2,
            ),
            shadowConfig: const ShadowConfig(disable: true),
            borderRadius: BorderRadius.circular(12),
            border: Border.all(
              color: const Color(0xFF181818),
              width: 2,
              strokeAlign: BorderSide.strokeAlignOutside,
            ),
            child: Container(
              width: 500,
              height: 237,
              color: const Color(0xFF010101),
              padding:
                  const EdgeInsets.all(20).copyWith(right: 0),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Text(
                            'Flutter Tilt',
                            style: TextStyle(
                              fontSize: 16,
                              color: Colors.grey,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(width: 6),
                          Icon(
                            Icons.arrow_right_alt,
                            size: 16,
                            color: Colors.grey,
                          ),
                        ],
                      ),
                      Text(
                        'Element',
                        style: TextStyle(
                          fontSize: 24,
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                  Image.asset('assets/bento_grids/2.png'),
                ],
              ),
            ),
          ),
          const SizedBox(height: 24),

          /// Tilt here
          Tilt(
            tiltConfig: const TiltConfig(
              angle: 2,
              enableGestureSensors: false,
              filterQuality: FilterQuality.high,
            ),
            lightConfig: const LightConfig(
              enableReverse: true,
              color: Color(0xFF4A3186),
              spreadFactor: 2,
            ),
            shadowConfig: const ShadowConfig(disable: true),
            borderRadius: BorderRadius.circular(12),
            border: Border.all(
              color: const Color(0xFF181818),
              width: 2,
              strokeAlign: BorderSide.strokeAlignOutside,
            ),
            child: Container(
              width: 500,
              height: 237,
              color: const Color(0xFF010101),
              padding:
                  const EdgeInsets.all(20).copyWith(right: 0),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Text(
                            'Flutter Tilt',
                            style: TextStyle(
                              fontSize: 16,
                              color: Colors.grey,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(width: 6),
                          Icon(
                            Icons.arrow_right_alt,
                            size: 16,
                            color: Colors.grey,
                          ),
                        ],
                      ),
                      Text(
                        'RenderObject',
                        style: TextStyle(
                          fontSize: 24,
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                  Image.asset('assets/bento_grids/3.png'),
                ],
              ),
            ),
          ),
        ],
      ),
    ],
  ),
),

······
''';
