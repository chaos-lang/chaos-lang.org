---
id: math
title: math
sidebar_label: math
---

Mathematics library of the Chaos language. You can install this spell with:

```bash
occultist install math
```

and import it with:

```chaos
import math
```

## Mathematical constants

### num math.pi()

Returns the mathematical constant $\pi = 3.14159...$

```chaos
kaos> math.pi()
3.14159
```

### num math.e()

Returns the mathematical constant $e = 2.71828...$

```chaos
kaos> math.e()
2.71828
```

### num math.golden_ratio()

Returns the mathematical constant $\phi = 1.61803...$

```chaos
kaos> math.golden_ratio()
1.61803
```

### num math.inf()

Returns the positive infinity `inf` constant.

```chaos
kaos> math.inf()
inf
```

### num math.nan()

Returns the not-a-number `nan` constant.

```chaos
kaos> math.nan()
nan
```

## Trigonometric functions

### num math.cos(num x)

Returns the cosine of `x`, in degrees.

```chaos
kaos> math.cos(60)
0.5
```

### num math.sin(num x)

Returns the sine of `x`, in degrees.

```chaos
kaos> math.sin(30)
0.5
```

### num math.tan(num x)

Returns the tangent of `x`, in degrees.

```chaos
kaos> math.tan(45)
1
```

### num math.acos(num x)

Returns the arc cosine of `x`, in degrees.

```chaos
kaos> math.acos(0.5)
60
```

### num math.asin(num x)

Returns the arc sine of `x`, in degrees.

```chaos
kaos> math.asin(0.5)
30
```

### num math.atan(num x)

Returns the arc tangent of `x`, in degrees.

```chaos
kaos> math.atan(1.0)
45
```

### num math.atan2(num x, num y)

Returns the arc tangent of `x` (x-coordinate) and `y` (y-coordinate) in degrees. Two parameters version of `atan()`

```chaos
kaos> math.atan2(-10.0, 10.0)
135
```

## Hyperbolic functions

### num math.cosh(num x)

Returns the hyperbolic cosine of `x`.

```chaos
kaos> math.cosh(0.693147)
1.25
```

### num math.sinh(num x)

Returns the hyperbolic sine of `x`.

```chaos
kaos> math.sinh(0.693147)
0.75
```

### num math.tanh(num x)

Returns the hyperbolic tangent of `x`.

```chaos
kaos> math.tanh(0.693147)
0.6
```

### num math.acosh(num x)

Returns the nonnegative area hyperbolic cosine of `x`.

```chaos
kaos> math.acosh(3.762196)
2
```

### num math.asinh(num x)

Returns the nonnegative area hyperbolic sine of `x`.

```chaos
kaos> math.asinh(3.626860)
2
```

### num math.atanh(num x)

Returns the nonnegative area hyperbolic tangent of `x`.

```chaos
kaos> math.atanh(0.761594)
1
```

## Exponential and logarithmic functions

### num math.exp(num x)

Returns $e$ raised to the power of `x`: $e^x$

```chaos
kaos> math.exp(5)
148.413
```

### dict math.frexp(num x)

Returns the mantissa and exponent of `x`: $x = {mantissa} \times 2^{exponent}$

```chaos
kaos> import math
kaos> dict frexp = math.frexp(8)
kaos> frexp['mantissa']
0.5
kaos> frexp['exponent']
4
```

### num math.ldexp(num x, num exp)

Returns the result of multiplying `x` by `2` raised to the power of `y`: $x \times 2 ^{y}$

It's the inverse function of `frexp()`

```chaos
kaos> math.ldexp(0.95, 4)
15.2
```

### num math.ln(num x)

Returns the natural logarithm of `x`: $lnx$ or $log_{e}x$

```chaos
kaos> math.ln(5.5)
1.70475
```

### num math.log(num x, num b)

Returns the base-`b` logarithm of `x`: $log_{b}x$

```chaos
kaos> math.log(81, 3)
4
```

### num math.log1p(num x)

Returns the natural logarithm of `1 + x`: $ln(1 + x)$ or $log_{e}(1 + x)$

The result is more accurate than `log(x)` when `x` near zero.

```chaos
kaos> math.log1p(1.0)
0.693147
```

### num math.log2(num x)

Returns the base-`2` logarithm of `x`: $log_{2}x$

Generally more accurate than `log(x, 2)`.

```chaos
kaos> math.log2(1024.0)
10
```

### num math.log10(num x)

Returns the base-`10` logarithm of `x`: $log_{10}x$

Generally more accurate than `log(x, 10)`.

```chaos
kaos> math.log10(1000)
3
```

### dict math.modf(num x)

Returns the integer and fractional parts of `x`.

```chaos
kaos> dict modf = math.modf(3.141593)
kaos> modf['integer']
3
kaos> modf['fraction']
0.141593
```

### num math.expm1(num x)

Returns $e$ raised to the power of `x`, minus `1`: $e^x - 1$

```chaos
kaos> math.expm1(1.0)
1.71828
```

## Power functions

### num math.pow(num x, num y)

Returns `x` raised to the power of `y`: $x^y$

```chaos
kaos> math.pow(2, 3)
8
```

### num math.sqrt(num x)

Returns the square root of `x`: $\sqrt{x}$

```chaos
kaos> math.sqrt(1024)
32
```

### num math.cbrt(num x)

Returns the cubic root of `x`: $\sqrt[3]{x}$

```chaos
kaos> math.cbrt(27)
3
```

### num math.hypot(num x, num y)

Returns the hypotenuse of a right-angled triangle whose legs are `x` and `y`: $\sqrt{x^2 + y^2}$

```chaos
kaos> math.hypot(3.0, 4.0)
5
```

## Error and gamma functions

### num math.erf(num x)

Returns the [error function](https://en.wikipedia.org/wiki/Error_function) value for `x`.

```chaos
kaos> math.erf(1.0)
0.842701
```

### num math.erfc(num x)

Returns the [complementary error function](https://en.wikipedia.org/wiki/Error_function#Complementary_error_function) value for `x`.

```chaos
kaos> math.erfc(1.0)
0.157299
```

### num math.gamma(num x)

Returns the [gamma function](https://en.wikipedia.org/wiki/Gamma_function) at `x`.

```chaos
kaos> math.gamma(0.5)
1.77245
```

### num math.lgamma(num x)

Returns the natural logarithm of the absolute value of
the [gamma function](https://en.wikipedia.org/wiki/Gamma_function)
([log-gamma](https://en.wikipedia.org/wiki/Gamma_function#The_log-gamma_function)) at `x`.

```chaos
kaos> math.lgamma(0.5)
0.572365
```

## Rounding and remainder functions

### num math.ceil(num x)

Rounds `x` upward, returning the smallest integral value that is not less than `x`.

```chaos
kaos> math.ceil(3.8)
4
kaos> math.ceil(-3.8)
-3
```

### num math.floor(num x)

Rounds `x` downward, returning the largest integral value that is not greater than `x`.

```chaos
kaos> math.floor(5.6)
5
kaos> math.floor(-5.6)
-6
```

### num math.mod(num x, num y)

Computes the remainder that results from performing **integer** division of `x` by `y`.

```chaos
kaos> math.mod(23, 4)
3
```

### num math.fmod(num x, num y)

Computes the remainder that results from performing **floating-point** division of `x` by `y`.

```chaos
kaos> math.fmod(18.5, 4.2)
1.7
```

### num math.trunc(num x)

Rounds `x` toward zero, returning the nearest integral value that is not larger in magnitude than `x`.

```chaos
kaos> math.trunc(3.8)
3
kaos> math.trunc(-3.8)
-3
```

### num math.round(num x)

Returns the integral value that is nearest to `x`, with halfway cases rounded away from zero.

```chaos
kaos> math.round(3.8)
4
kaos> math.round(-3.8)
-4
```

### num math.remainder(num x, num y)

Returns the floating-point remainder of `x / y` (*rounded to nearest*).

```chaos
kaos> math.remainder(18.5, 4.2)
1.7
```

### dict math.remquo(num x, num y)

Returns the same as `remainder()`, but also returns the `quotient`.

```chaos
kaos> dict remquo = math.remquo(10.3, 4.5)
kaos> remquo['remainder']
1.3
kaos> remquo['quotient']
2
```

## Floating-point manipulation functions

### num math.copysign(num x, num y)

Returns a value with the magnitude of `x` and the sign of `y`.

```chaos
kaos> math.copysign(-10.0, -1.0)
-10
```

### num math.nextafter(num x, num y)

Returns the next representable value after `x` in the direction of `y`.

```chaos
kaos> math.nextafter(0.0, 1.0)
3.6452e-4951
kaos> math.nextafter(0.0, -1.0)
-3.6452e-4951
```

## Other functions

### num math.abs(num x)

Returns the absolute value of `x`: $\left | x \right |$

```chaos
kaos> math.abs(3.1416)
3.1416
kaos> math.abs(-10.6)
10.6
```

### num math.factorial(num x)

Returns the factorial of `x`. Returns `-1` if `x` is negative.

```chaos
kaos> math.factorial(5)
120
kaos> math.factorial(-5)
-1
```

## Boolean functions

### bool math.is_finite(num x)

Returns whether `x` is a finite value.

```chaos
kaos> math.is_finite(0.0)
true
kaos> math.is_finite(1.0 / 0.0)
false
```

### bool math.is_inf(num x)

Returns whether `x` is an infinity value (*either positive infinity or negative infinity*).

```chaos
kaos> math.is_inf(0.0)
false
kaos> math.is_inf(1.0 / 0.0)
true
```

### bool math.is_nan(num x)

Returns whether `x` is a `nan` (not-a-number) value.

```chaos
kaos> math.is_nan(0.0)
false
kaos> num nan_example = math.sqrt(-1.0)
kaos> nan_example
-nan
kaos> math.is_nan(nan_example)
true
```

### bool math.is_normal(num x)

Returns whether `x` is a normal value: i.e., whether it is neither `inf`(*infinity*), `nan`(*not-a-number*), zero or subnormal.

```chaos
kaos> math.is_normal(1.0)
true
kaos> math.is_normal(0.0)
false
kaos> math.is_normal(1.0 / 0.0)
false
```

### bool math.is_positive(num x)

Returns whether the sign of `x` is **positive**.

```chaos
kaos> math.is_positive(1.0)
true
kaos> math.is_positive(-1.0)
false
```

### bool math.is_negative(num x)

Returns whether the sign of `x` is **negative**.

```chaos
kaos> math.is_negative(1.0)
false
kaos> math.is_negative(-1.0)
true
```
