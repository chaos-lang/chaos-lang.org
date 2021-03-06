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

or install a specific version:

```bash
occultist install chaos 0.2.0
```

and check the version with:

```bash
$ chaos --version
0.2.0
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

Compile the language:

```bash
make
```

Install the `chaos` binary system-wide:

```bash
make install
```

### Uninstallation

You can easily uninstall the `chaos` binary and its C headers with:

```bash
make uninstall
```

or if you have [**Occultist**](https://occultist.io/):

```bash
occultist remove chaos
```
