# axios.all处理并发请求

axios.all()、axios.spread()两个辅助函数用于处理同时发送多个请求，可以实现在多个请求都完成后再执行一些逻辑

```javascript
function getUserAccount() {
    return axios.get('/user/12345')
}

function getUserPermissions() {
    return axios.get('/user/12345/permissions')
}

axios.all([getUserAccount(), getUserPermissions()])
.then(axios.spread(function (acct, perms) {
    console.log('两个请求都完成了')
}))

或者

Promise.all([getUserAccount(), getUserPermissions()])
.then((res) => {
    console.log('两个请求都完成了')
})
```
