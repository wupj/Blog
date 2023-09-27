# element-ui多个消息提示$message重叠

## $nextTick
```vue
this.$nextTick(() => {
   this.$message(...)
})
```

## async + await**

```javascript
async fun() {
    await this.$message(...)
    await this.$message(...)
}
```

