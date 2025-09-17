#!/bin/sh

# 切换到 flutter_tilt_example 目录
cd ../flutter_tilt_example || { echo "目录 flutter_tilt_example 不存在"; exit 1; }

# 构建 flutter_tilt_example
flutter build web --wasm --release || { echo "flutter_tilt_example 构建失败"; exit 1; }

# 返回到项目根目录
cd ..

# 目标目录
TARGET_DIR="flutter_tilt_book/public/flutter_tilt_example"

# 如果目标目录不存在则创建
if [ ! -d "$TARGET_DIR" ]; then
  mkdir -p "$TARGET_DIR"
fi

# 移动 build/web 到目标目录
rm -rf "$TARGET_DIR"
mv flutter_tilt_example/build/web "$TARGET_DIR"

echo "flutter_tilt_example 构建完成，已移动到 $TARGET_DIR"