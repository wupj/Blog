# vue props传值默认值使用国际化语言

```vue
props: {
    labelName: {
      type: String,
      default() {
        return this.$t('labelName')
      }
    }
}
```
