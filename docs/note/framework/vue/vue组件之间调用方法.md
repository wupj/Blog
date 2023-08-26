# vue组件之间调用方法

## 父组件调用子组件方法

####  $ref调用

父组件

```vue
<template>
    <div id="father">
        <button v-on:click="clickFun">点击</button>
        <child ref="child"></child>
    </div>
</template>
export default {
  name: 'father',
  compontents: {
      child
  },
  methods: {
        clickFun() {
            this.$refs.child.childFun()
        }
    }
}
```

子组件

```vue
<template>
    <div id="child">
        <button @click="childFun"></button>
    </div>
</template>
export default {
  name: 'child',
  methods: {
        childFun() {
            ...
        }
    }
}
```


## 子组件调用父组件方法

#### 1. $emit调用
#### 2. $parent调用

子组件

```vue
<template>
    <div id="child">
        <button @click="childFun"></button>
    </div>
</template>
export default {
    name: 'child',
    methods:{
        childFun(){
            // 通过$emit进行触发
            // 第一个参数为父组件监听的事件名，后续参数为父组件方法的参数
            this.$emit("fatherFun", params)
            
            // $parent调用
            this.$parent.fatherFunction()
        }
    }
}
```

父组件

```vue
<template>
    <div id="father">
        <child ref="child" @fatherFun="fatherFunction"></child>
    </div>
</template>
export default {
  name: 'father',
  compontents: {
      child
  },
  methods: {
        fatherFunction() {
            ...
        }
    }
}
```
