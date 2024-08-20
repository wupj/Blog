# el-select实现全选功能

```vue
  <template>
    <el-select
      v-model="selected"
      @change="changeSelect"
      @remove-tag="removeTag"
      placeholder="请选择"
      multiple
    >
      <el-option label="全选" value="-1" @click.native="selectAll" />
      <el-option v-for="(item, index) in options" :key="index" :label="item.name" :value="item.name" />
     </el-select>
  </template>
```

```vue
export default {
  data() {
    return {
      selected: [],
      options: []
    }
  },
  methods: {
    selectAll() {
      if (this.selected.length < this.options.length) {
        this.selected = []
        this.options.map((item) => {
          this.selected.push(item.name)
        })
        this.selected.unshift('-1')
      } else {
        this.selected = []
      }
    },
    changeSelect(val) {
      if (!val.includes('-1') && val.length === this.options.length) {
        this.selected.unshift('-1')
      } else if (val.includes('-1') && (val.length - 1) < this.options.length) {
        this.selected = this.selected.filter((item) => {
          return item !== '-1'
        })
      }
    },
    removeTag(val) {
      if (val === '-1') {
        this.selected = []
      }
    }
  }
}
```
