import 'package:flutter/material.dart';

class BookDivider extends StatelessWidget {
  const BookDivider({super.key, required this.padding});

  final EdgeInsetsGeometry padding;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: padding,
      child: const Divider(color: Color(0xFF2A2B2D), height: 1),
    );
  }
}
