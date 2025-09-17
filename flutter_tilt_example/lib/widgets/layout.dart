import 'package:flutter/widgets.dart';

class Layout {
  const Layout(this.context);

  final BuildContext context;

  /// < 640
  bool get sm => MediaQuery.of(context).size.width < 640;

  /// < 768
  bool get md => MediaQuery.of(context).size.width < 768;

  /// < 1024
  bool get lg => MediaQuery.of(context).size.width < 1024;

  /// < 1280
  bool get xl => MediaQuery.of(context).size.width < 1280;
}

class LayoutAdaptive extends StatelessWidget {
  const LayoutAdaptive({super.key, required this.child, this.mdChild, this.xlChild});

  final Widget child;

  /// md 显示的 child
  final Widget? mdChild;

  /// xl 显示的 child
  final Widget? xlChild;

  @override
  Widget build(BuildContext context) {
    return Builder(
      builder: (context) {
        final layout = Layout(context);
        var layoutChild = child;
        if (xlChild != null && layout.xl) layoutChild = xlChild!;
        if (mdChild != null && layout.md) layoutChild = mdChild!;
        if (mdChild != null && layout.md) layoutChild = mdChild!;
        return layoutChild;
      },
    );
  }
}
