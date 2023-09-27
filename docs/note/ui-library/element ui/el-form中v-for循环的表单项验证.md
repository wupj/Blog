# el-form中v-for循环的表单项验证

```vue
<template v-for="(person,index) in Form.List">
    <el-form-item :prop="'List.'+index + '.code'" :key="person.key" :rules="rules">
        <el-input v-model="person.code"></el-input>
    </el-form-item>
    <el-form-item prop="name">
        <el-input v-model="person.name"></el-input>
    </el-form-item>
    <el-button @click="removeDomain(index)" size="small">-</el-button>
</template>
```
> `el-form-item`里面的循环prop名字，需要和form中list的名字一致，这样才能确保组件的统一性