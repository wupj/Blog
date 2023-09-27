# el-input只能输入数字并且禁止鼠标滚动事件

```vue
<el-input type="number" v-model.number="value" @mousewheel.native.prevent />
```

