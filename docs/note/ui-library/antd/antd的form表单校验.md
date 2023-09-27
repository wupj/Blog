# antd的form表单校验


```typescript
formRef.current.validateFields().then(values => {
  // 如果全部字段通过校验，会走then方法，里面可以打印出表单所有字段
  console.log('成功')
}).catch(errInfo => {
  // 如果有字段没听过校验，会走catch，里面可以打印所有校验失败的信息
  console.log('失败')
})
```
