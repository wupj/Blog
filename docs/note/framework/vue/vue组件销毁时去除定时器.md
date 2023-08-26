# vue组件销毁时去除定时器

```vue
mounted() {
    const timer = setInterval(() => {                    
        // 某些定时器操作                
    }, 500)         
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once('hook:beforeDestroy', () => {            
        clearInterval(timer)                                  
    })
}
```
