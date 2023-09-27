# el-scrollbar组件更新高度

搜索列表使用el-scrollbar美化滚动条，滚动条高度没有实时更新

```vue
this.$nextTick(() => {
    if (this.$refs['appScrollbar']) {
      this.$refs['appScrollbar'].wrap.scrollTop = 0
      this.$refs['appScrollbar'].update()
    }
})
```
