# element组件便捷传递props

## props 继承

```vue
<template>
 <el-select v-bind="$props" />
</template>

<script>
import { Select } from 'element-ui'
export default {
    name: 'MySelect'
    props: {
        ...Select.props, // 继承内在组件的props
        ...
    }
}
</script>
```

## mixins
```vue
<script>
import { Select } from 'element-ui'
export default {
    name: 'MySelect',
    mixins: [Select]
}
</script>
```

