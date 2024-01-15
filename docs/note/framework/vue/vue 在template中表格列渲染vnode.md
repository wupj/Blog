# vue 在template中表格列渲染vnode

## vue2

```vue
<template slot-scope="scope">
    <Render :row="row" :column="col" :index="rowIndex" :render="col.render" />
</template>

components: {
  Render: {
    functional: true,
    props: {
       row: Object,
       column: Object,
       index: Number,
       render: Function
    },
    render: (h, ctx) => {
        const params = {
          row: ctx.props.row,
          column: ctx.props.column,
          index: ctx.props.index
        }
       return ctx.props.render(h, params)
    }
  }
}
```

## vue3
```vue
<template v-slot="scope">
    <component :is="col.render(scope)" />
</template>
```