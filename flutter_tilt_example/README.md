# Flutter Tilt Example

This is an example project demonstrating the usage of Flutter Tilt.

## Prerequisite

|         | Version  |
| ------- | -------- |
| Flutter | v3.41.2  |

## Run

```sh
# run
$ flutter run -d chrome --web-port=3002

# run the generator
$ dart run build_runner watch

# build web
$ flutter build web --release

# build web wasm
$ flutter build web --wasm --release
```

## Directory structure

```md
...
├── lib/                  # Source files
│   ├── config/           # Configuration
│   │   └── config.dart   # Configuration (routers, links...)
│   ├── layouts/          # Universal layouts
│   ├── models/           # Models
│   ├── views/            # Example views
│   ├── widgets/          # Universal widgets
│   ├── application.dart  # Application
│   ├── main.dart         # Main application
│   └── router.dart       # Router management
...
```

## License

[![BSD-3-Clause License](https://img.shields.io/badge/License-BSD--3--Clause-green)](https://github.com/AmosHuKe/flutter_tilt_book/blob/main/flutter_tilt_example/LICENSE)  
Open sourced under the BSD-3-Clause license.  
© AmosHuKe
