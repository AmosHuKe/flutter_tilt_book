// dart format width=60
import 'package:flutter/widgets.dart';
import 'package:auto_route/auto_route.dart';

@immutable
class RouteData {
  const RouteData({
    required this.title,
    required this.icon,
    required this.pathName,
    required this.pageInfo,
  });

  factory RouteData.fromJson(Map json) {
    return RouteData(
      title: json['title'],
      icon: json['icon'],
      pathName: json['pathName'],
      pageInfo: json['pageInfo'],
    );
  }

  /// 菜单标题
  final String title;

  /// 菜单 Icon
  final IconData icon;

  /// URL 路径名称
  final String pathName;

  /// 页面
  final PageInfo pageInfo;

  Map<String, dynamic> toJson() {
    return {
      'title': title,
      'icon': icon,
      'pathName': pathName,
      'pageInfo': pageInfo,
    };
  }

  RouteData copyWith({
    String? title,
    IconData? icon,
    String? pathName,
    PageInfo? pageInfo,
  }) {
    return RouteData(
      title: title ?? this.title,
      icon: icon ?? this.icon,
      pathName: pathName ?? this.pathName,
      pageInfo: pageInfo ?? this.pageInfo,
    );
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is RouteData &&
          runtimeType == other.runtimeType &&
          title == other.title &&
          icon == other.icon &&
          pathName == other.pathName &&
          pageInfo == other.pageInfo;

  @override
  int get hashCode => Object.hashAll([
    title,
    icon,
    pathName,
    pageInfo.hashCode,
  ]);
}
