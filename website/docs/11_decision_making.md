---
id: 11_decision_making
title: Decision Making
sidebar_label: Decision Making
---

Decision making(a.k.a. control structures) in Chaos language is only achievable on function returns for the sake of **zero cyclomatic complexity**. For example, if you run this program:

```text
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

num def add(num x, num y)
    num z = x + y
end {
    z == 8  : f1(),
    z > 10  : f2(),
    default : f3()
}

print add(3, 5)
```

the output will be `101` because `z == 8` is a correct statement, it chains the return of `f1()` into the return of `add()`. You can think this block of code:

```text
end {
    z == 8  : f1(),
    z > 10  : f2(),
    default : f3()
}
```

as a traditional `switch...case` statement with `break` in every `case:` block. If any of the boolean expressions in the left-hand side of `:` turn out to be `true`
then the function in the right-hand side(`f1()` in this case) will be executed. If none of the boolean expressions are `true` and a `default` statement is supplied
then the function in the right-hand side(`f3()` in this case) will be executed.

Return chaining only happens if the function body does not have any `return` statement and the function has a non-void return type(`num` in this case). So for example, if you replace
the `add()` function with:

```text
num def add(num x, num y)
    num z = x + y
    num result = z + 3
    return result
end {
    z == 8  : f1(),
    z > 10  : f2(),
    default : f3()
}
```

the output will be `11`.

At first glance, defining the control structures in this way might seem so unnecessary or inconvenient but this is the pinnacle of writing **100% testable**, **clean**
and **error-free code** in any programming language by far.
