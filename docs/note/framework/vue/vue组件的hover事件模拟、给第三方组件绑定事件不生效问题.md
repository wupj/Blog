# vue组件的hover事件模拟、给第三方组件绑定事件不生效问题

## vue里面实现hover效果基本需要用事件模拟

```vue
<div @mouseover="overShow" @mouseout="outHide" />
```

或者是：`mouseenter`、`mouseleave`

## 比如给第三方组件ElementUI的button，在绑定mouseover和mouseout事件时，发现绑在按钮上时无效的

解决方案：如果这个组件没处理这两个事件的话是绑不了的

可以添加`.native`修饰符，就可以把事件绑到组件的根元素上

```vue
<el-button 
    type="primary" 
    icon="el-icon-search"
    @mouseenter.native="knowledge = '即将推出，敬请期待'"
    @mouseleave.native="knowledge = '知识库搜索答案'"
    plain 
    round 
>{{ knowledge }}</el-button>
```
