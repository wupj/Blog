# vue 异步组件

```vue
export default { 
    components: { 
        Tooltip: () => import('./components/Tooltip')
    }
}
```
