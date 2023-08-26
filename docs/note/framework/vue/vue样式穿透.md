# vue样式穿透

## >>>

```css
.a >>> .b {
  ...
}
```

## deep

```less
.a {
  /deep/ .b{
    ...
  }
}
```

或

```less
.a {
  ::v-deep .b{
    ...
  }
}
```

当在scope样式中使用`/deep/`飘红报错时，可以使用`::v-deep`代替

```less
::v-deep {
  ...
}
```
