## Taste one bit at a time

Save the below code snippet to a file named `fibo.kaos`

and run `chaos fibo.kaos` to have a little bit of taste.

```chaos
// Fibonacci - Space Optimized

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
