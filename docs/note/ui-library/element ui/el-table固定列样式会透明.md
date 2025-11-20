# el-table固定列样式会透明

table列添加fixed:right属性后，被固定的列变透明
```css
.el-table__fixed-right .el-table__fixed-body-wrapper .el-table__body tr td {
  background-color: #fff;
  z-index: 100;
}
```
