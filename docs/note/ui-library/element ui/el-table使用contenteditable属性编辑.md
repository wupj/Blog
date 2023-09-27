# el-table使用contenteditable属性编辑

```vue
  <template>
    <el-table>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
		:formatter="formatter" />
    </el-table>
  </template>
```

```vue
  methods: {
    formatter(row, column, cellValue, index) {
      const h = this.$createElement
      return h('div', {
        on: {
          click: event => {
            event.target.setAttribute('contenteditable', true)
          },
          focus: () => {
            console.log('focus')
          },
          blur: (event) => {
            event.target.setAttribute('contenteditable', false)
          }
        }
      }, row.name)
    }
}
```

```css
[contenteditable='true'] {
	...
}
```

