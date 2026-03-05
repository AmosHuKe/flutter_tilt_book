# Flutter Tilt Example

This is an example project demonstrating the usage of Flutter Tilt.

## Prerequisites

|         | Version  |
| ------- | -------- |
| Flutter | v3.41.4  |

## Getting started

```sh
# run on Chrome (dev)
$ flutter run -d chrome --web-port=3002

# run the generator (required for router)
$ dart run build_runner watch

# build for web production (/build/web)
$ flutter build web --release

# build for web wasm production (/build/web)
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
│   ├── widgets/          # Reusable widgets
│   ├── application.dart  # Root application
│   ├── main.dart         # Entry point
│   └── router.dart       # Router configuration
...
```

## License

[![BSD-3-Clause License](https://img.shields.io/badge/License-BSD--3--Clause-green)](./LICENSE)  
Open sourced under the BSD-3-Clause license.  
© AmosHuKe
