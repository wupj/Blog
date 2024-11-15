# vue-router使用router.resolve打开新页签

```vue
const route = this.$router.resolve({
  path: '/pathname', // 和需要跳转路由保持一致
  query: { id: id }, // 跳转参数
})
window.open(route.href, '_blank')
```
