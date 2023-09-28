# async validator表单校验部分字段validateField

```javascript
let flag = true
this.$refs['editForm'].validateField(['name', 'age'], valid => {
   if (valid !== '') {
     flag = false
   }
})
```

