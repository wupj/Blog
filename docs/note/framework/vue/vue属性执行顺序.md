# vue属性执行顺序

```
props: 父组件传递给子组件的属性会首先被处理
data: 在处理完props之后，Vue会处理数据对象中的所有属性，并将它们添加到Vue 例中
computed: 计算属性会在处理完data之后被计算，并添加到Vue实例中
watch: 侦听器会在computed之后被处理，并添加到Vue实例中
created: 在处理完所有选项后，Vue实例会调用created钩子，并完成实例化
mounted: 在实例挂载到DOM元素之后，Vue实例会调用mounted钩子
methods: 实例方法会在mounted之后被处理，并添加到Vue实例中

综上，选项的执行顺序是 props -> data -> computed -> watch -> created -> mounted -> methods
```
