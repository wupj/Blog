# el-date-picker监听面板切换事件

```vue
<template>
 <el-date-picker
    ref="pickerRef"
    v-model="value1"
    type="datetime"
    placeholder="选择日期时间">
  </el-date-picker>
</template>
```

```vue
method:{
    watchPicker(){
      let unwatch = null
      this.$nextTick(() => {
        this.unwatchPicker?.()
        const datePicker = this.$refs?.pickerRef
        this.unwatchPicker = datePicker?.$watch('pickerVisible', val => {
          if (val) {
            if (datePicker.picker) {
              unwatch = datePicker.picker.$watch('date', date => {
                this.getPanelDate(date)
              })
            }
          } else {
            unwatch()
          }
        })
      })
    }
}
```
