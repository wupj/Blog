# async validator异步校验函数

```javascript
const fields = {
  asyncField: {
    asyncValidator(rule, value, callback){
      fetch({
        url: 'xx',
        value: value
      }).then(function(data) {
        callback()
      }, function(error) {
        callback(new Error(error))
      })
    }
  },
  promiseField: {
    asyncValidator(rule, value) {
      return fetch({
        url: 'xx',
        value: value
      })
    }
  }
}
```

