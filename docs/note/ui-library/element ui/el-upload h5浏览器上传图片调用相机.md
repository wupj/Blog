# el-upload h5浏览器上传图片调用相机

使用 HTML 属性capture

```vue
<template>
  <el-upload ref="uploadRef" accept="image/*" />
</template>

<script>
export default {
  mounted() {
    this.$refs['uploadRef'].$refs['upload-inner'].$refs['input'].setAttribute('capture', 'camera')
  }
}
</script>
```
