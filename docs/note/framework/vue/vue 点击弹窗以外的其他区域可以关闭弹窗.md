# vue 点击弹窗以外的其他区域可以关闭弹窗

```html
<div class="orgTree" @click.stop="stopMp" ref="treeWrap">
    .....
</div>
```

```vue
mounted () {
    let _this = this
    document.addEventListener('mouseup', (e) => {
        let tree = this.$refs.treeWrap
        if (tree) {
          if (!tree.contains(e.target)) {
            this.isShowTree = false
          }
        }
    })      
}
```

or

```html
<div  v-clickoutside="handleClose">
    .....
</div>
```

```vue
import Clickoutside from 'element-ui/src/utils/clickoutside'

export default {
    directives: { Clickoutside },
    methods: { 
        handleClose() {
            ...
        },
    }
}
```
