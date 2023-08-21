import 'package:flutter/widgets.dart';

class Layout {
  Layout(this.context);

  final BuildContext context;

  /// < 768
  bool get sm => MediaQuery.of(context).size.width < 768;

  /// < 1280
  bool get md => MediaQuery.of(context).size.width < 1280;
}

class LayoutAdaptive extends StatelessWidget {
  const LayoutAdaptive({
    super.key,
    required this.child,
    this.smChild,
    this.mdChild,
  });

  final Widget child;

  /// sm 显示的 child
  final Widget? smChild;

  /// md 显示的 child
  final Widget? mdChild;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      Layout layout = Layout(context);
      Widget layoutChild = child;
      if (mdChild != null && layout.md) layoutChild = mdChild!;
      if (smChild != null && layout.sm) layoutChild = smChild!;
      return layoutChild;
    });
  }
}
