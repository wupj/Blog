# react类组件setState修改某一对象的某个属性值

```typescript jsx
this.state = {
 info: {
    name: '张三',
    age: 20
  }
}
```
## ES6解构赋值

```typescript jsx
const info = {...this.state.info }
info.age = 25
this.setState({
    info: info
})
```

## Object.assign

```typescript jsx
const info = Object.assign({}, this.state.info, { age: 25 })
this.setState({
    info: info
})
```
