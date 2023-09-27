# el-scrollbar组件使用

```vue
<template>
  <div style="height:600px">
    <el-scrollbar :vertical="true" style="height:100%">
    </el-scrollbar>
  </div>
</template>
```

> 在使用时要设置外层容器高度，并且要设置`el-scrollbar`的高度为100%

> 横纵向滚动条`vertical`

```css
.el-scrollbar__wrap{
  overflow-x: hidden;
}
```
