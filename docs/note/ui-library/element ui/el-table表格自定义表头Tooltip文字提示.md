# el-table表格自定义表头Tooltip文字提示

```vue
renderTipsHeader (h,{ column }) {
    return h(
        'div',[
             h('span', column.label),
             h('el-tooltip',{
        　　　　      props:{
        　　　　　　　　effect:'dark',
        　　　　　　　　content:'提示',
        　　　　　　　　placement:'top'
        　　　　　　},　　　
        　　　　 },[
                 h('i', {
                     class:'el-icon-question',
                     style:'color:#fff;margin-left:5px;'
                 })
            ])
        ]
    )
 }
```
