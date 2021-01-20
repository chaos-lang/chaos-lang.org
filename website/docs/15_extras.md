---
id: 15_extras
title: Extras
sidebar_label: Extras
---

### Program File Extension

Recommended extension for a Chaos program file is: `.kaos`

Unless you change the `#define __KAOS_LANGUAGE_FILE_EXTENSION__ "kaos"` macro and re-compile the Chaos from source,
this is the file extension being used for module loading mechanism. So using a file extension other than `.kaos`
is **not possible** for the official distribution of Chaos.
