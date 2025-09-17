import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:re_highlight/languages/dart.dart' as highlight_languages;
import 'package:re_highlight/re_highlight.dart';
import 'package:re_highlight/styles/a11y-light.dart' as highlight_styles;

class BookSyntaxHighlight extends StatefulWidget {
  const BookSyntaxHighlight({super.key, required this.dartCode});

  final String dartCode;

  @override
  State<BookSyntaxHighlight> createState() => _BookSyntaxHighlightState();
}

class _BookSyntaxHighlightState extends State<BookSyntaxHighlight> {
  TextSpan? codeSpan;

  @override
  void initState() {
    super.initState();

    loadSyntaxHighlight(widget.dartCode);
  }

  void loadSyntaxHighlight(String dartCode) {
    /// 为了顶部切换动画流畅
    Future.delayed(kTabScrollDuration, () {
      final highlight = Highlight();
      const languages = ['dart'];
      highlight.registerLanguages({'dart': highlight_languages.langDart});

      /// Highlight your text or code.
      final HighlightResult result = highlight.highlightAuto(dartCode, languages);

      /// Define your styles.
      const defaultStyle = TextStyle(fontSize: 14, height: 1.3, wordSpacing: 4, letterSpacing: 1);

      /// Convert highlight result to TextSpan
      final renderer = TextSpanRenderer(defaultStyle, highlight_styles.a11YLightTheme);
      result.render(renderer);
      if (mounted) {
        setState(() {
          codeSpan = renderer.span;
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: const Color(0xFFF6F8FA),
        borderRadius: BorderRadius.circular(20),
      ),
      child: Row(
        children: [
          Expanded(
            child: codeSpan == null
                ? const Center(child: CupertinoActivityIndicator())
                : Text.rich(codeSpan!),
          ),
        ],
      ),
    );
  }
}
