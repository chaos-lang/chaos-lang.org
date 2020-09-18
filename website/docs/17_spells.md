---
id: 17_spells
title: Spells
sidebar_label: Spells
---

A spell in Chaos language is a library that lives in `spells/` directory. A Chaos spell can be either a module or a Chaos C extension.

If you are looking for the guide to develop Chaos C extensions [**see**](16_chaos_c_extensions_development.md).

## How do I install a spell?

To install the Chaos spells you need [**Occultist**](https://occultist.io/) dependency manager installed on your system.
Once you have `occultist` on your machine, you can simply run:

```bash
occultist install math
```

on your project root to install a spell named `math` to your project. Once the spell is installed, you can inspect
the files under `spells/math/` directory.

If the installed spell is a module then you will see a file named `math.kaos` in that directory. This file is the entry point for the spell.

If the installed spell is a Chaos C extension then according to operating system, you will find either `math.so` or `math.dylib` or `math.dll`
in that directory. This file is the spell's itself as a dynamic library which is loaded on runtime.

## How do I use a spell?

The Chaos interpreter programmed to look for a file named `math.kaos` in the current working directory when you type, for example `import math`.
If it cannot find the `math.kaos` file in the current working directory, it immediately looks for a file on `spells/math/math.kaos` path.
If no such file found, as the last resort; it looks for a file named either `math.so` or `math.dylib` or `math.dll` *(according to your operating system)*
under `spells/math/` directory.

In simple terms, Chaos interpreter:

 1. Looks for the module in the same directory.
 2. Looks for the module under `spells/<MODULE-NAME>/`
 3. Looks for the Chaos C extension under `spells/<MODULE-NAME>/`

Here is a working example for the usage of `math` spell:

```chaos
kaos> import math
kaos> print math.pow(2, 3)
8
```

## Anatomy of a spell

In its simplest form, a Chaos spell consists of these files:

```text
example.kaos
occultist.json
```

The Chaos interpreter expects to find a file named `example.kaos` if your spell name is `example`, as
an entry point for loading up the module. So the spell name and the name of the file with `.kaos` extension have to match.

Here is an example **occultist.json** file:

```json
{
    "name": "example",
    "version": "1.0.0",
    "description": "Example for Chaos spell developers.",
    "tags": ["official", "example"],
    "type": "module",
    "license": "MIT",
    "authors": [
        {
            "name": "M. Mert Yildiran",
            "email": "me@mertyildiran.com",
            "role": "Maintainer"
        }
    ]
}
```

You can generate this file automatically by answering the questions of [**Occultist**](https://occultist.io/):

```text
$ occultist init
Spell name: example
Spell version: 1.0.0
Spell description: Example for Chaos spell developers.
Select the spell type
1) module
2) extension
Pick an option: 1
Spell type: module
License: MIT
Author name: M. Mert Yildiran
Author email: me@mertyildiran.com
Select the author's role
1) maintainer
2) developer
Pick an option: 1
Author role: maintainer
```

## Registering a new spell to The Chaos Spell Index

Once you're confident with the state of your spell, you can register it to [**The Chaos Spell Index**](https://occultist.io/spells)
by simply running:

```bash
occultist register
```

Spell registration requires the remote origin being added before hand, like:

```bash
$ git remote add origin https://github.com/user/repo.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://github.com/user/repo.git (fetch)
> origin  https://github.com/user/repo.git (push)
```

***Note**: Spell names must be universally unique.*

***Caution**: [**Name squatting**](https://en.wikipedia.org/wiki/Cybersquatting) is **forbidden** and the spell will be **deleted** by maintainers if any viciousness or malware detected.*

`occultist` requires to know the remote origin to fetch and build the source code from the specified Git server on installation time.
Remote origin can be any Git server, **not** just [**github.com**](https://github.com).

## Spell versioning in detail

Once your spell is registered, you can install a specific version of your spell with:

```bash
occultist install example 1.0.0
```

***Note**: When the third command-line argument is a version number like `1.0.0`, `occultist` fetches a Git tag named `v1.0.0` from the remote server*

You can also follow the [**Semantic Versioning**](https://semver.org/) scheme and install the latest major version `1` like:

```bash
occultist install example 1.x.x
```

You can even install a specific Git branch:

```bash
occultist install example feature/thingy
```

or just the `master` branch:

```bash
occultist install example master
```

When you just run:

```bash
occultist install example
```

`occultist` looks for the latest Git tag that matches `vx.x.x` pattern. If it cannot find a version of the spell, it installs the default Git branch.

## Can my spell depend on other spells?

If it's not a Chaos C extension then the answer is yes. You can specifiy dependencies in your `occultist.json` file like this:

```json
{
  "name": "example",
  "version": "1.0.0",
  "dependencies": {
    "requirement1": "1.x.x",
    "requirement2": "2.3.x",
    "requirement3": "1.0.1",
  }
}
```

So these dependencies will be installed in a nested manner into your spell's `spells/` directory.
That means anyone who installs your spell `example` will find the spell `requirement1` under:

```bash
$ ls -1 spells/example/spells/requirement1/
requirement1.kaos
occultist.json
...
```

***Note**: If `occultist` detects any circular dependencies in the process of installation of a spell, it will place
a [**symbolic link**](https://en.wikipedia.org/wiki/Symbolic_link) rather than installing
the same version of the same spell again.*
