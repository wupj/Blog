# JSON.stringify用法

## 基本用法

`JSON.stringify` 方法接受一个参数并将其转换成JSON 字符串形式

```javascript
const firstItem = { 
    title: 'Transformers', 
    year: 2007 
}

JSON.stringify(firstItem)
// {'title':'Transformers','year':2007}
```


## 第二个参数

`JSON.stringify` 还有第二个参数，叫替换器参数
你可以传一个字符串数组，作为对象属性白名单，这些属性将会包含在输出结果里

```javascript
JSON.stringify(secondItem, ['title'])
// {'title':'Transformers'}
```


## 第三个参数

第三个参数设置最终字符串里的空白缩进。

如果参数是一个数字，那么序列化的每个层级都会用这个数量的空格符缩进。

```javascript
JSON.stringify(secondItem, null, 2)
//{
//  "title": "Transformers",
//  "year": 2007,
//  "starring": {}
//}
```

复制代码如果第三个参数是字符串，就会替代空格符

```javascript
JSON.stringify(secondItem, null, '🦄')
//{
//🦄"title": "Transformers",
//🦄"year": 2007,
//🦄"starring": {}
//}
```