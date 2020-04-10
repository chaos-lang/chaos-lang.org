---
id: 01_installation
title: Installation
sidebar_label: Installation
---

For macOS you will need [**Homebrew**](https://brew.sh/) and for Windows [**Chocolatey**](https://chocolatey.org/).
For the majority of Linux distros, it will automatically detect your default package manager.

Clone the repository:
```
git clone https://github.com/chaos-lang/chaos.git
cd chaos/
```

Install the requirements:

```
make requirements
```

Compile the interpreter:

```
make
```

Install the `chaos` binary system-wide:

```
make install
```
