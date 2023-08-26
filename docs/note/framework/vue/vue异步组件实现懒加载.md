# vue异步组件实现懒加载

## component：resolve=>(require(['需要加载的路由的地址'])，resolve)

```vue
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve=>(require(["@/components/HelloWorld"],resolve))
    }
  ]
})
```

## const HelloWorld = （）=>import('需要加载的模块地址')

```vue
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const HelloWorld = ()=>import("@/components/HelloWorld")
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld
    }
  ]
})
```
