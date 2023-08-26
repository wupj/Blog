# js判断两个对象是否相同

## JSON.stringify

```javascript
JSON.stringify(object1) === JSON.stringify(object2)
```

> 只适用于完全相同的，即键-值顺序都完全对应的对象

## Object.entries

```javascript
Object.entries(object1).toString() === Object.entries(object2).toString()
```

## lodash isEqual

```javascript
_.isEqual(object1, object2)
```

> 不支持函数和DOM节点比较

## Object.keys

```javascript
// 列出所有的键，接着遍历数组
function ifCompare(object1, object2) {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)
  if (keys1.length !== keys2.length) return false
  for (let i = 0; i <= keys1.length - 1; i++) {
    let key = keys1[i]
    if (!keys2.includes(key)) return false
    if (object2[key] !== object1[key]) return false
  }
  return true
}
```

> 适用对于键-值一样，但顺序不一样的对象