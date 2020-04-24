---
id: 12_modules
title: Modules
sidebar_label: Modules
---

Module system in Chaos language is quite simple, it justs loads up the functions in the file from the specified path.
The keyword for specifying imports: `import` and two secondary keywords to detail the importing: `from`, `as`

Let's say you have a module like this:

**modules/hello.kaos**

```text
void def hello()
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
import modules.module2
import modules\module3
```

***Note**: Module name delimiters(`.`, `/`, `\`) are completely interchangable and can be used together on the same line.*

It's also possible to use relative paths in module imports:

```text
import ../modules/module1
import ../../modules/module2
import ..\..\modules/module3
import ....modules.module4
```

***Note**: If you chose the dot(`.`) module separator then just typing `..` is enough to specify the parent directory.*

A complete example using the `math` spell:

```text
kaos> import math
kaos>
kaos> num x = 2
kaos> num y = math.pow(x, 3)
kaos> print y
8
```
