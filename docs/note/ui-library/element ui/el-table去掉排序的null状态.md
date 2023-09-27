# el-table去掉排序的null状态

```vue
changeSort(row) {
    if (row.order === null) {
        this.saveSort === 'descending' ? row.order = 'ascending' : row.order = 'descending'
        <!--row.column.order = row.order-->
    }
    this.getList()
}
```
