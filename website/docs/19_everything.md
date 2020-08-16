---
id: 19_everything
title: Theory of Everything
sidebar_label: Theory of Everything
---

This is an example that almost every feature of the language used in a program thus
showing off the beauty of whole syntax.

```chaos
import math
from math import cos
import math as math2

/*
This is a
multiline comment
for the function below
@description Adds two numbers together
*/
num def add(num x, num y)
    num z = x + y

    bool a = true
    num b = 576.34
    // This is a comment
    list c = ['foo', "bar", 17, 3.14, a, false] // End of Line(EOL) comment
    pretty echo c
    # This is a comment too
    dict d = {'a': 1, 'b': b, 'c': [2, 3, 4]} # End of Line(EOL) comment
    pretty print d

    del c
end {
    z == 8  : f1(),
    z > 10  : f2(),
    default : f3()
}

print add(3, 5)

echo math.sin(30)
print cos(60)
print math2.tan(45)

num def f1()
    num a = 101
    return a
end

num def f2()
    num b = 102
    return b
end

num def f3()
    num c = 103
    return c
end

void def f4()
    print "baz"
end

list a = [
    1,
    2,
    3
]

foreach a as el
    print el
    el = 5
    2 times do
        print el
    end
end

dict n = {'a': 'foo', 'b': 'bar', 'c': 'baz'}

foreach n as key : val
    print key
    print val
end

symbol_table

function_table

// Interactive shell example
kaos> str message = "hello world"
kaos> INFINITE times do
....      print message
....  end
```

You can use [**highlightjs-chaos**](https://www.npmjs.com/package/highlightjs-chaos) `npm` package to
have syntax highlighting for Chaos language on your webpages.
