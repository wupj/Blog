# el-table表格复选框只勾选一条数据

```VUE
method:{
    select(selection, row){
         // 清除所有勾选项
         this.$refs.table.clearSelection()
         // 当表格数据都没有被勾选的时候就返回
         // 主要用于将当前勾选的表格状态清除
         if(selection.length == 0) return
         this.$refs.table.toggleRowSelection(row, true)
    }
}
```

