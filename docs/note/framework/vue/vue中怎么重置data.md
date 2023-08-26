# vue中怎么重置data

```vue
Object.assign(this.$data, this.$options.data.call(this))
```

`this.$data`获取当前状态下的`data`

`this.$options.data()`获取该组件初始状态下的`data`(即初始默认值)

```vue
// 重置data不触发from校验
this.$refs.formRef.resetFields()
const data = this.$data
const initData = this.$options.data.call(this)
for (const key in data) {
  if (key !== 'rules') {
    data[key] = initData[key]
  }
}
```

