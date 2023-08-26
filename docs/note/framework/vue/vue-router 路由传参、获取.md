# vue-router 路由传参、获取

## **query传参**

```vue
this.$router.push({ name: 'home', params: { type: 1 }})
```

## **params传参**

```vue
this.$router.push({ path: '/home', query: { type: 1 }})
```

如果使用`query`方式传入的参数使用`this.$route.query` 接收

如果使用`params`方式传入的参数使用`this.$router.params`接收

`query`刷新不会丢失`query`里面的数据， `params`刷新会丢失 `params`里面的数据