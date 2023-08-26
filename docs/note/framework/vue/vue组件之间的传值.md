# vue组件之间的传值

## 父组件向子组件传值

#### 父组件传值

1. 父组件自定义一个数据（例如：fatherValue)
2. 通过自定义属性的方式将fatherValue传给子组件

```vue
<template>
  <div id="father">
    <!-- 使用v-bind命令将父组件中的数据绑定到子组件上 -->
    <v-son v-bind:value="fatherValue"></v-son>
  </div>
</template>
export default {
  name: 'father',
  compontents: {
      'v-son': son
  },
  data() {
    return {
      fatherValue: '父组件的值'
  }
}
```

#### 子组件接值

1. 通过特定属性：props来进行接收
2. 直接以属性的方式来使用参数{{value}}

```vue
<template>
  <div id="son">
    <p>{{value}}</p>
  </div>
</template>
export default {
  name: 'son',
  props: {
      value：String,
      defsult: '默认值'
  }
}
```

## 子组件向父组件传值

#### 子组件传值

1. 子组件中定义一个数据（例如：sonValue）
2. 通过自定义事件的方式将sonValue传给父组件（格式：this.$emit('事件名',参数）

```vue
<template>
  <div id="son">
    <input type="button" value="给父组件传值" @click="sendValue">
  </div>
</template>
export default {
  name: 'son',
  data() {
    return {
      sonValue: '子组件的值'
  },
  methods: {
    sendValue() {
        //getSonValue: 是父组件指定的传数据绑定的函数，this.sonValue:子组件给父组件传递的数据
        this.$emit('getSonValue', this.sonValue)
    }
  }
}
```

#### 父组件接值

1. 给子组件实现方法
2. 方法中有一个参数

```vue
<template>
  <div id="father">
    <v-son @to="getSonValue"></v-son>
  </div>
</template>
export default {
  name: 'father',
  compontents: {
      'v-son': son
  },
  data() {
    return {
      fatherValue: ''
  },
  methods: {
    getSonValue(value) {
        this.fatherValue = value
    }
  }
}
```

## 兄弟组件之间传值

#### 第一个组件传值

```vue
<template>
  <div id="firstChild">
    <input type="button" value="给兄弟组件传值" @click="sendValue">
  </div>
</template>
export default {
  name: 'firstChild',
  data() {
    return {
      firstChildValue: '第一个组件的值'
  },
  methods: {
    sendValue() => {
        $emit('sendValueEvent', this.firstChildValue)
    }
  }
}
```

#### 第二个组件接值

```vue
<template>
  <div id="secondChild">
    <p>{{value}}</p>
  </div>
</template>
export default {
  name: 'secondChild',
  data() {
    return {
      secondChildValue: ''
  },
  created() {
    this.$on('sendValueEvent', (value) =>{
        this.secondChildValue = this.value
    }
  }
}
```
