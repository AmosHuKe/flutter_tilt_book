import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'package:syntax_highlight/syntax_highlight.dart';

class BookMarkdown extends StatefulWidget {
  const BookMarkdown({super.key, required this.dartCode});

  final String dartCode;

  @override
  State<BookMarkdown> createState() => _BookMarkdownState();
}

class _BookMarkdownState extends State<BookMarkdown> {
  Widget child = const Center(child: CupertinoActivityIndicator());

  @override
  Widget build(BuildContext context) {
    init().then((highlighter) {
      final highlightedCode = highlighter.highlight(widget.dartCode);
      setState(() {
        child = SelectionArea(
            child: Container(
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            color: const Color(0xFFF6F8FA),
            borderRadius: BorderRadius.circular(20),
          ),
          child: Row(
            children: [
              Expanded(
                child: Text.rich(
                  highlightedCode,
                  style: const TextStyle(
                    fontSize: 14,
                    height: 1.3,
                    wordSpacing: 4,
                    letterSpacing: 1,
                  ),
                ),
              ),
            ],
          ),
        ));
      });
    });
    return child;
  }

  Future<Highlighter> init() async {
    final HighlighterTheme theme = await HighlighterTheme.loadLightTheme();
    return Highlighter(language: 'dart', theme: theme);
  }
}
