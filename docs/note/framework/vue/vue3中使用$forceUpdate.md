# vue3中使用$forceUpdate

```vue
import { getCurrentInstance } from 'vue'

setup(){
    //解构赋值 设置别名that  也可不写  :that  直接ctx
    //ctx 得到普通对象
    //proxy得到响应式对象
    // 推荐使用proxy
    let {ctx:that, proxy} = getCurrentInstance()
	that.$forceUpdate()
}
```

