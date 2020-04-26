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

## String operations

### string.replace(str target, str needle, str replacement)

Replace all occurrences of the `needle` string with the `replacement` string.

```chaos
kaos> string.replace("hello world", "world", "friend")
hello friend
```

### string.upper(str s)

Make the all characters in string `s` uppercase.

```chaos
kaos> string.upper("hello world")
HELLO WORLD
```

### string.lower(str s)

Make the all characters in string `s` lowercase.

```chaos
kaos> import string
kaos> string.lower("HeLlO WoRLd")
hello world
```

### string.capitalize(str s)

Capitalize the string `s`.

```chaos
kaos> string.capitalize("hello world")
Hello world
```

### string.concat(str s1, str s2)

Concatenate string `s1` and string `s2`.

```chaos
kaos> string.concat("hello", " world")
hello world
```

### string.split(str s, str delimiter)

Split the string `s` into a list according to the string `delimiter`.

```chaos
kaos> string.split("A quick brown fox jumps over the lazy dog", " ")
['A', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
```

### string.join(list words, str separator)

Concatenate a list of strings `words` into a string by separating them with string `separator`.

```chaos
kaos> list a = ["foo", "bar", "baz"]
kaos> string.join(a, " ")
foo bar baz
kaos> string.join(a, "")
foobarbaz
```

## Information functions

### string.length(str s)

Returns the length of the string `s`.

```chaos
kaos> string.length("hello world")
11
```

### string.is_empty(str s)

Returns whether the string `s` empty or not.

```chaos
kaos> string.is_empty("hello world")
false
kaos> string.is_empty("")
true
```

### string.is_numeric(str s)

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

### string.is_alpha(str s)

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

### string.is_alnum(str s)

Returns `true` if string `s` only contains alphanumeric characters or whitespace and not empty, `false` otherwise.

```chaos
kaos> string.is_alnum("he11o w0rld")
true
kaos> string.is_alnum(" ")
true
kaos> string.is_alnum("")
false
```

### string.is_space(str s)

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

### string.is_lower(str s)

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

### string.is_upper(str s)

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

## String constants

### string.whitespace()

Returns the string that contains whitespace characters ` \t\n\r\v\f`.

```chaos
kaos> string.whitespace()
 \t\n\r\v\f
```

### string.ascii_lowercase()

Returns the string that contains [ASCII](https://en.wikipedia.org/wiki/ASCII) lowercase letters `abcdefghijklmnopqrstuvwxyz`.

```chaos
kaos> string.ascii_lowercase()
abcdefghijklmnopqrstuvwxyz
```

### string.ascii_uppercase()

Returns the string that contains [ASCII](https://en.wikipedia.org/wiki/ASCII) uppercase letters `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.

```chaos
kaos> string.ascii_uppercase()
ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

### string.ascii_letters()

Returns the string that contains [ASCII](https://en.wikipedia.org/wiki/ASCII) letters `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.

```chaos
kaos> string.ascii_letters()
abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
```

### string.digits()

Returns the string that contains decimal digits `0123456789`.

```chaos
kaos> string.digits()
0123456789
```

### string.hexdigits()

Returns the string that contains hexadecimal digits `0123456789abcdefABCDEF`.

```chaos
kaos> string.hexdigits()
0123456789abcdefABCDEF
```

### string.octdigits()

Returns the string that contains octal digits `0123456789`.

```chaos
kaos> string.octdigits()
01234567
```

### string.punctuation()

Returns the characters considered punctuation according to [ASCII](https://en.wikipedia.org/wiki/ASCII) `!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~`

```chaos
kaos> string.punctuation()
!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
```

