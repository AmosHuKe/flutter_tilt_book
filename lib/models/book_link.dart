// dart format width=60
import 'package:flutter/widgets.dart';

@immutable
class BookLinkData {
  const BookLinkData({
    required this.title,
    required this.icon,
    required this.uri,
  });

  factory BookLinkData.fromJson(Map json) {
    return BookLinkData(
      title: json['title'],
      icon: json['icon'],
      uri: json['uri'],
    );
  }

  /// 标题
  final String title;

  /// Icon
  final IconData icon;

  /// URI
  final Uri uri;

  Map<String, dynamic> toJson() {
    return {'title': title, 'icon': icon, 'uri': uri};
  }

  BookLinkData copyWith({
    String? title,
    IconData? icon,
    Uri? uri,
  }) {
    return BookLinkData(
      title: title ?? this.title,
      icon: icon ?? this.icon,
      uri: uri ?? this.uri,
    );
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is BookLinkData &&
          runtimeType == other.runtimeType &&
          title == other.title &&
          icon == other.icon &&
          uri == other.uri;

  @override
  int get hashCode =>
      Object.hashAll([title, icon, uri.hashCode]);
}
