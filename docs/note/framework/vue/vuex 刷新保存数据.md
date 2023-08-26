# vuex 刷新保存数据

页面刷新导致vuex（store）里面的数据消失问题，解决思路：

通过监听页面刷新或者关闭来将 vuex 里面的数据保存到 sessionStorage 里，在页面加载时读取 sessionStorage 里的状态信息，更新 vuex 的数据。

```vue
export default {
  name: 'App',
  created () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store') ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem('store'))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  }
}
```

`beforeunload` 事件在 ios 上不兼容，刷新页面时无法执行

**解决方案： 使用 pagehide 代替 beforeunload**