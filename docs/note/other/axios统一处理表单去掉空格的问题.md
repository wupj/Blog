# axios统一处理表单去掉空格的问题

```javascript
axios.interceptors.request.use(config => {
    if (config.method === 'post' && config?.data && Object.keys(config?.data).length > 0) {
        const dealData = {}
        for (const key in config.data) {
            dealData[key] = typeof config.data[key] === 'string' ? config.data[key].trim() : config.data[key]
        }
        config.data = dealData
    }
    return config
})
```