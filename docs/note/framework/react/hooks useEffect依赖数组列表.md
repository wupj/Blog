# hooks useEffect依赖数组列表

```typescript jsx
const depsString = JSON.stringify(deps)
React.useEffect(() => {
    // ...
}, [depsString])
```