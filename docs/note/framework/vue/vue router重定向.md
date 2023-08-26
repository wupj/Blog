# vue router重定向

## 字符串

```javascript
{
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
    redirect: '/about'
}
```

## 对象

```javascript
{
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
    redirect: { name: 'About' }
}
```

## 方法

```javascript
{
    path: '/users/:userId',
    name: 'User',
    redirect: to => {
        return {
            path: '/newUsers',
            query: {
                id: to.params.userId
            }
        }
    },
    component: NewUser
}
```

## 嵌套路由重定向

```javascript
{
    path: '/about',
    name: 'About',
    component: () => import('@/views/About'),
    redirect: '/about/leftSidebar',
    children: [
        {
            path: 'leftSidebar',
            component: () => import('@/views/LeftSidebar')
        }
    ]
}
```

## 相对重定向

```javascript
{
    path: '/about',
    redirect: to => {
        return to.path + '/leftSidebar'
    }
}
```
