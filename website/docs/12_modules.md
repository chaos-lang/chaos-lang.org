---
id: 12_modules
title: Modules
sidebar_label: Modules
---

Module system in Chaos language is quite similar to modules in Python language. There are three primary keywords for specifying imports: `import`, `use` and `include`
and two secodary keywords to detail the importing: `from`, `as`

Let's say you have a module like this:

**modules/hello.kaos**

```text
nil def hello()
    print "hello world"
end
```

So you import the module and call the function like this:

```text
import modules.hello

hello.hello()
```

You might want to rename that module like this:

```text
import modules.hello as world

world.hello()
```

You can load up all of the functions in a module into the same context with the current program/module like this:

```text
from modules.mymodule import *
```

It's also possible to cherry-pick the functions by specifying their names on import:

```text
from modules.mymodule import function2, function3, function5
```

Module imports in Chaos language support both Windows and UNIX-like path separators:

```text
import modules/module1
include modules.module2
use modules\module3
```

***Note**: Module name delimiters(`.`, `/`, `\`) are completely interchangable and can be used together on the same line.*

It's also possible to use relative paths in module imports:

```text
import ../modules/module1
include ../../modules/module2
import ..\..\modules/module3
use ....modules.module4
```

***Note**: If you chose the dot(`.`) module separator then just typing `..` is enough to specify the parent directory.*
