---
id: 01_installation
title: Installation
sidebar_label: Installation
---

For macOS you will need [**Homebrew**](https://brew.sh/) and for Windows [**Chocolatey**](https://chocolatey.org/).
For the majority of Linux distros, it will automatically detect your default package manager.

If you have [**Occultist**](https://occultist.io/) dependency manager installed, you can do:

```bash
occultist install chaos
```

otherwise;

Clone the repository:
```bash
git clone https://github.com/chaos-lang/chaos.git
cd chaos/
```

Install the requirements:

```bash
make requirements
```

Compile the interpreter:

```bash
make
```

Install the `chaos` binary system-wide:

```bash
make install
```
