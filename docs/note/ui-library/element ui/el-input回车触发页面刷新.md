# el-input回车触发页面刷新

在 vue+element ui 中只有一个输入框`el-input`的情况下，回车会提交表单

在 el-form 上加上`@submit.native.prevent`这个则会阻止表单回车提交

```vue
<el-form ref="form" :model="form" label-width="auto" @submit.native.prevent>
	...
</el-form>
```

