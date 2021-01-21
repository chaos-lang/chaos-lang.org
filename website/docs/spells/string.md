---
id: string
title: string
sidebar_label: string
---

String library of the Chaos language. You can install this spell with:

```bash
occultist install string
```

and import it with:

```chaos
import string
```

## String Operations

### `str string.upper(str s)`

Makes the all characters in string `s` uppercase.

```chaos
kaos> string.upper("hello world")
HELLO WORLD
```

### `str string.lower(str s)`

Makes the all characters in string `s` lowercase.

```chaos
kaos> import string
kaos> string.lower("HeLlO WoRLd")
hello world
```

### `str string.capitalize(str s)`

Capitalizes the string `s`.

```chaos
kaos> string.capitalize("hello world")
Hello world
```

### `str string.concat(str s1, str s2)`

Concatenates string `s1` and string `s2`.

```chaos
kaos> string.concat("hello", " world")
hello world
```

### `list string.split(str s, str delimiter = ' ')`

Splits the string `s` into a list according to the string `delimiter`.

```chaos
kaos> string.split("A quick brown fox jumps over the lazy dog", " ")
['A', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
```

### `str string.join(str list words, str separator = ' ')`

Concatenates a list of strings `words` into a string by separating them with string `separator`.

```chaos
kaos> list a = ["foo", "bar", "baz"]
kaos> string.join(a, " ")
foo bar baz
kaos> string.join(a, "")
foobarbaz
```

## Searching & Replacing

### `list string.search(str haystack, str needle)`

Finds the position of the first occurrence of substring `needle` in string `haystack` if successful. Returns `-1` if unsuccessful.

```chaos
kaos> string.search("hello world", "world")
6
kaos> string.search("hello world", "friend")
-1
```

### `str string.replace(str haystack, str needle, str replacement)`

Replaces all occurrences of the `needle` string with the `replacement` string.

```chaos
kaos> string.replace("hello world", "world", "friend")
hello friend
```

## Information Functions

### `num string.length(str s)`

Returns the length of the string `s`.

```chaos
kaos> string.length("hello world")
11
```

### `bool string.is_empty(str s)`

Returns whether the string `s` empty or not.

```chaos
kaos> string.is_empty("hello world")
false
kaos> string.is_empty("")
true
```

### `bool string.is_numeric(str s)`

Returns `true` if all characters in the string `s` are numeric characters, and there is at least one character, `false` otherwise.

```chaos
kaos> string.is_numeric("01234")
true
kaos> string.is_numeric("01234x")
false
kaos> string.is_numeric(" 01234")
false
kaos> string.is_numeric(" ")
false
kaos> string.is_numeric("")
false
```

### `bool string.is_alpha(str s)`

Returns `true` if string `s` only contains alphabetic characters or whitespace and not empty, `false` otherwise.

```chaos
kaos> string.is_alpha("hello world")
true
kaos> string.is_alpha("he11o w0rld")
false
kaos> string.is_alpha(" ")
true
kaos> string.is_alpha("")
false
```

### `bool string.is_alnum(str s)`

Returns `true` if string `s` only contains alphanumeric characters or whitespace and not empty, `false` otherwise.

```chaos
kaos> string.is_alnum("he11o w0rld")
true
kaos> string.is_alnum(" ")
true
kaos> string.is_alnum("")
false
```

### `bool string.is_space(str s)`

Returns `true` if string `s` only contains whitespaces and not empty, `false` otherwise.

```chaos
kaos> string.is_space("he11o w0rld\t")
false
kaos> string.is_space("a")
false
kaos> string.is_space("1")
false
kaos> string.is_space("\n")
true
kaos> string.is_space(" ")
true
kaos> string.is_space("")
false
```

### `bool string.is_lower(str s)`

Returns `true` if string `s` only contains lowercase alphabetic characters, numeric characters or whitespace, `false` otherwise.

```chaos
kaos> string.is_lower("hello world")
true
kaos> string.is_lower("hello world 01234")
true
kaos> string.is_lower("HELLO WORLD")
false
kaos> string.is_lower("HeLlO WoRLd")
false
kaos> string.is_lower(" ")
true
kaos> string.is_lower("")
false
```

### `bool string.is_upper(str s)`

Returns `true` if string `s` only contains uppercase alphabetic characters, numeric characters or whitespace, `false` otherwise.

```chaos
kaos> string.is_upper("hello world")
false
kaos> string.is_upper("HELLO WORLD")
true
kaos> string.is_upper("HELLO WORLD 01234")
true
kaos> string.is_upper("HeLlO WoRLd")
false
kaos> string.is_upper(" ")
true
kaos> string.is_upper("")
false
```

## String Constants

### `str string.whitespace()`

Returns the string that contains whitespace characters ` \t\n\r\v\f`.

```chaos
kaos> string.whitespace()
 \t\n\r\v\f
```

### `str string.ascii_lowercase()`

Returns the string that contains [ASCII](https://en.wikipedia.org/wiki/ASCII) lowercase letters `abcdefghijklmnopqrstuvwxyz`.

```chaos
kaos> string.ascii_lowercase()
abcdefghijklmnopqrstuvwxyz
```

### `str string.ascii_uppercase()`

Returns the string that contains [ASCII](https://en.wikipedia.org/wiki/ASCII) uppercase letters `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.

```chaos
kaos> string.ascii_uppercase()
ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

### `str string.ascii_letters()`

Returns the string that contains [ASCII](https://en.wikipedia.org/wiki/ASCII) letters `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.

```chaos
kaos> string.ascii_letters()
abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
```

### `str string.digits()`

Returns the string that contains decimal digits `0123456789`.

```chaos
kaos> string.digits()
0123456789
```

### `str string.hexdigits()`

Returns the string that contains hexadecimal digits `0123456789abcdefABCDEF`.

```chaos
kaos> string.hexdigits()
0123456789abcdefABCDEF
```

### `str string.octdigits()`

Returns the string that contains octal digits `0123456789`.

```chaos
kaos> string.octdigits()
01234567
```

### `str string.punctuation()`

Returns the characters considered punctuation according to [ASCII](https://en.wikipedia.org/wiki/ASCII) `!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~`

```chaos
kaos> string.punctuation()
!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
```
