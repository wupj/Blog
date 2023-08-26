# vue3中添加全局变量

```vue
import { createApp } from 'vue'
import { App } from './App.vue'

const app = createApp(App)
app.config.globalProperties.$myGlobalVariable = globalVariable
app.mount('#app')
```

或

```vue
import { createApp } from 'vue'
import { App } from './App.vue'

const app = createApp(App, {
  provide:{
    globalVariable
  }
}).$mount('#app')
```
