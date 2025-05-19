# 在子应用中获取自身实际url

```ts
const url = window.__POWERED_BY_QIANKUN__ ? window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ : window.location.origin
```
