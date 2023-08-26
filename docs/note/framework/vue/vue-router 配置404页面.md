# vue-router 配置404页面

```javascript
const router = new VueRouter({ 
    routes: [
        {
            path: '/', 
            component: Home 
        },
        { 
            path: '*', 
            component: NotFoundComponent 
        } 
    ]   
})
```

注意：*代表全匹配放在第一个，不管地址是什么都会匹配到，放在最后一个前面有的就不会匹配到