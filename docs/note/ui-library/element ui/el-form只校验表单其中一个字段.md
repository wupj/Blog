# el-form只校验表单其中一个字段

```vue
this.$refs.form.validateField('name', valid => {
    if (valid) {
        // 成功
    } else {
        // 失败
    }
})
```

