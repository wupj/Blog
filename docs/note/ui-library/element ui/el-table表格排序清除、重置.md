# el-table表格排序清除、重置

```vue
this.$refs['table'].clearSort()
this.$refs['table'].columns.find((x) => {
    if (x.property === this.defaultSort.prop) {
      x.order = this.defaultSort.order
    }
})
```
