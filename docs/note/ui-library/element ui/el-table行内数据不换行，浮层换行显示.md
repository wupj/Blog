# el-table行内数据不换行，浮层换行显示

```vue
render: (h, params) => {
    return h('el-tooltip', { props: { placement: 'top' }, class: 'tooltip-span' }, [
      h('span', { slot: 'content', style: { whiteSpace: 'pre-line' }, domProps: { innerHTML: params.row.Remark } }),
      h('span', {}, params.row.Remark)
    ])
}
```

```css
.tooltip-span {
  white-space: nowrap;
  max-width: 100%;
  display: inline-block;
  overflow: hidden;
  line-height: 1;
  text-overflow: ellipsis;
}
```