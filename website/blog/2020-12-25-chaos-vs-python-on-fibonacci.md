---
title: Chaos vs. Python on Fibonacci
author: M. Mert Yildiran
authorURL: https://mertyildiran.com/
---

With the version [**v0.1.1**](https://github.com/chaos-lang/chaos/releases/tag/v0.1.1) we thought that
Chaos language has come to enough maturity to implement a Fibonacci number generator. Oh boy, we were wrong!
It turns out the recursive calls in Chaos language was like **Cyberbug 2077**. But we finally fixed all the issues,
released [**v0.1.2**](https://github.com/chaos-lang/chaos/releases/tag/v0.1.2) and implemented
Fibonacci algorithms in all three major approaches. We have also compared the performance
to their Python(3.8.5) variants.

## Recursion

### Chaos

The program:

```chaos
num def fibo_error()
    print "Incorrect input"
    num r = 0
    return r
end

num def sum(num j)
    num x = fibo(j - 1)
    num y = fibo(j - 2)
    num z = x + y
    return z
end

num def fibo(num n)
    num zero = 0
    num one = 1
    num c = n
end {
    n < 0   : fibo_error(),
    n == 0  : return zero,
    n == 1  : return one,
    default : sum(c)
}

print fibo(-1) // Incorrect input

num x = 1
12 times do
    print fibo(x)
    x++
end
```

Interpreter performance:

```shell
$ time chaos fibonacci.kaos
Incorrect input
0
1
1
2
3
5
8
13
21
34
55
89
144

real	0m0,024s
user	0m0,019s
sys	    0m0,006s
```

Compiler performance:

```shell
$ chaos -c fibonacci.kaos
$ time build/main
Incorrect input
0
1
1
2
3
5
8
13
21
34
55
89
144

real	0m0,020s
user	0m0,012s
sys	    0m0,008s
```

### Python

The program:

```python
def fibo(n):
    if n < 0:
        print("Incorrect input")
        return 0
    elif n == 0:
        return 0
    elif n==1:
        return 1
    else:
        return fibo(n - 1) + fibo(n - 2)


print(fibo(-1)) # Incorrect input

for i in range(1, 13):
    print(fibo(i))
```

Performance:

```shell
$ time python3 fibonacci.py
Incorrect input
0
1
1
2
3
5
8
13
21
34
55
89
144

real	0m0,145s
user	0m0,103s
sys	    0m0,051s
```

## Dynamic programming

### Chaos

The program:

```chaos
import array

num def fibo(num n)
    num list f = [0, 1]

    num i = 2
    num a = 0
    num b = 0
    n - 1 times do
        a = f[i - 1]
        b = f[i - 2]
        f = array.insert(f, a + b)
        i++
    end

    num r = f[n]
    return r
end


num x = 1
20 times do
    print fibo(x)
    x++
end
```

Requires [**array**](spells/array.md) spell. Can be installed with: `occultist install array`

Interpreter performance:

```shell
$ time chaos fibonacci.kaos
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
6765

real	0m0,028s
user	0m0,024s
sys	    0m0,005s
```

Compiler performance:

```shell
$ chaos -c fibonacci.kaos
$ time build/main
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
6765

real	0m0,029s
user	0m0,029s
sys	    0m0,000s
```

### Python

The program:

```python
def fibo(n):
    f = [0, 1]
    for i in range(2, n + 1):
        f.append(f[i - 1] + f[i - 2])
    return f[n]


for i in range(1, 13):
    print(fibo(i))
```

Performance:

```shell
$ time python3 fibonacci.py
1
1
2
3
5
8
13
21
34
55
89
144

real	0m0,135s
user	0m0,093s
sys	    0m0,050s
```

## Space optimized method

### Chaos

The program:

```chaos
num def fibo(num n)
    num a = 0
    num b = 1
    num c = 0
    n - 1 times do
        c = a + b
        a = b
        b = c
    end
end {
    n == 0  : return a,
    n == 1  : return b,
    default : return b
}


num x = 1
20 times do
    print fibo(x)
    x++
end
```

Interpreter performance:

```shell
$ time chaos fibonacci.kaos
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
6765

real	0m0,005s
user	0m0,001s
sys	    0m0,004s
```

Compiler performance:

```shell
$ chaos -c fibonacci.kaos
$ time build/main
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
6765

real	0m0,004s
user	0m0,001s
sys	    0m0,004s
```

### Python

The program:

```python
def fibo(n):
    a = 0
    b = 1
    if n == 0:
        return a
    elif n == 1:
        return b
    else:
        for i in range(2,n+1):
            c = a + b
            a = b
            b = c
        return b


for i in range(1, 13):
    print(fibo(i))
```

Performance:

```shell
$ time python3 fibonacci.py
1
1
2
3
5
8
13
21
34
55
89
144

real	0m0,141s
user	0m0,086s
sys	    0m0,064s
```

## Conclusion

Python is beaten by Chaos in all there methods!

For the recursive implementation Chaos is approximately $5.4 \times $ faster than Python!

For the dynamic programming implementation Chaos is approximately $3.8 \times $ faster than Python!

For the space optimized method implementation Chaos gives the output almost instantly.
So that Chaos is approximately $78.18 \times $ faster than Python! Which is a massive performance difference.
