---
id: 04_primitive-data-types
title: Primitive Data Types
sidebar_label: Primitive Data Types
---

## Boolean

The keyword for **Boolean** data type is: `bool`

```
kaos> bool a = true
kaos> bool b = false
kaos> a = false
kaos> b = true
kaos> print a
false
kaos> print b
true
```

## Number

The keywords for **Number** data type is: `num`

```chaos
kaos> num a = 5
kaos> a = 7
kaos> print a
7
kaos> num b = 3.2
kaos> b = 5.4
kaos> print b
5.4
```

## String

The keyword for **String** data type is: `str`

```chaos
kaos> str a = "string1"
kaos> a = 'string2'
kaos> print a
string2
kaos> str b = 'string3'
kaos> b = "string4"
kaos> print b
string4
```

## Any

The keyword for **Any** data type is: `any`

```chaos
kaos> any a = true
kaos> a = 7
kaos> a = 'hello world'
kaos> print a
hello world
kaos> any b = 5
kaos> num c = 3
kaos> b = c
kaos> print b
3
kaos> num d = 27
kaos> any e = d
kaos> print e
27
```
