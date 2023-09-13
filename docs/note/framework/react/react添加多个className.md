# react添加多个className

## 字符串拼接

```typescript jsx
<div className={value.class + ' ' + value.class2}>{value.value}</div>
```


```typescript jsx
<div className={`${value.class} ${value.class2}`}>{value.value}</div>
```

## 数组`join`

```typescript jsx
<div className={classnames.join(' ')}>{value.value}</div>
```
