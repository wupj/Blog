# jq serializeArray()和serialize()方法

## 1. serialize()方法

将表单序列化成一个拼接的字符串形式

格式: 
```javascript
const data = $('form').serialize()
// name=zhangsan&age=20
```

## 2. serializeArray()方法

将表单序列化成一个特殊的json数组,带有name和value的json

```javascript
const data = $('form').serializeArray()
// [{"name":"zhangsan", "age":"20"},{…}] 
```

