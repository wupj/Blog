# el-table动态增减表头列，表头会跳动

```vue
beforeUpdate(){
    this.$nextTick(() => {
        //在数据加载完，重新渲染表格
        this.$refs['table'].doLayout()
    })
}
```
