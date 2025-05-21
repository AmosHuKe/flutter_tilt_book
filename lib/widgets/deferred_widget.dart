import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

typedef LibraryLoader = Future<void> Function();
typedef DeferredWidgetBuilder = Widget Function();

/// 延迟加载组件
class DeferredWidget extends StatefulWidget {
  const DeferredWidget(
    this.libraryLoader,
    this.createWidget, {
    super.key,
    this.placeholder = const Center(child: CupertinoActivityIndicator(color: Colors.grey)),
  });

  final LibraryLoader libraryLoader;
  final DeferredWidgetBuilder createWidget;
  final Widget placeholder;
  // 存储 libraryLoader 对应的 future 数据
  static final Map<LibraryLoader, Future<void>> _moduleLoaders = {};
  // 存储已经预加载过了的 libraryLoader
  static final Set<LibraryLoader> _loadedModules = {};

  static Future<void> preload(LibraryLoader loader) {
    if (!_moduleLoaders.containsKey(loader)) {
      _moduleLoaders[loader] = loader().then((dynamic _) {
        _loadedModules.add(loader);
      });
    }
    return _moduleLoaders[loader]!;
  }

  @override
  State<DeferredWidget> createState() => _DeferredWidgetState();
}

class _DeferredWidgetState extends State<DeferredWidget> {
  Widget? _loadedChild;
  DeferredWidgetBuilder? _loadedCreator;

  @override
  void initState() {
    if (DeferredWidget._loadedModules.contains(widget.libraryLoader)) {
      _onLibraryLoaded();
    } else {
      DeferredWidget.preload(widget.libraryLoader).then((dynamic _) => _onLibraryLoaded());
    }
    super.initState();
  }

  void _onLibraryLoaded() {
    setState(() {
      _loadedCreator = widget.createWidget;
      _loadedChild = _loadedCreator!();
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_loadedCreator != widget.createWidget && _loadedCreator != null) {
      _loadedCreator = widget.createWidget;
      _loadedChild = _loadedCreator!();
    }
    return _loadedChild ?? widget.placeholder;
  }
}
